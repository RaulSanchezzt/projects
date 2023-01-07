// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RSTToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Raul", "RST") {
        _mint(msg.sender, initialSupply);
    }
}
