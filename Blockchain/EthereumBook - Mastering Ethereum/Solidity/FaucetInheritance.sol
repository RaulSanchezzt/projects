// SPDX-License-Identifier: CC-BY-SA-4.0

// Version of Solidity compiler this program was written for
pragma solidity 0.8.21;

// Parent SC to know the owner
contract Owned {
    address owner;

    // Contract constructor: set owner
    constructor() {
        owner = msg.sender;
    }

    // Access control modifier
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}

// Child SC of Owned
contract Mortal is Owned {
    // Contract destructor
    function destroy() public onlyOwner {
        selfdestruct(payable(owner));
    }
}

// Child SC of Mortal
contract Faucet is Mortal {
    // Accept any incoming amount
    receive() external payable {}

    // Give out ether to anyone who asks
    function withdraw(uint withdraw_amount) public {
        // Limit withdrawal amount
        require(withdraw_amount <= 0.1 ether);

        // Send the amount to the address that requested it
        payable(msg.sender).transfer(withdraw_amount);
    }
}
