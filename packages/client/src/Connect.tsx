import { useWeb3Modal } from "@web3modal/wagmi/react";

// import the builder util
import { Web3Wallet, Web3WalletTypes } from "@walletconnect/web3wallet";
import { buildApprovedNamespaces, getSdkError } from "@walletconnect/utils";
import { web3wallet } from "./Wallet";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

async function onSessionProposal({
  id,
  params,
}: Web3WalletTypes.SessionProposal) {
  try {
    // ------- namespaces builder util ------------ //
    const approvedNamespaces = buildApprovedNamespaces({
      proposal: params,
      supportedNamespaces: {
        eip155: {
          chains: ["eip155:1", "eip155:137"],
          methods: ["eth_sendTransaction", "personal_sign"],
          events: ["accountsChanged", "chainChanged"],
          accounts: [
            "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
            "eip155:137:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
          ],
        },
      },
    });
    // ------- end namespaces builder util ------------ //

    const session = await web3wallet.approveSession({
      id,
      namespaces: approvedNamespaces,
    });
    console.log(session);
  } catch (error) {
    console.error("rejected");
  }
}

async function init() {
  return await EthereumProvider.init({
    projectId: "c330c0a8d2c2e669542150aa30f94b02",
    chains: [1],
    showQrModal: true,
    methods: ["eth_sign"],
  });
}

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  web3wallet.on("session_proposal", onSessionProposal);

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          let a = await init();
          await a.connect();
          console.log(a);
        }}
      >
        Connect
      </button>
    </>
  );
}
