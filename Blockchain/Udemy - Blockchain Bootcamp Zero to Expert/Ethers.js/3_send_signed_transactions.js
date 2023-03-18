const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);

// List current wallet addresses
// provider.listAccounts().then((accounts) => {
//   console.log(accounts);
// });

const account1 = "0x8C480406D2120BE9f55059DA1eAfb9e81701c0b4";
const account2 = "0xe61E6fa16280c265198927F801ee1dABA267Cf78";

const privateKey1 =
  "0xc8f7fd47fd17ed28cbe799903f1307f5d13d7095727de2dacbe641e97da76766";

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
