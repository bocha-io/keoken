import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Claims: {
      dataStruct: false,
      valueSchema: {
        token: "uint32",
      },
    },
  },
});
