"use client";

import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { NextPage } from "next";

const Dex: NextPage = () => {
  const {} = useSpeedReadContract({
    contractName: "D",
  });
  return <div></div>;
};
