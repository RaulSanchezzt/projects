const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);

// List current wallet addresses
// provider.listAccounts().then((accounts) => {
//   console.log(accounts);
// });

const account1 = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";
const account2 = "0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0";

const privateKey1 =
  "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d";

const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  const senderBalanceBefore = ethers.utils.formatEther(
    await provider.getBalance(account1)
  );
  console.log(`Sender Balance Before: ${senderBalanceBefore} ETH`);

  const receiverBalanceBefore = ethers.utils.formatEther(
    await provider.getBalance(account2)
  );
  console.log(`Receiver Balance Before: ${receiverBalanceBefore} ETH`);

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("111"),
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = ethers.utils.formatEther(
    await provider.getBalance(account1)
  );
  console.log(`Sender Balance After: ${senderBalanceAfter} ETH`);

  const receiverBalanceAfter = ethers.utils.formatEther(
    await provider.getBalance(account2)
  );
  console.log(`Receiver Balance After: ${receiverBalanceAfter} ETH`);
};

main();
