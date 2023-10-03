// SPDX-License-Identifier: CC-BY-SA-4.0

// Version of Solidity compiler this program was written for
pragma solidity 0.8.21;

// Our first contract is a faucet!
contract Faucet {
    // Declare a new variable for the address of the owner
    address owner;

    // Initialize Faucet contract: setting owner
    constructor() {
        // msg.sender = Address who creates the contract
        owner = msg.sender;
    }

    // Accept any incoming amount
    receive() external payable {}

    // Access control statement
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // Give out ether to anyone who asks
    function withdraw(uint withdraw_amount) public {
        // Limit withdrawal amount
        require(withdraw_amount <= 100000000000000000);
        // require(withdraw_amount <= 0.1 ether); (275)

        // Send the amount to the address that requested it
        payable(msg.sender).transfer(withdraw_amount);
    }

    // Contract destructor
    function destroy() public onlyOwner {
        require(msg.sender == owner);
        selfdestruct(payable(owner));
    }
}
