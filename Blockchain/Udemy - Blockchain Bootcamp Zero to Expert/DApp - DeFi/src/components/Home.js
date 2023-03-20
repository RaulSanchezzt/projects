import React, { Component } from "react";
import JamToken from "../abis/JamToken.json";
import StellartToken from "../abis/StellartToken.json";
import TokenFarm from "../abis/TokenFarm.json";
import Web3 from "web3";

import Navigation from "./Navbar";
import MyCarousel from "./Carousel";

class App extends Component {
  async componentDidMount() {
    // 1. Load Web3
    await this.loadWeb3();
    // 2. Load Blockchain Data
    await this.loadBlockchainData();
  }

  // 1. Load Web3
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Accounts: ", accounts);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("You should use Metamask!");
    }
  }

  // 2. Load Blockchain Data
  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // Ganache -> 5777, Rinkeby -> 4, BSC -> 97
    const networkId = await web3.eth.net.getId();
    console.log("networkid:", networkId);
    const networkData = smart_contract.networks[networkId];
    console.log("NetworkData:", networkData);

    if (networkData) {
      const abi = smart_contract.abi;
      console.log("abi", abi);
      const address = networkData.address;
      console.log("address:", address);
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
    } else {
      window.alert("The Smart Contract is not deployed yet!");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      loading: true,
    };
  }

  render() {
    return (
      <div>
        <Navigation account={this.state.account} />
        <MyCarousel />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto"></div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
