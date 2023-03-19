const { ethers } = require("ethers");

const INFURA_ID = "ae6cab87d0a245d4a753a3c541291050";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Smart Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log(block);

  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 1,
    block
  );
  console.log(transferEvents);
};

main();
