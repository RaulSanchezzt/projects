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