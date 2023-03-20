# DApp - DeFi

In this section we are going to build a complete DApp (DeFi).

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
$ truffle compile

Compiling your contracts...
===========================
> Compiling ./src/contracts/JamToken.sol
> Compiling ./src/contracts/StellartToken.sol
> Compiling ./src/contracts/TokenFarm.sol
> Artifacts written to /home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/DApp - DeFi/src/abis
> Compiled successfully using:
   - solc: 0.8.4+commit.c7e474f2.Emscripten.clang
```

## Deploy to Ganache

Once we have compiled our **Smart Contracts**, migrate to `Ganache` Blockchain...

```js
$ truffle compile

Compiling your contracts...
===========================
> Compiling ./src/contracts/JamToken.sol
> Compiling ./src/contracts/StellartToken.sol
> Compiling ./src/contracts/TokenFarm.sol
> Artifacts written to /home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/DApp - DeFi/src/abis
> Compiled successfully using:
   - solc: 0.8.4+commit.c7e474f2.Emscripten.clang

Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/DApp - DeFi on  main [!?] via  v18.12.1 took 3s
❯ truffle migrate --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1679341848041
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xfaecb2c48d8360b1102120729b42be8672138b0836c75a554727aadd1d1382dd
   > Blocks: 0            Seconds: 0
   > contract address:    0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab
   > block number:        1
   > block timestamp:     1679341868
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             9999.99506192
   > gas used:            246904 (0x3c478)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00493808 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00493808 ETH


2_initial_migration.js
======================

   Deploying 'JamToken'
   --------------------
   > transaction hash:    0xbdf021758db84a3e3f3518ebcb9c7bdcd6c679ed0f571b29de8d3b4a044bd99d
   > Blocks: 0            Seconds: 0
   > contract address:    0xCfEB869F69431e42cdB54A4F4f105C19C080A601
   > block number:        3
   > block timestamp:     1679341868
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             9999.9771417
   > gas used:            853498 (0xd05fa)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01706996 ETH


   Deploying 'StellartToken'
   -------------------------
   > transaction hash:    0xb9cfd741c2267714df8c5ef73626de948c56ef807057a6b2b44b31422e7af99b
   > Blocks: 0            Seconds: 0
   > contract address:    0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B
   > block number:        4
   > block timestamp:     1679341868
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             9999.96007054
   > gas used:            853558 (0xd0636)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01707116 ETH


   Deploying 'TokenFarm'
   ---------------------
   > transaction hash:    0xc6fe1274e7d712f205bba86e2505ccd767bc169fda691a461a0e9c5a438e6ab6
   > Blocks: 0            Seconds: 0
   > contract address:    0xC89Ce4735882C9F0f0FE26686c53074E09B0D550
   > block number:        5
   > block timestamp:     1679341868
   > account:             0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
   > balance:             9999.9387376
   > gas used:            1066647 (0x104697)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02133294 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05547406 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.06041214 ETH
```