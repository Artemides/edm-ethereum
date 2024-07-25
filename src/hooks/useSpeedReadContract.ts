import {
  AbiFunctionReturnType,
  ContractAbi,
  ContractName,
  UseScaffoldReadConfig,
} from "@/utils/scaffold-eth/contract";
import { ExtractAbiFunctionNames } from "abitype";
import { useDeployedContractInfo } from "./useDeployedContract";
import { useTargetNetwork } from "./useTargetNetwork";
import { useBlockNumber, useReadContract } from "wagmi";
import {
  QueryObserverResult,
  RefetchOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { ReadContractErrorType } from "viem";
import { useEffect } from "react";

export const useSpeedReadContract = <
  TContractName extends ContractName,
  TFunctionName extends ExtractAbiFunctionNames<
    ContractAbi<TContractName>,
    "pure" | "view"
  >
>({
  contractName,
  functionName,
  args,
  ...config
}: UseScaffoldReadConfig<TContractName, TFunctionName>) => {
  const { data: deployedContract } = useDeployedContractInfo(contractName);
  const { targetNetwork } = useTargetNetwork();
  const { query, watch, ...contractConfig } = config;

  const defaultWatch = watch ?? true;

  const response = useReadContract({
    chainId: targetNetwork.id,
    functionName,
    address: deployedContract?.address,
    abi: deployedContract?.abi,
    args,
    ...(contractConfig as any),
    query: {
      enabled: !Array.isArray(args) || !args.some((arg) => arg === undefined),
      ...query,
    },
  }) as Omit<ReturnType<typeof useReadContract>, "data" | "refetch"> & {
    data: AbiFunctionReturnType<ContractAbi, TFunctionName> | undefined;
    refetch: (
      options?: RefetchOptions | undefined
    ) => Promise<
      QueryObserverResult<
        AbiFunctionReturnType<ContractAbi, TFunctionName>,
        ReadContractErrorType
      >
    >;
  };

  const queryClient = useQueryClient();

  const { data: blockNumber } = useBlockNumber({
    watch: defaultWatch,
    chainId: targetNetwork.id,
    query: {
      enabled: defaultWatch,
    },
  });

  useEffect(() => {
    if (defaultWatch) {
      queryClient.invalidateQueries({ queryKey: response.queryKey });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber]);

  return response;
};
