require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    cache: "./cache",
    tests: "./tests",
  },

  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545"
    },
    // polygon: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: ["privatekey"]
    // }
  }
};
