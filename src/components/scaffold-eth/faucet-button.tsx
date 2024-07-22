import { useTransactor } from "@/hooks/useTransactor";
import { useWatchBalance } from "@/hooks/useWatchBalance";
import { BanknotesIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { createWalletClient, http, parseEther } from "viem";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";

const localWalletClient = createWalletClient({
  chain: hardhat,
  transport: http(),
});

const NUM_OF_ETH = "1";
const FAUCET_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const FaucetButton = () => {
  const { address, chain: onChain } = useAccount();
  const { data: balance } = useWatchBalance({ address });
  const [loading, setLoading] = useState(false);
  const faucetTx = useTransactor(localWalletClient);

  const sendEther = async () => {
    try {
      setLoading(true);
      await faucetTx({
        chain: hardhat,
        account: FAUCET_ADDRESS,
        to: address,
        value: parseEther(NUM_OF_ETH),
      });
    } catch (error) {
      setLoading(true);
      console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
    } finally {
      setLoading(false);
    }
  };
  if (onChain?.id !== hardhat.id) {
    return null;
  }

  const isZeroBalance = balance && balance.value === 0n;

  return (
    <div
      className={
        !isZeroBalance
          ? "ml-1"
          : "ml-1 tooltip tooltip-bottom tooltip-secondary tooltip-open font-bold before:left-auto before:transform-none before:content-[attr(data-tip)] before:right-0"
      }
      data-tip="Grab funds from faucet"
    >
      <button
        className="btn btn-secondary dark:hover:bg-black/20 focus:bg-secondary hover:shadow-lg btn-sm px-2 rounded-full"
        onClick={sendEther}
        disabled={loading}
      >
        {!loading ? (
          <BanknotesIcon className="h-4 w-4" />
        ) : (
          <span className="loading loading-spinner loading-xs"></span>
        )}
      </button>
    </div>
  );
};

export default FaucetButton;
