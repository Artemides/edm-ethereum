import Image from "next/image";
import Link from "next/link";
import React from "react";

export type DaapItemProps = {
  name: string;
  image: string;
  href: string;
};

export const DaapItem = ({ href, image, name }: DaapItemProps) => {
  return (
    <Link
      href={href}
      className="group p-2 bg-base-100  text-center max-w-sm rounded-xl shadow-2xl shadow-primary border-2 border-primary
  transform transition duration-300 hover:scale-105  hover:border-secondary
"
    >
      <figure className="transition duration-300 group-hover:scale-110 relative w-72 aspect-video bg-radial-orange-to-transparent">
        <Image src={image} alt={name} fill={true} />
      </figure>
    </Link>
  );
};
