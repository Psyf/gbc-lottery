// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

interface IGBCLab {
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;
}
