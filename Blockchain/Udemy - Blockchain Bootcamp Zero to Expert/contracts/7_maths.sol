// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

contract maths {
    // Suma
    function suma(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    // Resta
    function resta(uint a, uint b) public pure returns (uint) {
        return a - b;
    }

    // Multiplicacion
    function multiplicacion(uint a, uint b) public pure returns (uint) {
        return a * b;
    }

    // Division
    function division(uint a, uint b) public pure returns (uint) {
        return a / b;
    }

    // Exponenciacion
    function exponenciacion(uint a, uint b) public pure returns (uint) {
        return a ** b;
    }

    // Modulo
    function modulo(uint a, uint b) public pure returns (uint) {
        return a % b;
    }
}
