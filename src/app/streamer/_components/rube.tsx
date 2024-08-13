"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Address as AddressLike,
  encodePacked,
  keccak256,
  parseEther,
  toBytes,
} from "viem";
import { useAccount, useSignMessage } from "wagmi";
import { STREAM_ETH_VALUE } from "./guru";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";

export type RubeProps = {
  challenges: Array<AddressLike>;
  opened: Array<AddressLike>;
  closed: Array<AddressLike>;
  writable: Array<AddressLike>;
};

const ETH_PER_CHARACTER = "0.01";

export const Rube = ({ writable, closed }: RubeProps) => {
  const { address } = useAccount();

  const channel = useRef<BroadcastChannel>();
  const [wisdom, setWisdom] = useState<string>("");
  const [autoPay, setAutoPay] = useState(false);

  const { signMessageAsync } = useSignMessage();
  const { writeContractAsync: writeStreamAsync } =
    useSpeedWriteContract("Streamer");

  useEffect(() => {
    if (!address) return;

    channel.current = new BroadcastChannel(address);
  }, [address]);

  async function reimburseService(wisdom: string) {
    const initialBalance = parseEther(STREAM_ETH_VALUE);
    const costPerCharacter = parseEther(ETH_PER_CHARACTER);
    const duePayment = costPerCharacter * BigInt(wisdom.length);
    const updatedBalance = initialBalance + duePayment;

    const msgRaw = toBytes(
      keccak256(encodePacked(["uint256"], [updatedBalance]))
    );
    let signature;
    try {
      signature = await signMessageAsync({ message: { raw: msgRaw } });
    } catch (e) {
      console.error("Message signing failed");
    }
    const updatedBalanceHex = updatedBalance.toString(16);

    if (updatedBalanceHex && signature) {
      channel.current?.postMessage({
        updatedBalance: updatedBalanceHex,
        signature,
      });
    }
  }

  if (channel.current) {
    channel.current.onmessage = (e) => {
      if (typeof e.data !== "string") {
        console.warn("Unexpected received messaage");
        return;
      }
      setWisdom(e.data);
      if (autoPay) {
        reimburseService(e.data);
      }
    };
  }

  return (
    <>
      <p className="block text-2xl mt-0 mb-2 font-semibold">Hello Rube!</p>
      {address && writable.includes(address) ? (
        <div className="w-full flex flex-col items-center">
          <span className="mt-6 text-lg font-semibold">Autopay</span>
          <div className="flex items-center mt-2 gap-2">
            <span>Off</span>
            <input
              type="checkbox"
              className="toggle toggle-secondary bg-secondary"
              defaultChecked={autoPay}
              onChange={(e) => {
                const updatedAutoPay = e.target.checked;
                setAutoPay(updatedAutoPay);

                if (updatedAutoPay) {
                  reimburseService(wisdom);
                }
              }}
            />
            <span>On</span>
          </div>

          <div className="text-center w-full mt-4">
            <p className="text-xl font-semibold">Received Wisdom</p>
            <p className="mb-3 text-lg min-h-[1.75rem] border-2 border-primary rounded">
              {wisdom}
            </p>
          </div>
        </div>
      ) : address && closed.includes(address) ? (
        <div className="text-lg">
          <p>
            Thanks for stopping by - we hope you have enjoyed the guru&apos;s
            advice.
          </p>
          <p className="mt-8">
            This UI obstructs you from opening a second channel. Why? Is it safe
            to open another channel?
          </p>
        </div>
      ) : (
        <div className="p-2">
          <button
            className="btn btn-primary"
            onClick={async () => {
              try {
                await writeStreamAsync({
                  functionName: "fundChannel",
                  value: parseEther(STREAM_ETH_VALUE),
                });
              } catch (err) {
                console.error("Error calling fundChannel function");
              }
            }}
          >
            Open a 0.5 ETH channel for advice from the Guru
          </button>
        </div>
      )}
    </>
  );
};
