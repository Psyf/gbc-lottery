// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {ERC1155} from "solmate/src/tokens/ERC1155.sol";
import {ERC721} from "solmate/src/tokens/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IRandomizer} from "./IRandomizer.sol";

struct Sale {
    // static setting by admin
    address markToken; // The address of the ERC721 token that participants must mark to participate in the sale.
    address rewardToken; // The address of the ERC1155 token that will be distributed to winners.
    uint256 rewardTokenId; // The ID of the ERC1155 token that will be distributed to winners.
    uint256 supply; // The number of reward tokens to distribute in the sale; also == number of winners.
    uint256 price; // The price in wei that a participant must pay to participate.
    uint256 endTime; // The block.timestamp after which participants cannot participate.
    // dynamic data during sale
    address[] participantsArr; // An array of addresses of participants in the sale.
    mapping(address => bool) participantsMap; // A mapping of participants to whether they have participated or not, so we can prevent someone from participating twice.
    mapping(uint256 => bool) marks; // A mapping of marked token IDs to track which tokens have been used for participation.
    // data after sale
    uint256 randomizerId; // The ID of the randomizer request; used to prevent spamming randomizer requests.
    address[] winners; // An array of winners of the sale.
    mapping(address => bool) withdrawn; // A mapping of participants to whether they have withdrawn their deposit/reward or not.
}

contract Lottery is Ownable {
    mapping(bytes32 => Sale) public sales;
    mapping(uint256 => bytes32) public randomizerIdToSalesId;

    event Participation(
        bytes32 indexed saleId,
        address indexed participant,
        uint256 markTokenId
    );

    //todo: remove event Distribute(address[] winners, uint256 tokenId);

    event SaleCreation(
        bytes32 indexed saleId,
        address markToken,
        address rewardToken,
        uint256 rewardTokenId,
        uint256 supply,
        uint256 price,
        uint256 endTime
    );

    event Withdrawal(bytes32 indexed saleId, address indexed participant);

    IRandomizer public randomizer;

    constructor(address _randomizerAddress) {
        randomizer = IRandomizer(_randomizerAddress);
    }

    // function that allows the contract owner to create a new sale with the given parameters
    function createSale(
        address _markToken,
        address _rewardToken,
        uint256 _rewardTokenId,
        uint256 _supply,
        uint256 _price,
        uint256 _endTime
    ) external onlyOwner {
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
        require(sale.endTime == 0, "Sale already exists.");

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

        require(sale.endTime != 0, "Sale does not exist.");

        require(block.timestamp < sale.endTime, "Sale has ended.");

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
    function getRandomNumber(bytes32 saleId) external {
        Sale storage sale = sales[saleId];
        require(sale.endTime != 0, "Sale does not exist.");
        require(block.timestamp >= sale.endTime, "Sale has not ended.");
        require(sale.randomizerId == 0, "Already requested random nubmer"); // so we can only execute once per sale, else could be drained in an attack

        // todo: need to tweak callback gas limit; set to max?
        sale.randomizerId = randomizer.request(50000);
        randomizerIdToSalesId[sale.randomizerId] = saleId;
    }

    // Callback function called by the randomizer contract when the random value is generated
    // Picks the winners
    function randomizerCallback(uint256 _id, bytes32 _value) external {
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
                keccak256(abi.encodePacked(block.timestamp, randomNumber, i))
            ) % (sale.participantsArr.length - i)) + i;
            address winner = sale.participantsArr[winnerIndex];
            sale.winners.push(winner);

            // swap the winner to the front of the array
            address iParticipant = sale.participantsArr[i];
            sale.participantsArr[i] = winner;
            sale.participantsArr[winnerIndex] = iParticipant;
        }
    }

    // can't give back ETH to losers, so we just give them the token
    // convenience function for the team to trigger perhaps
    function executeRewardAirdrop(bytes32 saleId) external {
        Sale storage sale = sales[saleId];

        require(sale.winners.length > 0, "No winners yet");

        // transfer the reward tokens to the winners
        for (uint256 i = 0; i < sale.supply; i++) {
            address winner = sale.winners[i];
            if (sale.withdrawn[winner]) {
                // winner might have already withdrawn before airdrop
                continue;
            } else {
                sale.withdrawn[winner] = true;
                ERC1155(sale.rewardToken).safeTransferFrom(
                    address(this),
                    winner,
                    sale.rewardTokenId,
                    1,
                    ""
                );
                emit Withdrawal(saleId, winner);
            }
        }
    }

    function withdraw(bytes32 saleId, address participant) external {
        Sale storage sale = sales[saleId];

        require(sale.winners.length > 0, "No winners yet");

        require(!sale.withdrawn[participant], "Already withdrawn.");

        require(
            sale.participantsMap[participant],
            "participant not in this sale."
        );

        // run through winners to see if participant is a winner
        for (uint256 i = 0; i < sale.supply; i++) {
            if (sale.winners[i] == participant) {
                sale.withdrawn[participant] = true;
                ERC1155(sale.rewardToken).safeTransferFrom(
                    address(this),
                    participant,
                    sale.rewardTokenId,
                    1,
                    ""
                );
                emit Withdrawal(saleId, participant);
                return;
            }
        }

        // if the code reached here, must be a loser
        if (sale.price > 0) {
            sale.withdrawn[participant] = true;
            bool success = payable(participant).send(sale.price);
            require(success, "Failed to send refund");
        }
    }

    // Allows participants to withdraw their deposit if random number generator fails to callback within 30 days after the sale has ended.
    // Participants can only withdraw their deposit once, and only if a deposit was required for the sale.
    function withdrawOnFailedSale(bytes32 saleId, address participant)
        external
    {
        Sale storage sale = sales[saleId];

        require(sale.endTime != 0, "Sale does not exist.");

        require(
            block.timestamp > sale.endTime + 30 days,
            "Withdrawal period has not yet started."
        );
        require(sale.price > 0, "Sale did not require a deposit.");

        require(
            sale.participantsMap[participant],
            "participant not in this sale."
        );

        require(!sale.withdrawn[participant], "Already withdrawn.");

        sale.withdrawn[participant] = true;

        bool success = payable(participant).send(sale.price);
        require(success, "Failed to send refund");
    }

    // ----------- House Keeping Function for Admins ------------ //
    function sweep(uint256 amount) external onlyOwner {
        bool success = payable(msg.sender).send(amount);
        require(success, "Failed to send sweep");
    }

    function fundRandomizer(uint256 amount) external onlyOwner {
        randomizer.clientDeposit{value: amount}(address(this));
    }

    function withdrawRandomizer(uint256 amount) external onlyOwner {
        randomizer.clientWithdrawTo(address(this), amount);
    }
}
