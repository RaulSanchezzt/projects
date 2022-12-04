// Transferencia de ethers entre varias cuentas
// SPDX-License-Identifier: GPL-3.0
// Define el rango de versiones de Solidity que va a utilizar
pragma solidity >=0.7.0 <0.9.0;

// Define el contrato
contract ejemplo4 {
    // Indicar la dirección de destino de la transferencia. Tiene que ser payable para poder recibir fondos
    function transferEntreCuentas(address payable addr) public payable {
        // Transfiere la cantidad que le pasemos por parámetro
        addr.transfer(msg.value);
    }

    // Devuelve la cantidad que tiene una dirección que pasemos por parámetro
    function revisarBalance(address addr) public view returns (uint256) {
        uint256 balance = addr.balance;
        return (balance);
    }
}
