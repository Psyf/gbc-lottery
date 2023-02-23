// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Auth, Authority} from "solmate/src/auth/Auth.sol";
import {IRandomizer} from "./interfaces/IRandomizer.sol";
import {ReentrancyGuard} from "solmate/src/utils/ReentrancyGuard.sol";

contract LotteryHouseKeeping is Auth, ReentrancyGuard {
    uint256 public reserves; // stores the amount of ETH the contract holds AND owns
    IRandomizer public randomizer;

    constructor(
        address _owner,
        Authority _authority,
        address _randomizer
    ) Auth(_owner, _authority) {
        randomizer = IRandomizer(_randomizer);
        reserves = 0;
    }

    // ----------- House Keeping Functions for Admins ------------ //
    function sweep(uint256 amount) external requiresAuth nonReentrant {
        require(reserves >= amount, "Insufficient reserves");
        reserves -= amount;
        bool success = payable(msg.sender).send(amount);
        require(success, "Failed to send sweep");
    }

    function fundRandomizer(uint256 amount) external requiresAuth nonReentrant {
        require(reserves >= amount, "Insufficient reserves");
        reserves -= amount;
        randomizer.clientDeposit{value: amount}(address(this));
    }

    function withdrawRandomizer(uint256 amount)
        external
        requiresAuth
        nonReentrant
    {
        reserves += amount;
        randomizer.clientWithdrawTo(address(this), amount);
    }
}
