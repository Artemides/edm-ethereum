import { cn } from "@/utils";
import { ChatBubbleOvalLeftIcon, CpuChipIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { AvatarIcon, ChatBubbleIcon, CodeIcon, GearIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const routes = [
  {
    title: "me",
    href: "/",
    active: true,
    icon: <AvatarIcon />,
  },
  {
    title: "blogs",
    href: "/",
    active: false,
    icon: <CodeIcon />,
  },
  {
    title: "projects",
    href: "/",
    active: false,
    icon: <ShieldCheckIcon />,
  },
  {
    title: "audits",
    href: "/",
    active: false,
    icon: <CpuChipIcon />,
  },
  {
    title: "assembly",
    href: "/",
    active: false,
    icon: <ChatBubbleOvalLeftIcon />,
  },
];

export const Header = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2  w-fit p-4 bg-[#0a0b16] backdrop-blur-md  border-[1px] border-indigo-900/40 shadow-md shadow-black z-20 rounded-full scale-90 hover:scale-100 transition duration-300",
        className
      )}
    >
      <ul className="m-auto h-full w-fit flex items-center gap-x-4 ">
        {routes.map(({ active, title, icon }) => (
          <li
            key={title}
            className={cn(
              "h-full flex flex-col justify-center  text-sm text-secondary-content hover:scale-125 transition duration-300 hover:text-peach ",
              active ? " text-peach" : ""
            )}
          >
            <Link href={"/"}>{React.cloneElement(icon, { className: "size-[21px]" })}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
