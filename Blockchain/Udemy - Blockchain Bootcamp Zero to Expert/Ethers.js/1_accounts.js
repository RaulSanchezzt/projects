const { ethers } = require("ethers");

const INFURA_ID = "ae6cab87d0a245d4a753a3c541291050";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\n Address (${address}): ${ethers.utils.formatEther(balance)} ETH \n`)
}

main()