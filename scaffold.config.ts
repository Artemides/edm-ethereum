import * as chains from "viem/chains";
export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjId: string;
  onlyLocalBurnerWallet: boolean;
};

export const scaffoldConfig = {
  targetNetworks: [chains.hardhat],
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
  walletConnectProjId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJ_ID || "",
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;
