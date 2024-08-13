"use client";

import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import React, { useEffect, useState } from "react";
import { Address as AddressLike } from "viem";

export type Voucher = { updatedBalance: bigint; signature: `0x${string}` };

type GuruProps = {
  challenged: Array<AddressLike>;
  closed: Array<AddressLike>;
  opened: Array<AddressLike>;
  writable: Array<AddressLike>;
};

export const STREAM_ETH_VALUE = "0.5";

export const Guru = ({ opened, writable }: GuruProps) => {
  const { data: Streamer } = useDeployedContractInfo("Streamer");
  const {} = useWatchBalance({ address: Streamer?.address });

  const [wisdoms, setWisdoms] = useState<Record<AddressLike, string>>({});
  const [vouchers, setVouchers] = useState<Record<AddressLike, Voucher>>({});
  const [channels, setChannels] = useState<
    Record<AddressLike, BroadcastChannel>
  >({});

  useEffect(() => {
    setChannels((prevChannels) => {
      opened.forEach((chan) => {
        if (prevChannels[chan]) return;

        prevChannels[chan] = new BroadcastChannel(chan);
      });

      return prevChannels;
    });
  }, [opened]);

  return <div>Guiro</div>;
};
