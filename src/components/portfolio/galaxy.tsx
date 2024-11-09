import React from "react";
import { Bubble } from "./bubble";
import Image from "next/image";
import { Orbit } from "./orbit";
import { topics } from "@/utils/data";
import { Moon } from "./moon";

export const Galaxy = () => {
  const moons = topics.map((topic) => <Moon key={topic.id} moon={topic} />);

  return (
    <div id="universe" className="mb-24">
      <div className="m-auto relative w-[450px] aspect-square ">
        <div className="absolute w-[1px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blured-shadow "></div>
        <Orbit className="absolute w-full estellar-cloud-gradient z-10 animate-orbit" elements={moons} />

        <Image
          src={"/images/portfolio/ether.webp"}
          alt="ether"
          width={130}
          height={200}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 orbit-eye-bounce "
        />
        <Orbit
          className="absolute w-full aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1  animate-rotate-slow"
          elements={new Array(5).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className="absolute w-2/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1 animate-orbit-reverse-origin"
          elements={new Array(3).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className="absolute w-1/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1 animate-rotate-fast"
          elements={new Array(2).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2a2c3e]"></div>
          ))}
        />
      </div>
    </div>
  );
};
