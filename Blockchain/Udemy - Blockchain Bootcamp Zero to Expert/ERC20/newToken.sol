// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

// Importamos el estandar que hemos creado
import "./MyStandard.sol";

// Nuevo contrato heredando del estandar
contract customERC20 is ERC20 {
    // Constructor del Smart Contract
    constructor() ERC20("Raul", "RST") {}

    // Crear nuevos tokens cuando despliegue
    function createTokens() public {
        _mint(msg.sender, 1000);
    }
}
