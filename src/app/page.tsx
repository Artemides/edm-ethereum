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
import { BatchIcon } from "@/components/portfolio/icons/socials-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Window } from "@/components/portfolio/window-tab";

const Portfolio: NextPage = () => {
  return (
    <div className="lg:h-screen gradient-base ">
      {/* <Header /> */}
      <section
        id="hero"
        className="min-height   
       
        overflow-hidden
        lg:grid lg:grid-cols-12 lg:place-items-center 
        
        2xl:w-[1536px] 2xl:mx-auto 2xl:border-[1px] 2xl:border-indigo-900/35 "
      >
        <div className="col-span-6 px-8 py-4 tracking-tight md:w-3/4 md:mx-auto lg:w-full ">
          <p className="text-3xl text-center lg:text-4xl ">Hi There!</p>
          <div className="lg:grid lg:grid-cols-[min-content_1fr]  gap-x-2 ">
            <Avatar img="/images/portfolio/edmundus.jpeg" alt="edmundo arias" className="self-center mx-auto" />
            <div className=" text-lg font-light text-slate-200 self-end text-center lg:text-start lg:text-base">
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <p className="my-4 lg:my-1">
                    call me{" "}
                    <span className="relative text-3xl lg:text-4xl font-semibold text-peach">
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
                I&apos;m dedicated to safeguarding against vulnerabilities at every step, embracing challenges where
                security is a core principle.
              </p>
            </div>
          </div>

          <Socials />

          <div className="flex gap-x-4 my-4 xl:px-24">
            <LinkButton href="#sm-info-resume" className="flex-1 bg-peach  text-base " size={"sm"}>
              Resume
            </LinkButton>

            <LinkButton
              href="https://www.linkedin.com/in/edmundo-arias-35163a212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-peach text-base"
              variant={"secondary"}
              size={"sm"}
            >
              Wanna talk?
            </LinkButton>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href={"https://www.linkedin.com/in/edmundo-arias-35163a212/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-[12px]"
            >
              reach out for Frontend Development
            </Link>
            <h2 className="text-peach text-sm my-4">
              {`{`} coding arsenal {`}`}
            </h2>
            <CodingArsenal />
          </div>
        </div>
        <div className="pb-8 lg:py-0 my-auto col-span-6 ">
          <p
            className="m-auto my-8 
          text-gradient-title text-center tracking-tighter
          text-3xl
          lg:w-2/3"
          >
            Together focused on...
          </p>
          <Galaxy />
          <h1
            className="
            m-auto 
            px-2
            text-gradient-title text-center tracking-tighter
            text-3xl
            lg:px-12 lg:text-4xl"
          >
            From brainstorming through <br className="hidden sm:inline" />
            execution and beyond.
          </h1>
        </div>
      </section>
      <GalaxyInfo />
    </div>
  );
};

export default Portfolio;
