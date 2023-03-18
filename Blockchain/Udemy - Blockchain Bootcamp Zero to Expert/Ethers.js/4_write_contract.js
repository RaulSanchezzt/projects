const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);

const account1 = "0x8C480406D2120BE9f55059DA1eAfb9e81701c0b4";
const account2 = "0xe61E6fa16280c265198927F801ee1dABA267Cf78";
const privateKey1 =
  "0xc8f7fd47fd17ed28cbe799903f1307f5d13d7095727de2dacbe641e97da76766";

const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function decimals() view returns (uint)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "0x83415Ff574b12CfA6F6EC7aaf30B01CA728553E4"; // Address of my Smart Contract in Ganache
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const decimals = await contract.decimals();
  console.log(`Decimals: ${decimals}`);
  const balanceBefore = await contract.balanceOf(account1);
  console.log(
    `Balance Before (${account1}): ${balanceBefore / 10 ** decimals} Tokens`
  );

  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transfer(account2, balanceBefore);
  await tx.wait();
  console.log(tx);

  const balanceAfter = await contract.balanceOf(account1);
  console.log(
    `Balance After (${account1}): ${balanceAfter / 10 ** decimals} Tokens`
  );

  const balanceAccount2 = await contract.balanceOf(account2);
  console.log(
    `Balance Account2 (${account2}): ${balanceAccount2 / 10 ** decimals} Tokens`
  );
};

main();
