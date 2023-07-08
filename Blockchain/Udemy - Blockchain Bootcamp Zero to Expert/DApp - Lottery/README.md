# DApp - Lottery

In this section we are going yo build a new DApp that is going to act like a Lottery with ERC-20 and ERC-721 tokens.

## Run dev server local

To run the development server in local, make sure you have the version 16 of **Node.js**.

```js
$ node -v
v16.19.1
```

Then, install all the packages...

```js
$ npm install
```

Finally, start the server...

```js
$ npm start

Compiled successfully!

You can now view undefined in the browser.

  Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## Compile Smart Contracts

Let's compile the **Smart Contracts** that we are going to use in this project...

```js
$ truffle migrate --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1688220235645
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'loteria'
   -------------------
   > transaction hash:    0x024d48b9c889cac1cf2f89aaad7b5542708de963db9b96aa3814ea8f5881c48c
   > Blocks: 0            Seconds: 0
   > contract address:    0xCfEB869F69431e42cdB54A4F4f105C19C080A601
   > block number:        3
   > block timestamp:     1688223998
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             9999.65784172
   > gas used:            5702638 (0x5703ee)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.11405276 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.11405276 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.11405276 ETH
```