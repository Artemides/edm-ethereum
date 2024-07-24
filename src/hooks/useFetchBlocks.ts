import { decodeTransactionData } from "@/utils/scaffold-eth/decodeTransaction";
import { useCallback, useEffect, useState } from "react";
import {
  Block,
  Hash,
  Transaction,
  TransactionReceipt,
  createTestClient,
  publicActions,
  walletActions,
  webSocket,
} from "viem";
import { hardhat } from "viem/chains";

const BLOCKS_PER_PAGE = 20;

export const testClient = createTestClient({
  chain: hardhat,
  mode: "hardhat",
  transport: webSocket("ws://127.0.0.1:8545"),
})
  .extend(publicActions)
  .extend(walletActions);

export const useFetchBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [transactionReceipts, setTransactionReceipts] = useState<{
    [key: string]: TransactionReceipt;
  }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlocks, setTotalBlocks] = useState(0n);
  const [error, setError] = useState<Error | null>(null);

  const fetchBlocks = useCallback(async () => {
    setError(null);
    try {
      const blockNumber = await testClient.getBlockNumber();
      setTotalBlocks(blockNumber);

      const startingBlock = blockNumber - BigInt(currentPage * BLOCKS_PER_PAGE);
      const blocksToFetch = Array.from(
        {
          length: Number(
            BLOCKS_PER_PAGE < startingBlock + 1n
              ? BLOCKS_PER_PAGE
              : startingBlock + 1n
          ),
        },
        (_, i) => startingBlock - BigInt(i)
      );
      const blockRequests = blocksToFetch.map(async (block) => {
        try {
          return testClient.getBlock({
            blockNumber: block,
            includeTransactions: true,
          });
        } catch (err) {
          setError(err instanceof Error ? err : new Error("an error ocurred."));
          throw err;
        }
      });

      const fetchedBlocks = await Promise.all(blockRequests);

      fetchedBlocks.forEach((block) => {
        block.transactions.forEach((tx) =>
          decodeTransactionData(tx as Transaction)
        );
      });

      const txReceipts = await Promise.all(
        fetchedBlocks.flatMap((block) =>
          block.transactions.map(async (tx) => {
            try {
              const receipt = testClient.getTransactionReceipt({
                hash: tx.hash,
              });
              return { [tx.hash]: receipt };
            } catch (error) {
              setError(
                error instanceof Error ? error : new Error("An error occurred.")
              );
              throw error;
            }
          })
        )
      );
      setBlocks(fetchedBlocks);
      setTransactionReceipts((prevReceipts) => ({
        ...prevReceipts,
        ...Object.assign({}, ...txReceipts),
      }));
    } catch (error) {}
  }, [currentPage]);

  useEffect(() => {
    fetchBlocks();
  }, [fetchBlocks]);

  useEffect(() => {
    const handleNewBlock = async (block: Block) => {
      try {
        if (currentPage === 0) {
          if (block.transactions.length > 0) {
            const txDetails = await Promise.all(
              block.transactions.map((hash) =>
                testClient.getTransaction({ hash: hash as Hash })
              )
            );
            block.transactions = txDetails;
          }

          block.transactions.forEach((tx) =>
            decodeTransactionData(tx as Transaction)
          );
        }

        const receipts = await Promise.all(
          block.transactions.map(async (tx) => {
            try {
              const receipt = await testClient.getTransactionReceipt({
                hash: (tx as Transaction).hash,
              });
              return { [(tx as Transaction).hash]: receipt };
            } catch (err) {
              setError(
                err instanceof Error
                  ? err
                  : new Error("An error occurred fetching receipt.")
              );
              throw err;
            }
          })
        );
        setBlocks((prevBlocks) => [
          block,
          ...prevBlocks.slice(0, BLOCKS_PER_PAGE - 1),
        ]);
        setTransactionReceipts((prevReceipts) => ({
          ...prevReceipts,
          ...Object.assign({}, ...receipts),
        }));

        if (block.number) {
          setTotalBlocks(block.number);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred."));
      }
    };

    return testClient.watchBlocks({
      onBlock: handleNewBlock,
      includeTransactions: true,
    });
  }, [currentPage]);

  return {
    blocks,
    transactionReceipts,
    currentPage,
    setCurrentPage,
    totalBlocks,
    error,
  };
};
