import { useState } from "react";
import { Metamask } from "./Header";
import { BrowserProvider, Contract } from "ethers";
import abi from "contracts/out/IWorld.sol/IWorld.abi.json";
import { useMUD } from "./MUDContext";

async function claimNFT(collection: string, id: string) {
  try {
    const signer = new BrowserProvider(window.ethereum).getSigner();
    let awaitedSigner = await signer;
    console.log(signer);
    let c = new Contract(
      "0x7bd472fc101d3a7caf3064b7c5788965cb34685f",
      abi,
      awaitedSigner,
    );
    console.log(c);
    let tx = await c.claim(collection, Number(id));
    console.log(tx);
  } catch (e) {
    alert(e);
  }
}

async function getNFTS(
  address: string,
  setter: React.Dispatch<React.SetStateAction<never[]>>,
) {
  const resp = await fetch(`https://keokenapi.bocha.io/api/nfts/${address}`);

  const parsed = await resp.json();

  console.log(parsed);

  // @ts-ignore
  let nfts = [];
  // @ts-ignore
  parsed.data.forEach((e) => {
    let symbol = e.symbol;
    // @ts-ignore
    e.assets.forEach((a) => {
      nfts.push({
        img: a.image_uri,
        collection: a.contract_address,
        id: a.contract_token_id,
        symbol: symbol,
      });
    });
  });

  // @ts-ignore
  setter(nfts);
}

export const ThirdSection = ({
  walletHook,
}: {
  walletHook: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  const [nfts, setNfts] = useState([]);
  const [personalRanking, setPersonalRanking] = useState(0);

  const {
    network: { useStore, tables },
  } = useMUD();

  const tempData = useStore((store) => {
    const coins = Object.values(store.getRecords(tables.Coins));
    console.log(coins);
    let myCoins = 0;
    if (walletHook[0] !== "") {
      const myCoinsTemp = coins.filter((e) => {
        if (
          e.key.key
            .toLowerCase()
            .includes(
              walletHook[0].substring(2, walletHook[0].length).toLowerCase(),
            )
        ) {
          return true;
        }
        return false;
      });
      if (myCoinsTemp.length > 0) {
        myCoins = myCoinsTemp[0].value.value;
      }
      if (myCoins != personalRanking) {
        setPersonalRanking(myCoins);
      }
    }

    const temp = coins.map((e) => ({
      wallet: e.key.key,
      coins: e.value.value,
    }));

    return temp.sort(function (a, b) {
      if (a.coins > b.coins) {
        return 1;
      }
      return 0;
    });
  });

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
          <div className="flex w-full">
            <div className="flex flex-col overflow-y-auto max-h-[30vh] font-primary text-left w-fit mx-auto">
              {
                // @ts-ignore
                nfts.map((e, i) => {
                  // @ts-ignore
                  return (
                    <div className="flex flex-row border-2 border-black rounded-xl p-2 m-2 space-x-4">
                      <img
                        key={i}
                        // @ts-ignore
                        src={e.img}
                        alt=""
                        className="max-w-[150px] my-auto "
                      />
                      <div className="flex flex-col font-secondary">
                        <p>
                          {
                            // @ts-ignore
                            e.symbol
                          }
                        </p>
                        <p>
                          Collection:{" "}
                          {
                            // @ts-ignore
                            e.collection.substring(0, 4) +
                              "..." +
                              e.collection.substring(
                                e.collection.length - 4,
                                e.collection.length,
                              )
                          }
                        </p>
                        <p>
                          ID:{" "}
                          {
                            // @ts-ignore
                            e.id.substring(0, 4) +
                              "..." +
                              e.id.substring(e.id.length - 4, e.id.length)
                          }
                        </p>
                        <button
                          className="p-2 m-2 border-2 border-black rounded-xl cursor-pointer"
                          onClick={async () => {
                            if (walletHook[0] === "") {
                              alert("connect your wallet first!");
                            } else {
                              await claimNFT(e.collection, e.id);
                            }
                          }}
                        >
                          CLAIM
                        </button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
          <button
            className="font-primary text-2xl border-black border-2 p-2 m-2 rounded-xl cursor-pointer"
            onClick={() => {
              if (walletHook[0] === "") {
                alert("connect your wallet first!");
              } else {
                getNFTS(walletHook[0], setNfts);
              }
            }}
          >
            Check your NFTS
          </button>
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
                Personal ranking: {personalRanking}
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
