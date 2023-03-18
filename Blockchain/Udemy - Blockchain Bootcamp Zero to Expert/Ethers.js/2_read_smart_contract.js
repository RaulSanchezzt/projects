const { ethers } = require("ethers");

const INFURA_ID = "ae6cab87d0a245d4a753a3c541291050";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Smart Contract
const Coinbase = "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43"; // Coinbase Smart Contract

const contract = new ethers.Contract(address, ERC20_ABI, provider);


const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = ethers.utils.formatEther(await contract.totalSupply());
  const balanceOf = ethers.utils.formatEther(
    await contract.balanceOf(Coinbase)
  );

  console.log("Smart Contract Address: ", address);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply} DAI`);
  console.log(`Balance of Coinbase: ${balanceOf} DAI`);
};

main();
