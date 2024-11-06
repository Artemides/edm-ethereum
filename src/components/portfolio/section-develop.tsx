import React from "react";
import { Bubble } from "./bubble";
import { topics } from "@/utils/data";
import { Github } from "./icons/socials-icons";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Window } from "./code-window";

const considerations = [
  {
    title: "Math Validation",
    description: "Mathematical issues, especially precision and overflows across different versions.",
  },
  {
    title: "Code Review",
    description: "Frequent code reviews and sessions to catch vulnerabilities early.",
  },
  {
    title: "Nat Specting",
    description: "Make contracts accessible, secure, and comprehensible for both users and developers.",
  },
];

const pullRequests = [
  {
    text: "Automated Testing (Fuzz)",
    success: true,
  },
  {
    text: "Static Analysis",
    success: true,
  },
  {
    text: "Security Audit",
    success: false,
  },
  {
    text: "Simulation on forked Mainnet",
    success: true,
  },
  {
    text: "Gas Optimization",
    success: true,
  },
  {
    text: "Automated Dependency Updates",
    success: false,
  },
];

export const SectionDevelop = () => {
  const develop = topics.find((t) => t.title == "develop")!;

  return (
    <section className="min-height p-2  relative">
      <Bubble
        id={`border-gradient-${develop.title}`}
        className="absolute top-4 left-12 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={develop.bColor}
        bgColor={develop.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{develop.icon}</span>
      </Bubble>
      <div className="mx-auto w-9/12">
        <h3 className="mb-16 text-center text-2xl font-light">
          Continuous Integration <br />
          on every{" "}
          <span className="text-[#6CFE89] font-semibold">
            {" "}
            {"{"} Pull Request {"}"}
          </span>
        </h3>
        <div className="relative  flash-light-to-b before:w-[2px] before:to-[#6CFE89] before:z-10 my-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-spot shadow-[#f06479b0] "></div>

          <Bubble
            id={`develop-border-gradient-github`}
            className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square"
            bColor="#6CFE89"
            bgColor="#6CFE897f"
          >
            <span className="absolute w-12 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Github className="fill-white" />
            </span>
          </Bubble>

          <div className="grid grid-cols-2 gap-x-8 items-start gap-y-4 pt-20">
            {pullRequests.map((pr) => (
              <PullRequest success={pr.success} text={pr.text} />
            ))}
          </div>
        </div>
        <p className="m-2 leading-5 text-sm text-secondary-content font-light text-center ">
          {"/*"} <span className="font-semibold text-primary">@dev:</span> Development is highly technical and requires
          a detailed approach tailored to the unique requirements of the Protocol{" "}
          <span className="font-normal">(blockchain systems)</span>. {"*/"}
        </p>
      </div>
      <div className="flex justify-around my-8">
        {considerations.map((con) => (
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <h3 className="text-[#F0647A] text-sm hover:scale-125 transition">
                {"{"} <span className="text-[#77a3f7]">{con.title}</span> {"}"}
              </h3>
            </TooltipTrigger>
            <TooltipContent className="w-[300px] bg-transparent" sideOffset={14}>
              <Window>
                <p className="m-0 leading-5 text-sm text-secondary-content font-light ">
                  /*<span className="font-semibold text-primary">@notice:</span> {con.description}*/
                </p>
              </Window>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <h2 className=" m-auto text-gradient-title tracking-tighter text-4xl mb-10 text-center">
        using security best <br /> practices...
      </h2>
    </section>
  );
};

const PullRequest = ({ text, success }: { text: string; success: boolean }) => {
  return (
    <div className="relative pl-[10px] px-2 rounded-lg bg-[#F2F3FF] drop-shadow-white">
      {success ? (
        <CheckCircleIcon width={21} height={21} fill="#3BAE53" className="absolute top-1/2 -translate-y-1/2 left-1" />
      ) : (
        <div className="absolute top-1/2 -translate-y-1/2 left-1">
          <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="#FD4646"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      <p className="textarea-sm text-secondary font-semibold tracking-tighter m-[6px] leading-5">{text}</p>
    </div>
  );
};
