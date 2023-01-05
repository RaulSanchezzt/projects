// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

contract functions {
    // Pure
    function getName() public pure returns (string memory) {
        return "Raul";
    }

    // View
    uint256 x = 100;

    function getNumber() public view returns (uint256) {
        return x * 2;
    }
}
