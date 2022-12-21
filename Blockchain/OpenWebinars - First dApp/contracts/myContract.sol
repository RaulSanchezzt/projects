// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract myContract {

    struct Trips {
        string Destination;
        uint256 Price;
    }

    mapping (uint256 => Trips) TripsByDate;

    function save (uint256 date, string memory destination, uint256 price) public {
        TripsByDate[date] = Trips(destination, price);
    }

    function consult (uint256 date) public view returns(string memory, uint256) {
        string memory destination = TripsByDate[date].Destination;
        uint256 price = TripsByDate[date].Price;
        return(destination, price);
    }
}