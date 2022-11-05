# OpenWebinars - Tools to Blockchain Developers

In this [course](https://openwebinars.net/academia/portada/herramientas-tecnologias-desarrollador-blockchain/) I have learned how to use the tools [Remix IDE](https://remix.ethereum.org/) and [Truffle](https://trufflesuite.com/) to develop **Smart Contracts**.

## Truffle

1. Install Truffle using [npm](https://www.npmjs.com/).

```bash
$ npm install -g truffle
```

2. Create a new project.

```bash
$ truffle init
```

3. Or use an example [webpack-based](https://github.com/truffle-box/webpack-box) app.

```bash
truffle unbox webpack
```

4. Run the development console.

```bash
truffle develop
```

5. Compile and migrate the smart contracts.

```bash
truffle(develop)> compile
truffle(develop)> migrate
```

6. Run the tests.

```bash
truffle(develop)> test
```