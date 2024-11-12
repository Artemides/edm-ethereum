"use client";

import React from "react";
import {
  Foundry,
  Hardhat,
  MetamaskSVG,
  NextSVG,
  ReactSVG,
  Rust,
  Solidity,
  Typescript,
  ViemSVG,
  WagmiSVG,
} from "./icons/lang-icons";
import Link from "next/link";
import Image from "next/image";

const codingArsenal = [
  {
    title: "Solidity",
    icon: <Solidity className="w-[26px] group-hover:scale-125 transition-all duration-300" />,
    href: "https://soliditylang.org/",
  },
  {
    title: "Foundry",
    icon: <Foundry className="w-11 group-hover:scale-125 transition-all duration-300" />,
    href: "https://book.getfoundry.sh/",
  },
  {
    title: "Typescr.",
    icon: <Typescript className="w-10 group-hover:scale-125 transition-all duration-300" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Hardhat",
    icon: (
      <Image
        src={"/images/portfolio/lang/hardhat-logo.png"}
        alt="hardhat"
        width={60}
        height={60}
        className=" group-hover:scale-125 transition-all duration-300"
        sizes=""
      />
    ),
    href: "https://hardhat.org/",
  },
  {
    title: "Metamask",
    icon: <MetamaskSVG className="w-10 group-hover:scale-125 transition-all duration-300" />,
    href: "https://metamask.io/",
  },
  {
    title: "Rust",
    icon: <Rust className="w-10 group-hover:scale-125 transition-all duration-300" />,
    href: "https://www.rust-lang.org/",
  },
  {
    title: "React",
    icon: <ReactSVG className="w-9 group-hover:scale-125 transition-all duration-300" />,
    href: "https://react.dev/",
  },
  {
    title: "Next",
    icon: <NextSVG className="w-10 group-hover:scale-125 transition-all duration-300" />,
    href: "https://nextjs.org/",
  },
  {
    title: "Wagmi",
    icon: <WagmiSVG className="w-12 group-hover:scale-125 transition-all duration-300" />,
    href: "https://wagmi.sh/",
  },
  {
    title: "Viem",
    icon: <ViemSVG className="w-8 group-hover:scale-125 transition-all duration-300" />,
    href: "https://viem.sh/",
  },
];

export const CodingArsenal = () => {
  return (
    <div className="grid grid-cols-5 items-center gap-2 ">
      {codingArsenal.map((tool) => (
        <a
          key={tool.title}
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group  inline-flex flex-col gap-1   items-center rounded-md "
        >
          {tool.icon}
        </a>
      ))}
    </div>
  );
};
