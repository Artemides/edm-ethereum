import * as chains from "viem/chains";
export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjId: string;
  onlyLocalBurnerWallet: boolean;
};

const isDevelopment = process.env.NODE_ENV === "development";

export const scaffoldConfig = {
  targetNetworks: [
    ...(isDevelopment ? [chains.hardhat] : []),
    chains.sepolia,
    chains.arbitrum,
  ],
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
  walletConnectProjId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
    "3a8170812b534d0ff9d794f19a901d64",
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;
