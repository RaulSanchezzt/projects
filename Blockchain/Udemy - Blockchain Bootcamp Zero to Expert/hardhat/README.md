# Hardhat

This project demonstrates a basic [Hardhat](https://hardhat.org/) use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Installing

First, we have to install [HardHat](https://hardhat.org/hardhat-runner/docs/getting-started#installation), create an **npm project** by going to an empty folder...

```shell
$ mkdir hardhat

$ cd hardhat/

$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (hardhat)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/package.json:

{
  "name": "hardhat",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

Then, install it...

```shell
$ npm install --save-dev hardhat

added 300 packages, and audited 301 packages in 40s

61 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Create a Sample Project

Once we have installed **HardHat**, let's create a new project...

```shell
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.13.0

✔ What do you want to do? · Create a JavaScript project
✔ Hardhat project root: · /home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y

npm install --save-dev @nomicfoundation/hardhat-toolbox@^2.0.0
```

Finally, we can see the version of **HardHat** and use the console...

```shell
$ npx hardhat --version
2.13.0
```

## Compile Contracts

Let's compile our **Smart Contracts**...

```shell
$ npx hardhat compile
Compiled 2 Solidity files successfully
```

## Testing

Now, we are going to test our **Smart Contracts**...

```shell
$ npx hardhat test


  Greeter
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hello, world!'
    ✔ Should return the new greeting once it's changed (1486ms)

  Lock
    Deployment
      ✔ Should set the right unlockTime (54ms)
      ✔ Should set the right owner
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future
    Withdrawals
      Validations
Unlock time is '1710082854' and block timestamp is '1678546856'
        ✔ Should revert with the right error if called too soon
Unlock time is '1710082854' and block timestamp is '1710082855'
        ✔ Should revert with the right error if called from another account
Unlock time is '1710082854' and block timestamp is '1710082855'
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it
      Events
Unlock time is '1710082854' and block timestamp is '1710082855'
        ✔ Should emit an event on withdrawals
      Transfers
Unlock time is '1710082854' and block timestamp is '1710082855'
        ✔ Should transfer the funds to the owner


  10 passing (2s)
```

## Deploy to HardHat Network

After compile and test the **Smart Contract**, let's deploy it!

```shell
$ node scripts/deploy.js
Lock with 0.001ETH and unlock timestamp 1678560286 deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Deploy to Ganache Network

Then, configure a new network in the `hardhat.config.js` to deploy to **ganache**.

```shell
$ npx hardhat run --network ganache scripts/deploy.js
Compiled 4 Solidity files successfully
Lock with 0.001ETH and unlock timestamp 1678719712 deployed to 0xdf166ac98FC53101E36d9826E1DdE9d1FdD9c2c1
```

## Console

Finally, we are going to use the **console** to interact with the **Smart Contracts**. Let's see the configuration!

```js
$ npx hardhat console
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> config
{
  solidity: { compilers: [ [Object] ], overrides: {} },
  paths: {
    artifacts: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/artifacts',
    sources: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/contracts',
    cache: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/cache',
    tests: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/tests',
    root: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat',
    configFile: '/home/raul/projects/Blockchain/Udemy - Blockchain Bootcamp Zero to Expert/hardhat/hardhat.config.js'
  },
  defaultNetwork: 'ganache',
  networks: {
    hardhat: {
      hardfork: 'merge',
      blockGasLimit: 30000000,
      gasPrice: 'auto',
      chainId: 31337,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: false,
      mining: [Object],
      accounts: [Object],
      loggingEnabled: false,
      gasMultiplier: 1,
      minGasPrice: 0n,
      chains: [Map],
      gas: 30000000,
      initialDate: '2023-03-13T15:08:15.157Z'
    },
    localhost: {
      accounts: 'remote',
      gas: 'auto',
      gasPrice: 'auto',
      gasMultiplier: 1,
      httpHeaders: {},
      timeout: 40000,
      url: 'http://127.0.0.1:8545'
    },
    ganache: {
      accounts: 'remote',
      gas: 'auto',
      gasPrice: 'auto',
      gasMultiplier: 1,
      httpHeaders: {},
      timeout: 20000,
      url: 'http://127.0.0.1:8545'
    }
  },
  mocha: { timeout: 40000 },
  etherscan: { apiKey: '', customChains: [] },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
    discriminateTypes: false,
    tsNocheck: false,
    dontOverrideCompile: true
  },
  gasReporter: { enabled: false, currency: 'USD' }
}
```

Then, we can see the info about `ethers`...

```js
> ethers
{
  Signer: [Function: Signer] { isSigner: [Function (anonymous)] },
  Wallet: [Function: Wallet] {
    createRandom: [Function (anonymous)],
    fromEncryptedJson: [Function (anonymous)],
    fromEncryptedJsonSync: [Function (anonymous)],
    fromMnemonic: [Function (anonymous)]
  },
  VoidSigner: [Function: VoidSigner],
  getDefaultProvider: [Function: getDefaultProvider],
  providers: {
    Provider: [Getter],
    BaseProvider: [Getter],
    Resolver: [Getter],
    UrlJsonRpcProvider: [Getter],
    FallbackProvider: [Getter],
    AlchemyProvider: [Getter],
    AlchemyWebSocketProvider: [Getter],
    AnkrProvider: [Getter],
    CloudflareProvider: [Getter],
    EtherscanProvider: [Getter],
    InfuraProvider: [Getter],
    InfuraWebSocketProvider: [Getter],
    JsonRpcProvider: [Getter],
    JsonRpcBatchProvider: [Getter],
    NodesmithProvider: [Getter],
    PocketProvider: [Getter],
    StaticJsonRpcProvider: [Getter],
    Web3Provider: [Getter],
    WebSocketProvider: [Getter],
    IpcProvider: [Getter],
    JsonRpcSigner: [Getter],
    getDefaultProvider: [Function: getDefaultProvider],
    getNetwork: [Getter],
    isCommunityResource: [Getter],
    isCommunityResourcable: [Getter],
    showThrottleMessage: [Getter],
    Formatter: [Getter]
  },
  BaseContract: [Function: BaseContract] {
    getContractAddress: [Function (anonymous)],
    getInterface: [Function (anonymous)],
    isIndexed: [Function (anonymous)]
  },
  Contract: [Function: Contract],
  ContractFactory: [Function: ContractFactory] {
    fromSolidity: [Function (anonymous)],
    getInterface: [Function (anonymous)],
    getContractAddress: [Function (anonymous)],
    getContract: [Function (anonymous)]
  },
  BigNumber: [Function: BigNumber] {
    from: [Function (anonymous)],
    isBigNumber: [Function (anonymous)]
  },
  FixedNumber: [Function: FixedNumber] {
    fromValue: [Function (anonymous)],
    fromString: [Function (anonymous)],
    fromBytes: [Function (anonymous)],
    from: [Function (anonymous)],
    isFixedNumber: [Function (anonymous)]
  },
  constants: {
    AddressZero: [Getter],
    NegativeOne: [Getter],
    Zero: [Getter],
    One: [Getter],
    Two: [Getter],
    WeiPerEther: [Getter],
    MaxUint256: [Getter],
    MinInt256: [Getter],
    MaxInt256: [Getter],
    HashZero: [Getter],
    EtherSymbol: [Getter]
  },
  errors: {
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
    UNSUPPORTED_OPERATION: 'UNSUPPORTED_OPERATION',
    NETWORK_ERROR: 'NETWORK_ERROR',
    SERVER_ERROR: 'SERVER_ERROR',
    TIMEOUT: 'TIMEOUT',
    BUFFER_OVERRUN: 'BUFFER_OVERRUN',
    NUMERIC_FAULT: 'NUMERIC_FAULT',
    MISSING_NEW: 'MISSING_NEW',
    INVALID_ARGUMENT: 'INVALID_ARGUMENT',
    MISSING_ARGUMENT: 'MISSING_ARGUMENT',
    UNEXPECTED_ARGUMENT: 'UNEXPECTED_ARGUMENT',
    CALL_EXCEPTION: 'CALL_EXCEPTION',
    INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
    NONCE_EXPIRED: 'NONCE_EXPIRED',
    REPLACEMENT_UNDERPRICED: 'REPLACEMENT_UNDERPRICED',
    UNPREDICTABLE_GAS_LIMIT: 'UNPREDICTABLE_GAS_LIMIT',
    TRANSACTION_REPLACED: 'TRANSACTION_REPLACED',
    ACTION_REJECTED: 'ACTION_REJECTED'
  },
  logger: Logger { version: 'ethers/5.7.2' },
  utils: {
    AbiCoder: [Getter],
    defaultAbiCoder: [Getter],
    Fragment: [Getter],
    ConstructorFragment: [Getter],
    ErrorFragment: [Getter],
    EventFragment: [Getter],
    FunctionFragment: [Getter],
    ParamType: [Getter],
    FormatTypes: [Getter],
    checkResultErrors: [Getter],
    Logger: [Getter],
    RLP: { encode: [Function: encode], decode: [Function: decode] },
    _fetchData: [Getter],
    fetchJson: [Getter],
    poll: [Getter],
    checkProperties: [Getter],
    deepCopy: [Getter],
    defineReadOnly: [Getter],
    getStatic: [Getter],
    resolveProperties: [Getter],
    shallowCopy: [Getter],
    arrayify: [Getter],
    concat: [Getter],
    stripZeros: [Getter],
    zeroPad: [Getter],
    isBytes: [Getter],
    isBytesLike: [Getter],
    defaultPath: [Getter],
    HDNode: [Getter],
    SigningKey: [Getter],
    Interface: [Getter],
    LogDescription: [Getter],
    TransactionDescription: [Getter],
    base58: [Getter],
    base64: { decode: [Getter], encode: [Getter] },
    hexlify: [Getter],
    isHexString: [Getter],
    hexConcat: [Getter],
    hexStripZeros: [Getter],
    hexValue: [Getter],
    hexZeroPad: [Getter],
    hexDataLength: [Getter],
    hexDataSlice: [Getter],
    nameprep: [Getter],
    _toEscapedUtf8String: [Getter],
    toUtf8Bytes: [Getter],
    toUtf8CodePoints: [Getter],
    toUtf8String: [Getter],
    Utf8ErrorFuncs: [Getter],
    formatBytes32String: [Getter],
    parseBytes32String: [Getter],
    dnsEncode: [Getter],
    hashMessage: [Getter],
    namehash: [Getter],
    isValidName: [Getter],
    id: [Getter],
    _TypedDataEncoder: [Getter],
    getAddress: [Getter],
    getIcapAddress: [Getter],
    getContractAddress: [Getter],
    getCreate2Address: [Getter],
    isAddress: [Getter],
    formatEther: [Getter],
    parseEther: [Getter],
    formatUnits: [Getter],
    parseUnits: [Getter],
    commify: [Getter],
    computeHmac: [Getter],
    keccak256: [Getter],
    ripemd160: [Getter],
    sha256: [Getter],
    sha512: [Getter],
    randomBytes: [Getter],
    shuffled: [Getter],
    solidityPack: [Getter],
    solidityKeccak256: [Getter],
    soliditySha256: [Getter],
    splitSignature: [Getter],
    joinSignature: [Getter],
    accessListify: [Getter],
    parseTransaction: [Getter],
    serializeTransaction: [Getter],
    TransactionTypes: [Getter],
    getJsonWalletAddress: [Getter],
    computeAddress: [Getter],
    recoverAddress: [Getter],
    computePublicKey: [Getter],
    recoverPublicKey: [Getter],
    verifyMessage: [Getter],
    verifyTypedData: [Getter],
    getAccountPath: [Getter],
    mnemonicToEntropy: [Getter],
    entropyToMnemonic: [Getter],
    isValidMnemonic: [Getter],
    mnemonicToSeed: [Getter],
    SupportedAlgorithm: [Getter],
    UnicodeNormalizationForm: [Getter],
    Utf8ErrorReason: [Getter],
    Indexed: [Getter]
  },
  wordlists: {
    cz: LangCz { locale: 'cz' },
    en: LangEn { locale: 'en' },
    es: LangEs { locale: 'es' },
    fr: LangFr { locale: 'fr' },
    it: LangIt { locale: 'it' },
    ja: LangJa { locale: 'ja' },
    ko: LangKo { locale: 'ko' },
    zh: LangZh { locale: 'zh_cn' },
    zh_cn: LangZh { locale: 'zh_cn' },
    zh_tw: LangZh { locale: 'zh_tw' }
  },
  version: 'ethers/5.7.2',
  Wordlist: [Function: Wordlist] {
    check: [Function (anonymous)],
    register: [Function (anonymous)]
  },
  provider: EthersProviderWrapper {
    _isProvider: true,
    _events: [],
    _emitted: { block: -2 },
    disableCcipRead: false,
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise {
      [Object],
      [Symbol(async_id_symbol)]: 91,
      [Symbol(trigger_async_id_symbol)]: 84
    },
    _maxInternalBlockNumber: -1024,
    _lastBlockNumber: -2,
    _maxFilterBlockRange: 10,
    _pollingInterval: 4000,
    _fastQueryDate: 0,
    connection: { url: 'http://localhost:8545' },
    _nextId: 42,
    _hardhatProvider: BackwardsCompatibilityProviderAdapter {
      _wrapped: [AutomaticGasPriceProvider],
      _provider: [AutomaticGasPriceProvider],
      sendAsync: [Function: bound sendAsync],
      send: [Function: bound send],
      _sendJsonRpcRequest: [Function: bound _sendJsonRpcRequest] AsyncFunction
    },
    _eventLoopCache: { detectNetwork: null },
    _network: { chainId: 1337, name: 'unknown' }
  },
  getSigner: [Function: getSigner],
  getSigners: [Function: getSigners],
  getImpersonatedSigner: [Function: getImpersonatedSigner],
  getContractFactory: [Function: bound getContractFactory] AsyncFunction,
  getContractFactoryFromArtifact: [Function: bound getContractFactoryFromArtifact] AsyncFunction,
  getContractAt: [Function: bound getContractAt] AsyncFunction,
  getContractAtFromArtifact: [Function: bound getContractAtFromArtifact] AsyncFunction,
  deployContract: [Function: bound deployContract] AsyncFunction
}
```
We can deploy our Smart Contract too...
```js
> const Lock = await ethers.getContractFactory("Lock");
undefined
> Lock
ContractFactory {
  bytecode: '0x60806040526040516107ad3803806107ad833981810160405281019061002591906100ca565b804210610067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161005e90610116565b60405180910390fd5b8060008190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101b7565b6000815190506100c4816101a0565b92915050565b6000602082840312156100dc57600080fd5b60006100ea848285016100b5565b91505092915050565b6000610100602383610136565b915061010b82610151565b604082019050919050565b6000602082019050818103600083015261012f816100f3565b9050919050565b600082825260208201905092915050565b6000819050919050565b7f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b6101a981610147565b81146101b457600080fd5b50565b6105e7806101c66000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b9190610454565b60405180910390f35b61006c610092565b005b610076610230565b60405161008391906103bb565b60405180910390f35b60005481565b6100b76040518060600160405280602b8152602001610587602b913960005442610256565b6000544210156100fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f390610414565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018390610434565b60405180910390fd5b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516101bd92919061046f565b60405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561022d573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102f083838360405160240161026e939291906103d6565b6040516020818303038152906040527fca47c4eb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102f5565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b610327816104b4565b82525050565b600061033882610498565b61034281856104a3565b93506103528185602086016104f0565b61035b81610523565b840191505092915050565b60006103736016836104a3565b915061037e82610534565b602082019050919050565b60006103966014836104a3565b91506103a18261055d565b602082019050919050565b6103b5816104e6565b82525050565b60006020820190506103d0600083018461031e565b92915050565b600060608201905081810360008301526103f0818661032d565b90506103ff60208301856103ac565b61040c60408301846103ac565b949350505050565b6000602082019050818103600083015261042d81610366565b9050919050565b6000602082019050818103600083015261044d81610389565b9050919050565b600060208201905061046960008301846103ac565b92915050565b600060408201905061048460008301856103ac565b61049160208301846103ac565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006104bf826104c6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561050e5780820151818401526020810190506104f3565b8381111561051d576000848401525b50505050565b6000601f19601f8301169050919050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b7f596f75206172656e277420746865206f776e657200000000000000000000000060008201525056fe556e6c6f636b2074696d6520697320256f20616e6420626c6f636b2074696d657374616d7020697320256fa2646970667358221220e71d749cb8cfe76d4c20e154ff5dab547fc9c985266e9b69bd0d020a1284351164736f6c63430008040033',
  interface: Interface {
    fragments: [
      [ConstructorFragment],
      [EventFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment]
    ],
    _abiCoder: AbiCoder { coerceFunc: null },
    functions: {
      'owner()': [FunctionFragment],
      'unlockTime()': [FunctionFragment],
      'withdraw()': [FunctionFragment]
    },
    errors: {},
    events: { 'Withdrawal(uint256,uint256)': [EventFragment] },
    structs: {},
    deploy: ConstructorFragment {
      name: null,
      type: 'constructor',
      inputs: [Array],
      payable: true,
      stateMutability: 'payable',
      gas: null,
      _isFragment: true
    },
    _isInterface: true
  },
  signer: SignerWithAddress {
    _isSigner: true,
    address: '0x8AF7E1A30Fd4CFA2Ab62da6A52C51B62C391547e',
    _signer: JsonRpcSigner {
      _isSigner: true,
      provider: [EthersProviderWrapper],
      _address: '0x8AF7E1A30Fd4CFA2Ab62da6A52C51B62C391547e',
      _index: null
    },
    provider: EthersProviderWrapper {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      disableCcipRead: false,
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: -1024,
      _lastBlockNumber: -2,
      _maxFilterBlockRange: 10,
      _pollingInterval: 4000,
      _fastQueryDate: 0,
      connection: [Object],
      _nextId: 42,
      _hardhatProvider: [BackwardsCompatibilityProviderAdapter],
      _eventLoopCache: [Object],
      _network: [Object]
    }
  }
}
```

