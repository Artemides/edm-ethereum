"use client";

import { ETHToPrice } from "@/app/staker/_components/eth-to-price";
import { Address } from "@/components/scaffold-eth/address";
import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { useTargetNetwork } from "@/hooks/useTargetNetwork";
import humanizeDuration from "humanize-duration";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";

export const StakerEpochs = () => {
  const { address } = useAccount();
  const { targetNetwork } = useTargetNetwork();
  const { data: StakerEpochs } = useDeployedContractInfo("StakerEpochs");

  const { data: timeLeft } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "timeLeft",
    watch: true,
  });
  const { data: currentEpoch } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "currentEpoch",
    watch: true,
  });

  const { data: myStake } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "balanceAt",
    args: [address, currentEpoch],
    watch: true,
  });

  const { data: epochActive } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "epochActive",
    args: [currentEpoch],
    watch: true,
  });
  const { data: epochStake } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "epochStake",
    args: [currentEpoch],
    watch: true,
  });
  const { data: epochThreshold } = useSpeedReadContract({
    contractName: "StakerEpochs",
    functionName: "epochThreshold",
    args: [currentEpoch],
    watch: true,
  });
  const { writeContractAsync } = useSpeedWriteContract("StakerEpochs");

  return (
    <div className="flex items-center flex-col flex-grow w-full px-4 gap-12">
      <div
        className={`flex flex-col items-center space-y-8 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 w-full max-w-lg ${
          !epochActive ? "mt-24" : ""
        }`}
      >
        <div className="flex flex-col w-full items-center">
          <p className="block text-2xl mt-0 mb-2 font-semibold">
            Staker Epochs Contract
          </p>
          <Address address={StakerEpochs?.address} size="xl" />
        </div>
        <div className="flex items-start justify-around w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">
              Current Epoch
            </p>
            <p className="m-0 p-0">{currentEpoch ? Number(currentEpoch) : 0}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">Time Left</p>
            <p className="m-0 p-0">
              {timeLeft ? `${humanizeDuration(Number(timeLeft) * 1000)}` : 0}
            </p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">You Staked</p>
            <span>
              {myStake ? formatEther(myStake) : 0}
              {targetNetwork.nativeCurrency.symbol}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center shrink-0 w-full">
          <p className="block text-xl mt-0 mb-1 font-semibold">
            Epoch Stakings
          </p>
          <div className="flex space-x-2">
            {
              <ETHToPrice
                value={epochStake ? formatEther(epochStake) : undefined}
              />
            }
            <span>/</span>
            {
              <ETHToPrice
                value={epochThreshold ? formatEther(epochThreshold) : undefined}
              />
            }
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-7">
            <button
              className="btn btn-primary uppercase"
              onClick={async () => {
                try {
                  await writeContractAsync({ functionName: "finishEpoch" });
                } catch (err) {
                  console.error("Error calling execute function");
                }
              }}
            >
              Finish Epoch!
            </button>
            <button
              className="btn btn-primary uppercase"
              onClick={async () => {
                try {
                  await writeContractAsync({ functionName: "withdraw" });
                } catch (err) {
                  console.error("Error calling withdraw function");
                }
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
        <button
          className="btn btn-primary uppercase"
          onClick={async () => {
            try {
              await writeContractAsync({
                functionName: "stake",
                value: parseEther("0.5"),
              });
            } catch (err) {
              console.error("Error calling stake function");
            }
          }}
        >
          🔏 Stake 0.5 ether!
        </button>
      </div>
    </div>
  );
};
