// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import {System} from "@latticexyz/world/src/System.sol";
import {Claims} from "../codegen/index.sol";

function addressToEntityKey(address addr) pure returns (bytes32) {
    return bytes32(uint256(uint160(addr)));
}

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

contract ClaimSystem is System {
    function claim(address collection, uint32 tokenid) public {
        require(IERC721(collection).ownerOf(tokenid) == _msgSender(), "invalid owner");
        Claims.set(addressToEntityKey(_msgSender()), tokenid);
    }
}
