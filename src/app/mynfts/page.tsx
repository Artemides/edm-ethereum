import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { NextPage } from "next";
import React from "react";
import { useAccount } from "wagmi";

export const MyNFTS: NextPage = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();

  const { writeContractAsync } = useSpeedWriteContract("YourCollectible");

  const { data: tokenIdCounter } = useSpeedReadContract({
    contractName: "YourCollectible",
    functionName: "tokenIdCounter",
    watch: true,
  });

  return <div>MyNFTS</div>;
};
