import React from "react";
import { DaapItem, DaapItemProps } from "./dapp-item";

const dapps: DaapItemProps[] = [
  {
    name: "nft daap",
    image: "/images/simpleNFT.svg",
    href: "/mynfts",
  },
  {
    name: "staking dapp",
    image: "/images/staking-app.svg",
    href: "/staker",
  },
  {
    name: "token vendor daap",
    image: "/images/token-vendor.svg",
    href: "/erc20/token-vendor",
  },
  {
    name: "dice gaming daap",
    image: "/images/diceGame.svg",
    href: "/dice",
  },
  {
    name: "dex dapp",
    image: "/images/dex.svg",
    href: "/dex",
  },
  {
    name: "state channels dapp",
    image: "/images/state.svg",
    href: "/streamer",
  },
];

export const Daaps = () => {
  return (
    <div className=" flex-grow bg-base-200 w-full  ">
      <div className="flex-wrap flex justify-center items-center gap-12 flex-col sm:flex-row">
        {dapps.map((daap) => (
          <DaapItem key={daap.name} href={daap.href} image={daap.image} name={daap.name} />
        ))}
      </div>
    </div>
  );
};
