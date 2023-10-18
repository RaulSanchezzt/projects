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

## Events (294)

When a transaction completes (successfully or not), it produces a _transaction receipt_. The transaction receipt contains log entries that provide information about the actions that occurred during the execution of the transaction.

### Catching events (295)

In order to test the events, first let's [deploy](https://sepolia.etherscan.io/tx/0xb167d1518ec259e94514399ebc9cfd7a907fcd4a839590a1c9abbc8c1f3af884) the new [Contract](https://sepolia.etherscan.io/address/0x342141b07c931c2e21296ba05569deabfec24b79).

Then, [send](https://sepolia.etherscan.io/tx/0x638b2f29ce68524121aa6c5a6d6d51f8af5173f65f5b67685995ecc7e27615a6) some _ether_ to see the [Event](https://sepolia.etherscan.io/tx/0x638b2f29ce68524121aa6c5a6d6d51f8af5173f65f5b67685995ecc7e27615a6#eventlog) `Deposit`.

Finally, let's withdraw some _ether_ to see the [Event](https://sepolia.etherscan.io/tx/0x76e1e76c397c4185c480117f70729e8ba3fb384f8ddb3de59101bb044af2c439#eventlog) `Withdrawal`.

[Here](https://sepolia.etherscan.io/address/0x342141b07c931c2e21296ba05569deabfec24b79#events) we can see all the **events** emmited by the _Smart Contract_.

## Calling Other Contracts (298)

Calling other contracts from within your contract is a very useful but potentially dangerous operation. The safest way to call another contract is if you create that other contract yourself.

## Gas Considerations (305)

Gas is a resource constraining the maximum amount of computation that Ethereum will allow a transaction to consume.

### Estimating Gas Cost (308)

First, let's create a new **truffle** environment.

```js
$ truffle init
```

Then copy the **Faucet.sol** file to the contracts directory and create a `JavaScript` file to deploy the contract. Deploy to your local network:

```js
$ truffle develop

Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0x3f0d3179f99e813a79425d248ae071a242791b2e
(1) 0x357939eafb5654f278ec380d99d7d4627feec316
(2) 0xec11c70f0fe5e1d7aa70469c191bb805febef835
(3) 0xa3f6a26d60d245d84be798201050295aa907d5e6
(4) 0x7ccd6953f9de46a3ab9e51641c41b2cc4177f8d8
(5) 0x932fe0a9b918dae38e63b490c33d74c4e3e55972
(6) 0x5659dd5b2dff4d61e5e8fc4956daf8f1e227923e
(7) 0x89ca78d612a76154cd8f8eb79a79c953b886e79e
(8) 0x6446b78f8fadaa541f48ff6a10a4fe3378720741
(9) 0xe5f4a87e5570f4626a7cee4ddf7f420affeccb00

truffle(develop)> deploy

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xf62728d60fa86fe685b2a96ccbeb09340939cf0e42517fbd87c0492cc450d31f
   > Blocks: 0            Seconds: 0
   > contract address:    0xA72394d4D405A324114c869b7E568d820aCdA395
   > block number:        1
   > block timestamp:     1696601920
   > account:             0x3F0D3179f99e813a79425D248ae071A242791B2e
   > balance:             99.9991555345
   > gas used:            250212 (0x3d164)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.0008444655 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:        0.0008444655 ETH


2_deploy_contracts.js
=====================

   Deploying 'Faucet'
   ------------------
   > transaction hash:    0x305ad3eeb7ed07c42cc6c72997fb7493475ef084cdaa25fd7129616067598854
   > Blocks: 0            Seconds: 0
   > contract address:    0x5d71672625307EeC44b2fAEFF1F701126B43EDBa
   > block number:        3
   > block timestamp:     1696601920
   > account:             0x3F0D3179f99e813a79425D248ae071A242791B2e
   > balance:             99.998345959416176378
   > gas used:            207423 (0x32a3f)
   > gas price:           3.178367853 gwei
   > value sent:          0 ETH
   > total cost:          0.000659266595172819 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000659266595172819 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.001503732095172819 ETH
```

To obtain the gas price from the network we can use the `truffle console`:

```js
truffle(development)> web3.eth.getGasPrice(console.log);
null 20000000000
'20000000000'
```

Finally, exec the script\*:

```js
truffle(develop)> exec gas_estimates.js
Using network 'develop'.
Gas Price is 20000000000 wei
gas estimation = 31397 units
gas cost estimation = 627940000000000 wei
gas cost estimation = 0.00062794 ether
```

## Reentrancy Attack (333)

Contracts also typically handle ether, and as such often send ether to various external user addresses. These operations require the contracts to submit external calls. These external calls can be hijacked by attackers, who can force the contracts to execute further code (through a fallback function), including calls back into themselves. To reproduce the attack, let's deploy a **vulnerable** [Smart Contract](https://sepolia.etherscan.io/address/0x85ad8bdc1e30fef63a30460649f0c3f96a90dc1d).

Then, [deposit](https://sepolia.etherscan.io/tx/0xfc3d022e7af8dbb9650010dcff58d680e730dc97c56d61c89d0e4df8e8067591) some _ether_ to simmulate a real contract that have funds.

Now we have a contract with 1 _ether_, let's deploy the [Attacker Contract](https://sepolia.etherscan.io/address/0xc0c1cad25261f6789a2ab1133b7e25ef5ca3f4d3) using the **address** of the victim and the **owner** as `constructor`.

Finally, [start the attack](https://sepolia.etherscan.io/tx/0x964b37af473be6aa7b4ac5ea78503d163a6dd75f6dfdd19ab83c7a39c8086120) sending **0.1 eth** = `100000000000000000 wei` to the [Attacker Contract](https://sepolia.etherscan.io/address/0xc0c1cad25261f6789a2ab1133b7e25ef5ca3f4d3). This contract will deposit the value to the [vulnerable contract](https://sepolia.etherscan.io/address/0x85ad8bdc1e30fef63a30460649f0c3f96a90dc1d) and withdraw at the same time.

When the atacker contract receives the incoming **ether**, it will withdraw more ether and send it to the owner. The [vulnerable contract](https://sepolia.etherscan.io/address/0x85ad8bdc1e30fef63a30460649f0c3f96a90dc1d#internaltx) will send the funds to the **Atacker** until it's empty. [Here](https://sepolia.etherscan.io/tx/0x964b37af473be6aa7b4ac5ea78503d163a6dd75f6dfdd19ab83c7a39c8086120#statechange) we can see the **state changes** of this transaction.

## Unexpected Ether (348)

The `EtherGame.sol` represents a simple game (which would naturally involve race conditions) where players send `0.5 ether` to the contract in the hopes of being the player that reaches one of three milestones first. Milestones are denominated in ether. The first to reach the milestone may claim a portion of the ether when the game has ended. The game ends when the final milestone (10 ether) is reached; users can then claim their rewards.

The issues come from the poor use of `this.balance` in both lines 17 and 33. A mischievous attacker could forcibly send a small amount of ether — say, `0.1 ether` — via the `selfdestruct` function to prevent any future players from reaching a milestone. `this.balance` will never be a multiple of `0.5 ether` thanks to this `0.1 ether` contribution, because all legitimate players can only send `0.5 ether` increments. This prevents all the if conditions on lines 21, 23, and 25 from being true.

Even worse, a vengeful attacker who missed a milestone could forcibly send 10 ether (or an equivalent amount of ether that pushes the contract’s balance above the `finalMileStone`), which would lock all rewards in the contract forever. This is because the `claimReward` function will always revert, due to the require on line 33 (i.e., because `this.balance` is greater than `finalMileStone`).

### Ether Game Example (351)

Let's do this using a [simplier example](https://github.com/sufublockchain/solidity/blob/main/EtherGame.sol): `EtherGameSufu.sol`. The goal of this game is to be the **2th player** to deposit `0.5 ether`. Winner will be able to withdraw all ether.

First, let's [deploy](https://sepolia.etherscan.io/tx/0xdffbb6d1fd6856358b3ffe4eb02702ff488bb602856cee3474fbfe2c0ae571d5) the [Game](https://sepolia.etherscan.io/address/0xadfe2aba6ded129bd01771c5b112ea578aa39e59) using the **Account 1**: [0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D](https://sepolia.etherscan.io/address/0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D). Then, [deposit](https://sepolia.etherscan.io/tx/0xba38f3480aa20562ab7ee838cabface9ee49c8c888c51ea21f2d7761b106750e) `0.5 ether` with this account.

Now, let's try if the Game works. The **Account 2**: [0x4bDE5261866EBE1f0f8F6d157767De73c6749b47](https://sepolia.etherscan.io/address/0x4bde5261866ebe1f0f8f6d157767de73c6749b47), [sent](https://sepolia.etherscan.io/tx/0x2faa5a77fd7633489717c615a14f87d01f6d3408e645f7440bec2d0c7cfe895c) `0.5 ether` and [claimed](https://sepolia.etherscan.io/tx/0x4f8ad17af673f6dd0ac301872702be0f8601c68e5f4ee71a067c0fde2c0e98b3) the **Reward**.

Okay, now we now it works well, so let's try to break it. **Account 2** wants to play again so [send](https://sepolia.etherscan.io/tx/0x81c9af784148583b6bea31857a83c0f0ad77fced1e95e3e01da7082f0a35809b) `0.5 ether` again.

The **Account 3**: [0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0](https://sepolia.etherscan.io/address/0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0), [deploys](https://sepolia.etherscan.io/tx/0x471600e4ca35469f2f273996e941a5ce180fb8cdb295c63d3dd0235010c974f4) the [Attack Contract](https://sepolia.etherscan.io/address/0x38cbf0a64e4df80a9d66cacda88abe9ed325861b) and [sends](https://sepolia.etherscan.io/tx/0xe3153af3258b0085cca1ab064a352d3b0ab0dac7f15f0bebfd1cf7ddacca14e2) `0.5 ether`. Finally, he calls the [Attack](https://sepolia.etherscan.io/tx/0xaeff15a4d4a570a99b22f890b6a050dda1837e8d9029b0d548fde091d932852f) function to `selfdestruct` his **Contract**. Before it destroys, will **transfer** the funds to the **Game**.

The **Attack** forced the balance of the **Game** to equal 1 ether. Now no one can [deposit](https://sepolia.etherscan.io/tx/0x56371561371f3096553f87c668e374a793178f1126b6784528f865638a61ba1d) and the winner [cannot be set](https://sepolia.etherscan.io/tx/0xa05b1e842fcdd3f84326366bcd1d1c0d68775725d8dd5885238bffa629356952). The `ether` of the **Game** are lost forever :).

## `DELEGATECALL` (356)

Standard external message calls to contracts are handled by the `CALL` opcode, whereby code is run in the context of the external contract/function. The `DELEGATECALL` opcode is almost identical, except that the code executed at the targeted address is run in the context of the calling contract, and `msg.sender` and `msg.value` remain unchanged.

Although the differences between these two opcodes are simple and intuitive, the use of `DELEGATECALL` can lead to unexpected code execution.

The code in _libraries_ themselves can be secure and vulnerability-free; however, when run in the context of another application new vulnerabilities can arise.

### Second Parity Multisig Wallet Hack (363)

This is an example of how well-written library code can be exploited if run outside its intended context. The original library and wallet contracts can be found on [GitHub](https://github.com/openethereum/parity-ethereum/blob/b640df8fbb964da7538eef268dffc125b081a82f/js/src/contracts/snippets/enhanced-wallet.sol). Notice that the `Wallet` contract essentially passes all calls to the `WalletLibrary` contract via a **delegate call**.

The intended operation of these contracts was to have a simple low-cost deployable `Wallet` contract whose codebase and main functionality were in the `WalletLibrary` contract. Unfortunately, the `WalletLibrary` contract is itself a contract and **maintains its own state**. It is possible to send calls to the `WalletLibrary` contract itself. Specifically, the `WalletLibrary` contract could be initialized and become owned.

Let's try to reproduce this attack, first, [deploy](https://sepolia.etherscan.io/tx/0xb6d336be851c55d909144a49a0465c718c0e0210fd7707f16db2e86e96904890) the [WalletLibrary](https://sepolia.etherscan.io/address/0x3ad95af911e437ea65f5380dc3c4344b0060ea0a) using the **Account 1**: [0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D](https://sepolia.etherscan.io/address/0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D).

Then, copy the address of the [WalletLibrary](https://sepolia.etherscan.io/address/0x3ad95af911e437ea65f5380dc3c4344b0060ea0a) contract and paste it on the **Wallet** contract _(line 530)_. After that, [deploy](https://sepolia.etherscan.io/tx/0x9159ec470c36c3615656c364a29c83ebc3ada78522059db4e51f8195881caced) the [Wallet](https://sepolia.etherscan.io/address/0x5f825f007b51499988d74abde90e73d14cd5b492) contract. In the constructor of this **Smart Contract** there are this fields:

- **\_OWNERS:** ["0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D","0x4bDE5261866EBE1f0f8F6d157767De73c6749b47"]
- **\_REQUIRED:** 2
- **\_DAYLIMIT:** 40

This _Wallet_ is going to belong to the [Account 1](https://sepolia.etherscan.io/address/0xb8b74dc6bce6b16dcd634ab94600a3c9967e6f0d) and [Account 2](https://sepolia.etherscan.io/address/0x4bde5261866ebe1f0f8f6d157767de73c6749b47), they require both signatures to do anything and they can't spend more than _40 ETH_. So [they](https://sepolia.etherscan.io/tx/0x71154a99bad201fc6d2b58c7abf98ee23b2432516c1c9629ae69fc5bb2f9bfb1) send [some](https://sepolia.etherscan.io/tx/0x2c19ea046737a0f70556b244a493cdaafa038570c28cfc9416b253c501530521) _ether_. Now the contract has **1 ETH** of balance but it **depends** in the **WalletLibrary**.

The [Attacker](https://sepolia.etherscan.io/address/0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0), became the [owner](https://sepolia.etherscan.io/tx/0x33fe5197a1b90423cdba56d88904a8d92c37c5ffdbcf2bef5f2084ffe73f49c5) of **WalletLibrary** using the `initWallet` method and he [destroyed](https://sepolia.etherscan.io/tx/0x45a6ec900a39daab6ed7fa2f19c5a67ec2afe75b1fb88bcb6f2a7e375dc5daec) the contract using the `kill` method. Now the [Account 1](https://sepolia.etherscan.io/address/0xb8b74dc6bce6b16dcd634ab94600a3c9967e6f0d) and [Account 2](https://sepolia.etherscan.io/address/0x4bde5261866ebe1f0f8f6d157767de73c6749b47) can't use his wallet because it depends on a contract that **don't exists anymore** :(.

## Default Visibilities (365)

Functions in Solidity have visibility specifiers that dictate how they can be called. The visibility determines whether a function can be called externally by users, by other derived contracts, only internally, or only externally.

Functions default to **public**, allowing users to call them externally. We shall now see how incorrect use of visibility specifiers can lead to some devastating vulnerabilities in smart contracts.

### First Parity Multisig Wallet Hack (368)

In the [first Parity multisig hack](https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7), about **$31M** worth of ether was stolen, mostly from three wallets.

Essentially, the multisig wallet is constructed from a base `Wallet` contract, which calls a **library** contract containing the core functionality as we saw on the previous hack. In this [version](https://github.com/openethereum/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol) we can see on line [107](https://github.com/openethereum/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L107) and [216](https://github.com/openethereum/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L216) that neither of the functions specifies their visibility, so both default to **public**.

In addition, using the `fallback function`, it forwards all unmatched function calls to the **library** using `delegatecall`, on line [424](https://github.com/openethereum/parity-ethereum/blob/4d08e7b0aec46443bf26547b17d10cb302672835/js/src/contracts/snippets/enhanced-wallet.sol#L424) of **Wallet**.

Because these functions were accidentally left **public**, an [attacker](https://etherscan.io/address/0xb3764761e297d6f121e79c32a65829cd1ddb4d32#internaltx) was able to call these functions on deployed contracts, resetting the ownership to the attacker’s address. Being the owner, the attacker then drained the wallets of all their ether.

Let's try to reproduce this attack, first, [deploy](https://sepolia.etherscan.io/tx/0x6663a87a6e7b50b173daf74e4179b31645945c85f7b992a420309681a4b23f3d) the [WalletLibrary](https://sepolia.etherscan.io/address/0xa6f28b37b7d83d69147a1031bf579a6792d48e2a) using the **Account 1**: [0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D](https://sepolia.etherscan.io/address/0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D).

Then, copy the address of the [WalletLibrary](https://sepolia.etherscan.io/address/0xa6f28b37b7d83d69147a1031bf579a6792d48e2a) contract and paste it on the **Wallet** contract _(line 521)_. After that, [deploy](https://sepolia.etherscan.io/tx/0x18f985c7dd107b54ef70e223526525af7d9fb9634e50dc0b961f65ec01762c7f) the [Wallet](https://sepolia.etherscan.io/address/0xc9560a019f4921b868b4ba7ec4e3adf46a8022eb) contract. In the constructor of this **Smart Contract** there are this fields:

- **\_OWNERS:** ["0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D","0x4bDE5261866EBE1f0f8F6d157767De73c6749b47"]
- **\_REQUIRED:** 2
- **\_DAYLIMIT:** 40

This _Wallet_ is going to belong to the [Account 1](https://sepolia.etherscan.io/address/0xb8b74dc6bce6b16dcd634ab94600a3c9967e6f0d) and [Account 2](https://sepolia.etherscan.io/address/0x4bde5261866ebe1f0f8f6d157767de73c6749b47), they require both signatures to do anything and they can't spend more than _40 ETH_. So they [send](https://sepolia.etherscan.io/tx/0xbffa1db19830f9ee862c712c51b139e564e5ceb332b43b670623185d44ffe41a) some _ether_. Now the contract has **1 ETH** of balance.

Using **Remix IDE**, we can interact with this contract, in this case because we created and deployed it, but in a real case, let's imagine we have the `source code` and the **address** of the contract. Using the `initWallet` method of the **WalletLibrary** we can get the `CALLDATA` to become the owner of the **Wallet**:

- **\_OWNERS:** ["0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0"]
- **\_REQUIRED:** 1
- **\_DAYLIMIT:** 1000

Now, instead of making a transaction, copy the `CALLDATA`:

```py
0xe46dcfeb0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a4c4f1a9b450ee6edf9d7a3c46f77d3a16fbe8c0
```

In **Remix IDE** paste this `CALLDATA` in the field of the **Wallet** contract. The [Attacker](https://sepolia.etherscan.io/address/0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0), became the [owner](https://sepolia.etherscan.io/tx/0x4a8dd9808547bd44bd60e695e307ed9b477f7de25d2788b09feb80436b171164) of the **Wallet** and we only require **1 signature** to do anything.

Finally, let's use the `execute` method of the **WalletLibrary** in **Remix IDE** to get the `CALLDATA` we need to steal the funds and send it to us:

- **\_TO:** 0xA4c4F1A9b450Ee6eDf9d7A3C46f77d3A16fbE8c0
- **\_VALUE:** 1000000000000000000
- **\_DATA:** 0x

Copy the `CALLDATA`:

```py
0xb61d27f6000000000000000000000000a4c4f1a9b450ee6edf9d7a3c46f77d3a16fbe8c00000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Paste it into the **Wallet** `CALLDATA` field to [execute](https://sepolia.etherscan.io/tx/0xd7ba07654a7e298360282b491bde9c4693e8b0d6c34d0b5c17ee6cbbc086c935) the function. We can see how the **Wallet** [sent](https://sepolia.etherscan.io/tx/0xd7ba07654a7e298360282b491bde9c4693e8b0d6c34d0b5c17ee6cbbc086c935) the funds as an _internal transaction_ :D.

## External Links

### 1. What is Ethereum ?

- The birth of Ethereum
  - [Ethereum Prehistory post (49)](https://vitalik.ca/general/2017/09/14/prehistory.html)
  - To Do (54)

### 9. Smart Contract Security

- Reentrancy
  - [DAO hack (333)](https://en.wikipedia.org/wiki/The_DAO)
  - [Gus Guimareas's blog post (333)](https://gus-tavo-guim.medium.com/reentrancy-attack-on-smart-contracts-how-to-identify-the-exploitable-and-an-example-of-an-attack-4470a2d8dfe4)
  - [Ethereum Smart Contract Best Practices (333)](https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/)
  - [Analysis of the DAO exploit (340)](https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/)
- Arithmetic Over/Underflows
  - [How to Secure Your Smart Contracts (341)](https://medium.com/loom-network/how-to-secure-your-smart-contracts-6-solidity-vulnerabilities-and-how-to-avoid-them-part-1-c33048d4d17d)
  - [Ethereum Smart Contract Best Practices (341)](https://consensys.github.io/smart-contract-best-practices/attacks/insecure-arithmetic/)
  - [Ethereum, Solidity and integer overflows: programming blockchains like 1970 (341)](https://randomoracle.wordpress.com/2018/04/27/ethereum-solidity-and-integer-overflows-programming-blockchains-like-1970/)
- Real-World Examples: PoWHC and Batch Transfer Overflow (CVE-2018–10299)
  - [How $800k Evaporated from the PoWH Coin Ponzi Scheme Overnight (347)](https://medium.com/@ebanisadr/how-800k-evaporated-from-the-powh-coin-ponzi-scheme-ove)
  - [New batchOverflow Bug in Multiple ERC20 Smart Contracts (347)](https://peckshield.medium.com/alert-new-batchoverflow-bug-in-multiple-erc20-smart-contracts-cve-2018-10299-511067db6536)
- Unexpected Ether
  - [Martin Swende Blog (350)](https://swende.se/)
  - [Sigma Prime Blog (350)](https://blog.sigmaprime.io/)
  - [Underhanded Solidity Coding Contest (355)](https://github.com/Arachnid/uscc/tree/master)
- `DELEGATECALL`
  - [Difference between CALL, CALLCODE and DELEGATECALL (356)](https://ethereum.stackexchange.com/questions/3667/difference-between-call-callcode-and-delegatecall)
  - [Parity Multisig Hacked. Again (363)](https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838)
  - [An In-Depth Look at the Parity Multisig Bug (363)](https://hackingdistributed.com/2017/07/22/deep-dive-parity-bug/)
  - [Contracts that were exploited (363)](https://github.com/openethereum/parity-ethereum/blob/b640df8fbb964da7538eef268dffc125b081a82f/js/src/contracts/snippets/enhanced-wallet.sol)
- Default Visibilities
  - [Visibility Specifiers (365)](https://docs.soliditylang.org/en/latest/contracts.html#visibility-and-getters)
  - [A hacker stole $31M of Ether (368)](https://www.freecodecamp.org/news/a-hacker-stole-31m-of-ether-how-it-happened-and-what-it-means-for-ethereum-9e5dc29e33ce)
