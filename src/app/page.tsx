import Avatar from "@/components/avatar";
import { Button } from "@/components/button";
import { Bubble } from "@/components/portfolio/bubble";
import { Element } from "@/components/portfolio/element";
import { Foundry } from "@/components/portfolio/icons/foundry";
import { Hardhat } from "@/components/portfolio/icons/hardhat";
import { Rust } from "@/components/portfolio/icons/rust";
import { Solidity } from "@/components/portfolio/icons/solidity";
import { Typescript } from "@/components/portfolio/icons/typescript";
import { Socials } from "@/components/portfolio/socials";
import { NextPage } from "next";
import Image from "next/image";
import path from "path";
import React from "react";

const Portfolio: NextPage = () => {
  return (
    <div className="min-h-screen gradient-base ">
      <section id="hero" className="grid grid-cols-2">
        <div className="text-center py-14 ">
          <Avatar img="/images/portfolio/edmundus.jpeg" alt="edmundo arias" size="" bordered={true} />
          <div className="my-5 [&>p]:my-0 [&>p]:text-secondary-content">
            <h1 className="text-3xl ">Edmundo Arias O.</h1>
            <p>Software Engineer</p>
            <p>Smart Contract developer/Auditor</p>
          </div>
          <Socials />
          <div className="w-2/3 flex gap-x-4 px-10 m-auto">
            <Button className="flex-1 ">Resume</Button>
            <Button className="flex-1 text-primary" variant={"secondary"}>
              Wanna talk?
            </Button>
          </div>
          <small className="text-accent underline">Reach to me as Frontend developer</small>
          <h2 className="text-primary my-8">Loved tools </h2>
          <div className="my-4">
            <div className="inline-flex gap-x-2">
              <Element className="w-20 inline-flex flex-col justify-evenly items-center ">
                <Solidity width="30%" />
                <small>Solidity</small>
              </Element>
              <Element className="w-20 inline-flex flex-col justify-evenly items-center ">
                <Foundry width="60%" />
                <small>Foundry</small>
              </Element>
              <Element className="w-20 inline-flex flex-col justify-evenly items-center ">
                <Typescript width="50%" />
                <small>Typescr.</small>
              </Element>
              <Element className="w-20 inline-flex flex-col justify-evenly items-center ">
                <Hardhat width="45" />
                <small>Hardhat</small>
              </Element>
              <Element className="w-20 inline-flex flex-col justify-evenly items-center ">
                <Rust width="50%" />
                <small>Rust</small>
              </Element>
            </div>
          </div>
        </div>

        <div>
          <h2>Approach</h2>
          <div id="universe" className="">
            <Bubble width="80" height="80" />
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
