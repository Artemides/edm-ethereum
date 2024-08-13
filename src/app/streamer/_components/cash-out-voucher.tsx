import { Address, parseSignature } from "viem";
import { Voucher } from "./guru";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import humanizeDuration from "humanize-duration";

type CashOutVoucherProps = {
  clientAddress: Address;
  closed: Address[];
  challenged: Address[];
  voucher?: Voucher;
};
export const CashOutVoucher = ({ clientAddress, voucher, closed, challenged }: CashOutVoucherProps) => {
  const { writeContractAsync } = useSpeedWriteContract("Streamer");

  const { data: timeLeft } = useSpeedReadContract({
    contractName: "Streamer",
    functionName: "timeLeft",
    args: [clientAddress],
    watch: true,
  });

  const isButtonDisabled = !voucher || closed.includes(clientAddress) || challenged.includes(clientAddress);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-8 pt-2">
        {challenged.includes(clientAddress) &&
          (!!timeLeft ? (
            <>
              <span>Time left:</span> {timeLeft && humanizeDuration(Number(timeLeft) * 1000)}
            </>
          ) : (
            <>Challenged. Cash out timed out</>
          ))}
      </div>
      <button
        className={`mt-3 btn btn-primary${challenged.includes(clientAddress) ? " btn-error" : ""}${
          isButtonDisabled ? " btn-disabled" : ""
        }`}
        disabled={isButtonDisabled}
        onClick={async () => {
          try {
            if (!voucher) return;

            const { v, r, s } = parseSignature(voucher.signature);
            await writeContractAsync({
              functionName: "withdrawEarnings",
              args: [{ ...voucher, sig: { v: Number(v), r, s } }],
            });
          } catch (err) {
            console.error("Error calling withdrawEarnings function");
          }
        }}
      >
        Cash out latest voucher
      </button>
    </div>
  );
};
