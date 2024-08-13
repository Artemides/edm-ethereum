"use client";

import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Guru } from "./_components/guru";
import { Rube } from "./_components/rube";
import { Address } from "viem";
import { useSpeedEventHistory } from "@/hooks/useSpeedEventHistory";

const StreamerPage: NextPage = () => {
  const [opened, setOpened] = useState<Address[]>([]);
  const [closed, setClosed] = useState<Address[]>([]);
  const [challenged, setChallenged] = useState<Address[]>([]);

  const { address: connectedAddress } = useAccount();
  const { data: streamerOwner } = useSpeedReadContract({
    contractName: "Streamer",
    functionName: "owner",
  });

  const ownerKnown = streamerOwner !== undefined;
  const isGuru = ownerKnown && connectedAddress === streamerOwner;

  const { data: openChannelsHistory } = useSpeedEventHistory({
    contractName: "Streamer",
    eventName: "Opened",
    fromBlock: 0n,
    watch: true,
  });
  const { data: closedChannelsHistory } = useSpeedEventHistory({
    contractName: "Streamer",
    eventName: "Closed",
    fromBlock: 0n,
    watch: true,
  });
  const { data: challengedChannelsHistory } = useSpeedEventHistory({
    contractName: "Streamer",
    eventName: "Challenged",
    fromBlock: 0n,
    watch: true,
  });

  useEffect(() => {
    if (!openChannelsHistory) return;

    setOpened((_opened) => {
      if (openChannelsHistory.length === _opened.length) return _opened;

      const addresses = openChannelsHistory.map((event) => event.args[0]).reverse();
      return addresses;
    });
  }, [openChannelsHistory]);

  useEffect(() => {
    if (!closedChannelsHistory) return;
    setClosed((_closed) => {
      if (closedChannelsHistory.length === _closed.length) return _closed;

      const addresses = closedChannelsHistory.map((event) => event.args[0]).reverse();
      return addresses;
    });
  }, [closedChannelsHistory]);

  useEffect(() => {
    if (!challengedChannelsHistory) return;
    setChallenged((_challenged) => {
      if (challengedChannelsHistory.length === _challenged.length) return _challenged;

      const addresses = challengedChannelsHistory.map((event) => event.args[0]).reverse();
      return addresses;
    });
  }, [challengedChannelsHistory]);

  const writableChannels = opened.filter((address) => !closed.includes(address));

  return (
    <>
      <div className="flex items-center flex-col flex-grow w-full px-4">
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-24 w-full max-w-lg">
          {ownerKnown ? (
            isGuru ? (
              <Guru closed={closed} opened={opened} challenged={challenged} writable={writableChannels} />
            ) : (
              <Rube closed={closed} opened={opened} challenged={challenged} writable={writableChannels} />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default StreamerPage;
