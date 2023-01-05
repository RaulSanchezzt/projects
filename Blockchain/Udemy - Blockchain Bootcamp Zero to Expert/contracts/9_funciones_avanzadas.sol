// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

contract Food {
    // Estructura de datos

    struct dinnerPlate {
        string name;
        string ingredients;
    }

    // Menú del dia
    dinnerPlate[] public menu;

    // Creación de un nuevo menu
    function newMenu(string memory _name, string memory _ingredients) internal {
        menu.push(dinnerPlate(_name, _ingredients));
    }
}

// Hereda del contrato anterior
contract Hamburger is Food {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Cocinar una hamburguesa desde el Smart Contract principal
    function doHamburger(string memory _ingredients, uint _units) external {
        require(_units <= 5, "Ups, no puedes pedir tantan hamburguesas");
        newMenu("Hamburger", _ingredients);
    }

    // Modifier: Permitir el acceso solo al owner y solo al owner
    modifier onlyOwner() {
        require(
            owner == msg.sender,
            "No tienes permisos para ejecutar esta funcion"
        );
        _;
    }

    // Restricción a la ejecución (solo puede el owner)
    function hashPrivateNumber(
        uint _number
    ) public view onlyOwner returns (bytes32) {
        return keccak256(abi.encodePacked(_number));
    }
}
