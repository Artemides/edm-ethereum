import React from "react";
import { LinkButton } from "../link-button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";

export const Resume = () => {
  return (
    <section className="h-full  relative text-sm flex flex-col items-center px-4">
      <LinkButton
        download={"edmundo-arias-resume.pdf"}
        href={"/resume/edmundo-arias-blockchain.pdf"}
        className="inline-flex gap-x-2 self-end py-2 px-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        download
        <DownloadIcon className="w-5 h-5" />
      </LinkButton>
      <div className="w-full grid grid-cols-[min-content_1fr] justify-items-start gap-x-2 gap-y-4 tracking-tight  ">
        <span> </span>
        <h2 className="text-2xl font-semibold text-peach">Edmundo Arias Ortiz</h2>
        <span className="self-center">Education</span>
        <div className="w-full pr-8">
          <div className="flex justify-between items-center">
            <p className="my-0 text-base font-semibold text-peach">University of San Antonio Abad &#x2022; P.E 🇵🇪</p>
            <span className="text-xs font-thin text-peach">aug 2014 - april 2020</span>
          </div>
          <p className="my-0 font-thin">Bachelor of Engineering in Computer And Systems Engineering</p>
        </div>
        <span className="self-center">Online Education</span>
        <div className="[&>p]:m-0">
          <p className="font-semibold text-base text-peach">
            Ethereum.org &#x2022; Cyfrin Updraft &#x2022; Alchemy University
          </p>
          <p className="font-thin">
            Blockchain fundamentals &#x2022; Smart contract security &#x2022; Assembly and formal verification
          </p>
        </div>
        <span className="self-center">Work Experience</span>
        <div className="[&>p]:m-0 w-full">
          <Accordion type="single" collapsible defaultValue={"desc-0"}>
            <AccordionItem value="desc-0">
              <AccordionTrigger className="p-0 ">
                <div className="w-full flex justify-between items-center pr-4">
                  <p className="m-0 text-base font-semibold text-peach flex justify-between">
                    Stakedotlink - Chainlink Labs &#x2022; N.Y 🇺🇸
                  </p>
                  <span className="text-xs text-peach font-light">march 2024 - aug 2024</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-thin text-sm">
                <h2 className="font-normal text-peach">Blockchain Developer (Solidity)</h2>
                <p className="font-thin my-2">
                  Develop of stake.link protocol, the first-of-its-kind delegated liquid staking protocol which enables
                  anyone to provide LINK collateral to and receive a share of rewards from the most reliable and
                  performant Chainlink node operators.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Designed and implemented: Priority Pool for queuing eventual stakes of ERC-20 tokens into the
                    StakingPool based on reSDL governance token priority.
                  </li>
                  <li>
                    Co-architected: Automated Staking of token deposits, seamlessly integrated with Chainlink automation
                    to allow stake-and-forget user experience.
                  </li>
                  <li>
                    Implemented: Stake deposits into StakingPool for its distribution across strategies into Operator V
                    aults or Community V aults to maximize yield, along with liquid staking token receipts and account
                    shares.
                  </li>
                  <li>
                    Automated: WithdrawalPool withdraws by avoiding strategy deallocation, instead leveraging queued
                    tokens availability for auto-withdraws via keepers.
                  </li>
                  <li>
                    Participated: Into rigorous internal audits, invariant testing and formal verification suites to
                    eliminate e2e vulnerabilities.
                  </li>
                  <li>Workshops: on Solidity, best practices for decentralized application (dApp) development.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="desc-1">
              <AccordionTrigger className="p-0 ">
                <div className="w-full flex justify-between items-center pr-4">
                  <p className="m-0 text-base font-semibold text-peach flex justify-between">
                    1Cademy (Blockchain community) &#x2022; U.S 🇺🇸
                  </p>
                  <span className="text-xs text-peach font-light">sept 2024 - march 2024</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-thin text-sm">
                <h2 className="font-normal text-peach">Blockchain Developer</h2>
                <p className="font-thin my-2">
                  Creating educational content that focused on the fundamentals and advanced concepts of blockchain,
                  with a specific emphasis on Ethereum for 1Cademy Blockchain Pathway.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Explored: Consensus mechanism, network protocols, and block structure, enabling the community to
                    grasp Ethereum.
                  </li>
                  <li>Presented: An in-depth exploration of the Ethereum Virtual Machine (EVM).</li>
                  <li>Introduced: best practices for testing, auditing, manual code reviews and automated tools.</li>
                  <li>Guided: The community through the full smart contract development lifecycle.</li>
                  <li>
                    Taught: Optimizations of EVM assembly language, allowing advanced developers to implement
                    gas-efficiency.
                  </li>
                  <li>Workshops: on Solidity, best practices for decentralized application (dApp) development.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="desc-2">
              <AccordionTrigger className="p-0">
                <div className="w-full flex justify-between items-center pr-4">
                  <p className="m-0 text-base  font-semibold text-peach">1Cademy - Honor Education &#x2022; U.S 🇺🇸</p>
                  <span className="text-xs text-peach font-light"> aug 2022 - sept 2023</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-thin text-sm pr-6">
                <p className="font-thin my-2">
                  Designed to simplify learning complex scientific information by dividing it into micro-content, over
                  an infinite directional graph which provides students with learning pathways to optimize learning and
                  teaching.
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="sub-desc-1">
                    <AccordionTrigger className="p-0 ">
                      <h2 className="m-0 text-peach">Software Engineer</h2>
                    </AccordionTrigger>
                    <AccordionContent className="font-thin text-sm">
                      <h3 className="font-normal">Architecting knowledge graph database:</h3>
                      <p className="font-thin my-2">
                        Designed an Architected a graph, where each node represent a discrete unit of knowledge,
                        structured as an infinite, directional graph, creating a dynamic flow from foundational “parent”
                        knowledge to complex “child” concepts.
                      </p>
                      <h3 className="font-normal">Implementation:</h3>
                      <ul className="list-disc pl-5">
                        <li>
                          Knowledge Graph Architecture: Engineered a scalable and dynamic knowledge graph, organizing a
                          structured progression from foundational &apos;parent&apos; concepts to advanced
                          &apos;child&apos; topics.
                        </li>
                        <li>
                          Real-Time Node Interaction: Developed features for (editing, linking, submitting etc.) with an
                          optimistic UI approach.
                        </li>
                        <li>Node Voting Systems: Allow the creation of approved knowledge by the community.</li>
                        <li>Automated Learning Pathways: Generation of pathways to optimize learning and teaching</li>
                        <li>Leaderboard: Design a model ranking for community activity stats.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="sub-desc-2">
                    <AccordionTrigger className="p-0">
                      <p className="m-0 text-peach">Frontend Developer</p>
                    </AccordionTrigger>
                    <AccordionContent className="font-thin text-sm">
                      <p className="font-thin m-0 my-2">
                        Implement an infinite-directional Graph, having nodes in form of Posts fully interactive (type
                        selection, liking, disliking, creation, drafting, linking, tagging, sharing, collaboration
                        etc.).
                      </p>
                      <h3 className="font-normal">Challenges And Solutions:</h3>
                      <ul className="list-disc pl-5">
                        <li>
                          High Volume Graph rendering: Render an optimized large amount of nodes over and infinite map,
                          by using react memoization techniques to avoid unnecessary re-renders, web workers to compute
                          real-time node (positions and sizes) for repositioning and avoiding overlaps, also implement
                          custom Rust-based WASM graph drawer.
                        </li>
                        <li>
                          <span className="font-normal"> Real-time Graph Synchronization: </span>
                          Leverage Firebase snapshots for seamless updates across shared graphs.
                        </li>
                        <li>
                          <span className="font-normal">Graph Navigation: </span>
                          Implemented &apos;Scroll to Node&apos; functionality to help users navigate across the graph.
                        </li>
                        <li>
                          <span className="font-normal">Real Time Tutorial: </span>
                          Inject an interactive tutorial in the graph, which leads users across each graph element while
                          teaching them how to use all graph features.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="desc-3">
              <AccordionTrigger className="p-0">
                <div className="w-full flex justify-between items-center pr-4">
                  <p className="m-0 text-base  font-semibold text-peach">
                    {" "}
                    Agile Solutions - Ministry of Foreign Affairs &#x2022; P.E 🇵🇪
                  </p>
                  <span className="text-xs text-peach font-light">sept 2021 - july 2022</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-thin text-sm">
                <h2 className="font-normal text-peach">Software Engineer</h2>
                <p className="font-thin my-2">
                  <span className="font-normal"> Requirement Analysis and Objectives:</span> Meetings with stakeholders
                  to understand the core objectives of the Humanitarian Migration Quality System. System Design and
                </p>
                <p className="font-thin my-2">
                  <span className="font-normal"> System Design and Architectureitecture:</span> Design high level system
                  considering a relational database for System Entities.
                </p>
                <h3 className="font-normal">Challenges:</h3>

                <p className="font-thin my-2">
                  <span className="font-normal">Institution Interoperability:</span> Users who request humanitarian
                  migration needed to be carefully observed before being added into the system, and because of the
                  direct intervention of the ministry, a coordination with the Peruvian Interpol systems, Peruvian
                  National Police Systems againts the current system were needed to avoid fraudulent applications.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Resume;
