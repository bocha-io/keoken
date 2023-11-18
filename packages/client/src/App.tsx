import { BrowserProvider, ethers, Contract } from "ethers";
import { useMUD } from "./MUDContext";
import { useState } from "react";
import { Header } from "./Header";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";
import { Footer } from "./Footer";

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

export const App = () => {
  const walletHook = useState("");
  return (
    <>
      <section className=" bg-gradient-to-b from-[#E9FFB4] via-[#E9FFB4] to-white  h-fit md:min-h-screen flex flex-col">
        <Header walletHook={walletHook} />
        <FirstSection />
      </section>

      <section
        id="second"
        className="bg-gradient-to-b from-white via-[#FFFFFF] to-[#FFFFFF] h-fit md:min-h-screen"
      >
        <SecondSection />
      </section>

      <section
        id="third"
        className="bg-gradient-to-b from-white via-[#E9FFB4] to-[#E9FFB4] h-fit md:min-h-screen"
      >
        <ThirdSection walletHook={walletHook} />
      </section>

      <section id="footer" className="bg-[#E9FFB4] h-content">
        <Footer />
      </section>
    </>
  );
};
