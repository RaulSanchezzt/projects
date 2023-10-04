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
    // Events
    event Withdrawal(address indexed to, uint amount);
    event Deposit(address indexed from, uint amount);

    // Accept any incoming amount
    receive() external payable {
        // Emit event if there is a deposit
        emit Deposit(msg.sender, msg.value);
    }

    // Give out ether to anyone who asks
    function withdraw(uint withdraw_amount) public {
        // Limit withdrawal amount
        require(withdraw_amount <= 0.1 ether);

        // Check wether there is enough ether to satisfy a withdrawal request
        require(
            address(this).balance >= withdraw_amount,
            "Insufficient balance in faucet for withdrawal request"
        );

        // Send the amount to the address that requested it
        payable(msg.sender).transfer(withdraw_amount);

        // Emit event after transfer
        emit Withdrawal(msg.sender, withdraw_amount);
    }
}
