"use client";

import { useEffect, useState } from "react";
import { Address, Log } from "viem";
import { useTargetNetwork } from "./useTargetNetwork";
import { usePublicClient } from "wagmi";

export const useContractLogs = (address: Address) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const { targetNetwork } = useTargetNetwork();
  const pubClient = usePublicClient({ chainId: targetNetwork.id });

  useEffect(() => {
    const getLogs = async () => {
      if (!pubClient) return console.error("Client not found");

      try {
        const _logs = await pubClient.getLogs({
          address,
          fromBlock: 0n,
          toBlock: "latest",
        });

        setLogs(_logs);
      } catch (error) {
        console.error("Failed to fetch logs", error);
      }
    };
    getLogs();
    return pubClient?.watchBlockNumber({
      onBlockNumber: async (_, prevBlockNumber) => {
        const _logs = await pubClient.getLogs({
          address,
          fromBlock: prevBlockNumber,
          toBlock: "latest",
        });
        setLogs((prevLogs) => [...prevLogs, ..._logs]);
      },
    });
  }, [address, pubClient]);

  return logs;
};
