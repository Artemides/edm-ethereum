import React from "react";
import { Bubble } from "./bubble";
import { topics } from "@/utils/data";
import { Orbit } from "./orbit";
import { Arbitrum, Ethereum, Optimism, Zksync } from "./icons/chains";

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
    <section className="min-height p-2 py-4 relative flex  flex-col justify-end">
      <Bubble
        id={`border-gradient-${deploy.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={deploy.bColor}
        bgColor={deploy.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{deploy.icon}</span>
      </Bubble>
      <div className="absolute h-full w-full aspect-square">
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
      <h2 className=" text-[#f9e2af] font-semibold text-xl text-center ">Network Choosing</h2>
      <div className="mx-auto w-3/4 my-4 grid grid-cols-2 gap-x-4 ">
        <div>
          <h4 className="text-[#c5a1ef] font-semibold text-center">Layer 1</h4>
          <p className="leading-5 text-sm text-secondary-content font-light">
            {"/*"} suitable for highest level of security and decentralization. {"*/"}
          </p>
        </div>
        <div>
          <h4 className="text-[#c5a1ef] font-semibold text-center">Layer 2</h4>
          <p className="leading-5 text-sm text-secondary-content font-light">
            {"/*"} suitable for applications that prioritize speed and cost efficiency. {"*/"}
          </p>
        </div>
      </div>
      <h2 className=" text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        ...to life, ready for the real world.
      </h2>
    </section>
  );
};
