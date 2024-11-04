import React from "react";
import { Bubble } from "./bubble";
import Image from "next/image";
import { Orbit } from "./orbit";

const topics = [
  {
    title: "design",
    icon: "⚙️",
    bColor: "#CAB3F5",
    bgColor: "#CAB3F5b0",
    bgColor2: "#CAB3F514",
  },
  {
    title: "develop",
    icon: "🛠️",
    bColor: "#B8FBF6",
    bgColor: "#B8FBF6b0",
    bgColor2: "#B8FBF614",
  },
  {
    title: "test",
    icon: "🪲",
    bColor: "#89FFA3",
    bgColor: "#89FFA3b0",
    bgColor2: "#B8FBF614",
  },
  {
    title: "secure",
    icon: "⚔️",
    bColor: "#FF4C4C",
    bgColor: "#FF4C4Cb0",
    bgColor2: "#FF4C4C14",
  },
  {
    title: "verify",
    icon: "♻️",
    bColor: "#9853FF",
    bgColor: "#9853FFb0",
    bgColor2: "#9853FF14",
  },
  {
    title: "deploy",
    icon: "🚀",
    bColor: "#FFF459",
    bgColor: "#fff459b0",
    bgColor2: "#fff45914",
  },
  {
    title: "monitor",
    icon: "📺",
    bColor: "#87A9F0",
    bgColor: "#87A9F0b0",
    bgColor2: "#87a8f014",
  },
];

export const Universe = () => {
  const orbitElements = topics.map((topic, i) => {
    return (
      <div className="">
        <Bubble
          id={`border-gradient-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
          bColor={topic.bColor}
          bgColor={topic.bgColor}
        >
          <span className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{topic.icon}</span>
        </Bubble>
        <p
          style={{ backgroundColor: topic.bgColor2, borderColor: topic.bColor }}
          className="mt-36 px-2 py-[2px] rounded-full border-[1px] text-sm "
        >
          {topic.title}
        </p>
      </div>
    );
  });

  return (
    <div id="universe" className="mb-24">
      <div className="m-auto relative w-[450px] aspect-square ">
        <div className="absolute w-[1px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blured-shadow"></div>
        <Orbit className="absolute w-full estellar-cloud-gradient z-10" elements={orbitElements} />

        <Image
          src={"/images/portfolio/ether.webp"}
          alt="ether"
          width={130}
          height={200}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10"
        />
        <Orbit
          className="absolute w-full aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1"
          elements={new Array(5).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className="absolute w-2/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1"
          elements={new Array(3).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className="absolute w-1/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1"
          elements={new Array(2).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3  rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
      </div>
    </div>
  );
};
