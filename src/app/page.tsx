import Link from "next/link";
import React from "react";
import Avatar from "@/components/avatar";
import { Button } from "@/components/button";
import { CodingArsenal } from "@/components/portfolio/coding-arsenal";
import { Galaxy } from "@/components/portfolio/galaxy";
import { GalaxyInfo } from "@/components/portfolio/galaxy-info";
import { Header } from "@/components/portfolio/header";

import { Socials } from "@/components/portfolio/socials";

import { NextPage } from "next";

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
              <h2 className="">
                call me <span className="text-4xl font-semibold text-peach">edmund&apos;.eth</span>
              </h2>
              <p className="-my-1 text-peach  italic">Software Engineer</p>
              <p className="-my-1 text-peach  italic">Smart Contract Developer / Auditor</p>
              <p className="">
                I&apos;m dedicated to safeguard against vulnerabilities at every step, embracing challenges where
                security is a core principle.
              </p>
            </div>
          </div>

          <Socials />

          <div className="flex gap-x-4 my-4">
            <Button className="flex-1 border-peach bg-peach text-secondary hover:bg-peach/80 text-base">Resume</Button>
            <Button className="flex-1 text-peach text-base" variant={"secondary"}>
              Wanna talk?
            </Button>
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
          <Galaxy />
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
