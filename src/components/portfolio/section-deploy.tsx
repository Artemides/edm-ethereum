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
      <div key={chains.title} className=" ">
        <Bubble id={`border-gradient-${chains.title}`} className="absolute-center w-16 aspect-square z-10">
          <span className="absolute-center w-2/3 z-0">{chains.icon}</span>
        </Bubble>
        <p className="mt-28 tracking-tight font-semibold text-sm">{chains.title}</p>
      </div>
    );
  });

  return (
    <section className="min-height p-2 py-4  relative">
      <Bubble
        id={`border-gradient-${deploy.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={deploy.bColor}
        bgColor={deploy.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{deploy.icon}</span>
      </Bubble>
      <div className="relative w-full aspect-square">
        <Orbit
          elements={orbitChains.slice(1)}
          offsetDegree={-119}
          gap={12}
          className="absolute-center w-full "
          rotateElements={false}
        />
        <Orbit
          elements={orbitChains.slice(0, 1)}
          className="absolute-center w-2/3"
          rotateElements={false}
          offsetDegree={-89}
        />
      </div>

      <h2 className=" m-auto text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        ...to life, ready for the real world.
      </h2>
    </section>
  );
};
