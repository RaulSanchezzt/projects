// SPDX-License-Identifier: MIT

// Version
pragma solidity ^0.8.4;

// Interfaz para las Funciones globales

interface IERC20 {
    // Suministro total
    function totalSupply() external view returns (uint256);

    // Balance de tokens de cada usuario
    function balanceOf(address account) external view returns (uint256);

    // Transferencia de tokens | Devuelve si la transferencia se ha ejecutado bien o no
    function transfer(address to, uint256 amount) external returns (bool);

    // Permitir el gasto de tokens de una cartera ajena
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    // Asignación propia
    function approve(address spender, uint256 amount) external returns (bool);

    // Desde que dirección se envian estos tokens
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    // Eventos - Emitir información a la blockchain
    // Informacion cuando se transfieran tokens
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Asignación de un spender
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

// Este contrato va a heredar de la interfaz ^
contract ERC20 is IERC20 {
    // Estructuras de datos
    // Relacionar una dirección con su valance de tokens
    mapping(address => uint256) private _balances;

    // Designaciones y permisos. De owner a spender para que pueda gastar una cantidad
    //      Owner   =>         Spender => 5 tokens
    mapping(address => mapping(address => uint256)) private _allowance;

    // Variables
    // Cantidad de tokens que tiene el Smart Contract
    uint256 private _totalSupply;

    // Nombre para el Token
    string private _name;

    // Símbolo para identificarlo
    string private _symbol;

    // Constructor para cuando se haga el deploy
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    // Funciones de ayuda
    // Conocer el nombre
    function name() public view virtual returns (string memory) {
        return _name;
    }

    // Conocer el símbolo
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    // Definir número de decimales que se pueden utilizar
    function decimals() public view virtual returns (uint8) {
        return 17;
    }

    // Conocer la cantidad total de tokens
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    // Conocer la cantidad de tokens de un usuario
    function balanceOf(
        address account
    ) public view virtual override returns (uint256) {
        return _balances[account];
    }

    // Funciones elementales
    // Tranferencia | A quien le enviamos los fondos y la cantidad de tokens
    function transfer(
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address owner = msg.sender;
        // Función interna
        _transfer(owner, to, amount);
        return true;
    }

    // Dar tokens
    function allowance(
        address owner,
        address spender
    ) public view virtual override returns (uint256) {
        // Devuelve el valor que deja el owner a un spender
        return _allowance[owner][spender];
    }

    // Aprovar la asignación del allowance
    function approve(
        address spender,
        uint256 amount
    ) public virtual override returns (bool) {
        // Devuelve si se ha ejecutado con éxito esa asignación
        address owner = msg.sender;
        // Función interna
        _approve(owner, spender, amount);
        return true;
    }

    // Desde que dirección se envian estos tokens
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = msg.sender;
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    // Añadir mas cantidad en allowance
    function increaseAllowance(
        address spender,
        uint256 addedValue
    ) public virtual returns (bool) {
        address owner = msg.sender;
        _approve(owner, spender, _allowance[owner][spender] + addedValue);
        return true;
    }

    // Quitar cantidad en allowance
    function decreaseAllowance(
        address spender,
        uint256 substractedValue
    ) public virtual returns (bool) {
        address owner = msg.sender;
        uint256 currentAllowance = _allowance[owner][spender];
        // Comparar si tiene mas tokens de lo que queremos quitar
        require(
            currentAllowance >= substractedValue,
            "ERC20: Decreased allowance below zero"
        );
        // Ahorrar gas
        unchecked {
            _approve(owner, spender, currentAllowance - substractedValue);
        }
        return true;
    }

    // Funciones internas
    // Transferir
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        // El emisor no es una cuenta vacía
        require(from != address(0), "ERC20: transfer from zero address");
        // El receptor no es una cuenta vacía
        require(to != address(0), "ERC20: transfer to zero address");
        // Previamente a la transferencia de tokens
        _beforeTokenTransfer(from, to, amount);
        // El emisor tiene el balance necesario
        uint256 fromBalance = _balances[from];
        require(
            fromBalance >= amount,
            "ERC20: transfer amount exceeds current balance"
        );
        // Quitar el balance del emisor
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        // Actualizar el balance del destinatario
        _balances[to] += amount;
        // Emitir el evento de la transaccion
        emit Transfer(from, to, amount);
        // Hook
        _afterTokenTransfer(from, to, amount);
    }

    // Permitir crear tokens
    function _mint(address account, uint amount) internal virtual {
        // La dirección no es nula
        require(account != address(0), "ERC20: mint to zero address");
        // Hook
        _beforeTokenTransfer(address(0), account, amount);
        // Añadir mas tokens al total suply
        _totalSupply += amount;
        // Actualizar el balance de la cuenta
        _balances[account] += amount;
        // Emitir evento de la transferencia
        emit Transfer(address(0), account, amount);
        // Hook
        _afterTokenTransfer(address(0), account, amount);
    }

    // Permitir quemar tokens
    function _burn(address account, uint256 amount) internal virtual {
        // La direccion no es nula
        require(account != address(0), "ERC20: burn from the zero address");
        // Hook
        _beforeTokenTransfer(account, address(0), amount);
        // El emisor tiene el balance necesario
        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceed balance");
        // Asignar un balance nuevo
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        // Decrementar el suministro total
        _totalSupply -= amount;
        // Emitir evento de la transferencia
        emit Transfer(account, address(0), amount);
        // Hook
        _afterTokenTransfer(account, address(0), amount);
    }

    // Aprobar asignar una cantidad de tokens a un spender para poder gastarlos
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        // Comprobar que es una direccion valida
        require(owner != address(0), "ERC20: aprove from the zero address");
        require(spender != address(0), "ERC20: aprove to the zero address");
        // Obtener la cantidad asignada del owner al spender
        _allowance[owner][spender] = amount;
        // Emitir el evento
        emit Approval(owner, spender, amount);
    }

    // Gastar prestamo del transferFrom
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        // Cual es el allowance actual de un owner a un spender
        uint256 currentAllowance = allowance(owner, spender);
        // Comprobar si el prestamo ya tiene el maximo asignado
        if (currentAllowance != type(uint256).max) {
            // Debe ser mayor o igual a la cantidad que queremos gastar
            require(
                currentAllowance >= amount,
                "ERC20: insufficient allowance"
            );
            // Aprobar la transaccion
            unchecked {
                _approve(owner, spender, amount);
            }
        }
    }

    // Hooks para poder reemplazarlo en otro Smart Contract
    // En caso que queramos hacer algo antes de una transaccion
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    // En caso de que queramos hacer algo despues de una transaccion
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
