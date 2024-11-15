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

export const Moon = ({ moon, className, displayName = true }: MoonProps) => {
  return (
    <Link
      href={`#${moon.id}`}
      scroll={false}
      key={moon.title}
      className={cn("inline-block hover:scale-[1.2]  transition duration-300 scale-75 sm:scale-100", className)}
    >
      <Bubble
        id={`border-gradient-${moon.id}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
        bColor={moon.bColor}
        bgColor={moon.bgColor}
      >
        <Image src={moon.icon} alt={moon.title} height={40} width={40} className="absolute-center " />
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
