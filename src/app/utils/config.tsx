import { http, createConfig } from "@wagmi/core";


const bittorrentchainTestnet = {
  id: 1029,
  name: "BitTorrent Chain Donau",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Donau",
    symbol: "BTT",
  },
  rpcUrls: {
    default: { http: ["https://pre-rpc.bittorrentchain.io/"] },
  },
  blockExplorers: {
    default: { name: "schedule-transactions scan", url: "https://testscan.bittorrentchain.io/" },
  },
  testnet: true,
};
export const config = createConfig({
  chains: [bittorrentchainTestnet],
  transports: {
    [bittorrentchainTestnet.id]: http(),
   
  },
});
