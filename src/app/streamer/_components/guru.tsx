"use client";

import { Address } from "@/components/scaffold-eth/address";
import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import React, { useCallback, useEffect, useState } from "react";
import { Address as AddressLike, encodePacked, formatEther, keccak256, parseEther, toBytes, verifyMessage } from "viem";
import { ETH_PER_CHARACTER } from "./rube";
import { notification } from "@/utils/scaffold-eth/notification";
import { CashOutVoucher } from "./cash-out-voucher";
import { useSpeedEventHistory } from "@/hooks/useSpeedEventHistory";

export type Voucher = { updatedBalance: bigint; signature: `0x${string}` };

type GuruProps = {
  challenged: Array<AddressLike>;
  closed: Array<AddressLike>;
  opened: Array<AddressLike>;
  writable: Array<AddressLike>;
};

export const STREAM_ETH_VALUE = "0.5";

export const Guru = ({ opened, writable, challenged, closed }: GuruProps) => {
  const { data: Streamer } = useDeployedContractInfo("Streamer");
  const { data: streamerBalance } = useWatchBalance({
    address: Streamer?.address,
  });

  const [wisdoms, setWisdoms] = useState<Record<AddressLike, string>>({});
  const [vouchers, setVouchers] = useState<Record<AddressLike, Voucher>>({});
  const [channels, setChannels] = useState<Record<AddressLike, BroadcastChannel>>({});

  const { data: challengeHistory } = useSpeedEventHistory({
    contractName: "Streamer",
    eventName: "Challenged",
    fromBlock: 0n,
    watch: true,
  });

  const provideService = (address: AddressLike, wisdom: string) => {
    const voucher = vouchers[address];
    const wisdomCost = BigInt(wisdom.length) * parseEther(ETH_PER_CHARACTER);
    const tolerance = parseEther(ETH_PER_CHARACTER) * 3n;

    if (!voucher && wisdomCost > tolerance) {
      notification.warning(`${address} Cut off due to unpaid wisdoms`);
      return;
    }

    if (voucher) {
      const wisdomPaid = voucher.updatedBalance - parseEther(STREAM_ETH_VALUE);
      if (Math.abs(Number(wisdomCost - wisdomPaid)) > tolerance) {
        notification.warning(`${address} Cut off due to unpaid wisdoms`);
        return;
      }
    }

    setWisdoms((prev) => ({ ...prev, [address]: wisdom }));
    channels[address]?.postMessage(wisdom);
  };

  const receiveVoucher = useCallback((address: AddressLike) => {
    return async function processVoucher({ data }: { data: Pick<Voucher, "signature"> & { updatedBalance: string } }) {
      if (!data.updatedBalance) return;

      const updatedBalance = BigInt(`0x${data.updatedBalance}`);

      const msgRaw = toBytes(keccak256(encodePacked(["uint256"], [updatedBalance])));

      try {
        const isValid = await verifyMessage({
          address,
          message: { raw: msgRaw },
          signature: data.signature,
        });

        if (!isValid) {
          console.log("Invalid Message");
          return;
        }

        setVouchers((prevVouchers) => {
          const voucher = prevVouchers[address];

          if (!voucher || updatedBalance < voucher.updatedBalance) {
            return {
              ...prevVouchers,
              [address]: { ...data, updatedBalance },
            };
          }

          return prevVouchers;
        });
      } catch (error) {
        console.error("Something wen wrong verifying voucher");
        return;
      }
    };
  }, []);

  useEffect(() => {
    setChannels((prevChannels) => {
      opened.forEach((chan) => {
        if (prevChannels[chan]) return;

        prevChannels[chan] = new BroadcastChannel(chan);
        prevChannels[chan].onmessage = receiveVoucher(chan);
      });

      return prevChannels;
    });
  }, [opened, receiveVoucher]);

  useEffect(() => {
    if (!challengeHistory || challengeHistory.length <= 0) return;
  }, [challengeHistory]);

  return (
    <>
      <p className="block text-2xl mt-0 mb-2 font-semibold">Hello Guru!</p>
      <p className="block text-xl mt-0 mb-1 font-semibold">
        You have {writable.length} channel{writable.length == 1 ? "" : "s"} open
      </p>
      <p className="mt-0 text-lg text-center font-semibold">
        Total ETH locked: {Number(formatEther(streamerBalance?.value || 0n)).toFixed(4)} ETH
      </p>
      <div className="mt-4 text-lg">
        Channels with <button className="btn btn-sm btn-error">RED</button> withdrawal buttons are under challenge
        on-chain, and should be redeemed ASAP.
      </div>
      <div className="mt-4 w-full flex flex-col">
        {writable.map((clientAddress) => (
          <div key={clientAddress} className="w-full flex flex-col border-primary border-t py-6">
            <Address address={clientAddress} size="xl" />
            <textarea
              className="mt-3 bg-base-200"
              rows={3}
              placeholder="Provide your wisdom here..."
              onChange={(e) => {
                e.stopPropagation();
                const updatedWisdom = e.target.value;
                provideService(clientAddress, updatedWisdom);
              }}
              value={wisdoms[clientAddress]}
            />

            <div className="mt-2 flex justify-between">
              <div>
                Served: <strong>{wisdoms[clientAddress]?.length || 0}</strong>
                &nbsp;chars
              </div>
              <div>
                Received:{" "}
                <strong id={`claimable-${clientAddress}`}>
                  {vouchers[clientAddress]
                    ? formatEther(parseEther(STREAM_ETH_VALUE) - vouchers[clientAddress].updatedBalance)
                    : 0}
                </strong>
                &nbsp;ETH
              </div>
            </div>

            <CashOutVoucher
              key={clientAddress}
              clientAddress={clientAddress}
              challenged={challenged}
              closed={closed}
              voucher={vouchers[clientAddress]}
            />
          </div>
        ))}
      </div>
    </>
  );
};
