"use client";

import { useFetchBlocks } from "@/hooks/useFetchBlocks";
import React, { useEffect, useState } from "react";
import { Address, createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";
import { TransactionsTable } from "./transactions-table";
import { PaginationButton } from "./pagination-button";
import { AddressCodeTab } from "./address-code-tab";
import { AddressStorageTab } from "./address-storage-tab";
import { AddressLogsTab } from "./address-log-tab";

type AddressCodeTabProps = {
  bytecode: string;
  assembly: string;
};

type ContractTabsProps = {
  address: Address;
  contractData: AddressCodeTabProps | null;
};

const pubClient = createPublicClient({
  chain: hardhat,
  transport: http(),
});

export const ContractTabs = ({ address, contractData }: ContractTabsProps) => {
  const {
    blocks,
    currentPage,
    setCurrentPage,
    totalBlocks,
    transactionReceipts,
  } = useFetchBlocks();
  const [activeTab, setActiveTab] = useState("transactions");
  const [isContract, setIsContract] = useState(false);

  useEffect(() => {
    const checkAddress = async () => {
      const contractCode = await pubClient.getCode({ address });
      setIsContract(contractCode !== undefined && contractCode !== "0x");
    };
    checkAddress();
  }, [address]);

  const filteredBlocks = blocks.filter((block) =>
    block.transactions.some((tx) => {
      if (typeof tx === "string") return false;

      return (
        tx.from.toLowerCase() === address.toLowerCase() ||
        tx.to?.toLowerCase() === address.toLowerCase()
      );
    })
  );

  return (
    <>
      {isContract && (
        <div className="tabs tabs-lifted w-min">
          <button
            className={`tab ${
              activeTab === "transactions" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`tab ${activeTab === "code" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
          <button
            className={`tab  ${activeTab === "storage" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("storage")}
          >
            Storage
          </button>
          <button
            className={`tab  ${activeTab === "logs" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("logs")}
          >
            Logs
          </button>
        </div>
      )}
      {activeTab === "transactions" && (
        <div className="pt-4">
          <TransactionsTable
            blocks={filteredBlocks}
            transactionReceipts={transactionReceipts}
          />
          <PaginationButton
            currentPage={currentPage}
            totalItems={Number(totalBlocks)}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      {activeTab === "code" && contractData && (
        <AddressCodeTab
          bytecode={contractData.bytecode}
          assembly={contractData.assembly}
        />
      )}
      {activeTab === "storage" && <AddressStorageTab address={address} />}
      {activeTab === "logs" && <AddressLogsTab address={address} />}
    </>
  );
};
