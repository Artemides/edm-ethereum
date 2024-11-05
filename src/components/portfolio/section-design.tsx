import React from "react";
import { highlightParagraph } from "@/utils/ui";
import { Bubble } from "./bubble";
import Image from "next/image";
import { CodeWindow } from "./code-window";
import { title } from "process";
import { contracts, defiProtocols, topics } from "@/utils/data";

export const SectionDesign = () => {
  const design = topics.find((t) => t.title == "design")!;

  return (
    <section
      className="relative px-2 py-8 grid grid-cols-12
      flash-light before:via-[#CAB3F5]
    "
    >
      <Bubble
        id={`border-gradient-${design.title}`}
        className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
        bColor={design.bColor}
        bgColor={design.bgColor}
      >
        <span className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{design.icon}</span>
      </Bubble>
      <div className="mx-auto w-8/12 col-span-6 text-center  [&>div]:mt-4">
        <h2 className=" text-gradient tracking-tighter text-4xl mb-10">... into Robust Architectures</h2>
        <div className=" text-left tracking-tighter [&>*]:m-0 bg-black/15 border-[1px] border-secondary/50 p-4 rounded-md">
          {highlightParagraph(
            "core: clearly outline what the smart contract should do, including specific functions and interactions with other contracts or external data."
          )}
        </div>
        <div className=" text-left tracking-tighter [&>*]:m-0 p-4">
          {highlightParagraph(
            "security and compliance requirements: Identify security constraints, such as access control, reentrancy protection, rate-limiting, and compliance with regulatory requirements if applicable."
          )}
        </div>
        <div className="text-left tracking-tighter [&>*]:m-0 p-4">
          {highlightParagraph(
            "key assumptions: factors like network interactions, dependencies, token standards (e.g., ERC-20, ERC-721), and expected user behaviors."
          )}
        </div>
      </div>

      <div className="col-span-6">
        <h2 className="text-xl text-center my-10 ">
          <span className="font-semibold">On and Off</span> chain Interactions
        </h2>
        <div className="m-auto relative px-20 py-5 grid grid-cols-6 grid-rows-5 justify-items-center center">
          <div className="absolute w-[1px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-spot shadow-[#1F1832] "></div>
          {defiProtocols.map((protocol) => (
            <div key={protocol.title} className={protocol.className}>
              <Bubble
                id={`border-gradient-${protocol.title}`}
                className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
                bColor={protocol.bColor}
                bgColor={protocol.bgColor}
              >
                <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <Image src={protocol.image} alt={protocol.title} width={50} height={50} />
                </div>
              </Bubble>
            </div>
          ))}

          {contracts.map((contract) => (
            <div key={contract.title} className={contract.className}>
              <CodeWindow code={contract.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
