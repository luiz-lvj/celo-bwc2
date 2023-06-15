// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Valid {

    mapping(address => bool) public validatedSources;
    mapping(address => string) public sourcesName;
    mapping(address => string) public sourcesPhone;
    mapping(address => string) public sourcesCompany;

    mapping(bytes => address) public validLinks;

    address owner;

    modifier isOwner() {
        require(
            msg.sender == owner,
            "You are not the administrator - Not allowed to do this."
        );
        _;
    }

    
    constructor() {
        owner = msg.sender;
    }
    
    function addSource(string memory _name, string memory _phone, string memory _company) public {
        sourcesName[msg.sender] = _name;
        sourcesPhone[msg.sender] = _phone;
        sourcesCompany[msg.sender] = _company;
        validatedSources[msg.sender] = true;
    }


    function addLink(bytes memory _link) public {
        validLinks[_link] = address(msg.sender); 
    }

    
    function isValidLink(bytes memory _link) public view returns (bool) {
        if(validLinks[_link] != address(0)) {
            return true;
        }
        return false;
    }
}
