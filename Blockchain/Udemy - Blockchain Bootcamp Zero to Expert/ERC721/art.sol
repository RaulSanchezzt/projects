/*

NFT Project:

1. Creation of digital artworks
2. Use of NFT tokens in artwork
3. Extraction of economic benefits for each NFT generated
4. NFT token with properties
5. Incremento de las propiedades del Token NFT
6. Sending of Smart Contract funds to the project owner
7. Compiler version 0.8.0
8. Use of NFT tokens with the OpenZeppelin project with version 4.4.2
9. Code in English

*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import ERC721 standard from OpenZeppelin
import "@openzeppelin/contracts@4.4.2/token/ERC721/ERC721.sol";
// Owner's proprietary functions
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";

// Instantiate contract by inheriting
contract ArtToken is ERC721, Ownable {
    // ====================
    // Initial Statements
    // ====================

    // Smart Contract Constructor
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    // NFT Token counter
    uint256 COUNTER;

    // Pricing of NFT Tokens (price of artwork)
    uint256 public fee = 5 ether;

    // Data structure with properties of the artwork
    struct Art {
        string name;
        uint256 id;
        uint256 dna;
        uint8 level;
        uint8 rarity;
    }

    // Storage structure for keeping artiworks
    Art[] public art_works;

    // Declaration of an event
    event NewArtWork(address indexed owner, uint256 id, uint256 dna);

    // ====================
    // Help Functions
    // ====================

    // Creation of a random number (required for NFT token properties)
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        bytes32 hash_randomNum = keccak256(
            abi.encodePacked(block.timestamp, msg.sender)
        );
        uint256 randomNum = uint256(hash_randomNum);
        return randomNum % _mod;
    }

    // NFT Token Creation (Artwork)
    function _createArtWork(string memory _name) internal {
        uint8 randRarity = uint8(_createRandomNum(1000));
        uint256 randDna = _createRandomNum(10 ** 16);
        Art memory newArtWork = Art(_name, COUNTER, randDna, 1, randRarity);
        art_works.push(newArtWork);
        _safeMint(msg.sender, COUNTER);
        emit NewArtWork(msg.sender, COUNTER, randDna);
        COUNTER++;
    }

    // NFT Token Price Update
    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    // Visualize the balance of the Smart Contract (ethers)
    function infoSmartContract() public view returns (address, uint256) {
        address SC_address = address(this);
        uint256 SC_money = address(this).balance / 10 ** 18;
        return (SC_address, SC_money);
    }

    // Obtaining all created NFT tokens (artwork)
    function getArtWorks() public view returns (Art[] memory) {
        return art_works;
    }

    // Obtaining a user's NFT tokens
    function getOwnerArtWork(
        address _owner
    ) public view returns (Art[] memory) {
        Art[] memory result = new Art[](balanceOf(_owner));
        uint256 counter_owner = 0;
        for (uint256 i = 0; i < art_works.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter_owner] = art_works[i];
                counter_owner++;
            }
        }
        return result;
    }

    // ====================
    // NFT Token Development
    // ====================

    // NFT Token Payment
    function createRandomArtWork(string memory _name) public payable {
        require(msg.value >= fee);
        _createArtWork(_name);
    }

    // Extraction of ethers from Smart Contract to the Owner
    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Level up NFT Tokens
    function levelUp(uint256 _artId) public {
        require(ownerOf(_artId) == msg.sender);
        Art storage art = art_works[_artId];
        art.level++;
    }
}
