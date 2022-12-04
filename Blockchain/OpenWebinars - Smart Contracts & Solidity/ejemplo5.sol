// Receive & Eventos - Transferencia de ethers a nuestro contrato
// SPDX-License-Identifier: GPL-3.0
// Define el rango de versiones de Solidity que va a utilizar
pragma solidity >=0.7.0 <0.9.0;

// Define el contrato
contract ejemplo5 {
    // Obtener dirección de nuestro Smart Contract
    address contrato = address(this);
    // Convertimos esta dirección en payable
    address payable contrato_pay = payable(contrato);

    // Evento cada vez que se envian Ethers al contrato
    event transferido(address);

    // Comprobar el saldo de nuestro Smart Contract
    function getSaldoContrato() public view returns (uint256) {
        return (contrato.balance);
    }

    // Transferir Ethers al Smart Contract
    function ethersToContrato() public payable {
        contrato_pay.transfer(msg.value);
        // Emite un evento con la dirección de la cuenta que está ejecutando la función
        emit transferido(msg.sender);
    }

    // Usamos esta función para permitir que este contrato pueda recibir fondos
    receive() external payable {}
}
