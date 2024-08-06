"use client";

import { IntegerInput } from "@/components/scaffold-eth/input/integer-input";
import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import { getTokenPrice } from "@/utils/scaffold-eth/wei";
import { NextPage } from "next";
import { useState } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

const TokenVendorPage: NextPage = () => {
  const { address } = useAccount();
  const [tokensToBuy, setTokensToBuy] = useState<bigint | string>("");

  const { data: forzaSymbol } = useSpeedReadContract({
    contractName: "ForzaToken",
    functionName: "symbol",
  });

  const { data: addressForzaBalance } = useSpeedReadContract({
    contractName: "ForzaToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: forzaEthRate } = useSpeedReadContract({
    contractName: "Vendor",
    functionName: "TOKENS_PER_ETH",
  });
  const { data: vendor } = useDeployedContractInfo("Vendor");

  const { data: vendorForzaBalance } = useSpeedReadContract({
    contractName: "ForzaToken",
    functionName: "balanceOf",
    args: [vendor?.address],
  });

  const { data: vendorEthBalance } = useWatchBalance({
    address: vendor?.address,
  });
  const { writeContractAsync: writeForzaAsync } =
    useSpeedWriteContract("ForzaToken");
  const { writeContractAsync: writeVendorAsync } =
    useSpeedWriteContract("Vendor");

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-2 border-secondary rounded-xl p-6 mt-24 w-full max-w-lg">
        <div className="text-xl">
          Your token balance:{" "}
          <div className="inline-flex items-center justify-center">
            {parseFloat(formatEther(addressForzaBalance || 0n)).toFixed(4)}
            <span className="font-bold ml-1">{forzaSymbol}</span>
          </div>
        </div>
        <hr className="w-full border-secondary my-3" />
        <div>
          Vendor token balance:{" "}
          <div className="inline-flex items-center justify-center">
            {Number(formatEther(vendorForzaBalance || 0n)).toFixed(4)}
            <span className="font-bold ml-1">{forzaSymbol}</span>
          </div>
        </div>
        <div>
          Vendor eth balance:{" "}
          {Number(formatEther(vendorEthBalance?.value || 0n)).toFixed(4)}
          <span className="font-bold ml-1">ETH</span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
        {" "}
        <div className="text-xl">Buy tokens</div>
        <div>{forzaEthRate?.toString() || 0} tokens per ETH</div>
        <div className="w-full flex flex-col space-y-2">
          <IntegerInput
            placeholder="amount of tokens to buy"
            value={tokensToBuy.toString()}
            onChange={(value) => setTokensToBuy(value)}
            disableMultiplyBy1e18
          />
        </div>
        <button
          className="btn btn-secondary mt-2"
          onClick={async () => {
            try {
              await writeVendorAsync({
                functionName: "buyTokens",
                value: getTokenPrice(tokensToBuy, forzaEthRate),
              });
            } catch (err) {
              console.error("Error calling buyTokens function");
            }
          }}
        >
          Buy Tokens
        </button>
      </div>
    </div>
  );
};

export default TokenVendorPage;
