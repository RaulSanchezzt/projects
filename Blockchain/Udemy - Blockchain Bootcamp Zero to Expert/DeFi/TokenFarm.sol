// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Owner: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
// User: 0xdD870fA1b7C4700F2BD7f44238821C26f7392148

import "./JamToken.sol";
import "./RewToken.sol";

contract TokenFarm {
    // Declaraciones
    string public name = "Project Token Farm";
    address public owner;
    JamToken public jamToken;
    RewToken public rewToken;

    // Estructuras de datos
    address[] public stakers;
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    // Constructor
    constructor(RewToken _rewToken, JamToken _jamToken) {
        rewToken = _rewToken;
        jamToken = _jamToken;
        owner = msg.sender;
    }

    // Stake de tokens
    function stakeTokens(uint _amount) public {
        // Se requiere una cantidad superior a 0
        require(_amount > 0, "La cantidad no puede ser menor a 0");
        // Transferir tokens JAM al Smart Contract Principal
        jamToken.transferFrom(msg.sender, address(this), _amount);
        // Actualizar el saldo del staking
        stakingBalance[msg.sender] += _amount;
        // Guardar el staker
        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Actualizar el estado del staking
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Quitar el staking de los tokens
    function unstakeTokens() public {
        // Saldo del staking de un usuario
        uint balance = stakingBalance[msg.sender];
        // Se requiere una cantidad superior a 0
        require(balance > 0, "El balance del staking es 0");
        // Transferencia de los tokens al usuario
        jamToken.transfer(msg.sender, balance);
        // Resetea el balance de staking del usuario
        stakingBalance[msg.sender] = 0;
        // Actualizar el estado del staking
        isStaking[msg.sender] = false;
    }

    // Emision de Tokens (recompensas)
    function issueTokens() public {
        // Unicamente ejecutable por el owner
        require(msg.sender == owner, "No eres el owner");
        // Emitir tokens a todos los stakers
        for (uint i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if (balance > 0) {
                rewToken.transfer(recipient, balance);
            }
        }
    }
}
