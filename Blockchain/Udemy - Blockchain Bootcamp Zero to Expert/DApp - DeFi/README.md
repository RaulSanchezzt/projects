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

## Script

To execute a script we can use `truffle`:

```js
$ truffle exec scripts/issue-token.js
Using network 'development'.

Tokens issued!
```

## Deploy to Polygon Testnet

Finally, let's do the same in MATIC.

```js
$ truffle migrate --reset --network polygon

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'polygon'
> Network id:      80001
> Block gas limit: 29504076 (0x1c2324c)


2_initial_migration.js
======================

   Deploying 'JamToken'
   --------------------
   > transaction hash:    0xe2fb212b74e9909041112405b169a632235c2c496e394f0c90f540d5a739d313
   > Blocks: 1            Seconds: 8
   > contract address:    0xf8e6222AaE40293F90CE8450ccB98CA1d03b5461
   > block number:        37431697
   > block timestamp:     1688156900
   > account:             0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D
   > balance:             0.69784775498708653
   > gas used:            860898 (0xd22e2)
   > gas price:           2.500000015 gwei
   > value sent:          0 ETH
   > total cost:          0.00215224501291347 ETH

   Pausing for 1 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 37431698)

   Deploying 'StellartToken'
   -------------------------
   > transaction hash:    0x8462696b3d17becf58727954ded25c36fd397de25447a15cf9b843d0adcdb720
   > Blocks: 2            Seconds: 8
   > contract address:    0xdDcf2F5ab9021304cb66Cf5C3B1F9f85147d7909
   > block number:        37431702
   > block timestamp:     1688156920
   > account:             0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D
   > balance:             0.69569535997417216
   > gas used:            860958 (0xd231e)
   > gas price:           2.500000015 gwei
   > value sent:          0 ETH
   > total cost:          0.00215239501291437 ETH

   Pausing for 1 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 37431703)

   Deploying 'TokenFarm'
   ---------------------
   > transaction hash:    0xbb1109c22560d74c9dfcfdc52cc6e2a2575fdf81217e379f4b8521e78d127f8b
   > Blocks: 1            Seconds: 4
   > contract address:    0xF29AEE22e20996C0DA299338Eb2F3FA7ccB139E2
   > block number:        37431706
   > block timestamp:     1688156936
   > account:             0xB8b74Dc6bce6B16dcd634aB94600a3c9967E6F0D
   > balance:             0.693015742458094455
   > gas used:            1071847 (0x105ae7)
   > gas price:           2.500000015 gwei
   > value sent:          0 ETH
   > total cost:          0.002679617516077705 ETH

   Pausing for 1 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 37431707)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.006984257541905545 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.006984257541905545 ETH
```
