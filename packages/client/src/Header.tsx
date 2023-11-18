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
    <div className="w-full flex flex-col md:flex-row bg-green-500 p-6 lg:p-2">
      <div className="grid w-full md:w-[50vw] justify-items-center md:justify-items-start">
        <div className="w-fit">
          <div className="flex justify-center lg:justify-end">
            <img
              src="logo-header.png"
              alt="logo"
              className="max-h-[65px] lg:max-h-[38px]"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full md:w-[50vw] justify-items-center md:justify-items-end">
        <div
          className="w-fit cursor-pointer pt-4 lg:pt-0"
          onClick={async () => {
            try {
              let wallet = await getMetamaskAddress();
              setWallet(wallet);
            } catch (e) {
              setWallet("");
            }
          }}
        >
          {wallet === "" ? (
            <div className="border-4 border-black rounded-[60px] pr-4 bg-white text-3xl flex flex-row justify-items-center max-h-[65px]  lg:max-h-[45px]">
              <img
                src="mm-logo.png"
                alt="mm logo"
                className="max-h-[65px] lg:max-h-[38px] my-auto "
              />
              <span className="my-auto pl-10 hidden lg:block">
                Connect your wallet
              </span>
              <span className="my-auto pl-10 block lg:hidden ">Connect </span>
            </div>
          ) : (
            <div className="border-4 border-black rounded-[60px] pr-4  bg-white text-3xl flex flex-row justify-items-center max-h-[65px] lg:max-h-[45px]">
              <img
                src="mm-logo.png"
                alt="mm logo"
                className="max-h-[65px] lg:max-h-[38px] my-auto "
              />

              <span className="my-auto pl-10 hidden lg:block">
                {wallet.substr(0, 4)}...
                {wallet.substr(wallet.length - 10, wallet.length)}
              </span>
              <span className="my-auto pl-10 block lg:hidden">
                {wallet.substr(0, 4)}...
                {wallet.substr(wallet.length - 4, wallet.length)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
