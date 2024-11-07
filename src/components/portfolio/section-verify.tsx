import { topics } from "@/utils/data";
import React from "react";
import { Bubble } from "./bubble";
import {
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
import { CodeWindow } from "./code-window";

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

export const SectionVerify = () => {
  const verify = topics.find((t) => t.title == "verify")!;
  return (
    <section className="min-height p-2  relative">
      <Bubble
        id={`border-gradient-${verify.title}`}
        className="absolute top-4 right-4 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={verify.bColor}
        bgColor={verify.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{verify.icon}</span>
      </Bubble>
      <h2 className=" m-auto text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        ...Proving the unbreakable <br /> beyond assumptions.
      </h2>
      <p className="m-auto leading-5 text-sm text-secondary-content font-light text-center w-2/3">
        &#47;* <span className="text-[#f06479] font-semibold">@note:</span>I do personally recommend formal
        verification, in order to proof or validate the properties (Invariants) of the working Protocol within a
        Mathematical Approach.. *&#47;
      </p>
      <div>
        <div className="mask-gradient-to-t p-2">
          <CodeWindow
            className="m-auto mt-6  [&>p*]:m-0"
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
