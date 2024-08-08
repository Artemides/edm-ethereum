"use client";

import { useTargetNetwork } from "@/hooks/useTargetNetwork";
import { useGlobalState } from "@/services/store/store";
import React, { useEffect, useState } from "react";

type AmountProps = {
  amount: number;
  isLoading: boolean;
  disableToggle: boolean;
  showUsdPrice?: boolean;
  className?: string;
};
export const Amount = ({
  amount,
  isLoading,
  disableToggle,
  showUsdPrice = false,
  className,
}: AmountProps) => {
  const [isEthPrice, setIsEthPrice] = useState(!showUsdPrice);

  const ethPrice = useGlobalState((state) => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();

  useEffect(() => {
    setIsEthPrice(!showUsdPrice);
  }, [showUsdPrice]);

  if (isLoading) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }

  const onToggleBalance = () => {
    if (!disableToggle) {
      setIsEthPrice(!isEthPrice);
    }
  };

  return (
    <button
      className={`btn btn-sm px-0 btn-ghost flex flex-col font-normal items-center hover:bg-transparent ${className}`}
      onClick={onToggleBalance}
    >
      <div className="w-full flex items-center justify-center">
        {isEthPrice ? (
          <>
            <span>{amount?.toFixed(4)}</span>
            <span className="font-bold ml-1">
              {targetNetwork.nativeCurrency.symbol}
            </span>
          </>
        ) : (
          <>
            <span className="font-bold mr-1">$</span>
            <span>{(amount * ethPrice).toFixed(2)}</span>
          </>
        )}
      </div>
    </button>
  );
};
