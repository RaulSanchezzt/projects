const { ethers } = require("ethers");

const INFURA_ID = "ae6cab87d0a245d4a753a3c541291050";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log(`Block Number: ${block}`);

  const blockInfo = await provider.getBlock(block);
  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);
  console.log(transactions[0]);
};

main();
