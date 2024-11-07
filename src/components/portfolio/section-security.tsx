import { topics } from "@/utils/data";
import React from "react";
import { Bubble } from "./bubble";
import { Window } from "./window-tab";
import {
  ChevronRightIcon,
  EnterIcon,
  ExclamationTriangleIcon,
  EyeOpenIcon,
  LightningBoltIcon,
  MagicWandIcon,
  MixIcon,
  PersonIcon,
  ReloadIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

const commonVulnerabilities = [
  {
    text: "Reentrancy",
    icon: <ReloadIcon />,
  },
  {
    text: "Overflow / Underflow",
    icon: <MixIcon />,
  },
  {
    text: "Access Control DAO",
    icon: <PersonIcon />,
  },
  {
    text: "Gas Limit and  Loops",
    icon: <UpdateIcon />,
  },
  {
    text: "Front Running",
    icon: <EnterIcon />,
  },
  {
    text: "Oracle Manipulation",
    icon: <EyeOpenIcon />,
  },
  {
    text: "Unsecure External Calls",
    icon: <LightningBoltIcon />,
  },
  {
    text: "Denial of Service",
    icon: <ExclamationTriangleIcon />,
  },
  {
    text: "Upgradeability",
    icon: <MagicWandIcon />,
  },
];

export const SectionSecurity = () => {
  const secure = topics.find((t) => t.title == "secure")!;
  return (
    <section className="min-height p-2  relative">
      <Bubble
        id={`border-gradient-${secure.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={secure.bColor}
        bgColor={secure.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{secure.icon}</span>
      </Bubble>

      <p className="m-auto leading-5 text-sm text-secondary-content font-light text-center w-2/3">
        &#47;* <span className="text-[#f06479] font-semibold">@audit:</span>
        Ensuring the security of smart contracts is critical, given the immutable nature of blockchain technology and
        the significant financial stakes often involved. *&#47;
      </p>
      <div className="flex flex-wrap p-8 gap-4 justify-center text-base [&>p]:m-1 ">
        <p className=" hover:text-[#f06479]">
          {"{"} Manual Review {"}"}
        </p>
        <p className=" hover:text-[#f06479]">
          {"{"} Static Analysis {"}"}
        </p>
        <p className=" hover:text-[#f06479]">
          {"{"} Internal Security Review {"}"}
        </p>
        <p className=" hover:text-[#f06479]">
          {"{"}Independent Audits {"}"}
        </p>
      </div>
      <Window className="m-auto">
        <p className="m-1">
          <span className="text-cyan-400 font-semibold">~security </span>
          <span className="text-green-400 font-semibold">main</span>
          <ChevronRightIcon className="w-5 h-5 inline-block text-green-400" /> slither ./core.sol
        </p>
        <p className="m-1">
          <span className="text-cyan-400 font-semibold">~security </span>
          <span className="text-green-400 font-semibold">main</span>
          <ChevronRightIcon className="w-5 h-5 inline-block text-green-400" /> aderyn ./core.sol
        </p>
      </Window>
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-spot shadow-[#f0647955] z-0"></div>
      <div className="relative  mx-auto grid grid-cols-3 gap-2 m-4 p-4 z-20 text-sm">
        {commonVulnerabilities.map((v) => (
          <div
            key={v.text}
            className=" bg-[#0F101B] rounded-lg border-[1px]  border-gray-600/25 p-4 grid place-items-center drop-shadow z-0
            hover:bg-transparent hover:scale-110 transition hover:cursor-pointer hover:backdrop-blur-lg hover:z-20  group
            "
          >
            <span className="mb-3 inline text-[###f2cdcd] text-center">{v.text} </span>
            {React.cloneElement(v.icon, {
              className: "w-5 h-5  text-[#f06479] inline group-hover:scale-150 transition",
            })}{" "}
          </div>
        ))}
      </div>
      <h2 className=" m-auto text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        ...Embedding security as a core commitment
      </h2>
    </section>
  );
};

export const Box = () => {
  return (
    <div className="m-auto w-1/2 px-4 py-2  text-base ">
      <h4 className="text-base text-primary text-center">Manual Review </h4>
    </div>
  );
};
