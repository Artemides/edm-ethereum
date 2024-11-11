import React from "react";
import { Bubble } from "./bubble";
import { Approach } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MoonProps = {
  index: number;
  moon: Approach;
  displayName?: boolean;
  className?: string;
};

export const Moon = ({ moon, index, className, displayName = true }: MoonProps) => {
  return (
    <Link
      href={`#${moon.id}`}
      key={moon.title}
      className={cn("inline-block hover:scale-[1.2]  transition duration-300 ", className)}
    >
      <Bubble
        id={`border-gradient-${moon.id}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
        bColor={moon.bColor}
        bgColor={moon.bgColor}
      >
        <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  overflow-hidden">
          <Image
            src={"/images/portfolio/macos-emoji.png"}
            alt={moon.title}
            height={80}
            width={380}
            className="max-w-max absolute object-cover "
            style={{ transform: `translateX(-${index * (40 + 16.5)}px)` }}
          />
        </div>
      </Bubble>
      {displayName && (
        <p
          style={{ backgroundColor: moon.bgColor2, borderColor: moon.bColor }}
          className="mt-36 px-2 py-[2px] rounded-full border-[1px] text-sm "
        >
          {moon.title}
        </p>
      )}
    </Link>
  );
};
