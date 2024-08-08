"use client";

import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { Roll, RollEvents } from "./_components/roll-events";
import { Winner, WinnerEvents } from "./_components/winner-events";
import { useScaffoldContract } from "@/hooks/useScaffoldContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import { useSpeedEventHistory } from "@/hooks/useSpeedEventHistory";
import { Address, formatEther, parseEther } from "viem";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { Amount } from "./_components/amount";
import { Address as AddressComponent } from "@/components/scaffold-eth/address";

const ROLL_ETH_VALUE = "0.002";
const MAX_TABLE_ROWS = 10;

const DicePage: NextPage = () => {
  const [rolled, setRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rolls, setRolls] = useState<Roll[]>([]);
  const [winners, setWinners] = useState<Winner[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);

  const { data: RiggleContract } = useScaffoldContract({
    contractName: "RiggedRoll",
  });

  const { data: riggedBalance } = useWatchBalance({
    address: RiggleContract?.address,
  });

  const { data: prize } = useSpeedReadContract({
    contractName: "DiceGame",
    functionName: "prize",
  });

  const { data: rollEvents, isLoading: rollEventLoading } =
    useSpeedEventHistory({
      contractName: "DiceGame",
      eventName: "Roll",
      fromBlock: 0n,
      watch: true,
    });
  const { data: winnerEvents, isLoading: winnerEventsyLoading } =
    useSpeedEventHistory({
      contractName: "DiceGame",
      eventName: "Winner",
      fromBlock: 0n,
      watch: true,
    });

  useEffect(() => {
    if (
      !rollEventLoading &&
      Boolean(rollEvents?.length) &&
      (rollEvents?.length as number) > rolls.length
    ) {
      setIsRolling(false);

      setRolls(
        (
          rollEvents?.map(({ args }) => ({
            address: args.player as Address,
            amount: Number(args.amount),
            roll: (args.roll as bigint).toString(16).toUpperCase(),
          })) || []
        ).slice(0, MAX_TABLE_ROWS)
      );
    }
  }, [rolls, rollEvents, rollEventLoading]);

  useEffect(() => {
    if (
      !winnerEventsyLoading &&
      Boolean(winnerEvents?.length) &&
      (winnerEvents?.length as number) > winners.length
    ) {
      setIsRolling(false);

      setWinners(
        (
          winnerEvents?.map(({ args }) => ({
            address: args.winner as Address,
            amount: args.amount as bigint,
          })) || []
        ).slice(0, MAX_TABLE_ROWS)
      );
    }
  }, [winnerEvents, winnerEventsyLoading, winners.length]);

  const { writeContractAsync: writeDiceGameAsync, isError: rollTheDiceError } =
    useSpeedWriteContract("DiceGame");

  const { writeContractAsync: writeRiggedRollAsync, isError: riggedRollError } =
    useSpeedWriteContract("RiggedRoll");

  useEffect(() => {
    if (rollTheDiceError || riggedRollError) {
      setIsRolling(false);
      setRolled(false);
    }
  }, [riggedRollError, rollTheDiceError]);

  useEffect(() => {
    if (videoRef.current && !isRolling) {
      // show last frame
      videoRef.current.currentTime = 9999;
    }
  }, [isRolling]);

  return (
    <div className="py-10 px-10">
      <div className="grid grid-cols-3 max-lg:grid-cols-1">
        <div className="max-lg:row-start-2">
          <RollEvents rolls={rolls} />
        </div>

        <div className="flex flex-col items-center pt-4 max-lg:row-start-1">
          <div className="flex w-full justify-center">
            <span className="text-xl">
              {" "}
              Roll a 0, 1, 2, 3, 4 or 5 to win the prize!{" "}
            </span>
          </div>

          <div className="flex items-center mt-1">
            <span className="text-lg mr-2">Prize:</span>
            <Amount
              amount={prize ? Number(formatEther(prize)) : 0}
              showUsdPrice
              className="text-lg"
            />
          </div>

          <button
            onClick={async () => {
              if (!rolled) {
                setRolled(true);
              }
              setIsRolling(true);
              try {
                await writeDiceGameAsync({
                  functionName: "rollTheDice",
                  value: parseEther(ROLL_ETH_VALUE),
                });
              } catch (err) {
                console.error("Error calling rollTheDice function", err);
              }
            }}
            disabled={isRolling}
            className="mt-2 btn btn-secondary btn-xl normal-case font-xl text-lg"
          >
            Roll the dice!
          </button>
          <div className="mt-4 pt-2 flex flex-col items-center w-full justify-center border-t-4 border-primary">
            <span className="text-2xl">Rigged Roll</span>
            <div className="flex mt-2 items-center">
              <span className="mr-2 text-lg">Address:</span>{" "}
              <AddressComponent size="lg" address={RiggleContract?.address} />{" "}
            </div>
            <div className="flex mt-1 items-center">
              <span className="text-lg mr-2">Balance:</span>
              <Amount
                amount={Number(riggedBalance?.formatted || 0)}
                showUsdPrice
                className="text-lg"
              />
            </div>
          </div>
          <button
            onClick={async () => {
              if (!rolled) {
                setRolled(true);
              }
              setIsRolling(true);
              try {
                await writeRiggedRollAsync({ functionName: "riggedRoll" });
              } catch (err) {
                console.error("Error calling riggedRoll function", err);
              }
            }}
            disabled={isRolling}
            className="mt-2 btn btn-secondary btn-xl normal-case font-xl text-lg"
          >
            Rigged Roll!
          </button>
          <div className="flex mt-8">
            {rolled ? (
              isRolling ? (
                <video
                  key="rolling"
                  width={300}
                  height={300}
                  loop
                  src="/rolls/Spin.webm"
                  autoPlay
                />
              ) : (
                <video
                  key="rolled"
                  width={300}
                  height={300}
                  src={`/rolls/${rolls[0]?.roll || "0"}.webm`}
                  autoPlay
                />
              )
            ) : (
              <video
                ref={videoRef}
                key="last"
                width={300}
                height={300}
                src={`/rolls/${rolls[0]?.roll || "0"}.webm`}
              />
            )}
          </div>
        </div>

        <div className="max-lg:row-start-3">
          <WinnerEvents winners={winners} />
        </div>
      </div>
    </div>
  );
};

export default DicePage;
