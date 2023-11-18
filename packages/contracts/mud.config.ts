import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Coins: "uint32",
    Claimed: {
      keySchema: {
        collection: "address",
        id: "uint32",
      },
      valueSchema: {
        claimed: "bool",
      },
    },
  },
});
