import {
  ContractAbi,
  ContractName,
  UseScaffoldEventHistoryConfig,
  UseScaffoldEventHistoryData,
} from "@/utils/scaffold-eth/contract";
import { useDeployedContractInfo } from "./useDeployedContract";
import { Abi, AbiEvent, ExtractAbiEventNames } from "abitype";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePublicClient } from "wagmi";
import { useTargetNetwork } from "./useTargetNetwork";
import { GetLogsReturnType, Log } from "viem";
import { replacer } from "@/utils/scaffold-eth/common";
import { useInterval } from "usehooks-ts";
import { scaffoldConfig } from "../../scaffold.config";
import { hardhat } from "viem/chains";

export const useSpeedEventHistory = <
  TContractName extends ContractName,
  TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
  TBlockData extends boolean = false,
  TTransactionData extends boolean = false,
  TReceiptData extends boolean = false
>({
  blockData,
  contractName,
  eventName,
  enabled,
  fromBlock,
  filters,
  transactionData,
  receiptData,
  watch,
}: UseScaffoldEventHistoryConfig<
  TContractName,
  TEventName,
  TBlockData,
  TTransactionData,
  TReceiptData
>) => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [fromBlockUpdated, setFromBlockUpdated] = useState<bigint>(fromBlock);

  const { data: contractDeployed, isLoading: deployedContractLoading } =
    useDeployedContractInfo(contractName);

  const { targetNetwork } = useTargetNetwork();
  const publicClient = usePublicClient({
    chainId: targetNetwork.id,
  });

  const readEvents = useCallback(
    async () => {
      setLoading(true);
      try {
        if (!contractDeployed) {
          throw new Error(`${contractName} not deployed`);
        }
        if (!enabled) {
          throw new Error("Hook disabled");
        }
        if (!publicClient) {
          throw new Error("Public client not found");
        }

        const event = (contractDeployed.abi as Abi).find(
          (part) => part.type === "event" && part.name === eventName
        ) as AbiEvent;
        const blockNumber = await publicClient.getBlockNumber({ cacheTime: 0 });
        if (blockNumber >= fromBlockUpdated) {
          const logs = (await publicClient.getLogs({
            address: contractDeployed.address,
            event,
            args: filters,
            fromBlock: fromBlockUpdated,
            toBlock: blockNumber,
          })) as GetLogsReturnType<AbiEvent>;

          setFromBlockUpdated(blockNumber + 1n);

          const newEvents: any[] = [];

          for (let index = logs.length - 1; index >= 0; index--) {
            newEvents.push({
              log: logs[index],
              args: logs[index].args,
              block:
                blockData && logs[index].blockHash === null
                  ? null
                  : await publicClient.getBlock({
                      blockHash: logs[index].blockHash,
                    }),
              transaction:
                transactionData && logs[index].transactionHash === null
                  ? null
                  : await publicClient.getTransaction({
                      hash: logs[index].transactionHash,
                    }),
              receipt:
                receiptData && logs[index].transactionHash === null
                  ? null
                  : await publicClient.getTransactionReceipt({
                      hash: logs[index].transactionHash,
                    }),
            });
          }

          setEvents((prevEvents) => [...newEvents, ...prevEvents]);
          setError(undefined);
        }
      } catch (error: any) {
        if (events.length > 0) {
          setEvents([]);
        }

        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      blockData,
      contractDeployed,
      contractName,
      enabled,
      eventName,
      events.length,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(filters, replacer),
      fromBlockUpdated,
      publicClient,
      receiptData,
      transactionData,
    ]
  );

  useEffect(() => {
    if (!deployedContractLoading) {
      readEvents();
    }
  }, [readEvents, deployedContractLoading]);

  useEffect(() => {
    // Reset the internal state when target network or fromBlock changed
    setEvents([]);
    setFromBlockUpdated(fromBlock);
    setError(undefined);
  }, [fromBlock, targetNetwork.id]);

  useInterval(
    async () => {
      if (!deployedContractLoading) {
        readEvents();
      }
    },
    watch && enabled
      ? targetNetwork.id !== hardhat.id
        ? scaffoldConfig.pollingInterval
        : 4_000
      : null
  );

  const eventHistoryData = useMemo(
    () =>
      events?.map(addIndexedArgsToEvent) as UseScaffoldEventHistoryData<
        TContractName,
        TEventName,
        TBlockData,
        TTransactionData,
        TReceiptData
      >,
    [events]
  );

  return {
    data: eventHistoryData,
    isLoading: loading,
    error,
  };
};

export const addIndexedArgsToEvent = (event: any) => {
  if (event.args && !Array.isArray(event.args)) {
    return { ...event, args: { ...event.args, ...Object.values(event.args) } };
  }

  return event;
};
