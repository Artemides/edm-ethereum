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
    link: "https://github.com/Artemides",
  },
  {
    title: "linkedin",
    icon: <Linkedin className="hover:fill-[#1f75ca]" />,
    link: "https://www.linkedin.com/in/edmundo-arias-35163a212/",
  },
  {
    title: "upwork",
    icon: <Upwork className="hover:fill-[#6FDA44]" />,
    link: "https://www.upwork.com/freelancers/~01b2a5d89594a3099c",
  },
  {
    title: "codehawks",
    icon: <Codehawks className="hover:fill-[#ff692e]" />,
    link: "/",
  },
  {
    title: "gmail",
    icon: <Gmail className="hover:fill-[#d74f4b]" />,
    link: "mailto:edmpulasky@gmail.com",
  },
];

export const Socials = () => {
  return (
    <div className="p-2 m-auto flex justify-center gap-x-3">
      {socials.map((social) => (
        <Link
          href={social.link}
          key={social.title}
          target={social.link !== "/" ? "_blank" : ""}
          rel="noopener noreferrer"
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
