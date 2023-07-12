require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  // defaultNetwork: "custom",
  networks: {
    custom: {
      url: "http://127.0.0.1:7545"
    },
    hardhat: {
    },
  },
};