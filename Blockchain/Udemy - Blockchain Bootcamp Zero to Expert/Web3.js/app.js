const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050"
);

console.log("SHA3: ", web3.utils.sha3("Hello World"));
console.log("Keccak256: ", web3.utils.keccak256("Hello World"));
console.log(
  "Solidity SHA3 (1 input): ",
  web3.utils.soliditySha3("Hello World")
);
console.log(
  "Solidity SHA3 (2 input): ",
  web3.utils.soliditySha3("Hello", "World")
);
console.log(
  "Solidity SHA3 (Type & Value): ",
  web3.utils.soliditySha3(
    { type: "string", value: "Hello World" },
    { type: "string", value: "01" },
    { type: "uint16", value: 0x3031 }
  )
);

console.log("RandomHex(1): ", web3.utils.randomHex(1));
console.log("RandomHex(32): ", web3.utils.randomHex(32));
console.log("isHex('0xc1912'): ", web3.utils.isHex("0xc1912"));
console.log("isHex('Hello'): ", web3.utils.isHex("Hello"));
console.log(
  "isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'): ",
  web3.utils.isAddress("0xc1912fee45d61c87cc5ea59dae31190fffff232d")
);
console.log(
  "isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'): ",
  web3.utils.isAddress("0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d")
);
console.log("hexToNumber('0xea'): ", web3.utils.hexToNumber("0xea"));
console.log("numberToHex(234): ", web3.utils.numberToHex(234));
console.log(
  "hexToUtf8('0x49206861766520313030e282ac'): ",
  web3.utils.hexToUtf8("0x49206861766520313030e282ac")
);
console.log("utf8ToHex('I have 100€'): ", web3.utils.utf8ToHex("I have 100€"));
