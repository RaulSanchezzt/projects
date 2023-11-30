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
