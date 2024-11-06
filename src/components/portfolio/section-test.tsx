import {
  BlendingModeIcon,
  CheckCircledIcon,
  Link2Icon,
  ShuffleIcon,
  UpdateIcon,
  WidthIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Image from "next/image";
import { CodeWindow } from "./code-window";

const testTopics = [
  {
    title: "Unit Test",
    description: "Validate individual functions or components of the contract in isolation.",
    icon: <BlendingModeIcon />,
  },
  {
    title: "Stateless Fuzz",
    description: "Test contract functions with a wide variety of random inputs to catch edge cases.",
    icon: <UpdateIcon />,
  },
  {
    title: "Stateful Fuzz",
    description: "Test sequences of function calls over multiple states to uncover bugs in complex interactions.",
    icon: <ShuffleIcon />,
  },
  {
    title: "Integration",
    description: "Test the interaction between multiple contracts or different modules (Tokens or DEX)",
    icon: <Link2Icon />,
  },
  {
    title: "End to end",
    description: "Simulate real-world user interactions, usually across the entire application (Lending or Borrowing)",
    icon: <WidthIcon />,
  },
  {
    title: "Coverage",
    description: "Ensure each part of the code executes as expected during testing.",
    icon: <CheckCircledIcon />,
  },
];

export const SectionTest = () => {
  return (
    <section className="min-height p-2">
      <h2 className="text-4xl mb-8 text-gradient-title text-center">
        Challenging code to <br /> strengthen its core.
      </h2>
      <p className="m-auto leading-5 text-sm text-secondary-content font-light text-center w-2/3">
        {"/*"} <span className="font-semibold text-primary">@notice:</span>
        Testing in smart contracts involves several approaches to ensure correctness, security, and performance.
        {"*/"}
      </p>

      <Accordion type="single" collapsible className="m-8 grid grid-cols-2 gap-2 items-start">
        {testTopics.map((topic) => (
          <div
            key={topic.title}
            className="px-4 py-2 bg-[#0F101B] text-base rounded-lg border-[1px] border-gray-600/40"
          >
            <AccordionItem value={`item-${topic.title}`}>
              <AccordionTrigger>
                <div>
                  {React.cloneElement(topic.icon, { className: "w-5 h-5  text-[#95da8e] inline" })}{" "}
                  <h4 className="inline text-[#77a3f7] align-middle ">{topic.title} </h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="m-1 leading-5 text-sm text-secondary-content font-light">{topic.description}</p>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
      <div className="">
        <CodeWindow
          codeClassName="text-[11px]  leading-3 "
          code={`
function testDOSonWithdrawFees() public {
 Owner owner = new Owner();
 SpookySwap.Treat memory treat = 
    SpookySwap.Treat("candy", 0.1 ether, "ipfs://candy-cid");
 SpookySwap.Treat[] memory treats = new SpookySwap.Treat[](1);
 treats[0] = treat;

 vm.prank(address(owner));
 SpookySwap _protocol = new SpookySwap(treats);

 vm.prank(user);
 _protocol.trickOrTreat{ value: 0.2 ether }("candy");

 vm.prank(address(owner));
 vm.expectRevert();
 _protocol.withdrawFees();
}
`}
        />
      </div>
    </section>
  );
};

export const TestItem = () => {
  return <div>Hello</div>;
};
