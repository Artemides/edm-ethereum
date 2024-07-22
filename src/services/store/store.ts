import { ChainWithAttributes } from "@/utils/scaffold-eth/network";
import { create } from "zustand";
import { scaffoldConfig } from "../../../scaffold.config";

type GlobalState = {
  nativeCurrencyPrice: number;
  setNativeCurrencyPrice: (price: number) => void;
  targetNetwork: ChainWithAttributes;
  setTargetNetwork: (network: ChainWithAttributes) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  nativeCurrencyPrice: 0,
  setNativeCurrencyPrice: (price) =>
    set(() => ({ nativeCurrencyPrice: price })),
  targetNetwork: scaffoldConfig.targetNetworks[0],
  setTargetNetwork: (network) => set(() => ({ targetNetwork: network })),
}));
