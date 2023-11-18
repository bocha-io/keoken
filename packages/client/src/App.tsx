import { BrowserProvider, ethers, Contract } from "ethers";
import { useMUD } from "./MUDContext";

let abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "tokenid",
        type: "uint32",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const styleUnset = { all: "unset" } as const;

// import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
//
// import { WagmiConfig } from "wagmi";
// import { arbitrum, mainnet } from "viem/chains";
// import ConnectButton from "./Connect";
//
// // 1. Get projectId
// const projectId = "c330c0a8d2c2e669542150aa30f94b02";
//
// // 2. Create wagmiConfig
// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };
//
// const chains = [mainnet, arbitrum];
// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
//
// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains });

declare global {
  interface Window {
    ethereum?: any;
    keplr?: any;
    getOfflineSigner?: any;
  }
}

export async function getMetamaskAddress() {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (e) {
    return "";
  }
}

export const App = () => {
  return (
    <>
      <div className="text-4xl">Hola</div>

      <button
        onClick={async (e) => {
          e.preventDefault();
          let address = await getMetamaskAddress();
          console.log(address);
          const signer = new BrowserProvider(window.ethereum).getSigner();
          let awaitedSigner = await signer;
          console.log(signer);
          let c = new Contract(
            "0x6e9474e9c83676b9a71133ff96db43e7aa0a4342",
            abi,
            awaitedSigner,
          );
          console.log(c);
          let tx = c.claim("0x6e9474e9c83676b9a71133ff96db43e7aa0a4342", 1);
          console.log(tx);
        }}
      >
        try mm
      </button>
    </>
  );
};
