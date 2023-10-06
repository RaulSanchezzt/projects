// SPDX-License-Identifier: CC-BY-SA-4.0

// Version of Solidity compiler this program was written for
pragma solidity 0.8.21;

// Import other Smart Contract
import "Solidity/Faucet.sol";

// New Contract
contract Token {
    // Declares a state variable _faucet of type Faucet. This variable is used to store an instance of the Faucet contract.
    Faucet private _faucet;

    //  Create and call a Faucet contract from within another contract
    constructor() {
        // Specify the value of ether transfer on creation, and pass arguments to the new contract’s constructor
        _faucet = Faucet(payable(address((new Faucet).value(0.5 ether)())));
    }
}
