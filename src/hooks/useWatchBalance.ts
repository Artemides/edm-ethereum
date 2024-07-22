import { UseBalanceParameters, useBalance, useBlockNumber } from "wagmi";
import { useTargetNetwork } from "./useTargetNetwork";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useWatchBalance = (balanceParams: UseBalanceParameters) => {
  const { targetNetwork } = useTargetNetwork();
  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({
    watch: true,
    chainId: targetNetwork.id,
  });

  const { queryKey, ...rest } = useBalance(balanceParams);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber]);

  return rest;
};
