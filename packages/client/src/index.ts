import { setup } from "./mud/setup";
import mudConfig from "contracts/mud.config";

const {
  components,
  systemCalls: { claim },
  network,
} = await setup();

// Components expose a stream that triggers when the component is updated.
components.Claims.update$.subscribe((update) => {
  const [nextValue, prevValue] = update.value;
  console.log("Claims updated", update, { nextValue, prevValue });
  document.getElementById("claims")!.innerHTML = String(
    nextValue?.value ?? "unset",
  );
});

// Just for demonstration purposes: we create a global function that can be
// called to invoke the Increment system contract via the world. (See IncrementSystem.sol.)
(window as any).claim = async () => {
  console.log("claim", await claim());
};

// https://vitejs.dev/guide/env-and-mode.html
if (import.meta.env.DEV) {
  const { mount: mountDevTools } = await import("@latticexyz/dev-tools");
  mountDevTools({
    config: mudConfig,
    publicClient: network.publicClient,
    walletClient: network.walletClient,
    latestBlock$: network.latestBlock$,
    storedBlockLogs$: network.storedBlockLogs$,
    worldAddress: network.worldContract.address,
    worldAbi: network.worldContract.abi,
    write$: network.write$,
    recsWorld: network.world,
  });
}
