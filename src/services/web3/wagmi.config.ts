import { createConfig } from "wagmi";
import { scaffoldConfig } from "../../../scaffold.config";
import { Chain, createClient, http } from "viem";
import { hardhat, mainnet } from "viem/chains";
import { wagmiConnectors } from "./wagmiConnectors";
import { getAlchemyHttpUrl } from "@/utils/scaffold-eth/network";

const { targetNetworks } = scaffoldConfig;

export const enabledChains = targetNetworks.find((nt: Chain) => nt.id === 1)
  ? targetNetworks
  : ([...targetNetworks, mainnet] as const);

export const wagmiConfig = createConfig({
  chains: enabledChains,
  connectors: wagmiConnectors,
  ssr: true,
  client({ chain }) {
    return createClient({
      chain,
      transport: http(getAlchemyHttpUrl(chain.id)),
      ...(chain.id !== hardhat.id
        ? { pollingInterval: scaffoldConfig.pollingInterval }
        : {}),
    });
  },
});
