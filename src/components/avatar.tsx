import Image from "next/image";
import React from "react";

type AvatarProps = {
  bordered: boolean;
  alt: string;
  img?: string;
  size: "";
};

const AvatarFallback = ({ alt }: { alt: string }) => {
  return (
    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
      <span className={"text-7xl text-secondary-content"}>{alt.substring(0, 1).toUpperCase() || "A"}</span>
    </div>
  );
};

const Avatar = ({ img, alt }: AvatarProps) => {
  return (
    <div className="rounded-full bg-gradient-to-t from-[#524BB0] via-[#B8FBF6]/25 to-35%  aspect-square w-64 p-[4px]">
      {img ? (
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image className="bg-cover" src={img!} alt={alt} fill objectFit="cover" />
        </div>
      ) : (
        <AvatarFallback alt={alt || ""} />
      )}
    </div>
  );
};

export default Avatar;
