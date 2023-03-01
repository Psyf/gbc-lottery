// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

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

enum State {
    DOES_NOT_EXIST,
    OPEN,
    CLOSED,
    DECIDED,
    FAILED
}
