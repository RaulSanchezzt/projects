# Web3.js

In this section we are going to learn about [Web3.js](https://web3js.readthedocs.io/en/v1.7.3/index.html)

## Install

First of all, we need to install it using [npm](https://www.npmjs.com/package/web3)

```js
$ npm install web3
npm WARN deprecated mkdirp-promise@5.0.1: This package is broken and no longer maintained. 'mkdirp' itself supports promises now, please switch to that.
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated multicodec@1.0.4: This module has been superseded by the multiformats module
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm WARN deprecated multibase@0.7.0: This module has been superseded by the multiformats module
npm WARN deprecated multicodec@0.5.7: This module has been superseded by the multiformats module
npm WARN deprecated cids@0.7.5: This module has been superseded by the multiformats module

added 334 packages in 33s

52 packages are looking for funding
  run `npm fund` for details
```

## Web3 Instance

Now we can instance the [Web3 Class](https://web3js.readthedocs.io/en/v1.7.3/web3.html#web3-instance)...

```js
$ node
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> var Web3 = require('web3')
undefined
> Web3
[Function: Web3] {
  version: '1.8.2',
  utils: {
    _fireError: [Function: _fireError],
    _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
    _flattenTypes: [Function: _flattenTypes],
    randomHex: [Function: randomHex],
    BN: [Function: BNwrapped],
    isBN: [Function: isBN],
    isBigNumber: [Function: isBigNumber],
    isHex: [Function: isHex],
    isHexStrict: [Function: isHexStrict],
    sha3: [Function: sha3] { _Hash: [Function: keccak256] },
    sha3Raw: [Function: sha3Raw],
    keccak256: [Function: sha3] { _Hash: [Function: keccak256] },
    soliditySha3: [Function: soliditySha3],
    soliditySha3Raw: [Function: soliditySha3Raw],
    encodePacked: [Function: encodePacked],
    isAddress: [Function: isAddress],
    checkAddressChecksum: [Function: checkAddressChecksum],
    toChecksumAddress: [Function: toChecksumAddress],
    toHex: [Function: toHex],
    toBN: [Function: toBN],
    bytesToHex: [Function: bytesToHex],
    hexToBytes: [Function: hexToBytes],
    hexToNumberString: [Function: hexToNumberString],
    hexToNumber: [Function: hexToNumber],
    toDecimal: [Function: hexToNumber],
    numberToHex: [Function: numberToHex],
    fromDecimal: [Function: numberToHex],
    hexToUtf8: [Function: hexToUtf8],
    hexToString: [Function: hexToUtf8],
    toUtf8: [Function: hexToUtf8],
    stripHexPrefix: [Function: stripHexPrefix],
    utf8ToHex: [Function: utf8ToHex],
    stringToHex: [Function: utf8ToHex],
    fromUtf8: [Function: utf8ToHex],
    hexToAscii: [Function: hexToAscii],
    toAscii: [Function: hexToAscii],
    asciiToHex: [Function: asciiToHex],
    fromAscii: [Function: asciiToHex],
    unitMap: {
      noether: '0',
      wei: '1',
      kwei: '1000',
      Kwei: '1000',
      babbage: '1000',
      femtoether: '1000',
      mwei: '1000000',
      Mwei: '1000000',
      lovelace: '1000000',
      picoether: '1000000',
      gwei: '1000000000',
      Gwei: '1000000000',
      shannon: '1000000000',
      nanoether: '1000000000',
      nano: '1000000000',
      szabo: '1000000000000',
      microether: '1000000000000',
      micro: '1000000000000',
      finney: '1000000000000000',
      milliether: '1000000000000000',
      milli: '1000000000000000',
      ether: '1000000000000000000',
      kether: '1000000000000000000000',
      grand: '1000000000000000000000',
      mether: '1000000000000000000000000',
      gether: '1000000000000000000000000000',
      tether: '1000000000000000000000000000000'
    },
    toWei: [Function: toWei],
    fromWei: [Function: fromWei],
    padLeft: [Function: leftPad],
    leftPad: [Function: leftPad],
    padRight: [Function: rightPad],
    rightPad: [Function: rightPad],
    toTwosComplement: [Function: toTwosComplement],
    isBloom: [Function: isBloom],
    isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
    isContractAddressInBloom: [Function: isContractAddressInBloom],
    isTopic: [Function: isTopic],
    isTopicInBloom: [Function: isTopicInBloom],
    isInBloom: [Function: isInBloom],
    compareBlockNumbers: [Function: compareBlockNumbers],
    toNumber: [Function: toNumber]
  },
  modules: {
    Eth: [Function: Eth] { givenProvider: null, providers: [Object] },
    Net: [Function: Net] { givenProvider: null, providers: [Object] },
    Personal: [Function: Personal] { givenProvider: null, providers: [Object] },
    Shh: [Function: Shh] { givenProvider: null, providers: [Object] },
    Bzz: [Function: Bzz] { givenProvider: null }
  },
  givenProvider: null,
  providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
  }
}
```

## Infura

Then, create a new project in [Infura](https://www.infura.io/) and use the `Ethereum` **Endpoint**

```js
> var url = "https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050"
undefined
> url
'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050'
```

After that, we can connect to our new remote **Ethereum node**

```js
> var web3 = new Web3(url)
undefined
> web3
Web3 {
  currentProvider: [Getter/Setter],
  _requestManager: RequestManager {
    provider: HttpProvider {
      withCredentials: undefined,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: false,
      host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
      httpsAgent: [Agent]
    },
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    subscriptions: Map(0) {}
  },
  givenProvider: null,
  providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
  },
  _provider: HttpProvider {
    withCredentials: undefined,
    timeout: 0,
    headers: undefined,
    agent: undefined,
    connected: false,
    host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
    httpsAgent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 0,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    }
  },
  setProvider: [Function (anonymous)],
  setRequestManager: [Function (anonymous)],
  BatchRequest: [Function: bound Batch],
  extend: [Function: ex] {
    formatters: {
      inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
      inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
      inputCallFormatter: [Function: inputCallFormatter],
      inputTransactionFormatter: [Function: inputTransactionFormatter],
      inputAddressFormatter: [Function: inputAddressFormatter],
      inputPostFormatter: [Function: inputPostFormatter],
      inputLogFormatter: [Function: inputLogFormatter],
      inputSignFormatter: [Function: inputSignFormatter],
      inputStorageKeysFormatter: [Function: inputStorageKeysFormatter],
      outputProofFormatter: [Function: outputProofFormatter],
      outputBigNumberFormatter: [Function: outputBigNumberFormatter],
      outputTransactionFormatter: [Function: outputTransactionFormatter],
      outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
      outputBlockFormatter: [Function: outputBlockFormatter],
      outputLogFormatter: [Function: outputLogFormatter],
      outputPostFormatter: [Function: outputPostFormatter],
      outputSyncingFormatter: [Function: outputSyncingFormatter]
    },
    utils: {
      _fireError: [Function: _fireError],
      _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
      _flattenTypes: [Function: _flattenTypes],
      randomHex: [Function: randomHex],
      BN: [Function: BNwrapped],
      isBN: [Function: isBN],
      isBigNumber: [Function: isBigNumber],
      isHex: [Function: isHex],
      isHexStrict: [Function: isHexStrict],
      sha3: [Function],
      sha3Raw: [Function: sha3Raw],
      keccak256: [Function],
      soliditySha3: [Function: soliditySha3],
      soliditySha3Raw: [Function: soliditySha3Raw],
      encodePacked: [Function: encodePacked],
      isAddress: [Function: isAddress],
      checkAddressChecksum: [Function: checkAddressChecksum],
      toChecksumAddress: [Function: toChecksumAddress],
      toHex: [Function: toHex],
      toBN: [Function: toBN],
      bytesToHex: [Function: bytesToHex],
      hexToBytes: [Function: hexToBytes],
      hexToNumberString: [Function: hexToNumberString],
      hexToNumber: [Function: hexToNumber],
      toDecimal: [Function: hexToNumber],
      numberToHex: [Function: numberToHex],
      fromDecimal: [Function: numberToHex],
      hexToUtf8: [Function: hexToUtf8],
      hexToString: [Function: hexToUtf8],
      toUtf8: [Function: hexToUtf8],
      stripHexPrefix: [Function: stripHexPrefix],
      utf8ToHex: [Function: utf8ToHex],
      stringToHex: [Function: utf8ToHex],
      fromUtf8: [Function: utf8ToHex],
      hexToAscii: [Function: hexToAscii],
      toAscii: [Function: hexToAscii],
      asciiToHex: [Function: asciiToHex],
      fromAscii: [Function: asciiToHex],
      unitMap: [Object],
      toWei: [Function: toWei],
      fromWei: [Function: fromWei],
      padLeft: [Function: leftPad],
      leftPad: [Function: leftPad],
      padRight: [Function: rightPad],
      rightPad: [Function: rightPad],
      toTwosComplement: [Function: toTwosComplement],
      isBloom: [Function: isBloom],
      isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
      isContractAddressInBloom: [Function: isContractAddressInBloom],
      isTopic: [Function: isTopic],
      isTopicInBloom: [Function: isTopicInBloom],
      isInBloom: [Function: isInBloom],
      compareBlockNumbers: [Function: compareBlockNumbers],
      toNumber: [Function: toNumber]
    },
    Method: [Function: Method]
  },
  version: '1.8.2',
  utils: {
    _fireError: [Function: _fireError],
    _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
    _flattenTypes: [Function: _flattenTypes],
    randomHex: [Function: randomHex],
    BN: [Function: BNwrapped],
    isBN: [Function: isBN],
    isBigNumber: [Function: isBigNumber],
    isHex: [Function: isHex],
    isHexStrict: [Function: isHexStrict],
    sha3: [Function: sha3] { _Hash: [Function: keccak256] },
    sha3Raw: [Function: sha3Raw],
    keccak256: [Function: sha3] { _Hash: [Function: keccak256] },
    soliditySha3: [Function: soliditySha3],
    soliditySha3Raw: [Function: soliditySha3Raw],
    encodePacked: [Function: encodePacked],
    isAddress: [Function: isAddress],
    checkAddressChecksum: [Function: checkAddressChecksum],
    toChecksumAddress: [Function: toChecksumAddress],
    toHex: [Function: toHex],
    toBN: [Function: toBN],
    bytesToHex: [Function: bytesToHex],
    hexToBytes: [Function: hexToBytes],
    hexToNumberString: [Function: hexToNumberString],
    hexToNumber: [Function: hexToNumber],
    toDecimal: [Function: hexToNumber],
    numberToHex: [Function: numberToHex],
    fromDecimal: [Function: numberToHex],
    hexToUtf8: [Function: hexToUtf8],
    hexToString: [Function: hexToUtf8],
    toUtf8: [Function: hexToUtf8],
    stripHexPrefix: [Function: stripHexPrefix],
    utf8ToHex: [Function: utf8ToHex],
    stringToHex: [Function: utf8ToHex],
    fromUtf8: [Function: utf8ToHex],
    hexToAscii: [Function: hexToAscii],
    toAscii: [Function: hexToAscii],
    asciiToHex: [Function: asciiToHex],
    fromAscii: [Function: asciiToHex],
    unitMap: {
      noether: '0',
      wei: '1',
      kwei: '1000',
      Kwei: '1000',
      babbage: '1000',
      femtoether: '1000',
      mwei: '1000000',
      Mwei: '1000000',
      lovelace: '1000000',
      picoether: '1000000',
      gwei: '1000000000',
      Gwei: '1000000000',
      shannon: '1000000000',
      nanoether: '1000000000',
      nano: '1000000000',
      szabo: '1000000000000',
      microether: '1000000000000',
      micro: '1000000000000',
      finney: '1000000000000000',
      milliether: '1000000000000000',
      milli: '1000000000000000',
      ether: '1000000000000000000',
      kether: '1000000000000000000000',
      grand: '1000000000000000000000',
      mether: '1000000000000000000000000',
      gether: '1000000000000000000000000000',
      tether: '1000000000000000000000000000000'
    },
    toWei: [Function: toWei],
    fromWei: [Function: fromWei],
    padLeft: [Function: leftPad],
    leftPad: [Function: leftPad],
    padRight: [Function: rightPad],
    rightPad: [Function: rightPad],
    toTwosComplement: [Function: toTwosComplement],
    isBloom: [Function: isBloom],
    isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
    isContractAddressInBloom: [Function: isContractAddressInBloom],
    isTopic: [Function: isTopic],
    isTopicInBloom: [Function: isTopicInBloom],
    isInBloom: [Function: isInBloom],
    compareBlockNumbers: [Function: compareBlockNumbers],
    toNumber: [Function: toNumber]
  },
  eth: <ref *1> Eth {
    currentProvider: [Getter/Setter],
    _requestManager: RequestManager {
      provider: [HttpProvider],
      providers: [Object],
      subscriptions: Map(0) {}
    },
    givenProvider: null,
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    _provider: HttpProvider {
      withCredentials: undefined,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: false,
      host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
      httpsAgent: [Agent]
    },
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function: ex] {
      formatters: [Object],
      utils: [Object],
      Method: [Function: Method]
    },
    handleRevert: [Getter/Setter],
    defaultCommon: [Getter/Setter],
    defaultHardfork: [Getter/Setter],
    defaultChain: [Getter/Setter],
    transactionPollingTimeout: [Getter/Setter],
    transactionPollingInterval: [Getter/Setter],
    transactionConfirmationBlocks: [Getter/Setter],
    transactionBlockTimeout: [Getter/Setter],
    blockHeaderTimeout: [Getter/Setter],
    defaultAccount: [Getter/Setter],
    defaultBlock: [Getter/Setter],
    maxListenersWarningThreshold: [Getter/Setter],
    clearSubscriptions: [Function: bound ],
    removeSubscriptionById: [Function: bound ],
    net: Net {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: [HttpProvider],
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      BatchRequest: [Function: bound Batch],
      extend: [Function],
      getId: [Function],
      isListening: [Function],
      getPeerCount: [Function],
      getNetworkType: [Function: bound getNetworkType]
    },
    accounts: Accounts {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: [HttpProvider],
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      _ethereumCall: [Object],
      wallet: [Wallet]
    },
    personal: Personal {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: [HttpProvider],
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      BatchRequest: [Function: bound Batch],
      extend: [Function],
      net: [Net],
      defaultAccount: [Getter/Setter],
      defaultBlock: [Getter/Setter],
      getAccounts: [Function],
      newAccount: [Function],
      unlockAccount: [Function],
      lockAccount: [Function],
      importRawKey: [Function],
      sendTransaction: [Function],
      signTransaction: [Function],
      sign: [Function],
      ecRecover: [Function]
    },
    Contract: [Function: Contract] {
      setProvider: [Function (anonymous)],
      defaultAccount: null,
      defaultBlock: 'latest',
      transactionBlockTimeout: 50,
      transactionConfirmationBlocks: 24,
      transactionPollingTimeout: 750,
      transactionPollingInterval: 1000,
      blockHeaderTimeout: 10,
      handleRevert: false,
      _requestManager: [RequestManager],
      _ethAccounts: [Accounts],
      currentProvider: [HttpProvider]
    },
    Iban: [class Iban],
    abi: ABICoder {},
    ens: ENS {
      eth: [Circular *1],
      _detectedAddress: null,
      _lastSyncCheck: null,
      registry: [Getter],
      resolverMethodHandler: [Getter],
      registryAddress: [Getter/Setter]
    },
    getNodeInfo: [Function: send] { method: [Method], request: [Function: bound ] },
    getProtocolVersion: [Function: send] { method: [Method], request: [Function: bound ] },
    getCoinbase: [Function: send] { method: [Method], request: [Function: bound ] },
    isMining: [Function: send] { method: [Method], request: [Function: bound ] },
    getHashrate: [Function: send] { method: [Method], request: [Function: bound ] },
    isSyncing: [Function: send] { method: [Method], request: [Function: bound ] },
    getGasPrice: [Function: send] { method: [Method], request: [Function: bound ] },
    getFeeHistory: [Function: send] { method: [Method], request: [Function: bound ] },
    getAccounts: [Function: send] { method: [Method], request: [Function: bound ] },
    getBlockNumber: [Function: send] { method: [Method], request: [Function: bound ] },
    getBalance: [Function: send] { method: [Method], request: [Function: bound ] },
    getStorageAt: [Function: send] { method: [Method], request: [Function: bound ] },
    getCode: [Function: send] { method: [Method], request: [Function: bound ] },
    getBlock: [Function: send] { method: [Method], request: [Function: bound ] },
    getUncle: [Function: send] { method: [Method], request: [Function: bound ] },
    getBlockTransactionCount: [Function: send] { method: [Method], request: [Function: bound ] },
    getBlockUncleCount: [Function: send] { method: [Method], request: [Function: bound ] },
    getTransaction: [Function: send] { method: [Method], request: [Function: bound ] },
    getTransactionFromBlock: [Function: send] { method: [Method], request: [Function: bound ] },
    getTransactionReceipt: [Function: send] { method: [Method], request: [Function: bound ] },
    getTransactionCount: [Function: send] { method: [Method], request: [Function: bound ] },
    sendSignedTransaction: [Function: send] { method: [Method], request: [Function: bound ] },
    signTransaction: [Function: send] { method: [Method], request: [Function: bound ] },
    sendTransaction: [Function: send] { method: [Method], request: [Function: bound ] },
    sign: [Function: send] { method: [Method], request: [Function: bound ] },
    call: [Function: send] { method: [Method], request: [Function: bound ] },
    estimateGas: [Function: send] { method: [Method], request: [Function: bound ] },
    submitWork: [Function: send] { method: [Method], request: [Function: bound ] },
    getWork: [Function: send] { method: [Method], request: [Function: bound ] },
    getPastLogs: [Function: send] { method: [Method], request: [Function: bound ] },
    getChainId: [Function: send] { method: [Method], request: [Function: bound ] },
    requestAccounts: [Function: send] { method: [Method], request: [Function: bound ] },
    getProof: [Function: send] { method: [Method], request: [Function: bound ] },
    getPendingTransactions: [Function: send] { method: [Method], request: [Function: bound ] },
    createAccessList: [Function: send] { method: [Method], request: [Function: bound ] },
    subscribe: [Function (anonymous)]
  },
  shh: Shh {
    currentProvider: [Getter/Setter],
    _requestManager: RequestManager {
      provider: [HttpProvider],
      providers: [Object],
      subscriptions: Map(0) {}
    },
    givenProvider: null,
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    _provider: HttpProvider {
      withCredentials: undefined,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: false,
      host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
      httpsAgent: [Agent]
    },
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function: ex] {
      formatters: [Object],
      utils: [Object],
      Method: [Function: Method]
    },
    net: Net {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: [HttpProvider],
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      BatchRequest: [Function: bound Batch],
      extend: [Function],
      getId: [Function],
      isListening: [Function],
      getPeerCount: [Function]
    },
    subscribe: [Function (anonymous)],
    getVersion: [Function: send] { method: [Method], request: [Function: bound ] },
    getInfo: [Function: send] { method: [Method], request: [Function: bound ] },
    setMaxMessageSize: [Function: send] { method: [Method], request: [Function: bound ] },
    setMinPoW: [Function: send] { method: [Method], request: [Function: bound ] },
    markTrustedPeer: [Function: send] { method: [Method], request: [Function: bound ] },
    newKeyPair: [Function: send] { method: [Method], request: [Function: bound ] },
    addPrivateKey: [Function: send] { method: [Method], request: [Function: bound ] },
    deleteKeyPair: [Function: send] { method: [Method], request: [Function: bound ] },
    hasKeyPair: [Function: send] { method: [Method], request: [Function: bound ] },
    getPublicKey: [Function: send] { method: [Method], request: [Function: bound ] },
    getPrivateKey: [Function: send] { method: [Method], request: [Function: bound ] },
    newSymKey: [Function: send] { method: [Method], request: [Function: bound ] },
    addSymKey: [Function: send] { method: [Method], request: [Function: bound ] },
    generateSymKeyFromPassword: [Function: send] { method: [Method], request: [Function: bound ] },
    hasSymKey: [Function: send] { method: [Method], request: [Function: bound ] },
    getSymKey: [Function: send] { method: [Method], request: [Function: bound ] },
    deleteSymKey: [Function: send] { method: [Method], request: [Function: bound ] },
    newMessageFilter: [Function: send] { method: [Method], request: [Function: bound ] },
    getFilterMessages: [Function: send] { method: [Method], request: [Function: bound ] },
    deleteMessageFilter: [Function: send] { method: [Method], request: [Function: bound ] },
    post: [Function: send] { method: [Method], request: [Function: bound ] },
    unsubscribe: [Function: send] { method: [Method], request: [Function: bound ] }
  },
  bzz: Bzz {
    givenProvider: null,
    currentProvider: null,
    isAvailable: [Function (anonymous)],
    upload: [Function (anonymous)],
    download: [Function (anonymous)]
  }
}
```

### getBalance

Let's see the current balance of a [Smart Contract](https://etherscan.io/address/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5) deployed on the **Ethereum Blockchain**.

```js
> web3.eth.getBalance("0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5", (err, bal) => {balance = bal})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1027,
  [Symbol(trigger_async_id_symbol)]: 5
}
```

Convert the balance to `ethers` and `gwei`...

```js
> web3.utils.fromWei(balance, 'ether')
'290570.544935663587784219'
> web3.utils.fromWei(balance, 'gwei')
'290570544935663.587784219'
```

## Ganache

Now let's use **Ganache**...

```js
$ node
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> var Web3 = require('web3')
undefined
> var web3 = new Web3("http://localhost:8545")
undefined

> Web3
[Function: Web3] {
  version: '1.8.2',
  utils: {
    _fireError: [Function: _fireError],
    _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
    _flattenTypes: [Function: _flattenTypes],
    randomHex: [Function: randomHex],
    BN: [Function: BNwrapped],
    isBN: [Function: isBN],
    isBigNumber: [Function: isBigNumber],
    isHex: [Function: isHex],
    isHexStrict: [Function: isHexStrict],
    sha3: [Function: sha3] { _Hash: [Function: keccak256] },
    sha3Raw: [Function: sha3Raw],
    keccak256: [Function: sha3] { _Hash: [Function: keccak256] },
    soliditySha3: [Function: soliditySha3],
    soliditySha3Raw: [Function: soliditySha3Raw],
    encodePacked: [Function: encodePacked],
    isAddress: [Function: isAddress],
    checkAddressChecksum: [Function: checkAddressChecksum],
    toChecksumAddress: [Function: toChecksumAddress],
    toHex: [Function: toHex],
    toBN: [Function: toBN],
    bytesToHex: [Function: bytesToHex],
    hexToBytes: [Function: hexToBytes],
    hexToNumberString: [Function: hexToNumberString],
    hexToNumber: [Function: hexToNumber],
    toDecimal: [Function: hexToNumber],
    numberToHex: [Function: numberToHex],
    fromDecimal: [Function: numberToHex],
    hexToUtf8: [Function: hexToUtf8],
    hexToString: [Function: hexToUtf8],
    toUtf8: [Function: hexToUtf8],
    stripHexPrefix: [Function: stripHexPrefix],
    utf8ToHex: [Function: utf8ToHex],
    stringToHex: [Function: utf8ToHex],
    fromUtf8: [Function: utf8ToHex],
    hexToAscii: [Function: hexToAscii],
    toAscii: [Function: hexToAscii],
    asciiToHex: [Function: asciiToHex],
    fromAscii: [Function: asciiToHex],
    unitMap: {
      noether: '0',
      wei: '1',
      kwei: '1000',
      Kwei: '1000',
      babbage: '1000',
      femtoether: '1000',
      mwei: '1000000',
      Mwei: '1000000',
      lovelace: '1000000',
      picoether: '1000000',
      gwei: '1000000000',
      Gwei: '1000000000',
      shannon: '1000000000',
      nanoether: '1000000000',
      nano: '1000000000',
      szabo: '1000000000000',
      microether: '1000000000000',
      micro: '1000000000000',
      finney: '1000000000000000',
      milliether: '1000000000000000',
      milli: '1000000000000000',
      ether: '1000000000000000000',
      kether: '1000000000000000000000',
      grand: '1000000000000000000000',
      mether: '1000000000000000000000000',
      gether: '1000000000000000000000000000',
      tether: '1000000000000000000000000000000'
    },
    toWei: [Function: toWei],
    fromWei: [Function: fromWei],
    padLeft: [Function: leftPad],
    leftPad: [Function: leftPad],
    padRight: [Function: rightPad],
    rightPad: [Function: rightPad],
    toTwosComplement: [Function: toTwosComplement],
    isBloom: [Function: isBloom],
    isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
    isContractAddressInBloom: [Function: isContractAddressInBloom],
    isTopic: [Function: isTopic],
    isTopicInBloom: [Function: isTopicInBloom],
    isInBloom: [Function: isInBloom],
    compareBlockNumbers: [Function: compareBlockNumbers],
    toNumber: [Function: toNumber]
  },
  modules: {
    Eth: [Function: Eth] { givenProvider: null, providers: [Object] },
    Net: [Function: Net] { givenProvider: null, providers: [Object] },
    Personal: [Function: Personal] { givenProvider: null, providers: [Object] },
    Shh: [Function: Shh] { givenProvider: null, providers: [Object] },
    Bzz: [Function: Bzz] { givenProvider: null }
  },
  givenProvider: null,
  providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
  }
}
```

### getAccounts()

Let's see the accounts that are created...

```js
> web3.eth.getAccounts().then(console.log);
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 591,
  [Symbol(trigger_async_id_symbol)]: 559
}
> (node:1016) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[
  '0x6F3De9Ed7BF40A681ef41aC1E4B9F6cfdA043406',
  '0x3c20CF09ae700feCa6a68884DCd975D23D8ef183',
  '0x2Daf104fC31272F6750B7844Fde5e3079c8aCcBE',
  '0x0a39caaC2e8731ad7559f154a60CBd0b21a17d48',
  '0xEc9e6Ff2cb47559fce4532e007E3E16BCceD217b',
  '0xB97eB2ca1060C4648ACA837a88471F03cE053171',
  '0x9Bc1B793Df693Dd0BB30Fdc50154B0318901d442',
  '0xb292f75F0d6D9958716c563951FFA0b71C4e1927',
  '0x214d602858Ec09Ec7e613EA3020105056E2aDb57',
  '0x8049D87A44cFD1fD0c3204a5475B386141E17585'
]
```

### getBalance()

Now we can see the current balance of the first account...

```js
> const account1 = '0x6F3De9Ed7BF40A681ef41aC1E4B9F6cfdA043406';
undefined
const account2 = '0x3c20CF09ae700feCa6a68884DCd975D23D8ef183';
undefined
> web3.eth.getBalance(account1, (err, bal) => {balance = bal})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1217,
  [Symbol(trigger_async_id_symbol)]: 5
}
> balance
'1000000000000000000000'
> web3.utils.fromWei(balance, "ether")
'1000'
```

### sendTransaction()

Then, we are going to send `ethers` from the *account1* to the *account2*...

```js
> web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('111', 'ether')})
Promise {
  <pending>,
  _events: Events <[Object: null prototype] {}> {},
  emit: [Function: emit],
  on: [Function: on],
  once: [Function: once],
  off: [Function: removeListener],
  listeners: [Function: listeners],
  addListener: [Function: on],
  removeListener: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  [Symbol(async_id_symbol)]: 2594,
  [Symbol(trigger_async_id_symbol)]: 5
}
```

Check the balance of the *account1*...

```js
> web3.eth.getBalance(account1, (err, bal) => {balance = bal})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 3324,
  [Symbol(trigger_async_id_symbol)]: 5
}
> balance
'888999929125000000000'
```

And the balance of the *account2*...

```js
> web3.eth.getBalance(account2, (err, bal) => {balance = bal})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 3646,
  [Symbol(trigger_async_id_symbol)]: 5
}
> balance
'1111000000000000000000'
```

## Interact with a Smart Contract

Let's interact with a this [Smart Contract](https://etherscan.io/address/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07#code) of **Ethereum Blockchain**...

```js
$ node
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> var Web3 = require('web3')
undefined
> var url = "https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050"
undefined
> var web3 = new Web3(url)
undefined
> var abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
undefined
> var addressContract = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
undefined
```

### web3.eth.Contract

Create a new [web3.eth.Contract](https://web3js.readthedocs.io/en/v1.7.3/web3-eth-contract.html#web3-eth-contract) object...

```js
> var contract = new web3.eth.Contract(abi, addressContract)
undefined
> contract
Contract {
  setProvider: [Function (anonymous)],
  currentProvider: [Getter/Setter],
  _requestManager: RequestManager {
    provider: HttpProvider {
      withCredentials: undefined,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: false,
      host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
      httpsAgent: [Agent]
    },
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    subscriptions: Map(0) {}
  },
  givenProvider: null,
  providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
  },
  _provider: HttpProvider {
    withCredentials: undefined,
    timeout: 0,
    headers: undefined,
    agent: undefined,
    connected: false,
    host: 'https://mainnet.infura.io/v3/ae6cab87d0a245d4a753a3c541291050',
    httpsAgent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 0,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    }
  },
  setRequestManager: [Function (anonymous)],
  BatchRequest: [Function: bound Batch],
  extend: [Function: ex] {
    formatters: {
      inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
      inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
      inputCallFormatter: [Function: inputCallFormatter],
      inputTransactionFormatter: [Function: inputTransactionFormatter],
      inputAddressFormatter: [Function: inputAddressFormatter],
      inputPostFormatter: [Function: inputPostFormatter],
      inputLogFormatter: [Function: inputLogFormatter],
      inputSignFormatter: [Function: inputSignFormatter],
      inputStorageKeysFormatter: [Function: inputStorageKeysFormatter],
      outputProofFormatter: [Function: outputProofFormatter],
      outputBigNumberFormatter: [Function: outputBigNumberFormatter],
      outputTransactionFormatter: [Function: outputTransactionFormatter],
      outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
      outputBlockFormatter: [Function: outputBlockFormatter],
      outputLogFormatter: [Function: outputLogFormatter],
      outputPostFormatter: [Function: outputPostFormatter],
      outputSyncingFormatter: [Function: outputSyncingFormatter]
    },
    utils: {
      _fireError: [Function: _fireError],
      _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
      _flattenTypes: [Function: _flattenTypes],
      randomHex: [Function: randomHex],
      BN: [Function: BNwrapped],
      isBN: [Function: isBN],
      isBigNumber: [Function: isBigNumber],
      isHex: [Function: isHex],
      isHexStrict: [Function: isHexStrict],
      sha3: [Function],
      sha3Raw: [Function: sha3Raw],
      keccak256: [Function],
      soliditySha3: [Function: soliditySha3],
      soliditySha3Raw: [Function: soliditySha3Raw],
      encodePacked: [Function: encodePacked],
      isAddress: [Function: isAddress],
      checkAddressChecksum: [Function: checkAddressChecksum],
      toChecksumAddress: [Function: toChecksumAddress],
      toHex: [Function: toHex],
      toBN: [Function: toBN],
      bytesToHex: [Function: bytesToHex],
      hexToBytes: [Function: hexToBytes],
      hexToNumberString: [Function: hexToNumberString],
      hexToNumber: [Function: hexToNumber],
      toDecimal: [Function: hexToNumber],
      numberToHex: [Function: numberToHex],
      fromDecimal: [Function: numberToHex],
      hexToUtf8: [Function: hexToUtf8],
      hexToString: [Function: hexToUtf8],
      toUtf8: [Function: hexToUtf8],
      stripHexPrefix: [Function: stripHexPrefix],
      utf8ToHex: [Function: utf8ToHex],
      stringToHex: [Function: utf8ToHex],
      fromUtf8: [Function: utf8ToHex],
      hexToAscii: [Function: hexToAscii],
      toAscii: [Function: hexToAscii],
      asciiToHex: [Function: asciiToHex],
      fromAscii: [Function: asciiToHex],
      unitMap: [Object],
      toWei: [Function: toWei],
      fromWei: [Function: fromWei],
      padLeft: [Function: leftPad],
      leftPad: [Function: leftPad],
      padRight: [Function: rightPad],
      rightPad: [Function: rightPad],
      toTwosComplement: [Function: toTwosComplement],
      isBloom: [Function: isBloom],
      isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
      isContractAddressInBloom: [Function: isContractAddressInBloom],
      isTopic: [Function: isTopic],
      isTopicInBloom: [Function: isTopicInBloom],
      isInBloom: [Function: isInBloom],
      compareBlockNumbers: [Function: compareBlockNumbers],
      toNumber: [Function: toNumber]
    },
    Method: [Function: Method]
  },
  clearSubscriptions: [Function (anonymous)],
  options: { address: [Getter/Setter], jsonInterface: [Getter/Setter] },
  handleRevert: [Getter/Setter],
  defaultCommon: [Getter/Setter],
  defaultHardfork: [Getter/Setter],
  defaultChain: [Getter/Setter],
  transactionPollingTimeout: [Getter/Setter],
  transactionPollingInterval: [Getter/Setter],
  transactionConfirmationBlocks: [Getter/Setter],
  transactionBlockTimeout: [Getter/Setter],
  blockHeaderTimeout: [Getter/Setter],
  defaultAccount: [Getter/Setter],
  defaultBlock: [Getter/Setter],
  methods: {
    mintingFinished: [Function: bound _createTxObject],
    '0x05d2035b': [Function: bound _createTxObject],
    'mintingFinished()': [Function: bound _createTxObject],
    name: [Function: bound _createTxObject],
    '0x06fdde03': [Function: bound _createTxObject],
    'name()': [Function: bound _createTxObject],
    approve: [Function: bound _createTxObject],
    '0x095ea7b3': [Function: bound _createTxObject],
    'approve(address,uint256)': [Function: bound _createTxObject],
    totalSupply: [Function: bound _createTxObject],
    '0x18160ddd': [Function: bound _createTxObject],
    'totalSupply()': [Function: bound _createTxObject],
    transferFrom: [Function: bound _createTxObject],
    '0x23b872dd': [Function: bound _createTxObject],
    'transferFrom(address,address,uint256)': [Function: bound _createTxObject],
    decimals: [Function: bound _createTxObject],
    '0x313ce567': [Function: bound _createTxObject],
    'decimals()': [Function: bound _createTxObject],
    unpause: [Function: bound _createTxObject],
    '0x3f4ba83a': [Function: bound _createTxObject],
    'unpause()': [Function: bound _createTxObject],
    mint: [Function: bound _createTxObject],
    '0x40c10f19': [Function: bound _createTxObject],
    'mint(address,uint256)': [Function: bound _createTxObject],
    paused: [Function: bound _createTxObject],
    '0x5c975abb': [Function: bound _createTxObject],
    'paused()': [Function: bound _createTxObject],
    balanceOf: [Function: bound _createTxObject],
    '0x70a08231': [Function: bound _createTxObject],
    'balanceOf(address)': [Function: bound _createTxObject],
    finishMinting: [Function: bound _createTxObject],
    '0x7d64bcb4': [Function: bound _createTxObject],
    'finishMinting()': [Function: bound _createTxObject],
    pause: [Function: bound _createTxObject],
    '0x8456cb59': [Function: bound _createTxObject],
    'pause()': [Function: bound _createTxObject],
    owner: [Function: bound _createTxObject],
    '0x8da5cb5b': [Function: bound _createTxObject],
    'owner()': [Function: bound _createTxObject],
    symbol: [Function: bound _createTxObject],
    '0x95d89b41': [Function: bound _createTxObject],
    'symbol()': [Function: bound _createTxObject],
    transfer: [Function: bound _createTxObject],
    '0xa9059cbb': [Function: bound _createTxObject],
    'transfer(address,uint256)': [Function: bound _createTxObject],
    mintTimelocked: [Function: bound _createTxObject],
    '0xc14a3b8c': [Function: bound _createTxObject],
    'mintTimelocked(address,uint256,uint256)': [Function: bound _createTxObject],
    allowance: [Function: bound _createTxObject],
    '0xdd62ed3e': [Function: bound _createTxObject],
    'allowance(address,address)': [Function: bound _createTxObject],
    transferOwnership: [Function: bound _createTxObject],
    '0xf2fde38b': [Function: bound _createTxObject],
    'transferOwnership(address)': [Function: bound _createTxObject]
  },
  events: {
    Mint: [Function: bound ],
    '0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885': [Function: bound ],
    'Mint(address,uint256)': [Function: bound ],
    MintFinished: [Function: bound ],
    '0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08': [Function: bound ],
    'MintFinished()': [Function: bound ],
    Pause: [Function: bound ],
    '0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625': [Function: bound ],
    'Pause()': [Function: bound ],
    Unpause: [Function: bound ],
    '0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33': [Function: bound ],
    'Unpause()': [Function: bound ],
    Approval: [Function: bound ],
    '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925': [Function: bound ],
    'Approval(address,address,uint256)': [Function: bound ],
    Transfer: [Function: bound ],
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef': [Function: bound ],
    'Transfer(address,address,uint256)': [Function: bound ],
    allEvents: [Function: bound ]
  },
  _address: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
  _jsonInterface: [
    {
      constant: true,
      inputs: [],
      name: 'mintingFinished',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x05d2035b'
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x06fdde03'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'approve',
      outputs: [],
      payable: false,
      type: 'function',
      signature: '0x095ea7b3'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x18160ddd'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'transferFrom',
      outputs: [],
      payable: false,
      type: 'function',
      signature: '0x23b872dd'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x313ce567'
    },
    {
      constant: false,
      inputs: [],
      name: 'unpause',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x3f4ba83a'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'mint',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x40c10f19'
    },
    {
      constant: true,
      inputs: [],
      name: 'paused',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x5c975abb'
    },
    {
      constant: true,
      inputs: [Array],
      name: 'balanceOf',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x70a08231'
    },
    {
      constant: false,
      inputs: [],
      name: 'finishMinting',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x7d64bcb4'
    },
    {
      constant: false,
      inputs: [],
      name: 'pause',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x8456cb59'
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x8da5cb5b'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0x95d89b41'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'transfer',
      outputs: [],
      payable: false,
      type: 'function',
      signature: '0xa9059cbb'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'mintTimelocked',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0xc14a3b8c'
    },
    {
      constant: true,
      inputs: [Array],
      name: 'allowance',
      outputs: [Array],
      payable: false,
      type: 'function',
      signature: '0xdd62ed3e'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      type: 'function',
      signature: '0xf2fde38b'
    },
    {
      anonymous: false,
      inputs: [Array],
      name: 'Mint',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885'
    },
    {
      anonymous: false,
      inputs: [],
      name: 'MintFinished',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08'
    },
    {
      anonymous: false,
      inputs: [],
      name: 'Pause',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625'
    },
    {
      anonymous: false,
      inputs: [],
      name: 'Unpause',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33'
    },
    {
      anonymous: false,
      inputs: [Array],
      name: 'Approval',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    },
    {
      anonymous: false,
      inputs: [Array],
      name: 'Transfer',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    }
  ]
}
```

### methods

Now we can see the methods of this **Smart Contract**

```js
> contract.methods
{
  mintingFinished: [Function: bound _createTxObject],
  '0x05d2035b': [Function: bound _createTxObject],
  'mintingFinished()': [Function: bound _createTxObject],
  name: [Function: bound _createTxObject],
  '0x06fdde03': [Function: bound _createTxObject],
  'name()': [Function: bound _createTxObject],
  approve: [Function: bound _createTxObject],
  '0x095ea7b3': [Function: bound _createTxObject],
  'approve(address,uint256)': [Function: bound _createTxObject],
  totalSupply: [Function: bound _createTxObject],
  '0x18160ddd': [Function: bound _createTxObject],
  'totalSupply()': [Function: bound _createTxObject],
  transferFrom: [Function: bound _createTxObject],
  '0x23b872dd': [Function: bound _createTxObject],
  'transferFrom(address,address,uint256)': [Function: bound _createTxObject],
  decimals: [Function: bound _createTxObject],
  '0x313ce567': [Function: bound _createTxObject],
  'decimals()': [Function: bound _createTxObject],
  unpause: [Function: bound _createTxObject],
  '0x3f4ba83a': [Function: bound _createTxObject],
  'unpause()': [Function: bound _createTxObject],
  mint: [Function: bound _createTxObject],
  '0x40c10f19': [Function: bound _createTxObject],
  'mint(address,uint256)': [Function: bound _createTxObject],
  paused: [Function: bound _createTxObject],
  '0x5c975abb': [Function: bound _createTxObject],
  'paused()': [Function: bound _createTxObject],
  balanceOf: [Function: bound _createTxObject],
  '0x70a08231': [Function: bound _createTxObject],
  'balanceOf(address)': [Function: bound _createTxObject],
  finishMinting: [Function: bound _createTxObject],
  '0x7d64bcb4': [Function: bound _createTxObject],
  'finishMinting()': [Function: bound _createTxObject],
  pause: [Function: bound _createTxObject],
  '0x8456cb59': [Function: bound _createTxObject],
  'pause()': [Function: bound _createTxObject],
  owner: [Function: bound _createTxObject],
  '0x8da5cb5b': [Function: bound _createTxObject],
  'owner()': [Function: bound _createTxObject],
  symbol: [Function: bound _createTxObject],
  '0x95d89b41': [Function: bound _createTxObject],
  'symbol()': [Function: bound _createTxObject],
  transfer: [Function: bound _createTxObject],
  '0xa9059cbb': [Function: bound _createTxObject],
  'transfer(address,uint256)': [Function: bound _createTxObject],
  mintTimelocked: [Function: bound _createTxObject],
  '0xc14a3b8c': [Function: bound _createTxObject],
  'mintTimelocked(address,uint256,uint256)': [Function: bound _createTxObject],
  allowance: [Function: bound _createTxObject],
  '0xdd62ed3e': [Function: bound _createTxObject],
  'allowance(address,address)': [Function: bound _createTxObject],
  transferOwnership: [Function: bound _createTxObject],
  '0xf2fde38b': [Function: bound _createTxObject],
  'transferOwnership(address)': [Function: bound _createTxObject]
}
```

Then, we can see specific methods like the `name`, `symbol`, `totalSupply`, `balanceOf` and `decimals`...

```js
> contract.methods.name().call((err, result) => {console.log(result)})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1519,
  [Symbol(trigger_async_id_symbol)]: 5
}
> OMGToken

> contract.methods.symbol().call((err, result) => {console.log(result)})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1893,
  [Symbol(trigger_async_id_symbol)]: 5
}
> OMG

> contract.methods.totalSupply().call((err, result) => {console.log(result)})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 2280,
  [Symbol(trigger_async_id_symbol)]: 5
}
> 140245398245132780789239631

> contract.methods.balanceOf("0xDFd5293D8e347dFe59E90eFd55b2956a1343963d").call((err, result) => {console.log(result)})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 2692,
  [Symbol(trigger_async_id_symbol)]: 5
}
> 478338323600570000000000

> contract.methods.decimals().call((err, result) => {console.log(result)})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 3463,
  [Symbol(trigger_async_id_symbol)]: 5
}
> 18
```

## Utils

Let's play with the utils of [Web3](https://web3js.readthedocs.io/en/v1.7.3/web3-utils.html?highlight=sha3#web3-utils). Create a new file named `app.js` and write the examples. Then execute it using `node` and watch the results...

```js
$ node app.js
SHA3:  0x592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba
Keccak256:  0x592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba
Solidity SHA3 (1 input):  0x592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba
Solidity SHA3 (2 input):  0x7c5ea36004851c764c44143b1dcb59679b11c9a68e5f41497f6cf3d480715331
Solidity SHA3 (Type & Value):  0x36318dc23216f8dc6893755353ddca31edd1ddc485dfbf83a209dbacd19415fa
RandomHex(1):  0xcb
RandomHex(32):  0x5e7a36673a58a374d619d5548d29fec2c10878db1b585f6101d0b3c1221b1a10
isHex('0xc1912'):  true
isHex('Hello'):  false
isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'):  true
isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'):  false
hexToNumber('0xea'):  234
numberToHex(234):  0xea
hexToUtf8('0x49206861766520313030e282ac'):  I have 100€
utf8ToHex('I have 100€'):  0x49206861766520313030e282ac
```

### Block

Finally, let's get info about **blocks**...

```js
$ node blocks.js

{
  baseFeePerGas: 24617752822,
  difficulty: '0',
  extraData: '0xd883010b04846765746888676f312e32302e32856c696e7578',
  gasLimit: 29970705,
  gasUsed: 29954475,
  hash: '0x0414e9a3fcd5dfff99acfb671a6e0a6f9a66ce1b75c014aa87bbf63638e4fd23',
  logsBloom: '0x6ea3d57f0d07f856f86fb479cdbcdde325e94b8a6e7aeff80fefdf16f7aacfa5ffdd2f51dc8ec43afbf2bbdd0fbe3d4e2ba9e41ade1fb8b186dba90fb0ff7c607fc7e5b5e6a39dfeff9bef4d77dbbee4f381623fb7de3a927cb37f1dcf09797af6498f699b3fff6ad85d90fed8f86b57f36938ffbd39b56f1a697e51fb5daa73ba5885f19f9e6e5e73caf44ceda3ae0f69709ea5e749f41d9b32f2fc52ba0957bfce51ef3db3e912ab374bf78eb6cce464d7064860f5c1628be1ce9792dd54e7f975b3f6c19ac4c42018dc03bfcff07eefbab2cc3c6adcd90726fda6fac5e8d76c73fa9d8fd1c4efda96d79fd2a8fff316fc527773e8b6e27c1dbc8398f7fcd7',
  miner: '0x388C818CA8B9251b393131C08a736A67ccB19297',
  mixHash: '0x58c0c8c95c14ceb9c4384f3e4f4ea3453f2d0e8634eaaefe268987bdacd21892',
  nonce: '0x0000000000000000',
  number: 16848438,
  parentHash: '0x8c7ab77c0864f4a77835871b286c909e3b211d672932efccac8cc900729514c2',
  receiptsRoot: '0x4779ee81356b38e4270599c9db494335fd7fae295db16fa03d2844c9a1a6b88e',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  size: 111549,
  stateRoot: '0xe1eba0ec131df85081c4b6db7e27bf9b2f59823b7ea6b239c0025dd4a1138572',
  timestamp: 1679067155,
  totalDifficulty: '58750003716598352816469',
  transactions: [
    '0xc84ca5f120d41653596550813e401547c30ec085424fb128d2ed26e1a1d89bd5',
    '0xf4b87b72afcf9f83c96434e1a82835fe3962b7fff0798d4477770fc7436605a0',
    '0xd909e8f1aa271f4f78199803e86d8c3b052d7fe997963cdaa1d2f1b7a3f52b92',
    '0xc4d4f9b191aab016c8185f8abe89abed71d0d80baf09e65fa96d47787d0c3d1d',
    '0x0bfd9e6dd735869eb891d921d28c91482f0b00f7d45467c96f484c8b249cef71',
    '0x07c138abfb70751e92a320447621fdf87b79f28e3925f932b0bee4a9edcff4c4',
    '0xf04862d1664cfc16658648dba1caddb5cc6797ba3fc787cf91413c89cc5aafd5',
    '0x1d047280709eb58f62ebbd19daedb853873392314cd3e303426e091ff2a70ff5',
    '0x3c6487837bdd3f4202ca7e12680349f4bda38cf963fda124c2fb597c612e6e5a',
    '0x38df2e3e9d4e8647f542b58277ceb4d40dc4f85e34b39edb40e8b582f323a130',
    '0x175ef5d7ecde86baa8ae18d23fae50fcd65199ff1cb61d880452ca19d1127e62',
    '0x1548a18361589a8331ab05d84ce978f6ea6ee9f72661f5825ffa624afb3521b6',
    '0x258b394174b50dcba95fc4b873f4558747e8b3f617939a1778862b36f2ae2670',
    '0x2dbc42ce12d506560b4a77864b41096963ebcb43902b9fa2c9d925c3029dd589',
    '0xc790d73d4863cab41510c7ce5cdb5f5330b1932303c5c502cbe3512d0f80d18a',
    '0xe23d88bc0b296183ba198edc3b64daf705e9cde40f13f61639d35f1ad19c8186',
    '0xec4e793d89c884e3f9ff87c70cce17ddbd30706fe3dcbdb7f2640d75b350cce5',
    '0x4b1487c2e7022dc7b9fc27758dbc90742b3719e4880c0b29e4db3e64d656271e',
    '0x4ffa22798fdb4f9c0cd2441f6b51145aa0177398a7a2443d4350119cbff8b176',
    '0x779092d02e472d8a5496851bd72805f7cddaa094e9449ad481845da9ca101334',
    '0x227e3912b00d2d57cf65c21485481404ce80369c538222efb82d2d13544afde0',
    '0x85b93f1ffb4ec8070926871f279254ef9d2029fc938babed43991deea0843be0',
    '0x6cf1b5e9a186d9ea9f12fd4169b58093a6c5055beaaa18f0800830f8cdcf43e4',
    '0x6f2c1e42aeb0798ea9db1903363e52655b342070e30520beede523cb4ff382c8',
    '0xfe4cd01da437733c2f4f9536b05bdf538a23a001b387fec74a70da139d2cc7eb',
    '0xef179da305c150431459357ef8635bdfad07f329ae618df2629dee6201f8ff77',
    '0x5093aa82e36b4cba52ec6f48b6164c04631ada1b71aeec6bddf58615b0af3987',
    '0x90f98c95196b80581f3c4bac086f49ec5577bd3f20a7f2be28ff770c55f7cf0e',
    '0xc08ba7aae48225af78a7109e035fb5b467d4543cfafcc893830135f940cddee8',
    '0xdf686b445601e9ab7b7fa47d7fb1dc16a3b1d9c8aec9b03ec04fb3a554fef3a6',
    '0xddf8d86d65bb6d50c27c2094a4ea1989fe2f5dba60f99937f8219c55288fcbf9',
    '0x5da280f89329ae2a17766c26172b0c6976463a97a2b2a3b24e331002f34df5e2',
    '0xcffeedb07c5145bf94daa6eea43cb36e91d3d8d180ec673514917e16657c7666',
    '0x3669877aae8620368e9c0b6f010293626fc520d0a30142d463d94089784df15c',
    '0xe939ebda3fd8f9596e3c61d69a485a1fd406700a4be3d11c4c0687544956bf9f',
    '0x698b36d0f753c8dd417a094ef5cdb29dbf819db64a55ff5d526f80a7a29082ff',
    '0x3c0ba281a5c5971e8385f1d0555d0cf9aa99305c18b2c148535cecf49eac395d',
    '0x9f26c36a609de8e0beeb0406434c627e148afd613b2be78d8c5642b26abbf46e',
    '0xbd4c2bd9ab6d5030c8824f5dfa809cac7b4a2374d8f61d0c46431b9acf8f0bce',
    '0x601bcecc7f439d013ca8d393460bfe3c70eded2ba0c7b9227e15f9c102776267',
    '0x1829db07ab3d29841451cc26d216d2d31f4fba6a52a6fb5440c9dbef367abb0c',
    '0xfd48a1476dfb3310f1d9f09b517d679dc182602a0625c7ef6e18aed5e5f9ae65',
    '0x5bd6a2551b23272c57b9acf9c07a6f6aa56f40c4d6722fb0cd16513d245704d1',
    '0x1874ad2a9fe70d770107680ab9b6029b2dc8d83c9a053d7c29383ab9c79f996d',
    '0x819b0350afba552713297a6a552c1533a2f2ca6477be3e89c87d6da77fb0c287',
    '0xb20790174faf7051c5c1fbc2f4221b47afede9afac2a25cbf678da72b29ca36b',
    '0x78b959c7067507e960d84651f0d341594cf834a6f46ee94364864077e6f42bd0',
    '0x3f912211a7d44db4c44d3d429158ade20013d80ef4308b910367f86c404aa866',
    '0xc9d8375f1e3c3d4eddd5e9265015c4974cac72eb802771427349a91cc4d832f4',
    '0x162d4ee59e09bc0cb3af0d5f33bdb60c7044ecbfe551c404d83f140c45af2599',
    '0x8a962acf9a19302a9b20641b2d3335110fcb46497f5386d34386420e45d9e3e2',
    '0x2b8830ac797245d8a12de123be3f69f85f0b73bd4f89246d324724dbfd0568d9',
    '0x1b5284764fbbd26f9fefbb4893b3db91064bbb776d2491c74e0d866d4079f370',
    '0xc28e5e30f6d7d7151ea2494110730c5d91896f76f805f7951ad929985dd6207e',
    '0xe7d53be3fc7597c12ff767ab3ac6e1eb9fe33cf0532fe09b25a5a7654e9d0ca7',
    '0xd470276dc1db371864a3175b6640a6386fbf15e9901b60b41920d70752e89514',
    '0x1986140b5c8ba66c381a38908fe1c618e4d9e93bf517918672b38ca0a1dd2252',
    '0x5256e9b8bf1f6bafd5c59a7af26cc7fc079ed14c4ffbceac7b0a94d763a0598c',
    '0x5cc75db34a2a9c4fbd470a9f454a24f398db923013ca141470ae5e5c09577f48',
    '0x5c6774d755482d7fbac182ccf6d57a7aa6e9b1f50ced719278a3ffc19950488c',
    '0x4575852cd1e1d4ca37741883163d4b2fe48b26630b96506a9ba1f3aed5ddc534',
    '0x43aa5e9a0fb92ee983f6766e6ea96b96d9cef551fc2b3c6b31dd8b76d6ff3ff2',
    '0xaf11e2a1eac52307f51cc31e6d11a0ede968da524791218bb65e82ec5584d864',
    '0xd27918b0dd0f701e041c4fcaf78cece54bc108a3ffbc02232f18786586656afc',
    '0x974397d9a823605ebede6f7508dff0d6085f54ba24a4bccce689a17e02d765ce',
    '0xda1fc5f5bb127fc9c1839308d1ecea55b1a65727e5757391df04d1d2c5853cb6',
    '0xbbf0d26aa40e0461922cd2d5689f85530c57af891de25320144377cc71a77a82',
    '0x5cfd01fd74b7921297744ad1b8ee99280cb621a5a3d6e421dad204d431d523ff',
    '0x993a6825ba404b1b98f4ae505d97a023372fb91db703c30f3dbee46fbe4d3bdb',
    '0x9ec97bfe37db81e875b44108a160433382175f1364d86193a9890226ee91f8f6',
    '0xdcd64de1d3b9d2c6f61e637e0e9d6819f069ad973bbeedc205dcba480f57109a',
    '0x5b765a04981565cc6456b5adbe925c23fbc503398e6e139bf8896b8ae58e4fa5',
    '0x094c79d8a09c9355658078acb2e73e8a7999f96f586c2cecd42ab83d0b116c90',
    '0xed99358d0dcd2b37693f189d69e557f21807f5316ab399658b8108c5caeab5e0',
    '0x1029cc34d525539bd8996cd1ab50865ec66e363e138910a273a9164e14cf47d4',
    '0x7176bb3e3bd4932331aa133d018430eba3edda12a248c8c2628c4fbed85c2d97',
    '0x0e44f304d3a8cca907a8102f32cf9027ad8e9bfc5874ac9f37e848ee6d8122cf',
    '0x46ea5052034dcca981fddafc0f94751b1b89a591def19e7286f9af4e2c3de6cd',
    '0x74b4de63d49338f9e0074292c87b2aa83f2146e1a878e42c1494699ea044415a',
    '0xc017f27a2a74305ea2ef037d6b9ef7ca28a9d0fb3104eae7db52af8cc7eb2558',
    '0xf4693ec74ad45d933bf0ce729f12afbe6a87bee3eb516f633440d97943d2a72f',
    '0x3faf1bc633788822afe055cc9ada3edebd6e8b87cae057d2d9e49d1f04107ad7',
    '0xda9ce7b84a419dcf5ef443b0cc8ccff6bec4869cfc1b082e6f38c855450085ff',
    '0x1bfcb294cd005d10b0577e3811601f8a5dfaad984732f38956559aa3e2b797a1',
    '0x67fe30b68b2eeff0d4772345debaf8cee256b257355050d13d9e2d2464017828',
    '0x6dee5a0d1ac3495e48d03b5ce5f24ded818520ee0ff2be8014c617c06c72575c',
    '0x289c2ef55cfd352532b37eed80cce7810772c7f2a61e210252d2cd76cf4e646b',
    '0xf41746bb730275add749c248fada1fe9f4b5d3410ade1892a6d6d9f60ce7d477',
    '0x3203eeadf47d3c38e8a68fee0a20039e2ad73a663cb6812c2984d0db48caa2ee',
    '0x7d0b74fdefc0663286a5c5f4e92df361df85d8969788c2ecf21b7f3014b5ab3f',
    '0x80bd5f1d726339f5ce374d3dddf53c9e0aec83cd63b58f14b1b6c6be4849ebc9',
    '0x28512fee5fa9cacb3e20feb702dff41f037c413132bc20dd2cfc789b577b50d8',
    '0x36e1ded06e1ab1284d99fb98f1b64ed05dd2c96f37385a52e41be55b9c3afd19',
    '0x3b58db60a83fb9b5bfb5406b512a4b8cf71c069b9b18f312c2453df66f85b98c',
    '0x2e3f3b327cb4646262722c420fea752713ed021d105e04be2b3d10be2e1f14e4',
    '0xfc1136a67ded8651a824865cf441df3ae5a5504d3b8f7d020d8fa358c587d5b6',
    '0x1b9935df7f5a75dcdbc7101d770edf53bee12c443129b4b5c43a95ba517e15d4',
    '0xcb5f185e955a44bf969cb81c83def26a0057aca8b4352faa1f6dca5320d1d3b7',
    '0x142ee0ae1cdae241fe6042de3ef00ab51b003674438523d1faa4d1cb3d65e5a8',
    '0x730a2e67fac188371032243adf2f1e4a3b8cbbc06aa849034854f2c2143de2fd',
    ... 144 more items
  ],
  transactionsRoot: '0xc8113e549b50ee677c241b63c800b06a8843c98673bad3a9e3168bf4c7671bea',
  uncles: []
}
{
  blockHash: '0x0414e9a3fcd5dfff99acfb671a6e0a6f9a66ce1b75c014aa87bbf63638e4fd23',
  blockNumber: 16848438,
  nonce: '0x0000000000000000',
  miner: '0x388C818CA8B9251b393131C08a736A67ccB19297',
  difficulty: '0',
  gasLimit: 29970705,
  gasUsed: 29954475
}
{
  blockHash: '0x9324f12c6ff677ba1e6b7ccb256a2d1208f01d3dc0debf297136d9a201374a96',
  blockNumber: 16848436,
  nonce: '0x0000000000000000',
  miner: '0x5F927395213ee6b95dE97bDdCb1b2B1C0F16844F',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 29724492
}
{
  blockHash: '0x8c7ab77c0864f4a77835871b286c909e3b211d672932efccac8cc900729514c2',
  blockNumber: 16848437,
  nonce: '0x0000000000000000',
  miner: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 9465708
}
{
  blockHash: '0x718679e50f6caefd212f8d4df4eab5a0e7529d5632bd645e635dfb8fb2e096cb',
  blockNumber: 16848435,
  nonce: '0x0000000000000000',
  miner: '0x30b25abC7817622FA84536055b57E9bd0aD2Be36',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 3410450
}
{
  blockHash: '0xd90a653e69b32c378118cbc130ab58f5f1f8cf92e9c880adbdb9707ad9b75114',
  blockNumber: 16848432,
  nonce: '0x0000000000000000',
  miner: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 12514773
}
{
  blockHash: '0x0414e9a3fcd5dfff99acfb671a6e0a6f9a66ce1b75c014aa87bbf63638e4fd23',
  blockNumber: 16848438,
  nonce: '0x0000000000000000',
  miner: '0x388C818CA8B9251b393131C08a736A67ccB19297',
  difficulty: '0',
  gasLimit: 29970705,
  gasUsed: 29954475
}
{
  blockHash: '0xea800c34ec00e8e71d3589d4c2089831e0d72ff32a8c3a71d0ff915bf3014b8d',
  blockNumber: 16848430,
  nonce: '0x0000000000000000',
  miner: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 15186001
}
{
  blockHash: '0x0e8e215bee2c46fd5af86c6d6fa570d1d1fb6a63cd89b556732a4ff9e9e96e08',
  blockNumber: 16848433,
  nonce: '0x0000000000000000',
  miner: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 15393975
}
{
  blockHash: '0x0229eaf4f95033a459919dab39357b6752e768c5f50f2339d01efdb1a4b230a6',
  blockNumber: 16848434,
  nonce: '0x0000000000000000',
  miner: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 10486296
}
{
  blockHash: '0x2152a699543e15787aa646916659c98b753be94720599c0fbba310e4e125fcb9',
  blockNumber: 16848431,
  nonce: '0x0000000000000000',
  miner: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 11000523
}
{
  blockHash: '0xfe11d0c01fe7854f426e51e3b71cab27c6bedcc4721cb48549db3561bdd0622f',
  blockNumber: 16848429,
  nonce: '0x0000000000000000',
  miner: '0xF2C1D4dd49fD8d65877B696b17886e0367749581',
  difficulty: '0',
  gasLimit: 30000000,
  gasUsed: 16361785
}
```