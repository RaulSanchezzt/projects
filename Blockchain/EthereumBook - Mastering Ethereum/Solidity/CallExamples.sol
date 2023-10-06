// SPDX-License-Identifier: CC-BY-SA-4.0
pragma solidity 0.8.21;

contract calledContract {
    event callEvent(address sender, address origin, address from);

    function calledFunction() public {
        emit callEvent(msg.sender, tx.origin, address(this));
    }
}

library calledLibrary {
    event callEvent(address sender, address origin, address from);

    function calledFunction() public {
        emit callEvent(msg.sender, tx.origin, address(this));
    }
}

contract caller {
    function make_calls(calledContract _calledContract) public {
        // Calling calledContract and calledLibrary directly
        _calledContract.calledFunction();
        calledLibrary.calledFunction();

        // Low-level calls using the address object for calledContract
        require(
            address(_calledContract).call(
                abi.encodeWithSignature("calledFunction()")
            )
        );
        require(
            address(_calledContract).delegatecall(
                bytes4(keccak256("calledFunction()"))
            )
        );
    }
}
