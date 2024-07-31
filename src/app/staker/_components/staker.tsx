import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { ETHToPrice } from "./eth-to-price";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { formatEther, parseEther } from "viem";
import { Address } from "@/components/scaffold-eth/address";
import { useAccount } from "wagmi";
import { useTargetNetwork } from "@/hooks/useTargetNetwork";
import humanizeDuration from "humanize-duration";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
export const Staker = () => {
  const { address: userAddress } = useAccount();
  const { targetNetwork } = useTargetNetwork();
  const { data: StakerContract } = useDeployedContractInfo("Staker");
  const { data: SomeContract } = useDeployedContractInfo("SomeContract");

  const { data: timeLeft } = useSpeedReadContract({
    contractName: "Staker",
    functionName: "timeLeft",
    watch: true,
  });

  const { data: myStake } = useSpeedReadContract({
    contractName: "Staker",
    functionName: "balances",
    args: [userAddress],
    watch: true,
  });
  const { data: threshold } = useSpeedReadContract({
    contractName: "Staker",
    functionName: "threshold",
    watch: true,
  });

  const { data: isStakingCompleted } = useSpeedReadContract({
    contractName: "SomeContract",
    functionName: "completed",
    watch: true,
  });

  const { data: totalStaked } = useWatchBalance({
    address: StakerContract?.address,
  });

  const { data: someContractBalance } = useWatchBalance({
    address: SomeContract?.address,
  });

  const { writeContractAsync } = useSpeedWriteContract("Staker");
  return (
    <div className="flex items-center flex-col flex-grow w-full px-4 gap-12">
      {isStakingCompleted && (
        <div className="flex flex-col items-center gap-2 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-12 w-full max-w-lg">
          <p className="block m-0 font-semibold">
            {" "}
            🎉 &nbsp; Staking App triggered `SomeContract` &nbsp; 🎉{" "}
          </p>
          <div className="flex items-center">
            <ETHToPrice
              value={
                someContractBalance
                  ? formatEther(someContractBalance.value)
                  : undefined
              }
              className="text-[1rem]"
            />
            <p className="block m-0 text-lg -ml-1">staked !!</p>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col items-center space-y-8 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 w-full max-w-lg ${
          !isStakingCompleted ? "mt-24" : ""
        }`}
      >
        <div className="flex flex-col w-full items-center">
          <p className="block text-2xl mt-0 mb-2 font-semibold">
            Staker Contract
          </p>
          <Address address={StakerContract?.address} size="xl" />
        </div>
        <div className="flex items-start justify-around w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">Time Left</p>
            <p className="m-0 p-0">
              {timeLeft ? `${humanizeDuration(Number(timeLeft) * 1000)}` : 0}
            </p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">You Staked</p>
            <span>
              {myStake ? formatEther(myStake) : 0}{" "}
              {targetNetwork.nativeCurrency.symbol}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center shrink-0 w-full">
          <p className="block text-xl mt-0 mb-1 font-semibold">Total Staked</p>
          <div className="flex space-x-2">
            {
              <ETHToPrice
                value={totalStaked ? formatEther(totalStaked.value) : undefined}
              />
            }
            <span>/</span>
            {
              <ETHToPrice
                value={threshold ? formatEther(threshold) : undefined}
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
                  await writeContractAsync({ functionName: "execute" });
                } catch (err) {
                  console.error("Error calling execute function");
                }
              }}
            >
              Execute!
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
    </div>
  );
};
