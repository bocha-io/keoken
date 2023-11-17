/*
 * Create the system calls that the client can use to ask
 * for changes in the World state (using the System contracts).
 */

import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls({
  worldContract,
  waitForTransaction,
}: SetupNetworkResult) {
  const claim = async () => {
    try {
      // TODO: do not hardcode parameters
      const tx = await worldContract.write.claim([
        "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
        0,
      ]);
      await waitForTransaction(tx);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  };

  return {
    claim,
  };
}
