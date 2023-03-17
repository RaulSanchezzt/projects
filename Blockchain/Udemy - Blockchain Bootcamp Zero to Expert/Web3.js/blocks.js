const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050"
);

// Obtain all the info of the latest block
web3.eth.getBlock("latest").then(console.log)

// Obtain the info of the latest block
web3.eth.getBlock("latest").then((block) => {
  console.log({
    blockHash: block.hash,
    blockNumber: block.number,
    nonce: block.nonce,
    miner: block.miner,
    difficulty: block.difficulty,
    gasLimit: block.gasLimit,
    gasUsed: block.gasUsed,
  });
});

// Obtain the info of the 10 latest blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then((block) => {
      console.log({
        blockHash: block.hash,
        blockNumber: block.number,
        nonce: block.nonce,
        miner: block.miner,
        difficulty: block.difficulty,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
      });
    });
  }
});