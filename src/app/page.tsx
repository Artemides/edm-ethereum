import Avatar from "@/components/avatar";
import { Button } from "@/components/button";
import { CodingArsenal } from "@/components/portfolio/coding-arsenal";
import { Galaxy } from "@/components/portfolio/galaxy";
import { GalaxyInfo } from "@/components/portfolio/galaxy-info";
import { Header } from "@/components/portfolio/header";
import { Ether } from "@/components/portfolio/icons/socials-icons";
import { SectionDeploy } from "@/components/portfolio/section-deploy";
import { SectionDesign } from "@/components/portfolio/section-design";
import { SectionDevelop } from "@/components/portfolio/section-develop";
import { SectionSecurity } from "@/components/portfolio/section-security";
import { SectionTest } from "@/components/portfolio/section-test";
import { SectionVerify } from "@/components/portfolio/section-verify";

import { Socials } from "@/components/portfolio/socials";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Portfolio: NextPage = () => {
  return (
    <div className="h-screen gradient-base ">
      <Header />
      <section id="hero" className=" grid grid-cols-12 py-4">
        <div className="text-center col-span-5">
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
        <div className="my-auto col-span-7">
          <h2 className="text-4xl tracking-tighter">Approach</h2>
          <Galaxy />
          <div className="m-auto w-2/3 text-gradient-title text-center tracking-tighter">
            <h1 className="text-4xl">From brainstorming through execution and beyond.</h1>
          </div>
        </div>
      </section>
      <GalaxyInfo />
    </div>
  );
};

export default Portfolio;
