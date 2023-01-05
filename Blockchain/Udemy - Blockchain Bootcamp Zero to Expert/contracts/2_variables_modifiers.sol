// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

contract variables_modifiers {
    // Valores enteros sin signos (uint)
    uint256 a;
    uint8 public b = 4;

    // Valores enteros con signos (int)
    int256 c;
    int8 public d = -4;

    // Strings
    string str;
    string public strpublic = "Esto es publico";
    string private strprivate = "Esto es privado";

    // Booleans
    bool boolean;
    bool public boolean_true = true;
    bool private boolean_private = false;

    // Bytes
    bytes32 firstbytes;
    bytes4 secondbytes = 0;
    bytes1 byte23 = 0;

    // Algoritmo de hash
    bytes32 public hashing_keccak256 =
        keccak256(abi.encodePacked("Hello World"));
    bytes32 public hashing_sha256 = sha256(abi.encodePacked("Hello World"));
    bytes20 public hashing_ripemd160 =
        ripemd160(abi.encodePacked("Hello World"));

    // Address
    address myaddress;
    address public address1 = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address public address2 = msg.sender;

    // Enum
    enum options {
        ON,
        OFF
    }
    options state;
    options constant defaultChoice = options.OFF;

    function turnOn() public {
        state = options.ON;
    }

    function turnOff() public {
        state = options.OFF;
    }

    function displayState() public view returns (options) {
        return state;
    }
}
