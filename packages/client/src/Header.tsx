import { useState } from "react";

export async function getMetamaskAddress() {
  // TODO: ask for the correct network
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (e) {
    return "";
  }
}

export const Header = () => {
  const [wallet, setWallet] = useState("");
  return (
    <div className="w-full flex flex-col md:flex-row bg-green-500">
      <div className="grid w-full md:w-[50vw] justify-items-center md:justify-items-start">
        <div className="w-fit">Keoken</div>
      </div>
      <div className="grid w-full md:w-[50vw] justify-items-center md:justify-items-end">
        <div
          className="w-fit cursor-pointer"
          onClick={async () => {
            try {
              let wallet = await getMetamaskAddress();
              setWallet(wallet);
            } catch (e) {
              setWallet("");
            }
          }}
        >
          {wallet === "" ? "Connect your wallet" : wallet}
        </div>
      </div>
    </div>
  );
};
