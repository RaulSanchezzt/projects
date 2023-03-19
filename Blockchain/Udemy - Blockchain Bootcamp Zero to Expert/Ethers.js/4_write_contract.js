const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);

const account1 = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";
const account2 = "0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0";

const privateKey1 =
  "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d";

const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function decimals() view returns (uint)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "0x5b1869D9A4C187F2EAa108f3062412ecf0526b24"; // Address of my Smart Contract in Ganache
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
