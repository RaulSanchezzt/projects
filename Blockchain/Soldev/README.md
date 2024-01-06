# Soldev

This is the documentation on what I am doing in the official [Solana Course](https://www.soldev.app/course).

## Intro to cryptography

First, initialise this project.

```js
$ npm init
```

Let's install the necessary `npm modules`

```js
$ npm install typescript @solana/web3.js @digitak/esrun @solana-developers/node-helpers -y
```

To make a new keypair, use the `Keypair.generate()` function from `@solana/web3.js`, and make sure you don't include secret keys in your source code! Then, run this command to execute the file:

```js
The public key is:  C6v5Kj4ZXL3twZcEerzHTkg3g1MbzoaJ5XqSK2PnWrVo
The secret key is:  Uint8Array(64) [
  (a long series of numbers)
]
✅ Finished!
```

To ensure that your secret key stays secure, we are going to injecting the secret key using a `.env` file, run the command below to make sure the key is loaded:

```js
$ npx esrun load-keypair.ts
✅ Finished! We've loaded our secret key securely, using an env file!
```

## Intro to reading data

To get started, clone this [repository](https://github.com/Unboxed-Software/solana-intro-frontend/tree/starter).

```js
$ git clone git@github.com:Unboxed-Software/solana-intro-frontend.git
```

I changed the name of the folder and then install the dependencies:

```js
$ cd intro-to-reading-data/

$ npm install
```

Start the app using the command:

```js
$ npm run dev
```

Now we can see that the front-end is working, let's install `web3 Solana`:

```js
$ npm install @solana/web3.js
```

## Intro to writing data

First, I installed the [CLI Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools) and generated a [File System Wallet](https://docs.solana.com/wallet-guide/file-system-wallet):

```js
$ solana --version
solana-cli 1.17.13 (src:ef1fb9ec; feat:4006346914, client:SolanaLabs)

$ solana-keygen new -o /home/raul/.config/solana/id.json
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none):

Wrote new keypair to /home/raul/.config/solana/id.json
===============================================================================
pubkey: ErBr1AKnuudg54UWE5TaDrj5TJwW6PdazjBxVZ7fYVqw
===============================================================================

$ solana-keygen verify ErBr1AKnuudg54UWE5TaDrj5TJwW6PdazjBxVZ7fYVqw /home/raul/.config/solana/id.json
Verification for public key: ErBr1AKnuudg54UWE5TaDrj5TJwW6PdazjBxVZ7fYVqw: Success
```

Write, the code and execute it to check that we can transfer from an account to another:

```js
$ npx esrun transfer.ts
89C36mjiq91kRRsXWN3VPaVwtfDp8b8qt5Dyz3h7vWEp

suppliedToPubkey: 89C36mjiq91kRRsXWN3VPaVwtfDp8b8qt5Dyz3h7vWEp

✅ Loaded our own keypair, the destination public key, and connected to Solana

(node:8919) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

💸 Finished! Sent 200000000 to the address 89C36mjiq91kRRsXWN3VPaVwtfDp8b8qt5Dyz3h7vWEp.

Transaction signature is 4QvrMBnWGMJYpgci2fDQ1M1sVh3DtrpSZzF3Xv4C5py6qgmqmyuYEBX4Vn3DFW8BsNMT18RowWKPXKj4TYVLKCn8!

You can view your transaction on the Solana Explorer at:
https://explorer.solana.com/tx/4QvrMBnWGMJYpgci2fDQ1M1sVh3DtrpSZzF3Xv4C5py6qgmqmyuYEBX4Vn3DFW8BsNMT18RowWKPXKj4TYVLKCn8?cluster=devnet
```

As we can see in this [TX](https://explorer.solana.com/tx/4QvrMBnWGMJYpgci2fDQ1M1sVh3DtrpSZzF3Xv4C5py6qgmqmyuYEBX4Vn3DFW8BsNMT18RowWKPXKj4TYVLKCn8?cluster=devnet), we transfered `0.2 SOL` which as of _24/12/2023_ has a value of **$22**. The transaction took less than 1 second and the status is **confirmed**, meaning it has been validated and is immutable.

## Intro to Custom on Chain Programs

We’re going to create a script to ping an on-chain program that increments a counter each time it has been pinged.

```js
$ npx esrun index.ts
🔑 Loaded keypair ErBr1AKnuudg54UWE5TaDrj5TJwW6PdazjBxVZ7fYVqw!
⚡️ Connected to Solana devnet cluster!
✅ Transaction completed! You can view your transaction on the Solana Explorer at:
https://explorer.solana.com/tx/5zjmf6aPaJqHNgTS4nXzuCf4v3MMyALBiYkWiRSGuckX72oE2GjNz78mvEHmMRDT9NQTfFMJButAavuNP6uQjSbK?cluster=devnet
```

In this [transaction](https://explorer.solana.com/tx/5zjmf6aPaJqHNgTS4nXzuCf4v3MMyALBiYkWiRSGuckX72oE2GjNz78mvEHmMRDT9NQTfFMJButAavuNP6uQjSbK?cluster=devnet) we can see at the end that we **pinned** the program.

## Interact with wallets

When adding wallet support to an existing react app, you start by installing the appropriate packages. You’ll need `@solana/wallet-adapter-base`, `@solana/wallet-adapter-react`. If you plan to use the provided react components, you'll also need to add `@solana/wallet-adapter-react-ui`.

We'll download the [starter code for this project](https://github.com/Unboxed-Software/solana-ping-frontend/tree/starter). Install the modules and see its current state:

```js
$ npm install

$ npm run dev
```

Now we can ping the program using a frontend and view the [transaction](https://explorer.solana.com/tx/4VqinXj7sMLJVQLHnPcrdWLnz4bcHApFseRNLEQBor8ugNyWcA6uPJgL6K6LymTxCJ9zAbajiQer9BzBo6pujQQg?cluster=devnet) on the explorer.

Finally, we have built an application that lets user connect their Phantom wallet and [send](https://explorer.solana.com/tx/493ikok4UkzE51NQtreeHEoaCwT7FUBXccpARX5gbsg5M2J2dwUPXz1pFCJ4kqo8edWPRqtsAmgNPCD58ahanSat?cluster=devnet) SOL to another account.
