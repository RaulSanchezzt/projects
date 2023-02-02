// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.5.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.5.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.5.0/access/Ownable.sol";

contract loteria is ERC20, Ownable {
    // ========================================
    // Gestion de los tokens
    // ========================================

    // Direccion del contrato NFT del proyecto
    address public nft;

    // Constructor
    constructor() ERC20("Loteria", "SLT") {
        _mint(address(this), 1000);
        nft = address(new mainERC721());
    }

    // Ganador del premio de la loteria
    address public ganador;

    // Registro del usuario
    mapping(address => address) public usuario_contract;

    // Precio de los tokens
    function precioTokens(uint256 _numTokens) internal pure returns (uint256) {
        return _numTokens * (1 ether);
    }

    // Visualizacion del balance de tokens ERC-20 de un usuario
    function balanceTokens(address _account) public view returns (uint256) {
        return balanceOf(_account);
    }

    // Visualizacion del balance de tokens ERC-20 del Smart Contract
    function balanceTokensSC() public view returns (uint256) {
        return balanceOf(address(this));
    }

    // Visualizacion del balance de ethers del Smart Contract
    // 1 ether = 1^18 wei
    function balanceEthersSC() public view returns (uint256) {
        return address(this).balance / 10 ** 18;
    }

    // Generacion de nuevos Tokens ERC-20
    function mint(uint256 _cantidad) public onlyOwner {
        _mint(address(this), _cantidad);
    }

    // Registro de usuarios
    function registrar() internal {
        address addr_personal_contract = address(
            new boletosNFTs(msg.sender, address(this), nft)
        );
        usuario_contract[msg.sender] = addr_personal_contract;
    }

    // Informacion de un usuario
    function usersInfo(address _account) public view returns (address) {
        return usuario_contract[_account];
    }

    // Compra de tokens ERC-20
    function compraTokens(uint256 _numTokens) public payable {
        // Registro del usuario
        if (usuario_contract[msg.sender] == address(0)) {
            registrar();
        }
        // Establecimiento del coste de los tokens a comprar
        uint256 coste = precioTokens(_numTokens);
        // Evaluacion del dinero que el cliente paga por los tokens
        require(
            msg.value >= coste,
            "Compra menos tokens o paga con mas ethers"
        );
        // Obtencion del numero de tokens disponibles
        uint256 balance = balanceTokensSC();
        require(_numTokens <= balance, "Compra un numero menor de tokens");
        // Devolucion del dinero sobrante
        uint256 returnValue = msg.value - coste;
        // El Smart Contract devuelve la cantidad restante
        payable(msg.sender).transfer(returnValue);
        // Envio de los tokens al cliente/usuario
        _transfer(address(this), msg.sender, _numTokens);
    }

    // Devolucion de tokens al Smart Contract
    function devolverTokens(uint _numTokens) public payable {
        // El numero de tokens debe ser mayor a 0
        require(
            _numTokens > 0,
            "Necesitas devolver un numero de tokens mayor a 0"
        );
        // El usuario debe acreditar tener los tokens que quiere devolver
        require(
            _numTokens <= balanceTokens(msg.sender),
            "No tienes los tokens que deseas devolver"
        );
        // El usuario transfiere los tokens al Smart Contract
        _transfer(msg.sender, address(this), _numTokens);
        // El Smart Contract envia los ethers al usuario
        payable(msg.sender).transfer(precioTokens(_numTokens));
    }
}

// Smart Contract de NFTs
contract mainERC721 is ERC721 {
    address public direccionLoteria;

    constructor() ERC721("Loteria", "SLN") {
        direccionLoteria = msg.sender;
    }

    // Creacion de NFTs
    function safeMint(address _propietario, uint256 _boleto) public {
        require(
            msg.sender == loteria(direccionLoteria).usersInfo(_propietario),
            "No tienes permisos para ejecutar esta funcion."
        );
        _safeMint(_propietario, _boleto);
    }
}

contract boletosNFTs {
    // Datos relevantes del propietario
    struct Owner {
        address direccionPropietario;
        address contratoPadre;
        address contratoNFT;
        address contratoUsuario;
    }
    // Estructura de datos de tipo Owner
    Owner public propietario;

    // Constructor del Smart Contract (hijo)
    constructor(
        address _propietario,
        address _contratoPadre,
        address _contratoNFT
    ) {
        propietario = Owner(
            _propietario,
            _contratoPadre,
            _contratoNFT,
            address(this)
        );
    }

    // Conversion de los numeros de los boletos de loteria
    function mintBoleto(address _propietario, uint _boleto) public {
        require(
            msg.sender == propietario.contratoPadre,
            "No tienes permisos para ejecutar esta funcion."
        );
        mainERC721(propietario.contratoNFT).safeMint(_propietario, _boleto);
    }
}
