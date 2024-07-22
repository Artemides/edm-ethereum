import * as chains from "viem/chains";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { scaffoldConfig } from "../../../scaffold.config";
import { rainbowkitBurnerWallet } from "burner-connector";

const { targetNetworks, onlyLocalBurnerWallet } = scaffoldConfig;

const wallets = [
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  ledgerWallet,
  rainbowWallet,
  safeWallet,
  ...(!targetNetworks.some(
    (nt) => nt.id !== (chains.hardhat as chains.Chain).id
  ) || onlyLocalBurnerWallet
    ? [rainbowkitBurnerWallet]
    : []),
];

export const wagmiConnectors = connectorsForWallets(
  [
    {
      groupName: "Supported wallet",
      wallets,
    },
  ],
  { appName: "speedrun-nft", projectId: scaffoldConfig.walletConnectProjId }
);
