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
  const {
    network: { tables, useStore },
    systemCalls: { addTask, toggleTask, deleteTask },
  } = useMUD();

  const tasks = useStore((state) => {
    const records = Object.values(state.getRecords(tables.Tasks));
    records.sort((a, b) => Number(a.value.createdAt - b.value.createdAt));
    return records;
  });

  return (
    <>
      <table>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td align="right">
                <input
                  type="checkbox"
                  checked={task.value.completedAt > 0n}
                  title={
                    task.value.completedAt === 0n
                      ? "Mark task as completed"
                      : "Mark task as incomplete"
                  }
                  onChange={async (event) => {
                    event.preventDefault();
                    const checkbox = event.currentTarget;

                    checkbox.disabled = true;
                    try {
                      await toggleTask(task.key.key);
                    } finally {
                      checkbox.disabled = false;
                    }
                  }}
                />
              </td>
              <td>
                {task.value.completedAt > 0n ? (
                  <s>{task.value.description}</s>
                ) : (
                  <>{task.value.description}</>
                )}
              </td>
              <td align="right">
                <button
                  type="button"
                  title="Delete task"
                  style={styleUnset}
                  onClick={async (event) => {
                    event.preventDefault();
                    if (
                      !window.confirm(
                        "Are you sure you want to delete this task?",
                      )
                    )
                      return;

                    const button = event.currentTarget;
                    button.disabled = true;
                    try {
                      await deleteTask(task.key.key);
                    } finally {
                      button.disabled = false;
                    }
                  }}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="checkbox" disabled />
            </td>
            <td colSpan={2}>
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const fieldset = form.querySelector("fieldset");
                  if (!(fieldset instanceof HTMLFieldSetElement)) return;

                  const formData = new FormData(form);
                  const desc = formData.get("description");
                  if (typeof desc !== "string") return;

                  fieldset.disabled = true;
                  try {
                    await addTask(desc);
                    form.reset();
                  } finally {
                    fieldset.disabled = false;
                  }
                }}
              >
                <fieldset style={styleUnset}>
                  <input type="text" name="description" />{" "}
                  <button type="submit" title="Add task">
                    Add
                  </button>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      let address = await getMetamaskAddress();
                      console.log(address);
                      const signer = new BrowserProvider(
                        window.ethereum,
                      ).getSigner();
                      let awaitedSigner = await signer;
                      console.log(signer);
                      let c = new Contract(
                        "0x6e9474e9c83676b9a71133ff96db43e7aa0a4342",
                        abi,
                        awaitedSigner,
                      );
                      console.log(c);
                      let tx = c.claim(
                        "0x6e9474e9c83676b9a71133ff96db43e7aa0a4342",
                        1,
                      );
                      console.log(tx);
                    }}
                  >
                    try mm
                  </button>
                </fieldset>
              </form>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
