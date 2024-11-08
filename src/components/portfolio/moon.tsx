import React from "react";
import { Bubble } from "./bubble";
import { Approach } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type MoonProps = {
  moon: Approach;
};

export const Moon = ({ moon }: MoonProps) => {
  return (
    <Link href={`#${moon.id}`} key={moon.title} className="inline-block hover:scale-[1.2]  transition duration-300 ">
      <Bubble
        id={`border-gradient-${moon.id}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
        bColor={moon.bColor}
        bgColor={moon.bgColor}
      >
        <span className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{moon.icon}</span>
      </Bubble>
      <p
        style={{ backgroundColor: moon.bgColor2, borderColor: moon.bColor }}
        className="mt-36 px-2 py-[2px] rounded-full border-[1px] text-sm "
      >
        {moon.title}
      </p>
    </Link>
  );
};
