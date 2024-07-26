"use client";

import { wagmiConfig } from "@/services/web3/wagmi.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ProgressBar } from "./scaffold-eth/progress-bar";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import BlockieAvatar from "./scaffold-eth/blokie-avatar";
import { useTheme } from "next-themes";
import { Header } from "./header";
import { Footer } from "./footer";
import { Toaster } from "react-hot-toast";

export const SpeedrunApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
      <Toaster/>
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ProgressBar />
        <RainbowKitProvider
          avatar={BlockieAvatar}
          theme={isDarkMode ? darkTheme() : lightTheme()}
        >
          <SpeedrunApp>{children}</SpeedrunApp>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
