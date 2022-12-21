import Web3 from "web3";
import myContract from "../../build/contracts/myContract.json";

// Connect to the Smart Contract

const contract_address = "0x6bF06f4032CF81352ceE954dD88d687a75Cc6756";
const my_address = "0x1f3b7fd5f7c365284e3b6afbc744dafa3638c3df";
const url = "http://127.0.0.1:8545/";

const web3 = new Web3(url);
const contract = new web3.eth.Contract(myContract.abi, contract_address);

// Connect to the HTML Page

const btnSave = document.getElementById("saveBtn");
const btnConsult = document.getElementById("consultBtn");
const selector = document.getElementById("task");
const divSave = document.getElementById("saveInfo");
const divConsult = document.getElementById("consultInfo");

selector.addEventListener("change", async () => {
  let selector_value = document.getElementById("task").value;
  if (selector_value == "1") {
    divSave.style.display = "block";
    divConsult.style.display = "none";
  } else if (selector_value == "2") {
    divSave.style.display = "none";
    divConsult.style.display = "block";
  } else {
    divSave.style.display = "none";
    divConsult.style.display = "none";
  }
});

btnSave.addEventListener("click", async () => {
  let date = parseInt(document.getElementById("date").value);
  let price = parseInt(document.getElementById("price").value);
  let destination = document.getElementById("destination").value;

  await contract.methods
    .save(date, destination, price)
    .send({ from: my_address });
});

btnConsult.addEventListener("click", async () => {
  let date = parseInt(document.getElementById("consultDate").value);
  let result = document.getElementById("result");

  let destination_price = await contract.methods.consult(date).call();

  result.innerHTML =
    "In the year " +
    date +
    " we visit " +
    destination_price[0] +
    " for a price of " +
    destination_price[1] +
    " euros";
});
