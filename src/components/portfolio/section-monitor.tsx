"use client";

import React from "react";
import { Bubble } from "./bubble";
import { topics } from "@/utils/data";
import { CurrencyDollarIcon, KeyIcon } from "@heroicons/react/24/outline";
import { BellIcon, DotFilledIcon, ImageIcon, MagicWandIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const monitorUsecases = [
  {
    title: "governance",
    icon: <PersonIcon />,
  },
  {
    title: "transfer",
    icon: <PaperPlaneIcon />,
  },
  {
    title: "access Control",
    icon: <KeyIcon />,
  },
  {
    title: "financial",
    icon: <CurrencyDollarIcon />,
  },
  {
    title: "mints",
    icon: <MagicWandIcon />,
  },
  {
    title: "logs",
    icon: <BellIcon />,
  },
];

export const SectionMonitor = () => {
  const monitor = topics.find((t) => t.title == "monitor")!;

  return (
    <section className="relative min-height p-2  text-sm">
      <Bubble
        id={`border-gradient-${monitor.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={monitor.bColor}
        bgColor={monitor.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{monitor.icon}</span>
      </Bubble>
      <h2 className="m-auto text-gradient-title tracking-tighter text-4xl text-center">...Stay Reliable and Secure.</h2>
      <p className="m-auto my-2 leading-5 text-secondary-content text-center w-2/3 font-light ">
        &#47;* <span className="text-primary font-semibold">@notice:</span> provide complete visibility into the risks
        and behaviors of your smart contracts, enabling you to detect potential threats, receive alerts on unusual
        activities, and resolve them.*&#47;
      </p>
      <h2 className="text-primary text-xl text-center">Suspicious Activity</h2>

      <div className="mx-auto my-4 w-fit flex flex-wrap gap-x-2 justify-center items-center">
        {monitorUsecases.map((step, idx) => (
          <>
            <div className="flex flex-col items-center group transition px-2 py-1 rounded-sm">
              {React.cloneElement(step.icon, { className: "w-6 h-6  text-[#c5a1ef] " })}{" "}
              <p className=" my-2 tracking-tight text-primary-content">{step.title} </p>
            </div>
            {idx < monitorUsecases.length - 1 && <DotFilledIcon className="w-5 h-5 text-[#f9e2af] " />}
          </>
        ))}
      </div>
      <h2 className=" text-primary text-xl text-center ">Severity</h2>
      <div
        className="mt-16 mb-6 mx-auto relative w-1/2 h-[2px] bg-gradient-to-r from-[#a6e3a1] via-[#f9e2af] to-[#f38ba8]
           before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:w-4 before:h-4 before:bg-[#a6e3a1] before:rounded-full
           after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2  after:w-4 after:h-4 after:bg-[#f38ba8] after:rounded-full
        "
      >
        <div className="w-full absolute  -translate-y-full -top-5  flex justify-between">
          <span className=" px-4 py-[2px] rounded-full border-[1px] border-[#a6e3a1] bg-[#a6e3a1]/10 text-[#a6e3a1]">
            low
          </span>
          <span className=" px-4 py-[2px] rounded-full border-[1px] border-[#f9e2af] bg-[#f9e2af]/10 text-[#f9e2af]">
            medium
          </span>
          <span className=" px-4 py-[2px] rounded-full border-[1px] border-[#f38ba8] bg-[#f38ba8]/10 text-[#f38ba8]">
            hight
          </span>
        </div>
      </div>
      <h2 className=" text-primary text-xl text-center">Preferred Tools</h2>
      <p className="m-auto leading-5 text-secondary-content text-center w-2/3 font-light ">
        Because of their native integrations with Foundry, Hardhat, Github and Slack I prefer
      </p>
      <div className="flex justify-center items-center gap-x-2 p-4">
        <span className="text-xs">Open Zeppelin</span>
        <Image
          src={"/images/portfolio/oz.png"}
          alt="open-zeppelin-logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="text-xs">Alchemy</span>

        <Image
          src={"/images/portfolio/alchemy.jpeg"}
          alt="alchemy-logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="text-xs">Etherscan</span>

        <Image
          src={"/images/portfolio/etherscan.jpg"}
          alt="etherscan-logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="text-xs">Chainlink</span>

        <Image
          src={"/images/portfolio/defi/link.png"}
          alt="chainlink-logo"
          width={40}
          height={40}
          className="rounded-md"
        />
      </div>
      <div className="absolute -bottom-4 w-full aspect-square pointer-events-none">
        <Image
          src={"/images/portfolio/dashboard.avif"}
          alt="alchemy-dashboard"
          width={350}
          height={300}
          className="absolute bottom-0 right-1/2 rounded-lg drop-shadow-white   "
        />
        <Image
          src={"/images/portfolio/defender.jpg"}
          alt="oz-defender"
          width={300}
          height={200}
          className="absolute  bottom-0 left-1/2 -translate-x-1/2 rounded-lg drop-shadow"
        />
      </div>
    </section>
  );
};
