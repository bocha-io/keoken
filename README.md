# Keoken

Bridging Communities through NFT Ownership

ETHGlobal 2023 - Hackathon entry

## Stack

The webpage was built using:

- React
- MUD
- NFTScan
- Ankr infra
- Hosted on Netlify

## Idea

To give more value to the NFTs that are resting in the user wallets, we created a proof of concept that gives rewards inside an Autonomous World to NFT holders.

This was thought to bootstrap fully on-chain gaming communities but can be used for any dApp built on top of the MUD engine.

The rewards generated after the claiming process can be anything that the developer wants to offer to the community, in our case we are just giving points, but it could be any in-game item or even tokens.

## Built process

We started by creating a simple MUD project to spin up an Autonomous World.

After having the Autonomous World set up we connected it to the "external" world (the rest of the blockchain state) to be able to read the NFT balances from the user wallet.

The contract created verifies that the user is the owner of the NFT, marks the NFT as claimed (inside the Autonomous World) and gives the user some in-game coins.

We bridge some coins to Gnosis-Mainnet from Ethereum.

We deployed the contract to Gnosis-Mainnet, but we found a bug in the MUD's deployment script and the rpcs. Luckily when we tried again, the Autonomous World was deployed correctly.

After that, we added tailwind to the frontend and started to create a simple webpage.

We realized that we needed to display all the users' NFT to bring some usability to the site, so we created an account in NFTScan. We needed to secure that API key, so we created a simple backend to proxy the requests (the backend is in the `/backend` folder)

To test that everything was working fine, we needed to send the transaction to the Autonomous World using Metamask, we had some issues with the configuration between localnet and mainnet that was hardcoded by the Autonomous World template, but after some debugging, we were able to make it work.

The last step was to read the state of the Autonomous World and display that information to the user, we had some problems with the rpc configuration, but after proxying some requests using our server, we were able to see the correct information.

## How to run it

You need to create 2 files:

- `backend/constants.ts` and set the line `export const api_key = ` with your NFTScan API key.
- `packages/client/src/mud/constants.ts` and set your RPC keys:
  `export const GNOSIS_MAIN_HTTP = ""
export const GNOSIS_MAIN_WS = ""
`

## World deployed to Gnosis-Mainnet

[0x7fe5ed4d250c5a57c85471fd3addfe840c00988a](https://gnosisscan.io/address/0x7fe5ed4d250c5a57c85471fd3addfe840c00988a)
