// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Persona 1 (Owner): 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
// Persona 2 (Operador): 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2

// Importacion de Smart Contracts de OpenZeppelin
import "@openzeppelin/contracts@4.5.0/token/ERC721/ERC721.sol";
// Cada vez que se genere un token, se generará un número para identificarlo
import "@openzeppelin/contracts@4.5.0/utils/Counters.sol";

contract erc721 is ERC721 {
    // Contadores para los IDs de los NFTs
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Constructor del Smart Contract
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    // Envio de NFTs
    function sendNFT(address _account) public {
        // Va a incrementar en 1 cada vez
        _tokenIds.increment();
        // Conocer que ID actual tenemos
        uint256 newItemId = _tokenIds.current();
        // Enviar un NFT al destinatario el ID
        _safeMint(_account, newItemId);
    }
}
