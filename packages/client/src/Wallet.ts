import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

let projectID = "c330c0a8d2c2e669542150aa30f94b02";

const core = new Core({
  projectId: projectID,
});

export const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: "Demo app",
    description: "Demo Client as Wallet/Peer",
    url: "www.walletconnect.com",
    icons: [],
  },
});
