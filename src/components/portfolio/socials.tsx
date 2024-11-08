"use client";

import Image from "next/image";
import path from "path";
import React from "react";
import { Codehawks, Github, Gmail, Linkedin, Upwork } from "./icons/socials-icons";
import Link from "next/link";

const socials = [
  {
    title: "github",
    icon: <Github className="hover:fill-[#fff]" />,
  },
  {
    title: "linkedin",
    icon: <Linkedin className="hover:fill-[#1f75ca]" />,
  },
  {
    title: "upwork",
    icon: <Upwork className="hover:fill-[#6FDA44]" />,
  },
  {
    title: "codehawks",
    icon: <Codehawks className="hover:fill-[#ff692e]" />,
  },
  {
    title: "gmail",
    icon: <Gmail className="hover:fill-[#d74f4b]" />,
  },
];

export const Socials = () => {
  return (
    <div className="p-2 m-auto flex justify-center gap-x-3">
      {socials.map((social) => (
        <Link
          href={"/"}
          key={social.title}
          className="
        w-5 transition duration-300 hover:scale-[1.3]
        [&>svg]:fill-secondary-content
        "
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
