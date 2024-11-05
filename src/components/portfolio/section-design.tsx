import React from "react";
import { highlightParagraph } from "@/utils/ui";
import { Bubble } from "./bubble";
import Image from "next/image";
import { CodeWindow } from "./code-window";
import { title } from "process";
import { contracts, defiProtocols, topics } from "@/utils/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

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
        className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 aspect-square "
        bColor={design.bColor}
        bgColor={design.bgColor}
      >
        <span className="absolute text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{design.icon}</span>
      </Bubble>

      <div className="mx-auto w-8/12 col-span-6 text-center  [&>div]:mt-4">
        <h2 className=" text-gradient tracking-tighter text-4xl mb-10">... into Robust Architectures</h2>
        <div>
          <div className="tabs">
            <input type="radio" name="tabs" id="tab1" className="hidden peer/tab1" defaultChecked />
            <label
              htmlFor="tab1"
              className="tab  border-b-2 border-secondary peer-checked/tab1:text-primary peer-checked/tab1:border-b-2 peer-checked/tab1:border-primary"
            >
              {"{"} Core {"}"}
            </label>
            <input type="radio" name="tabs" id="tab2" className="hidden peer/tab2" />
            <label
              htmlFor="tab2"
              className="tab  border-b-2 border-secondary peer-checked/tab2:text-primary peer-checked/tab2:border-b-2 peer-checked/tab2:border-primary"
            >
              {"{"} Requirements{"}"}
            </label>
            <input type="radio" name="tabs" id="tab3" className="hidden peer/tab3" />
            <label
              htmlFor="tab3"
              className="tab  border-b-2 border-secondary peer-checked/tab3:text-primary peer-checked/tab3:border-b-2 peer-checked/tab3:border-primary"
            >
              {"{"} Standards {"}"}
            </label>
            <div role="tabpanel" className="hidden col-span-3 peer-checked/tab1:block ">
              <p className="text-secondary-content pl-4 text-sm font-thin">
                {"/*"} clearly outline what the smart contract should do, including specific functions and interactions
                with other contracts or external data. {"*/"}
              </p>
              <h2 className="text-center my-10 ">
                <span className="">On and Off</span> chain Interactions
              </h2>
              <div className="text-start relative grid  grid-rows-5 justify-items-center ">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-spot shadow-[#1F1832] "></div>
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
            <div role="tabpanel" className="hidden col-span-3 peer-checked/tab2:block ">
              <p className="text-secondary-content pl-4 text-sm font-thin">
                {"/*"} security and compliance requirements: Identify security constraints, such as access control,
                reentrancy protection, rate-limiting, and compliance with regulatory requirements if applicable. {"*/"}
              </p>
              <Carousel className="hover:cursor-pointer select-none">
                <CarouselContent>
                  <CarouselItem>
                    <div className="text-start relative grid grid-cols-[1fr_auto_1fr] items-center justify-items-center my-12 ">
                      <CodeWindow
                        code={`Contract {
 uint balance;
 mapping s_owner;
 constructor()
 do(address) {
  .call("swap");
 }
 receive()    
}`}
                      />
                      <span className="col-">is</span>
                      <div className="space-y-2 font-light text-sm text-center">
                        <div className="border-[1px] border-accent px-4 bg-accent/5 rounded-md">
                          <p>Access Control</p>
                        </div>
                        <div className="border-[1px] border-accent px-4 bg-accent/5 rounded-md">
                          <p>Ownable</p>
                        </div>
                        <div className="border-[1px] border-accent px-4 bg-accent/5 rounded-md">
                          <p>NonReentrant</p>
                        </div>
                        <div className="border-[1px] border-accent px-4 bg-accent/5 rounded-md">
                          <p>Governance</p>
                        </div>
                        <div className="border-[1px] border-accent px-4 bg-accent/5 rounded-md">
                          <p>Finance</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="max-w-full">
                    <h2 className="my-2">Tokenized</h2>
                    <div className="grid grid-cols-2 gap-x-2 items-end justify-items-center text-start p-8">
                      <CodeWindow
                        code={`
ERC20 {
  string public symbol;
  uint totalSupply;
  mapping balanceOf;

  transfer(){
   /* impl */
  }
}
`}
                      />
                      <CodeWindow
                        code={`
ERC721 {
 uint tokenId;
 mapping ownerOf;
 mint(){
   /* impl */
 }      
}
`}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>3</CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-left-10 border-indigo-900 hover:bg-indigo-900/50" />
                <CarouselNext className="-right-5 border-indigo-900 hover:bg-indigo-900/50" />
              </Carousel>
            </div>
            <div role="tabpanel" className="hidden col-span-3 peer-checked/tab3:block ">
              <p className="text-secondary-content pl-4 text-sm font-thin">
                {"/*"}key assumptions: factors like network interactions, dependencies, token standards (e.g., ERC-20,
                ERC-721), and expected user behaviors. {"*/"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6"></div>
    </section>
  );
};
