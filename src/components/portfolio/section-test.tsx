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
import { CodeWindow } from "./code-window";
import { Window } from "./window-tab";
import { moons } from "@/utils/ui";

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
  const sectionIcons = moons["test"];

  return (
    <section className="h-full relative p-2 text-sm">
      {React.cloneElement(sectionIcons, {
        className:
          "absolute -top-32 right-1/2  translate-x-1/2 lg:-left-5 lg:top-5 lg:-translate-y-1/2 w-20 aspect-square scale-75 sm:scale-75 ",
        displayName: false,
      })}
      <h2 className="text-3xl text-gradient-title text-center lg:text-4xl lg:px-28">
        Challenging code to <br /> strengthen its core.
      </h2>
      <p className="m-auto leading-5  text-secondary-content text-center px-2 lg:px-12">
        {"/*"} <span className="font-semibold text-primary">@notice:</span> Leveraging a comprehensive set of strategies
        to guarantee the protocol performs flawlessly under all conditions through automated test suites, while ensuring
        it is free from vulnerabilities and ready for auditing.
        {"*/"}
      </p>

      <Accordion
        type="single"
        collapsible
        className="my-8 lg:m-8 grid grid-cols-2 gap-2 items-start sm:w-3/4 sm:mx-auto lg:w-full lg:mx-0"
      >
        {testTopics.map((topic) => (
          <div
            key={topic.title}
            className="px-4 py-0 md:py-2 bg-[#0F101B] text-base rounded-lg border-[1px] border-gray-600/40 z-10"
          >
            <AccordionItem value={`item-${topic.title}`}>
              <AccordionTrigger>
                <div>
                  {React.cloneElement(topic.icon, { className: "w-5 h-5  text-[#95da8e] inline" })}{" "}
                  <h4 className="inline text-[#77a3f7] align-middle  ">{topic.title} </h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="m-1 leading-5 text-secondary-content">{topic.description}</p>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
      <div className="w-full b px-10 py-2 absolute bottom-0 mask-gradient-to-t flex justify-end">
        <Console
          code={`testMustUpdateAllocation() 
 testOnlyCanSetNotActiveIfActive() 
 testOnlyVaultGuardiansCanSet() 
 testOnlyVaultGuardiansCanUpdate() 
 testOnlyUpdateWhenActive() 
 testRebalanceTheSameOutcome() 
 testRedeem() 
 testSetNotActive() 
 testSetupVaultShares() 
 testUpdateHolding) `}
        />
        <CodeWindow
          codeClassName="text-[11px]  leading-3 "
          code={`function test_DOSonWithdrawFeesFuzz(address recipient) public {
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

export const Console = ({ code }: { code: string }) => {
  const lines = code.split("\n");
  return (
    <Window className="absolute -bottom-4 left-4  ">
      <>
        <p className="m-[2px] text-secondary-content text-[10px] ">
          Suite result: <span className="text-[#73e766]">ok. 14 </span>passed; <span className="text-red-500">0</span>{" "}
          failed; <span className="text-yellow-300">0</span> skipped; <br />
          finished in 1.66s (7.87ms CPU time)
        </p>
        <br />
        {lines.map((line, i) => (
          <p key={`coverage-${i}`} className="text-[10px]  text-secondary-content m-[2px] leading-[10px]">
            <span className="text-[#73e766]">
              {"["}Pass{"]"}
            </span>{" "}
            {line}
          </p>
        ))}
      </>
    </Window>
  );
};
