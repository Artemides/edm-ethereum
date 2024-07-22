import { ChainWithAttributes } from "@/utils/scaffold-eth/network";
import { create } from "zustand";
import { scaffoldConfig } from "../../../scaffold.config";

type GlobalState = {
  nativeCurrency: { price: number; isFetching: boolean };
  setNativeCurrencyPrice: (price: number) => void;
  setNativeCurrencyFetching: (isFetching: boolean) => void;
  targetNetwork: ChainWithAttributes;
  setTargetNetwork: (network: ChainWithAttributes) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  nativeCurrency: {
    price: 0,
    isFetching: false,
  },
  setNativeCurrencyPrice: (price) =>
    set((state) => ({ nativeCurrency: { ...state.nativeCurrency, price } })),
  setNativeCurrencyFetching: (isFetching) =>
    set((state) => ({
      nativeCurrency: { ...state.nativeCurrency, isFetching },
    })),
  targetNetwork: scaffoldConfig.targetNetworks[0],
  setTargetNetwork: (network) => set(() => ({ targetNetwork: network })),
}));
