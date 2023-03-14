// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Auth, RolesAuthority} from "solmate/src/auth/authorities/RolesAuthority.sol";
import {IRandomizer} from "./interfaces/IRandomizer.sol";
import {ReentrancyGuard} from "solmate/src/utils/ReentrancyGuard.sol";

contract LotteryHouseKeeping is Auth, ReentrancyGuard {
    uint256 public reserves; // stores the amount of ETH the contract holds AND owns
    IRandomizer public randomizer;
    uint256 public randomizerCallbackGas = 100000;

    constructor(RolesAuthority police, address _randomizer)
        Auth(police.owner(), police)
    {
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

    function fundRandomizer(uint256 amount)
        external
        payable
        requiresAuth
        nonReentrant
    {
        // directly funded by admin
        if (msg.value > 0) {
            require(amount == msg.value, "Amount must match msg.value");
            randomizer.clientDeposit{value: msg.value}(address(this));
        } else {
            // funded by contract
            require(reserves >= amount, "Insufficient reserves");
            reserves -= amount;
            randomizer.clientDeposit{value: amount}(address(this));
        }
    }

    function withdrawRandomizer(uint256 amount)
        external
        requiresAuth
        nonReentrant
    {
        reserves += amount;
        randomizer.clientWithdrawTo(address(this), amount);
    }

    function modifyRandomizerCallbackGas(uint256 newLimit)
        external
        requiresAuth
    {
        randomizerCallbackGas = newLimit;
    }
}
