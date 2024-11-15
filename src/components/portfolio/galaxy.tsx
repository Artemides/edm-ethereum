import React from "react";
import Image from "next/image";
import { Orbit } from "./orbit";
import { moons } from "@/utils/ui";
import { cn } from "@/lib/utils";

export const Galaxy = () => {
  return (
    <div id="universe" className="mb-24">
      <div
        className="m-auto relative  
        w-[300px]
        aspect-square
        sm:w-[450px] 
      "
      >
        <div className="absolute w-[1px] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blured-shadow "></div>
        <Orbit
          className={cn(
            "absolute w-full estellar-cloud-gradient z-10 ",
            process.env.NODE_ENV === "production" ? "animate-orbit" : ""
          )}
          elements={Object.values(moons)}
          rotateElements={process.env.NODE_ENV === "production"}
        />

        <div
          className={cn(
            "absolute-center size-1/3  z-10 ",
            process.env.NODE_ENV === "production" ? "orbit-eye-bounce" : ""
          )}
        >
          <Image
            src={"/images/portfolio/ether.webp"}
            alt="ether"
            fill
            sizes="(max-width: 640px) 80px, 130px"
            className=" object-contain "
          />
        </div>
        <Orbit
          className={cn(
            "absolute w-full aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1  ",
            process.env.NODE_ENV === "production" ? "animate-rotate-slow" : ""
          )}
          elements={new Array(5).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className={cn(
            "absolute w-2/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1 ",
            process.env.NODE_ENV === "production" ? "animate-orbit-reverse-origin" : ""
          )}
          elements={new Array(3).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2A2C3E]"></div>
          ))}
        />
        <Orbit
          className={cn(
            "absolute w-1/3 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-[1px] border-white/5  rounded-full -z-1 ",
            process.env.NODE_ENV === "production" ? "animate-rotate-fast" : ""
          )}
          elements={new Array(3).fill(null).map((_, idx) => (
            <div key={`orbit-element-${idx}`} className="w-3 h-3 rounded-full bg-[#2a2c3e]"></div>
          ))}
        />
      </div>
    </div>
  );
};
