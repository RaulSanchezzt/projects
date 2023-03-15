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

## getBalance

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

Let's see the accounts that are created...

```js
> web3.eth.getAccounts().then(console.log);
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 911,
  [Symbol(trigger_async_id_symbol)]: 884
}
> [
  '0xE7572010FEEEf7b3059Cd1B0f34274EA9de88aaB',
  '0xDCf916Bb894e059A7Ae89EBEa1fe12f2Adf26701',
  '0x3eC47A1313df822d492C3Dd43FDa364C9aB8c00F',
  '0x816e942f6e24B8d571affb4DF51B94a6525c6b18',
  '0xBfE48BCB31AD8F420E08E98A616eBB987DD3195c',
  '0xfe7A04Fe9Fc81ba5B2341DE587a8e6Ce01c8Ba7A',
  '0xD9132157Eb747a41B43c40dDD3F39F918Cc674C1',
  '0xD2eC2f3f511463B9b38a589436E57aC89ece6dE7',
  '0x285A9e03Dc2E45Cf8B8ceb58cbc16Ee423272416',
  '0x91561FD8639768ea9B8E170ddbD8D122d0181Ab2'
]
```

Now we can see the current balance of the first account...

```js
> web3.eth.getBalance("0xE7572010FEEEf7b3059Cd1B0f34274EA9de88aaB", (err, bal) => {balance = bal})
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1951,
  [Symbol(trigger_async_id_symbol)]: 5
}
> balance
'1000000000000000000000'
> web3.utils.fromWei(balance, "ether")
'1000'
```