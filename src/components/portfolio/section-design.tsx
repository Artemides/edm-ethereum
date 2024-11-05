import React from "react";
import { highlightParagraph } from "@/utils/ui";
import { Bubble } from "./bubble";
import Image from "next/image";
import { CodeWindow } from "./code-window";

export const SectionDesign = () => {
  return (
    <section
      className="relative min-h-screen border-t-[1px] border-t-indigo-900/50 px-2 py-8 grid grid-cols-12
      flash-light 
    "
    >
      <div className="col-span-6 text-center px-10 [&>div]:mt-4">
        <h2 className=" text-gradient tracking-tighter text-4xl my-10">... into Robust Architectures</h2>
        <div className=" text-left tracking-tighter [&>*]:m-0 bg-black/15 border-[1px] border-secondary/50 p-4 rounded-md">
          {highlightParagraph(
            "business logic: clearly outline what the smart contract should do, including specific functions and interactions with other contracts or external data."
          )}
        </div>
        <div className=" text-left tracking-tighter [&>*]:m-0 p-4">
          {highlightParagraph(
            "security and compliance requirements: Identify security constraints, such as access control, reentrancy protection, rate-limiting, and compliance with regulatory requirements if applicable."
          )}
        </div>
        <div className=" text-left tracking-tighter [&>*]:m-0 p-4">
          {highlightParagraph(
            "key assumptions: factors like network interactions, dependencies, token standards (e.g., ERC-20, ERC-721), and expected user behaviors."
          )}
        </div>
      </div>

      <div className="relative h-full col-span-6 p-20 grid grid-cols-6 grid-rows-5 justify-items-center ">
        <div className="absolute w-[1px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-spot shadow-[#1F1832] "></div>

        <h2>on-chain Interactions</h2>
        <div className="col-span-2">
          <Bubble
            id={`border-gradient-aave`}
            className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
            bColor={"#9391F7"}
            bgColor={"#9391F77f"}
          >
            <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image src={"/images/portfolio/defi/aave.png"} alt="uniswap" width={50} height={50} />
            </div>
          </Bubble>
        </div>
        <div className="row-start-2 col-span-2">
          <Bubble
            id={`border-gradient-uni`}
            className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
            bColor={"#FF007A"}
            bgColor={"#FF007Aa0"}
          >
            <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image src={"/images/portfolio/defi/uniswap.png"} alt="uniswap" width={50} height={50} />
            </div>
          </Bubble>
        </div>
        <div className="row-start-4 col-start-1 col-span-2">
          <Bubble
            id={`border-gradient-curve`}
            className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
            bColor={"#FCB503"}
            bgColor={"#FCB5037f"}
          >
            <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image src={"/images/portfolio/defi/curve.png"} alt="uniswap" width={50} height={50} />
            </div>
          </Bubble>
        </div>
        <div className="col-start-6 row-start-3 col-span-2">
          <Bubble
            id={`border-gradient-compound`}
            className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
            bColor={"#00D395"}
            bgColor={"#00D3957f"}
          >
            <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image src={"/images/portfolio/defi/compound.png"} alt="uniswap" width={50} height={50} />
            </div>
          </Bubble>
        </div>
        <div className="col-start-4 row-start-4 col-span-2">
          <Bubble
            id={`border-gradient-link`}
            className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square "
            bColor={"#335DD2"}
            bgColor={"#335DD27f"}
          >
            <div className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Image src={"/images/portfolio/defi/link.png"} alt="uniswap" width={50} height={50} />
            </div>
          </Bubble>
        </div>
        <div className="col-start-5 col-span-2 row-span-2">
          <CodeWindow
            code={`Uniswap {
  address token0;
  address token1;

  swap(uint) {
    /* impl */
  }
}`}
          />
        </div>
        <div className="col-start-1 row-start-2 col-span-2 row-span-2">
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
        </div>
        <div className="col-start-4 row-start-3 col-span-2 row-span-2">
          <CodeWindow
            code={`Oracle {
  priceEth() {
    /* impl */
  }
}`}
          />
        </div>
      </div>
    </section>
  );
};
