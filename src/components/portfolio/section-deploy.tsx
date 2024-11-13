import React from "react";
import { Bubble } from "./bubble";
import { Orbit } from "./orbit";
import { Arbitrum, Ethereum, Optimism, Zksync } from "./icons/chains";
import { CheckCircledIcon, LightningBoltIcon, MagnifyingGlassIcon, TimerIcon, WidthIcon } from "@radix-ui/react-icons";
import { moons } from "@/utils/ui";
import Image from "next/image";

const chains = [
  {
    title: "Ethereum",
    icon: <Ethereum />,
  },

  {
    title: "Arbitrum",
    icon: <Arbitrum />,
  },
  {
    title: "Optimism",
    icon: <Optimism />,
  },
  {
    title: "Zksync",
    icon: <Zksync />,
  },
];

const deploymentRequisites = [
  {
    title: "audited contracts",
    icon: <MagnifyingGlassIcon />,
  },

  {
    title: "Optimization",
    icon: <LightningBoltIcon />,
  },
  {
    title: "Initialization",
    icon: <TimerIcon />,
  },
  {
    title: "Simulation",
    icon: <CheckCircledIcon />,
  },
];

export const SectionDeploy = () => {
  const deployMoon = moons["deploy"];
  const orbitChains = chains.map((chains, i) => {
    return (
      <Bubble
        key={chains.title}
        id={`border-gradient-${chains.title}`}
        className="absolute-center w-14 lg:w-16 aspect-square z-10"
      >
        <span className="absolute-center w-2/3 z-0">{chains.icon}</span>
        <p className="mt-28 tracking-tight text-sm">{chains.title}</p>
      </Bubble>
    );
  });

  return (
    <section className="h-full p-2 py-4 relative flex  flex-col  text-sm">
      {React.cloneElement(deployMoon, {
        className:
          "absolute -top-32 right-1/2  translate-x-1/2 lg:-left-5 lg:top-5 lg:-translate-y-1/2 w-20 aspect-square scale-75 sm:scale-75 ",
        displayName: false,
      })}

      <h2 className=" text-gradient-title tracking-tighter text-2xl lg:text-4xl lg:px-8 text-center">
        ...to life, ready for the real world.
      </h2>
      <p className="px-2 lg:px-12 leading-5 tracking-tighter text-secondary-content font-light text-center">
        {"/*"} <span className="text-primary  font-semibold">@note:</span> Launching securely and efficiently to the
        chain of your choice with careful attention given to each step to minimize risk and reinforce the integrity of
        the contract on-chain. {"*/"}
      </p>

      <div className="xl:my-6 mx-auto xl:w-fit flex flex-wrap gap-x-2 justify-center items-center ">
        {deploymentRequisites.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center group transition px-2 py-1 rounded-sm">
              {React.cloneElement(step.icon, { className: "size-5 xl:size-7  text-[#ff8330] inline" })}{" "}
              <p className=" my-1 tracking-tight text-primary-content font-semibold ">{step.title} </p>
            </div>
            {idx < deploymentRequisites.length - 1 && <WidthIcon className="w-5 h-5 text-[#f9e2af] " />}
          </React.Fragment>
        ))}
      </div>
      <h2 className=" text-primary text-base  lg:text-xl text-center ">Network Choosing</h2>

      <div className="hidden  mx-auto xl:w-3/4 my-4  sm:grid grid-cols-2 gap-x-4 ">
        <div>
          <h4 className="text-primary text-base text-center">Layer 1</h4>
          <p className=" leading-5 text-secondary-content text-center ">
            suitable for highest level of security and decentralization.
          </p>
        </div>
        <div>
          <h4 className="text-primary text-base font-semibold text-center">Layer 2</h4>
          <p className=" leading-5 text-sm text-secondary-content font-light text-center">
            suitable for applications that prioritize speed and cost efficiency.
          </p>
        </div>
      </div>
      <div className="absolute top-full -translate-y-1/2 sm:to-5 xl:-bottom-44  w-full aspect-square">
        <Orbit
          elements={orbitChains.slice(1)}
          offsetDegree={-120.5}
          gap={12}
          className="absolute-center w-[550px] sm:w-full md:w-3/4  border-none z-10"
          rotateElements={false}
        />
        <Orbit
          elements={orbitChains.slice(0, 1)}
          className="absolute-center   w-[350px] sm:w-2/3 md:w-1/2 lg:w- border-none z-10"
          rotateElements={false}
          offsetDegree={-90.5}
        />
        <div
          className="hi absolute-center w-1/3 aspect-square bg-gradient-to-t rounded-full drop-shadow-purple shadow-inner shadow-[#777CFF]
        estellar-cloud-gradient-inner z-0
        "
        ></div>
      </div>
    </section>
  );
};
