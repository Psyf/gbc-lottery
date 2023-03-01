// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {ERC721} from "solmate/src/tokens/ERC721.sol";
import {IGBCLab} from "./interfaces/IGBCLab.sol";
import {Authority} from "solmate/src/auth/Auth.sol";
import {LotteryEvents} from "./LotteryEvents.sol";
import {LotteryHouseKeeping} from "./LotteryHouseKeeping.sol";
import {Sale, State} from "./Sale.sol";

contract Lottery is LotteryEvents, LotteryHouseKeeping {
    mapping(bytes32 => Sale) public sales;
    mapping(uint256 => bytes32) public randomizerIdToSalesId;

    constructor(
        address _owner,
        Authority _authority,
        address _randomizerAddress
    ) LotteryHouseKeeping(_owner, _authority, _randomizerAddress) {}

    // function that allows the contract owner to create a new sale with the given parameters
    function createSale(
        address _markToken,
        address _rewardToken,
        uint256 _rewardTokenId,
        uint256 _supply,
        uint256 _price,
        uint256 _endTime
    ) external requiresAuth {
        require(_supply > 0, "Sale supply must be greater than zero.");
        require(
            _endTime > block.timestamp,
            "Sale end time must be in the future."
        );

        bytes32 saleId = keccak256(
            abi.encodePacked(
                _markToken,
                _rewardToken,
                _rewardTokenId,
                _supply,
                _price,
                _endTime
            )
        );

        Sale storage sale = sales[saleId];
        require(
            getState(saleId) == State.DOES_NOT_EXIST,
            "Sale already exists."
        );

        sale.markToken = _markToken;
        sale.rewardToken = _rewardToken;
        sale.rewardTokenId = _rewardTokenId;
        sale.supply = _supply;
        sale.price = _price;
        sale.endTime = _endTime;

        emit SaleCreation(
            saleId,
            _markToken,
            _rewardToken,
            _rewardTokenId,
            _supply,
            _price,
            _endTime
        );
    }

    function participate(bytes32 saleId, uint256 _markTokenId)
        external
        payable
    {
        Sale storage sale = sales[saleId];

        require(getState(saleId) == State.OPEN, "Sale is not active.");

        require(
            sale.price == msg.value,
            "Incorrect deposit amount. Please provide the correct deposit amount."
        );

        require(
            !sale.participantsMap[msg.sender],
            "You have already participated in this sale."
        );

        require(
            ERC721(sale.markToken).ownerOf(_markTokenId) == msg.sender,
            "You do not own the marked token."
        );
        require(
            !sale.marks[_markTokenId],
            "Marked token has already been used to participate in this sale."
        );

        sale.participantsArr.push(msg.sender);
        sale.participantsMap[msg.sender] = true;
        sale.marks[_markTokenId] = true;

        emit Participation(saleId, msg.sender, _markTokenId);
    }

    // can be poked by anyone to start the end process of the lottery
    function getRandomNumber(bytes32 saleId) external nonReentrant {
        Sale storage sale = sales[saleId];
        require(getState(saleId) == State.CLOSED, "Sale is not closed.");
        require(sale.randomizerId == 0, "Already requested random nubmer"); // so we can only execute once per sale, else could be drained in an attack

        // todo: need to tweak callback gas limit; set to max?
        sale.randomizerId = randomizer.request(50000);
        randomizerIdToSalesId[sale.randomizerId] = saleId;
    }

    // Callback function called by the randomizer contract when the random value is generated
    // Picks the winners
    function randomizerCallback(uint256 _id, bytes32 _value)
        external
        nonReentrant
    {
        require(msg.sender == address(randomizer), "Caller not Randomizer");
        bytes32 saleId = randomizerIdToSalesId[_id];
        Sale storage sale = sales[saleId];
        require(sale.randomizerId == _id, "Invalid randomizer id"); // overzealous check

        uint256 randomNumber = uint256(_value);

        // pick a winner from the participants array - i
        // move the winner to the start of the array
        for (uint256 i = 0; i < sale.supply; i++) {
            // Use a cryptographic hash to generate a random index to select a winner from the participants array.
            uint256 winnerIndex = (uint256(
                keccak256(abi.encodePacked(randomNumber, i))
            ) % (sale.participantsArr.length - i)) + i;
            address winner = sale.participantsArr[winnerIndex];
            sale.winners.push(winner);

            // swap the winner to the front of the array
            address iParticipant = sale.participantsArr[i];
            sale.participantsArr[i] = winner;
            sale.participantsArr[winnerIndex] = iParticipant;
        }

        reserves += sale.price * sale.supply;
    }

    function withdraw(bytes32 saleId, address participant)
        external
        nonReentrant
    {
        _withdraw(saleId, participant);
    }

    function getState(bytes32 saleId) public view returns (State) {
        Sale storage sale = sales[saleId];

        if (sale.endTime == 0) {
            return State.DOES_NOT_EXIST;
        } else {
            if (block.timestamp < sale.endTime) {
                // New participants can still enter
                return State.OPEN;
            } else {
                // New participants can't enter
                if (sale.winners.length > 0) {
                    // randomizerCallback() called properly
                    return State.DECIDED;
                } else {
                    if (block.timestamp > sale.endTime + 30 days) {
                        return State.FAILED;
                    } else {
                        return State.CLOSED;
                    }
                }
            }
        }
    }

    /* -------------- Convenience functions -------------- */

    function withdrawMulti(bytes32 saleId, address[] calldata participants)
        external
        nonReentrant
    {
        for (uint256 i = 0; i < participants.length; i++) {
            _withdraw(saleId, participants[i]);
        }
    }

    // gas optimized version of withdrawMulti(winners)
    function executeAirdropForWinners(bytes32 saleId) external nonReentrant {
        _executeAirdropForWinners(saleId);
    }

    // gas optimized version of withdrawMulti(losers)
    function executeRefundForLosers(bytes32 saleId) external nonReentrant {
        _executeRefundForLosers(saleId);
    }

    // gas optimized version of withdrawMulti(winners) + withdrawMulti(losers)
    function executeAirdropForWinnersAndRefundForLosers(bytes32 saleId)
        external
        nonReentrant
    {
        _executeAirdropForWinners(saleId);
        _executeRefundForLosers(saleId);
    }

    // gas optimized version of withdrawMulti(allParticipants) on failed sale
    function executeRefundAllOnFailedSale(bytes32 saleId)
        external
        nonReentrant
    {
        require(getState(saleId) == State.FAILED, "State != Failed");

        Sale storage sale = sales[saleId];

        // transfer the deposits back to everyone
        for (uint256 i = 0; i < sale.participantsArr.length; i++) {
            address participant = sale.participantsArr[i];
            if (sale.withdrawn[participant]) {
                // loser might have already withdrawn before airdrop
                continue;
            } else {
                sale.withdrawn[participant] = true;
                _refund(saleId, participant, sale.price);
            }
        }
    }

    /* -------------- Internal functions -------------- */

    function _refund(
        bytes32 saleId,
        address participant,
        uint256 price
    ) internal {
        // DANGER: VALIDATE LOSER BEFORE CALLING THIS FUNCTION
        if (price > 0) {
            emit Withdrawal(saleId, participant);
            // explanation:
            // reentrancy guard is in place, no problem to send ETH here.
            // if the send fails, the transaction will revert and the state will be unchanged.
            // all other participants should still be able to withdraw
            // slither-disable-next-line arbitrary-send
            bool success = payable(participant).send(price);
            require(success, "Failed to send refund");
        }
    }

    function _airdrop(
        bytes32 saleId,
        address winner,
        address rewardToken,
        uint256 rewardTokenId
    ) internal {
        // DANGER: VALIDATE WINNER BEFORE CALLING THIS FUNCTION
        emit Withdrawal(saleId, winner);
        IGBCLab(rewardToken).mint(winner, rewardTokenId, 1, "");
    }

    function _withdraw(bytes32 saleId, address participant) internal {
        Sale storage sale = sales[saleId];

        require(
            sale.participantsMap[participant],
            "participant not in this sale."
        );

        require(!sale.withdrawn[participant], "Already withdrawn.");

        sale.withdrawn[participant] = true;

        if (getState(saleId) == State.DECIDED) {
            // run through winners to see if participant is a winner
            for (uint256 i = 0; i < sale.supply; i++) {
                if (sale.winners[i] == participant) {
                    _airdrop(
                        saleId,
                        participant,
                        sale.rewardToken,
                        sale.rewardTokenId
                    );
                    return;
                }
            }

            // if the code reached here, must be a loser
            _refund(saleId, participant, sale.price);
        } else if (getState(saleId) == State.FAILED) {
            /* === failsafe === */
            _refund(saleId, participant, sale.price);
        } else {
            revert("Sale not yet decided / failed");
        }
    }

    function _executeAirdropForWinners(bytes32 saleId) internal {
        require(getState(saleId) == State.DECIDED, "State != Decided");

        Sale storage sale = sales[saleId];

        // transfer the reward tokens to the winners
        for (uint256 i = 0; i < sale.supply; i++) {
            address winner = sale.winners[i];
            if (sale.withdrawn[winner]) {
                // winner might have already withdrawn before airdrop
                continue;
            } else {
                sale.withdrawn[winner] = true;
                _airdrop(saleId, winner, sale.rewardToken, sale.rewardTokenId);
            }
        }
    }

    function _executeRefundForLosers(bytes32 saleId) internal {
        require(getState(saleId) == State.DECIDED, "State != Decided");

        Sale storage sale = sales[saleId];

        // transfer the deposits back to the losers
        for (uint256 i = sale.supply; i < sale.participantsArr.length; i++) {
            address loser = sale.participantsArr[i];
            if (sale.withdrawn[loser]) {
                // loser might have already withdrawn before airdrop
                continue;
            } else {
                sale.withdrawn[loser] = true;
                _refund(saleId, loser, sale.price);
            }
        }
    }
}
