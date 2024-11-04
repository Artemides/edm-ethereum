"use client";

import React, { useEffect, useState } from "react";
import { Address, createPublicClient, http, toHex } from "viem";
import { hardhat } from "viem/chains";

const pubClient = createPublicClient({
  transport: http(),
  chain: hardhat,
});

export const AddressStorageTab = ({ address }: { address: Address }) => {
  const [storage, setStorage] = useState<string[]>([]);

  useEffect(() => {
    const fetchStorage = async () => {
      let storageAt = [];
      let idx = 0;

      while (true) {
        const dataAt = await pubClient.getStorageAt({
          address,
          slot: toHex(idx),
        });

        if (dataAt === "0x" + "0".repeat(64)) break;
        if (dataAt) {
          storageAt.push(dataAt);
        }
        idx++;
      }
      setStorage(storageAt);
    };

    fetchStorage();
  }, [address]);

  return (
    <div className="flex flex-col gap-3 p-4">
      {storage.length > 0 ? (
        <div className="mockup-code overflow-auto max-h-[500px]">
          <pre className="px-5 whitespace-pre-wrap break-words">
            {storage.map((data, i) => (
              <div key={i}>
                <strong>Storage Slot {i}:</strong> {data}
              </div>
            ))}
          </pre>
        </div>
      ) : (
        <div className="text-lg">
          This contract does not have any variables.
        </div>
      )}
    </div>
  );
};
