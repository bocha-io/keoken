import { Metamask } from "./Header";

export const ThirdSection = ({
  walletHook,
}: {
  walletHook: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  const tempData = [
    { wallet: "0x0000000000000000000000000000000000000", coins: 1000 },
    { wallet: "0x0000000000000000000000000000000000001", coins: 2000 },
  ];
  return (
    <div className="flex flex-col lg:flex-row h-fit md:min-h-screen text-center my-auto">
      <div className="w-[90vw] lg:w-[45vw] my-auto mx-auto">
        <div className="h-[60vh] border-[5px] border-black m-4 bg-white justify-items-center mx-auto justify-center">
          <div className="flex flex-row w-fit mx-auto">
            <img src="garra1.png" alt="" className="" />
            <div className="my-auto">
              <Metamask walletHook={walletHook} />
            </div>
            <img src="garra.png" alt="" className="" />
          </div>
        </div>
      </div>
      <div className="w-[90vw] lg:w-[45vw] my-auto mx-auto">
        <div className="h-[60vh] border-[5px] border-black m-4 bg-white justify-items-center mx-auto justify-center">
          <div className="flex flex-col w-full mx-auto">
            <div className="font-primary text-5xl text-center pt-3">
              Ranking
            </div>
            <div className="w-full">
              <p className="h-1 w-3/4 bg-black mx-auto"></p>
            </div>

            <div className="flex border-2 border-black p-4 m-4 w-fit mx-auto">
              <img
                src="gatete.png"
                alt="gatete"
                className="max-h-[71px] max-w-[60px] my-auto "
              />

              <span className="font-primary text-2xl my-auto px-3">
                Personal ranking: 500
              </span>

              <img
                src="gatete.png"
                alt="gatete"
                className="max-h-[71px] max-w-[60px] my-auto "
              />
            </div>
            <div>
              {tempData.map((e, i) => {
                return (
                  <p className="text-xl font-primary text-center" key={i}>
                    {i}.{e.wallet.substring(0, 4)}...
                    {e.wallet.substring(e.wallet.length - 4, e.wallet.length)}:
                    {e.coins}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
