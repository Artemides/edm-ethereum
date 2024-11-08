import React from "react";
import { Foundry, Hardhat, Rust, Solidity, Typescript } from "./icons/lang-icons";
import { Element } from "./element";
import Link from "next/link";

const codingArsenal = [
  {
    title: "Solidity",
    icon: <Solidity className="w-5 group-hover:scale-125 transition-all duration-300" />,
    href: "https://soliditylang.org/",
  },
  {
    title: "Foundry",
    icon: <Foundry className="w-11 group-hover:scale-125 transition-all duration-300" />,
    href: "https://book.getfoundry.sh/",
  },
  {
    title: "Typescr.",
    icon: <Typescript className="w-9 group-hover:scale-125 transition-all duration-300" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Hardhat",
    icon: <Hardhat className="w-11 group-hover:scale-125 transition-all duration-300" />,
    href: "https://hardhat.org/",
  },
  {
    title: "Rust",
    icon: <Rust className="w-9 group-hover:scale-125 transition-all duration-300" />,
    href: "https://www.rust-lang.org/",
  },
];

export const CodingArsenal = () => {
  return (
    <div className="my-4 inline-flex ">
      {codingArsenal.map((tool) => (
        <Element
          key={tool.title}
          href={tool.href}
          className="group w-20 inline-flex flex-col justify-evenly items-center "
        >
          {tool.icon}
          <small>{tool.title}</small>
        </Element>
      ))}
    </div>
  );
};
