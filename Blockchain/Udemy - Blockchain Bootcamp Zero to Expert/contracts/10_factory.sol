// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

contract padre {
    // Almacenamiento de la informacion del Factory
    mapping(address => address) public personal_contract;

    // Emision de los nuevos Smart Contracts
    function Factory() public {
        address addr_personal_contract = address(
            new hijo(msg.sender, address(this))
        );
        personal_contract[msg.sender] = addr_personal_contract;
    }
}

contract hijo {
    // Estructura de datos del propietario
    Owner public propietario;
    struct Owner {
        address _owner;
        address _smartcontractPadre;
    }

    // Datos recibidos al nuevo Smart Contract
    constructor(address _account, address _accountSC) {
        propietario._owner = _account;
        propietario._smartcontractPadre = _accountSC;
    }
}

/* 
Comprobacion: 
1. Desplegar el contrato padre
2. Crear un nuevo contrato con el botón Factory
3. Comprobar la dirección del Smart Contract hijo usando nuestra dirección (owner)
4. Cambiar el selector de contratos al hijo y pegar la dirección ya existente para desplegarlo
*/
