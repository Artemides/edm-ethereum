import React from "react";
import { Bubble } from "./bubble";
import { topics } from "@/utils/data";
import { Orbit } from "./orbit";
import { Arbitrum, Ethereum, Optimism, Zksync } from "./icons/chains";
import { CheckCircledIcon, LightningBoltIcon, MagnifyingGlassIcon, TimerIcon, WidthIcon } from "@radix-ui/react-icons";

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
  const deploy = topics.find((t) => t.title == "deploy")!;
  const orbitChains = chains.map((chains, i) => {
    return (
      <Bubble
        key={chains.title}
        id={`border-gradient-${chains.title}`}
        className="absolute-center w-16 aspect-square z-10"
      >
        <span className="absolute-center w-2/3 z-0">{chains.icon}</span>
        <p className="mt-28 tracking-tight font-semibold text-sm">{chains.title}</p>
      </Bubble>
    );
  });

  return (
    <section className="min-height p-2 py-4 relative flex  flex-col justify-end text-sm">
      <Bubble
        id={`border-gradient-${deploy.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={deploy.bColor}
        bgColor={deploy.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{deploy.icon}</span>
      </Bubble>

      <div className="mb-auto">
        <h2 className=" text-gradient-title tracking-tighter text-4xl  text-center">
          ...to life, ready for the real <br />
          world.
        </h2>
        <p className="px-16 leading-5 tracking-tighter text-secondary-content font-light text-center">
          {"/*"} <span className="text-primary  font-semibold">@note:</span> Ensuring a secure and efficient deployment
          with careful attention given to each step to minimize risk and reinforce the integrity of the contract
          on-chain. {"*/"}
        </p>
      </div>

      <div className="absolute -bottom-44  w-full aspect-square">
        <Orbit
          elements={orbitChains.slice(1)}
          offsetDegree={-119}
          gap={12}
          className="absolute-center w-full border-none z-10"
          rotateElements={false}
        />
        <Orbit
          elements={orbitChains.slice(0, 1)}
          className="absolute-center w-2/3 border-none z-10"
          rotateElements={false}
          offsetDegree={-89}
        />
        <div
          className="absolute-center w-1/3 aspect-square bg-gradient-to-t rounded-full drop-shadow-purple shadow-inner shadow-[#777CFF]
        estellar-cloud-gradient-inner z-0
        "
        ></div>
        <span className=" absolute top-[calc(50%-150px)] left-[calc(50%+10px)]  text-5xl rocket-bounce">🚀</span>
      </div>
      <div className="my-6 mx-auto w-fit flex flex-wrap gap-x-2 justify-center items-center">
        {deploymentRequisites.map((step, idx) => (
          <>
            <div className="flex flex-col items-center group transition px-2 py-1 rounded-sm">
              {React.cloneElement(step.icon, { className: "w-7 h-7  text-[#c5a1ef] inline" })}{" "}
              <p className=" my-1 tracking-tight text-primary-content">{step.title} </p>
            </div>
            {idx < deploymentRequisites.length - 1 && <WidthIcon className="w-5 h-5 text-[#f9e2af] " />}
          </>
        ))}
      </div>
      <h2 className=" text-primary text-xl text-center ">Network Choosing</h2>

      <div className="mx-auto w-3/4 my-4 grid grid-cols-2 gap-x-4 ">
        <div>
          <h4 className="text-primary text-base text-center">Layer 1</h4>
          <p className="leading-5 text-secondary-content text-center">
            suitable for highest level of security and decentralization.
          </p>
        </div>
        <div>
          <h4 className="text-primary text-base font-semibold text-center">Layer 2</h4>
          <p className="leading-5 text-sm text-secondary-content font-light text-center">
            suitable for applications that prioritize speed and cost efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};
