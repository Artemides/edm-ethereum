"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "@/components/scaffold-eth/address";
import Image from "next/image";
import { Daaps } from "../_components/dapps";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center my-20">
            <span className="block text-8xl font-bold tracking-tighter">Speedrun.Ethereum</span>
          </h1>
        </div>

        <Daaps />
        <div className="flex-grow bg-base-200 w-full px-8 ">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col p-2 text-center items-center max-w-xs rounded-xl">
              <p className="text-4xl block">🪲</p>
              <p className="m-0">
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>
              </p>
            </div>
            <div className="flex flex-col p-2 text-center items-center max-w-xs rounded-3xl">
              <p className="text-4xl  ">🔎</p>
              <p className="m-0">
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
