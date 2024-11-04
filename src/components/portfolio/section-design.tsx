import React from "react";

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
      <p className="text-secondary-content pl-4 text-sm font-thin">/* {content.toLocaleLowerCase()} */</p>
      <span className="text-[#FF6980]">{"}"}</span>
    </>
  );
};

export const SectionDesign = () => {
  return (
    <section className="min-h-screen border-t-[1px] border-t-indigo-900/50 px-2 py-8 grid grid-cols-12">
      <div className="col-span-5 text-center px-10 [&>div]:mt-4">
        <h2 className="text-gradient tracking-tighter text-4xl">From blueprints into robust architectures.</h2>
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

      <div className="col-span-7">
        <h2>Hello</h2>
      </div>
    </section>
  );
};
