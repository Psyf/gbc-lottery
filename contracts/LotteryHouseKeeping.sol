// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Auth, RolesAuthority} from "solmate/src/auth/authorities/RolesAuthority.sol";
import {IRandomizer} from "./interfaces/IRandomizer.sol";
import {ReentrancyGuard} from "solmate/src/utils/ReentrancyGuard.sol";

contract LotteryHouseKeeping is Auth, ReentrancyGuard {
    IRandomizer public randomizer;
    uint256 public randomizerCallbackGas = 100000;
    address public fundReceiver;

    constructor(RolesAuthority police, address _randomizer)
        Auth(police.owner(), police)
    {
        randomizer = IRandomizer(_randomizer);
        fundReceiver = police.owner();
    }

    // ----------- House Keeping Functions for Admins ------------ //

    function fundRandomizer() external payable nonReentrant {
        randomizer.clientDeposit{value: msg.value}(address(this));
    }

    function withdrawRandomizer(uint256 amount)
        external
        requiresAuth
        nonReentrant
    {
        randomizer.clientWithdrawTo(address(this), amount);
        payable(fundReceiver).transfer(amount);
    }

    function modifyRandomizerCallbackGas(uint256 newLimit)
        external
        requiresAuth
    {
        randomizerCallbackGas = newLimit;
    }

    function changeRandomizerAddr(address newAddr) external requiresAuth {
        randomizer = IRandomizer(newAddr);
    }

    function changeFundReceiver(address newReceiver) external requiresAuth {
        fundReceiver = newReceiver;
    }
}
