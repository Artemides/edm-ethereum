"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  Bars3Icon,
  BugAntIcon,
  CircleStackIcon,
  InboxStackIcon,
  PhotoIcon,
  WalletIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import { RainbowConnectButton } from "./scaffold-eth/rainbow-kit-custom-connect";
import FaucetButton from "./scaffold-eth/faucet-button";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuOption = {
  name: Options;
  features: HeaderMenuLink[];
  icon?: React.ReactNode;
};

export const options: MenuOption[] = [
  {
    name: "NFT",
    icon: <PhotoIcon className="h-4 w-4" />,
    features: [
      {
        label: "My NFTs",
        href: "/projects/mynfts",
        icon: <PhotoIcon className="h-4 w-4" />,
      },
      {
        label: "IPFS Upload",
        href: "/projects/ipfsUpload",
        icon: <ArrowUpTrayIcon className="h-4 w-4" />,
      },
      {
        label: "IPFS Download",
        href: "/projects/ipfsDownload",
        icon: <ArrowDownTrayIcon className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Stake",
    icon: <CircleStackIcon className="size-4" />,
    features: [
      {
        label: "Staker",
        href: "/projects/staker",
        icon: <CircleStackIcon className="size-4" />,
      },
      {
        label: "Staker Epochs",
        href: "/projects/staker-epochs",
        icon: <CircleStackIcon className="size-4" />,
      },
      {
        label: "Stakings",
        href: "/projects/stakings",
        icon: <InboxStackIcon className="size-4" />,
      },
    ],
  },
  {
    name: "ERC20",
    icon: <p className="text-[16px]  m-0">🪙</p>,
    features: [
      {
        label: "Vendor",
        href: "/projectss/erc20/token-vendor",
        icon: <p className="text-[16px] m-0">📠</p>,
      },
      {
        label: "Events",
        href: "/projects/erc20/token-vendor/events",
        icon: "⚡️",
      },
    ],
  },
  {
    name: "Debug",
    icon: <BugAntIcon className="size-4" />,
    features: [
      {
        label: "Debug Contracts",
        href: "/projects/debug",
        icon: <BugAntIcon className="size-4" />,
      },
    ],
  },
];

type TMenuOption = {
  open: Options | undefined;
  setOpen: Dispatch<SetStateAction<Options | undefined>>;
  option: MenuOption;
};

const MenuOption = ({ open, setOpen, option }: TMenuOption) => {
  const optionRef = useRef<HTMLDivElement>(null);

  useOutsideClick(
    optionRef,
    useCallback(() => setOpen(undefined), [setOpen])
  );

  return (
    <div className="dropdown" ref={optionRef}>
      <label
        tabIndex={0}
        className={`ml-1 btn btn-ghost ${open ? "hover:bg-secondary" : "hover:bg-hsla(0, 0%, 0%, 0)"}`}
        onClick={() => {
          setOpen(option.name);
        }}
      >
        {option.name}
        {option.icon}
      </label>
      {open === option.name && (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-[1px] shadow bg-base-100 rounded-box w-52"
          onClick={() => {
            setOpen(option.name);
          }}
        >
          <HeaderMenuLinks menuLinks={option.features} />
        </ul>
      )}
    </div>
  );
};
export const HeaderMenuLinks = ({ menuLinks }: { menuLinks: HeaderMenuLink[] }) => {
  const pathname = usePathname();
  return menuLinks.map(({ label, href, icon }) => {
    const isActive = pathname === href;
    return (
      <li key={href}>
        <Link
          href={href}
          passHref
          className={`${
            isActive ? "bg-secondary shadow-md" : ""
          } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
        >
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    );
  });
};

type Options = "NFT" | "Stake" | "Debug" | "ERC20" | undefined;

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<Options>();
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(undefined), [])
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 border-b-[2px] border-secondary px-0 sm:px-2 ">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(undefined);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(undefined);
              }}
            >
              {/* <HeaderMenuLinks menuLinks={menuLinks} /> */}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative">
            <Image alt="SE2 logo" className="cursor-pointer" width={40} height={40} src="/favicon.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">SpeedrunEth</span>
            <span className="text-xs">Ethereum dev stack</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          {options.map((option) => (
            <MenuOption key={option.name} open={isDrawerOpen} option={option} setOpen={setIsDrawerOpen} />
          ))}
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
