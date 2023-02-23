// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract LotteryEvents {
    event Participation(
        bytes32 indexed saleId,
        address indexed participant,
        uint256 markTokenId
    );

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
}
