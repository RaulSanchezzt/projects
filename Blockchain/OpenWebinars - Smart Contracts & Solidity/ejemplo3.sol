// Modifiers
// SPDX-License-Identifier: GPL-3.0
// Define el rango de versiones de Solidity que va a utilizar
pragma solidity >=0.7.0 <0.9.0;

// Define el contrato
contract ejemplo3 {
    // Define un nuevo tipo de datos
    struct Viajes {
        string Destino;
        uint256 Precio; // Si no se define el número será entero de 256 bits por defecto
    }

    // Relacionar un año con los datos de un viaje
    // Registrar los viajes por año -> Clave es el año
    mapping(uint256 => Viajes) ViajesPorFecha;

    // Evitar que se registren dos viajes el mismo año = + Seguridad
    modifier compruebaFecha(uint256 fecha) {
        require(
            ViajesPorFecha[fecha].Precio == 0,    // Comprueba que en ese año no ha habido ningun viaje
            "Ya ha habido un viaje en esta fecha" // Mensaje que va a mostrar en la excepción
        );
        _; // Se ejecuta esta función después de ejecutar la función anterior
    }

    // Asocia una fecha con los datos de un viaje por parámetro   |     Modifier
    function registrar(
        uint256 fecha,
        string memory destino,
        uint256 precio
    ) public compruebaFecha(fecha) {
        ViajesPorFecha[fecha] = Viajes(destino, precio);
    }

    // Consultar que viaje se ha hecho en cada año
    function consultar(uint256 fecha)
        public
        view
        returns (string memory, uint256)
    {
        // Devuelve el valor guardado
        return (ViajesPorFecha[fecha].Destino, ViajesPorFecha[fecha].Precio);
    }
}
