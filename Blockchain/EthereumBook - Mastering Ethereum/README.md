# Ethereum Book - Mastering Ethereum

Here are some practical exercises that I have found in the [Ethereum Book](https://github.com/ethereumbook/ethereumbook).

## Getting Started with MetaMask (74)

After creating a new **wallet** to start develop, let's get some _test Ether_ in the **Sepolia Network** with a [Faucet](https://sepoliafaucet.com/). I did it in this [transaction](https://sepolia.etherscan.io/tx/0x1d929a0c4854213cac32d695966f7317326c9a14ccca12a08b7b91ea6f5f28e9)

## A Simple Contract: A Test Ether Faucet (92)

Using [Remix IDE](https://remix.ethereum.org) we can compile this **Smart Contract** into _EVM bytecode_. This would be the _bytecode_

```js
608060405234801561000f575f80fd5b506101478061001d5f395ff3fe608060405260043610610021575f3560e01c80632e1a7d4d1461002c57610028565b3661002857005b5f80fd5b348015610037575f80fd5b50610052600480360381019061004d91906100e6565b610054565b005b67016345785d8a0000811115610068575f80fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f193505050501580156100ab573d5f803e3d5ffd5b5050565b5f80fd5b5f819050919050565b6100c5816100b3565b81146100cf575f80fd5b50565b5f813590506100e0816100bc565b92915050565b5f602082840312156100fb576100fa6100af565b5b5f610108848285016100d2565b9150509291505056fea26469706673582212203cfb3970576275e4be54513a9e0f5d4b2985edbe134228c1f3e21cfbdbbc5a6b64736f6c63430008150033
```

### Creating the Contract on the Blockchain (99)

Then, switch to the Run tab and select Injected Web3 in the Environment drop-down selection box. This connects the Remix IDE to the MetaMask wallet, and through MetaMask to the Ropsten test network.

Now we can see the [transaction](https://sepolia.etherscan.io/tx/0x661c923670e2b67de0b6d44e965a2e7f377620bc756239767db8f84c581fb3bc) on etherscan to create the [contract](https://sepolia.etherscan.io/address/0xf8e6222aae40293f90ce8450ccb98ca1d03b5461).

### Funding the Contract (106)

Our faucet needs funds, let's send some ether using MetaMask. I sent 0.5 Sepolia Ether in this [transaction](https://sepolia.etherscan.io/tx/0xdf63998147d9364040745cd303e7247c1e073e6766462dbea12a5d57638ecf98).

### Withdrawing from Our Contract (108)

Finally, let's use our personal faucet to withdraw 0.1 Ether using Remix IDE. Once we have requested our `100000000000000000 wei`, the contract balance has changed because it sent us 0.1 ether as requested. But we don’t see an “OUT” transaction in the contract address history. Where’s the outgoing withdrawal? A new tab has appeared on the contract’s address history page, named Internal Transactions. Because the 0.1 ether transfer originated from the contract code, it is an internal transaction (also called a message).

> To recap: you sent a transaction from your MetaMask wallet that contained data instructions to call the withdraw function with a withdraw_amount argument of 0.1 ether. That transaction caused the contract to run inside the EVM. As the EVM ran the Faucet contract’s withdraw function, first it called the require function and validated that the requested amount was less than or equal to the maximum allowed withdrawal of 0.1 ether. Then it called the transfer function to send you the ether. Running the transfer function generated an [internal transaction](https://sepolia.etherscan.io/tx/0x543530fd5e2d10942014f35a8831471176df208895e3abbedc4c32708330a660) that deposited 0.1 ether into your wallet address, from the contract’s balance.

## Building a Smart Contract with Solidity (263)

The main “product” of the Solidity project is the Solidity compiler, solc, which converts programs written in the Solidity language to EVM bytecode.

### Download and Install Solidity (265)

There are a number of methods you can use to download and install Solidity, either as a binary release or by compiling from source code. You can find detailed instructions in the [Solidity documentation](https://docs.soliditylang.org/en/latest/installing-solidity.html).

Using the `apt` package manager is simple:

```bash
$ sudo add-apt-repository ppa:ethereum/ethereum
$ sudo apt update
$ sudo apt install solc
```

Once you have `solc` installed, check the version by running:

```bash
solc, the solidity compiler commandline interface
Version: 0.8.21+commit.d9974bed.Linux.g++
```

### Compiling with the Solidity Compiler (268)

Now, we will use the Solidity compiler on the command line to compile our contract directly. We use the `--bin` and `--optimize` arguments of solc to produce an optimized binary of our example contract:

````bash
solc --optimize --bin Solidity/Faucet.sol

======= Solidity/Faucet.sol:Faucet =======
Binary:
608060405234801561000f575f80fd5b5060d08061001c5f395ff3fe608060405260043610601e575f3560e01c80632e1a7d4d146028575f80fd5b36602457005b5f80fd5b3480156032575f80fd5b506042603e3660046084565b6044565b005b67016345785d8a00008111156057575f80fd5b604051339082156108fc029083905f818181858888f193505050501580156080573d5f803e3d5ffd5b5050565b5f602082840312156093575f80fd5b503591905056fea264697066735822122069fb51528cc2d97b613c598e33097f06882d3be58e59005412068d36a559279064736f6c63430008150033```
````

### The Ethereum Contract ABI (269)

We use the solc command-line Solidity compiler to produce the ABI for our Faucet.sol example contract:

```bash
solc --abi Solidity/Faucet.sol

======= Solidity/Faucet.sol:Faucet =======
Contract JSON ABI
[{"inputs":[{"internalType":"uint256","name":"withdraw_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
```

## Adding a Constructor and selfdestruct to Faucet (286)

We probably want selfdestruct to be callable only by the EOA that originally created the contract. By convention this is usually stored in an address variable called owner. Our constructor sets the owner variable, and the selfdestruct unction will first check that the owner called it directly. First, let's [deploy](https://sepolia.etherscan.io/tx/0x1a3ff3d610a44eb16def55bbc9f07e9a7526b1bb1240569d3151dc4fa354b642) the [Smart Contract](https://sepolia.etherscan.io/address/0xa965f89b7185ac283e8c3dbfad824c1455044504) with the new code.

Then [send](https://sepolia.etherscan.io/tx/0xbabe7a99ad02b1d7a48c7a991f253280dffa5b3f16ed536464087d94d77e4802) some _Ether_ to test if it comes back later.

Finally, let's try to [destroy](https://sepolia.etherscan.io/tx/0x70f7ab0f7e37d594d2eddfc141d7b9802ec74228f85915cfa9d1dd6ffbeb46ca) the new contract, and now we can check the _Ether_ [came back](https://sepolia.etherscan.io/tx/0x70f7ab0f7e37d594d2eddfc141d7b9802ec74228f85915cfa9d1dd6ffbeb46ca#internal) and the [code](https://sepolia.etherscan.io/address/0xa965f89b7185ac283e8c3dbfad824c1455044504/advanced#code) is gone.

## Contract Inheritance (290)

By inheriting _mortal_, which in turn inherits _owned_, the **Faucet** contract now has the `constructor` and `destroy` functions, and a defined owner. The functionality is the same as when those functions were within Faucet, but now we can reuse those functions in other contracts without writing them again. Code reuse and modularity make our code cleaner, easier to read, and easier to audit.
