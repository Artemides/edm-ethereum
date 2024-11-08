import { topics } from "@/utils/data";
import React from "react";
import { Bubble } from "./bubble";
import {
  CaretRightIcon,
  ChevronRightIcon,
  CrossCircledIcon,
  EnterIcon,
  ExclamationTriangleIcon,
  EyeOpenIcon,
  GearIcon,
  LightningBoltIcon,
  LinkBreak2Icon,
  MagicWandIcon,
  MixerHorizontalIcon,
  MixerVerticalIcon,
  MixIcon,
  PersonIcon,
  PlayIcon,
  ReloadIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { CodeWindow } from "./code-window";
import { Element } from "./element";

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
  const verify = topics.find((t) => t.title == "verify")!;
  return (
    <section className="relative px-2 py-4 text-sm">
      <Bubble
        id={`border-gradient-${verify.title}`}
        className="absolute top-4 right-4 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={verify.bColor}
        bgColor={verify.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{verify.icon}</span>
      </Bubble>
      <h2 className="mx-auto text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        ...Proving the unbreakable <br /> beyond assumptions.
      </h2>
      <p className="m-auto leading-5 text-secondary-content text-center w-2/3">
        &#47;* <span className="text-primary  font-semibold">@note:</span>I do personally recommend{" "}
        <b className="font-bold">Formal verification</b>, in order to proof or validate the properties (Invariants) of
        the working Protocol within a Mathematical Approach.*&#47;
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
