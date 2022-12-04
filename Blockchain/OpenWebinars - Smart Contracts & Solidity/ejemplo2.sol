// Mappings & Structs
// SPDX-License-Identifier: GPL-3.0
// Define el rango de versiones de Solidity que va a utilizar
pragma solidity >=0.7.0 <0.9.0;

// Define el contrato
contract ejemplo2 {
    // Define un nuevo tipo de datos
    struct Peliculas {
        string Titulo;
        uint256 Fecha;
        bool Recomendado;
    }

    // Relacionar el nombre de una persona con su pelicula favorita
    mapping(string => Peliculas) PeliculasFavs;

    // Asocia un nombre con su pelicula favorita por parámetro
    function registrar(
        string memory nombre,
        string memory titulo,
        uint256 fecha,
        bool recomendado
    ) public {
        PeliculasFavs[nombre] = Peliculas(titulo, fecha, recomendado);
    }

    // Consulta la pelicula favorita de la persona
    function consultar(string memory nombre)
        public
        view
        returns (
            string memory,
            uint256,
            bool
        )
    {
        // Asigna cada variable con el valor que ha guardado en el struct
        string memory titulo = PeliculasFavs[nombre].Titulo;
        uint256 fecha = PeliculasFavs[nombre].Fecha;
        bool recomendado = PeliculasFavs[nombre].Recomendado;
        // Devuelve los valores
        return (titulo, fecha, recomendado);
    }
}
