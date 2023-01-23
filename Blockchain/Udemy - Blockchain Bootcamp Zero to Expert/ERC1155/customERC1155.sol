// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Owner: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
// Operator: 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
// Receiver: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2

import "@openzeppelin/contracts@4.5.0/token/ERC1155/ERC1155.sol";

contract erc1155 is ERC1155 {
    // Variables con el Identificador de cada Token
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant SWORD = 3;
    uint256 public constant SHIELD = 4;

    // Constructor del Smart Contract
    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        _mint(msg.sender, GOLD, 10 ** 17, "");
        _mint(msg.sender, SILVER, 10 ** 27, "");
        _mint(msg.sender, THORS_HAMMER, 10 ** 1, "");
        _mint(msg.sender, SWORD, 10 ** 19, "");
        _mint(msg.sender, SHIELD, 10 ** 8, "");
    }
}
