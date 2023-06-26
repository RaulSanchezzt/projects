const JamToken = artifacts.require("JamToken");
const StellartToken = artifacts.require("StellartToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function (deployer, network, accounts) {
  // Deploy JamToken
  await deployer.deploy(JamToken);
  const jamToken = await JamToken.deployed();

  // Deploy StellartToken
  await deployer.deploy(StellartToken);
  const stellartToken = await StellartToken.deployed();

  // Deploy TokenFarm
  await deployer.deploy(TokenFarm, stellartToken.address, jamToken.address);
  const tokenFarm = await TokenFarm.deployed();

  // Transfer StellartTokens (reward token) to TokenFarm (1M tokens)
  await stellartToken.transfer(tokenFarm.address, "1000000000000000000000000");

  // Transfer tokens to staking
  await jamToken.transfer(accounts[1], "100000000000000000");
};
