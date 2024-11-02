"use client";

import { useEffect } from "react";
import { Abi, AbiFunction } from "abitype";
import { Address } from "viem";
import { useReadContract } from "wagmi";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useTargetNetwork } from "@/hooks/useTargetNetwork";
import { getParsedError } from "@/utils/scaffold-eth/getParsedError";
import { notification } from "@/utils/scaffold-eth/notification";
import { InheritanceTooltip } from "./inheritance-tooltip";
import { displayTxResult } from "./utilsDisplay";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";

type DisplayVariableProps = {
  contractAddress: Address;
  abiFunction: AbiFunction;
  refreshDisplayVariables: boolean;
  inheritedFrom?: string;
  abi: Abi;
};

export const DisplayVariable = ({
  contractAddress,
  abiFunction,
  refreshDisplayVariables,
  abi,
  inheritedFrom,
}: DisplayVariableProps) => {
  const { targetNetwork } = useTargetNetwork();

  const {
    data: result,
    isFetching,
    refetch,
    error,
  } = useReadContract({
    address: contractAddress,
    functionName: abiFunction.name,
    abi: abi,
    chainId: targetNetwork.id,
    query: {
      retry: false,
    },
  });

  const { showAnimation } = useAnimationConfig(result);

  useEffect(() => {
    refetch();
  }, [refetch, refreshDisplayVariables]);

  useEffect(() => {
    if (error) {
      const parsedError = getParsedError(error);
      notification.error(parsedError);
    }
  }, [error]);

  return (
    <div className="space-y-1 pb-2">
      <div className="flex items-center">
        <h3 className="font-medium text-lg mb-0 break-all">
          {abiFunction.name}
        </h3>
        <button
          className="btn btn-ghost btn-xs"
          onClick={async () => await refetch()}
        >
          {isFetching ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <ArrowPathIcon
              className="h-3 w-3 cursor-pointer"
              aria-hidden="true"
            />
          )}
        </button>
        <InheritanceTooltip inheritedFrom={inheritedFrom} />
      </div>
      <div className="text-gray-500 font-medium flex flex-col items-start">
        <div>
          <div
            className={`break-all block transition bg-transparent ${
              showAnimation ? "bg-warning rounded-sm animate-pulse-fast" : ""
            }`}
          >
            {displayTxResult(result)}
          </div>
        </div>
      </div>
    </div>
  );
};