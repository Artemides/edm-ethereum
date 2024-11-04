"use client";

import Image from "next/image";
import path from "path";
import React from "react";

const socials = [
  "/images/portfolio/social/github.svg",
  "/images/portfolio/social/linkedin.svg",
  "/images/portfolio/social/upwork.svg",
  "/images/portfolio/social/codehawks.svg",
  "/images/portfolio/social/gmail.svg",
];

export const Socials = () => {
  return (
    <div className="p-2 m-auto flex justify-center gap-x-2">
      {socials.map((url) => (
        <Image src={url} alt={path.basename(url)} width={18} height={18} />
      ))}
    </div>
  );
};
