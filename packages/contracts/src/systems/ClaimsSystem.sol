// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import {System} from "@latticexyz/world/src/System.sol";
import {Claimed, Coins} from "../codegen/index.sol";

function addressToEntityKey(address addr) pure returns (bytes32) {
    return bytes32(uint256(uint160(addr)));
}

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

contract ClaimsSystem is System {
    function claim(address collection, uint32 tokenid) public {
        bytes32 sender = addressToEntityKey(_msgSender());
        // The sender must be the onwer of the nft
        require(IERC721(collection).ownerOf(tokenid) == _msgSender(), "invalid owner");
        // The token must not be already used
        require(Claimed.get(collection, tokenid) == false, "already claimed");
        // Save the token as used
        Claimed.set(collection, tokenid, true);
        // Give the user some reward
        Coins.set(sender, Coins.get(sender) + 1);
    }
}
