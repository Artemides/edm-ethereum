import Link from "next/link";
import React from "react";
import Avatar from "@/components/avatar";
import { CodingArsenal } from "@/components/portfolio/coding-arsenal";
import { Galaxy } from "@/components/portfolio/galaxy";
import { GalaxyInfo } from "@/components/portfolio/galaxy-info";
import { Header } from "@/components/portfolio/header";

import { Socials } from "@/components/portfolio/socials";

import { NextPage } from "next";
import { LinkButton } from "@/components/link-button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Resume from "@/components/portfolio/resume";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { BatchIcon } from "@/components/portfolio/icons/socials-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Window } from "@/components/portfolio/window-tab";

const Portfolio: NextPage = () => {
  return (
    <div className="h-screen gradient-base ">
      <Header />
      <section
        id="hero"
        className="min-height pt-16  grid grid-cols-12 place-items-center 2xl:w-[1536px] 2xl:mx-auto 2xl:border-[1px] 2xl:border-indigo-900/35 overflow-hidden"
      >
        <div className="col-span-5 px-8 py-4 tracking-tight ">
          <div className="grid grid-cols-[1fr_min-content] gap-x-1">
            <span className="text-4xl ">Hi There!</span>
            <Avatar img="/images/portfolio/edmundus.jpeg" alt="edmundo arias" size="" bordered={true} />
            <div className="col-start-1 text-sm font-light text-slate-200 self-end">
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <p className="my-1">
                    call me{" "}
                    <span className="relative text-4xl font-semibold text-peach">
                      edmund&apos;.eth <BatchIcon className="inline-block size-5" />
                    </span>
                  </p>
                </TooltipTrigger>
                <TooltipContent className="w-[500px] bg-transparent" sideOffset={14}>
                  <Window>
                    <h2 className=" tracking-tighter text-4xl  text-center text-peach">Hi!</h2>
                    <p className=" m-1 px-4 tracking-tighter text-secondary-content font-light text-sm">
                      I’m a <span className="text-peach font-semibold">smart contract developer and auditor</span> with
                      a background in software engineering. My work is all about building secure and efficient
                      blockchain solutions, and I approach each project with a strong focus on detail and reliability. I
                      shifted into blockchain to dive into decentralized systems, where{" "}
                      <span className="text-peach font-semibold"> I currently specialize</span> in designing, testing,
                      and auditing smart contracts. I’m passionate about{" "}
                      <span className="text-peach font-semibold"> Ethereum</span>, and I dig into the inner workings,
                      from Solidity and formal verification down to low-level assembly. Excited to connect with others
                      in the space and contribute to innovative blockchain projects!
                    </p>
                  </Window>
                </TooltipContent>
              </Tooltip>
              <p className="-my-1 text-peach font-medium">Software Engineer</p>
              <p className="-my-1 text-peach font-medium">Smart Contract Developer / Auditor</p>
              <p className="">
                I&apos;m dedicated to safeguard against vulnerabilities at every step, embracing challenges where
                security is a core principle.
              </p>
            </div>
          </div>

          <Socials />

          <div className="flex gap-x-4 my-4">
            <LinkButton href="#sm-info-resume" className="flex-1 bg-peach text-secondary hover:bg-peach/80 text-base">
              Resume
            </LinkButton>

            <LinkButton className="flex-1 text-peach text-base" variant={"secondary"}>
              Wanna talk?
            </LinkButton>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <Link href={"/"} className="text-accent underline text-[12px]">
              reach out for Frontend Development
            </Link>
            <h2 className="text-peach text-sm my-4">
              {`{`} coding arsenal {`}`}
            </h2>
            <CodingArsenal />
          </div>
        </div>
        <div className="my-auto col-span-7">
          <span className="m-auto w-2/3 text-gradient-title text-center tracking-tighter text-2xl">
            Together focused on...
          </span>
          <h1 className="m-auto w-2/3 text-gradient-title text-center tracking-tighter text-4xl">
            From brainstorming through execution and beyond.
          </h1>
        </div>
      </section>
      <GalaxyInfo />
    </div>
  );
};

export default Portfolio;
