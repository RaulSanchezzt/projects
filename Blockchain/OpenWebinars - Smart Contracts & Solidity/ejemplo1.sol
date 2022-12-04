// Definición de funciones | Ejecución e implementación
// SPDX-License-Identifier: GPL-3.0
// Define el rango de versiones de Solidity que va a utilizar
pragma solidity >=0.7.0 <0.9.0;

// Define el contrato
contract ejemplo1 {
    // Crea dos variables públicas -> Desde remix pueden ser llamadas para devolver su valor como si fuesen una función
    string public primeraPalabra;
    uint256 public primerNumero;

    // El constructor va a definir el valor inicial. Al pasarlo por parámetro de la función, tenemos que indicar los valores antes de desplegarlo
    constructor(uint256 numero, string memory palabra) {
        primeraPalabra = palabra;
        primerNumero = numero;
    }

    // Función para cambiar el número mediante parámetro
    function cambiaNumero(uint256 nuevoNumero) public {
        primerNumero = nuevoNumero;
    }

    // Función para cambiar la palabra mediante parámetro
    function cambiaPalabra(string memory nuevaPalabra) public {
        primeraPalabra = nuevaPalabra;
    }

    // Función para sumar dos valores por parámetro
    function suma(uint256 a, uint256 b) public pure returns (uint256) {
        return (a + b);
    }

    // Función para consultar el valor del número y palabra
    /*
    function obtenValor () public view  returns(uint256, string memory) {
        return(primerNumero, primeraPalabra);
    }
    */
}
