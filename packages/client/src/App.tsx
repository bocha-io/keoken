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
      <section className=" bg-white  h-fit md:min-h-screen flex flex-col">
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
        className="bg-gradient-to-b from-white via-white to-[#E9FFB4] h-fit md:min-h-screen"
      >
        <ThirdSection walletHook={walletHook} />
      </section>

      <section id="footer" className="bg-[#E9FFB4] h-content">
        <Footer />
      </section>
    </>
  );
};
