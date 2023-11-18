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

export const Metamask = ({
  walletHook,
}: {
  walletHook: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  return (
    <div
      className="w-fit cursor-pointer pt-4 lg:pt-0"
      onClick={async () => {
        try {
          let wallet = await getMetamaskAddress();
          walletHook[1](wallet);
        } catch (e) {
          walletHook[1]("");
        }
      }}
    >
      {walletHook[0] === "" ? (
        <div className="border-4 border-black rounded-[60px] pr-4 bg-white text-2xl flex flex-row justify-items-center max-h-[65px]  lg:max-h-[45px]">
          <img
            src="mm-logo.png"
            alt="mm logo"
            className="max-h-[65px] lg:max-h-[38px] my-auto "
          />
          <span className="my-auto pl-10 hidden lg:block font-primary">
            Connect your wallet
          </span>
          <span className="my-auto pl-10 block lg:hidden font-primary">
            Connect{" "}
          </span>
        </div>
      ) : (
        <div className="border-4 border-black rounded-[60px] pr-4  bg-white text-2xl flex flex-row justify-items-center max-h-[65px] lg:max-h-[45px]">
          <img
            src="mm-logo.png"
            alt="mm logo"
            className="max-h-[65px] lg:max-h-[38px] my-auto "
          />

          <span className="my-auto pl-10 hidden lg:block font-primary">
            {walletHook[0].substr(0, 4)}...
            {walletHook[0].substr(
              walletHook[0].length - 10,
              walletHook[0].length,
            )}
          </span>
          <span className="my-auto pl-10 block lg:hidden font-primary">
            {walletHook[0].substr(0, 4)}...
            {walletHook[0].substr(
              walletHook[0].length - 4,
              walletHook[0].length,
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export const Header = ({
  walletHook,
}: {
  walletHook: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#DCF693] p-6 lg:p-2">
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
        <Metamask walletHook={walletHook} />
      </div>
    </div>
  );
};
