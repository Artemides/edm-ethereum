import Avatar from "@/components/avatar";
import { Button } from "@/components/button";
import { CodingArsenal } from "@/components/portfolio/coding-arsenal";
import { Galaxy } from "@/components/portfolio/galaxy";
import { Header } from "@/components/portfolio/header";
import { Ether } from "@/components/portfolio/icons/socials-icons";
import { SectionDesign } from "@/components/portfolio/section-design";
import { SectionDevelop } from "@/components/portfolio/section-develop";
import { SectionTest } from "@/components/portfolio/section-test";

import { Socials } from "@/components/portfolio/socials";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Portfolio: NextPage = () => {
  return (
    <div className="min-h-screen gradient-base ">
      <Header />
      <section id="hero" className=" grid grid-cols-12 my-4">
        <div className="text-center py-14 col-span-5">
          <Avatar img="/images/portfolio/edmundus.jpeg" alt="edmundo arias" size="" bordered={true} />
          <div className="my-5 [&>p]:-my-1 [&>p]:text-secondary-content  [&>p]:text-sm">
            <h2 className="text-3xl ">Edmundo Arias O.</h2>
            <p>Software Engineer</p>
            <p>Smart Contract Developer/Auditor</p>
          </div>
          <hr className="mx-auto my-4 w-3/6 border-t border-secondary/75" />
          <div className="w-2/3 px-10 m-auto">
            <Socials />
            <div className=" flex gap-x-4  my-4">
              <Button className="flex-1 ">Resume</Button>
              <Button className="flex-1 text-primary" variant={"secondary"}>
                Wanna talk?
              </Button>
            </div>
            <Link href={"/"} className="text-accent/90 underline text-xs hover:text-accent">
              reach out for Frontend Development
            </Link>
          </div>
          <hr className="mx-auto my-4 w-2/3 border-t border-secondary/75" />
          <h2 className="text-primary text-sm">
            {`{`} coding arsenal {`}`}
          </h2>
          <CodingArsenal />
        </div>
        <div className="col-span-7">
          <h2 className="text-4xl tracking-tighter">Approach</h2>
          <Galaxy />
          <div className="m-auto w-2/3 text-gradient text-center tracking-tighter">
            <h1 className="text-4xl">From inception to execution</h1>
            <p className="text-xl"> every line of code is fortified with security️ and foresight.</p>
          </div>
        </div>
      </section>
      <div className="divider  before:bg-indigo-900/25 before:h-[1px] after:h-[1px] after:bg-indigo-900/25">
        <Ether className="w-12" />
      </div>
      <div className="relative grid grid-cols-2 flash-light before:via-[#361882]">
        <SectionDesign />
        <SectionDevelop />
      </div>
      <div className="divider  before:bg-indigo-900/25 before:h-[1px] after:h-[1px] after:bg-indigo-900/25">
        <Ether className="w-12" />
      </div>
      <div className="relative grid grid-cols-2 flash-light before:via-[#89FFA3]">
        <SectionTest />
      </div>
      <div className="divider  before:bg-indigo-900/25 before:h-[1px] after:h-[1px] after:bg-indigo-900/25">
        <Ether className="w-12" />
      </div>
      <section className="min-height"></section>
    </div>
  );
};

export default Portfolio;
