import React from "react";
import {
  ChevronRightIcon,
  GearIcon,
  LinkBreak2Icon,
  MixerVerticalIcon,
  PlayIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { CodeWindow } from "./code-window";
import { moons } from "@/utils/ui";

const certoraSteps = [
  {
    text: "invariants",
    icon: <GearIcon />,
  },
  {
    text: "rules",
    icon: <MixerVerticalIcon />,
  },
  {
    text: "run",
    icon: <PlayIcon />,
  },
  {
    text: "edge cases",
    icon: <LinkBreak2Icon />,
  },
  {
    text: "re-run",
    icon: <ReloadIcon />,
  },
];

export const SectionVerify = () => {
  const sectionIcons = moons["verify"];

  return (
    <section className="relative px-2 py-4 text-sm">
      {React.cloneElement(sectionIcons, {
        className: "absolute top-4 -translate-y-1/2 w-20 aspect-square scale-75",
        displayName: false,
      })}
      <h2 className="mx-auto text-gradient-title tracking-tighter text-4xl mb-6 text-center">
        ...Proving the unbreakable <br /> beyond assumptions.
      </h2>
      <p className="m-auto leading-5 text-secondary-content text-center px-12">
        &#47;* <span className="text-primary  font-semibold">@note:</span> Mathematically proving that the invariants
        (properties) always remain true, eliminating any uncertainties around potential vulnerabilities, while using
        formal methods and tools to ensure under all possible conditions.
      </p>

      <div className="my-12 mx-auto w-fit flex flex-wrap gap-x-2 justify-center items-center border-x-[1px] border-x-white/25">
        {certoraSteps.map((step, idx) => (
          <>
            <div className="flex flex-col items-center group transition px-2 py-1 rounded-sm">
              {React.cloneElement(step.icon, { className: " w-6 h-6  text-[#94e2d5] inline" })}{" "}
              <p className=" my-1 text-sm tracking-tighter text-[#f9e2af]  font-semibold   ">{step.text} </p>
            </div>
            {idx < certoraSteps.length - 1 && <ChevronRightIcon className="w-5 h-5  " />}
          </>
        ))}
      </div>

      <div className="relative w-4/5 mx-auto ">
        <h2 className="col-span-2 text-[#f9e2af] font-semibold text-xl text-center mt-14 mb-36"> Preferred Tools</h2>
        <div className="relative  grid grid-cols-2 gap-x-4 z-10 ">
          <div className="bg-black/30 border-[1px] border-secondary/50 p-2 rounded-md backdrop-blur-sm  drop-shadow ">
            <h4 className="text-[#c5a1ef] text-base font-semibold ">
              Certora <span className="font-light">(Solidity based)</span>
            </h4>
            <p className="leading-5 text-sm text-secondary-content font-light">
              {"/*"} <span className="text-primary font-semibold">@note:</span>Provides mechanisms through (CVL) to
              define custom specification (invariants and rules) so as to run them against symbolic inputs {"*/"}
            </p>
          </div>
          <div className="bg-black/30 border-[1px] border-secondary/50 p-2 rounded-md backdrop-blur-sm  drop-shadow ">
            <h4 className="text-[#c5a1ef] text-base font-semibold">Halmos</h4>
            <p className="leading-5 text-sm text-secondary-content font-light">
              {"/*"} <span className="text-primary font-semibold">@note:</span>A tool to proof our invariants based on
              our testing rules and coverage {"*/"}
            </p>
          </div>
        </div>
        <div className="absolute -top-12 scale-50 left-1/2 -translate-x-1/2  mask-gradient-to-t p-2 hover:scale-100 hover:-translate-y-1/4 transition duration-300 hover:cursor-pointer z-0 hover:mask-square hover:z-20">
          <CodeWindow
            className="m-auto mt-6  [&>p*]:m-0 "
            codeClassName="text-[12px] leading-[14px] "
            lang="certora"
            code={`methods {
  function getCurrentManager(uint) external returns address envfree;
  function isActiveManager(address) external returns bool envfree;
  function claimManagement(uint fundId) external;
}

function isManaged(uint fundId1) returns bool{
 return getCurrentManager(fundId1) != 0;
}

invariant managerIsActive(uint fundId1)
  isManaged(fundId1) <=> isActiveManager(getCurrentManager(fundId1))
  {
    preserved claimManagement(uint fundId2) with (env e){
      requireInvariant uniqueManager(fundId1,fundId2);
    }
  }

invariant uniqueManager(uint fundId1,uint fundId2)
  ((fundId1 != fundId2) && isManaged(fundId1)) 
      => (getCurrentManager(fundId1) != getCurrentManager(fundId2)) 
  {
    preserved {
      requireInvariant managerIsActive(fundId1);
      requireInvariant managerIsActive(fundId2);
    }
  }`}
          />
        </div>
      </div>
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
