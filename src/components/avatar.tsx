import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AvatarProps = {
  alt: string;
  img?: string;
  className?: string;
};

const AvatarFallback = ({ alt }: { alt: string }) => {
  return (
    <div className="size-full rounded-full bg-secondary flex items-center justify-center">
      <span className={"text-7xl text-secondary-content"}>{alt.substring(0, 1).toUpperCase() || "A"}</span>
    </div>
  );
};

const Avatar = ({ img, alt, className }: AvatarProps) => {
  return (
    <div
      className={cn(
        "relative size-48 self-center rounded-full bg-gradient-to-t from-[#524BB0] via-[#B8FBF6]/25 to-35%  aspect-square  p-[4px] ",
        className
      )}
    >
      {img ? (
        <div className="relative size-full rounded-full overflow-hidden">
          <Image className="object-cover" src={img!} alt={alt} fill sizes="(max-width: 640px) 150px, 200px" />
        </div>
      ) : (
        <AvatarFallback alt={alt || ""} />
      )}
      <a
        href="https://www.google.com/search?q=peru&hl=en&gl=us"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute w-10 h-7 grid grid-cols-3 -bottom-3 left-1/2 -translate-x-1/2 hover:scale-125 transition"
      >
        <div className="bg-red-600 rounded-l-sm"></div>
        <div className="bg-white"></div>
        <div className="bg-red-600  rounded-r-sm"></div>
      </a>
    </div>
  );
};

export default Avatar;
