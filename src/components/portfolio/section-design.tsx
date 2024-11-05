import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

const highlightSol = (code: string) => {
  const lines = code.split("\n");

  return lines.map((line, index) => {
    // Combined regex to capture comments, keywords, numbers, strings, and function names
    const highlightedLine = line.replace(
      /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|\b(Contract|function|require|uint|int|address|bool|mapping|string|public|private|view|returns|memory|storage)\b|\d+|"([^"]*)"|'([^']*)'|([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()|\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*\())/g,
      (match, p1, p2, p3, p4, p5, p6) => {
        // Match comments
        if (/^\/\/|\/\*/.test(match)) {
          return `<span class="sol-comment">${match}</span>`;
        }
        // Match keywords
        if (p2) {
          return `<span class="sol-keyword">${p2}</span>`;
        }
        // Match function names (e.g., functionName() during definition)
        if (p5) {
          return `<span class="sol-function-name">${p5}</span>`;
        }
        // Match numbers
        if (/\d+/.test(match)) {
          return `<span class="sol-number">${match}</span>`;
        }
        // Match double-quoted strings
        if (p3) {
          return `<span class="sol-string">"${p3}"</span>`;
        }
        // Match single-quoted strings
        if (p4) {
          return `<span class="sol-string">'${p4}'</span>`;
        }
        // Return the original match for anything else (e.g., symbols)
        return match;
      }
    );

    // Return JSX for each line
    return <p key={index} dangerouslySetInnerHTML={{ __html: highlightedLine }} className="m-0" />;
  });
};
const highlightParagraph = (text: string) => {
  const regex = /^([\w\s]+)\s*:\s*(.+)$/;
  const match = text.match(regex);
  if (!match) return <p>text</p>;

  const title = match[1];
  const content = match[2];

  function capitalize(words: string) {
    return words
      .toLowerCase()
      .replace(/(?:^|\s)\w/g, (m) => m.toUpperCase())
      .replace(/\s+/g, "");
  }
  return (
    <>
      <h3 className="inline-block text-orange-300 text-2xl">{capitalize(title)}</h3>
      <span className="text-[#FF6980]"> {"{"}</span>
      <p className="text-secondary-content pl-4 text-sm font-thin">
        {"/*"} {content.toLocaleLowerCase()} {"*/"}
      </p>
      <span className="text-[#FF6980]">{"}"}</span>
    </>
  );
};

export const SectionDesign = () => {
  return (
    <section
      className="relative min-h-screen border-t-[1px] border-t-indigo-900/50 px-2 py-8 grid grid-cols-12
      flash-light 
    "
    >
      <div className="col-span-6 text-center px-10 [&>div]:mt-4">
        <h2 className=" text-gradient tracking-tighter text-4xl my-10">... into Robust Architectures.</h2>
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

      <div className="col-span-6 p-10">
        <h2>Hello</h2>
        <CodeWindow />
      </div>
    </section>
  );
};

const CodeWindow = () => {
  const windowOptions = () => {
    return (
      <div className="absolute top-2 left-2 flex [&>span]:w-2 [&>span]:h-2 [&>span]:rounded-full gap-x-[2px]">
        <span className="bg-[#FD4646]"></span>
        <span className="bg-[#FCAF24]"></span>
        <span className="bg-[#29C031]"></span>
      </div>
    );
  };
  return (
    <div
      className="relative min-h-2  w-fit  bg-[#0F101B] rounded-lg border-[1px] border-[#6D6D6D]/25 p-6 drop-shadow   
    "
    >
      <div className="">
        {windowOptions()}
        <pre>
          <code className={jetbrains.className}>
            {highlightSol(`Contract {
  uint balance;
  mapping s_owner;
  constructor()
  do(address) {
    .call("swap");
  }
  receive()    
}`)}
          </code>
        </pre>
      </div>
    </div>
  );
};
