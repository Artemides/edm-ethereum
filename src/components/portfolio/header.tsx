import { cn } from "@/utils/ui";
import React from "react";

const routes = [
  {
    title: "me",
    href: "/",
    active: true,
  },
  {
    title: "blogs",
    href: "/",
    active: false,
  },
  {
    title: "projects",
    href: "/",
    active: false,
  },
  {
    title: "audits",
    href: "/",
    active: false,
  },
  {
    title: "assembly",
    href: "/",
    active: false,
  },
];

export const Header = () => {
  return (
    <nav className="sticky top-0 w-full h-[70px] bg-[#11111B7f] backdrop-blur-md  border-b-[1px] border-b-indigo-900/40 shadow-md shadow-black z-20">
      <ul className="m-auto h-full w-fit flex  items-center ">
        {routes.map(({ active, title }) => (
          <li
            key={title}
            className={cn(
              "h-full px-5 flex flex-col justify-center border-t-2 text-sm text-secondary-content",
              active ? "border-t-primary text-primary" : "border-t-transparent"
            )}
          >
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
