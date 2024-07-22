import { AvatarComponent } from "@rainbow-me/rainbowkit";
import { blo } from "blo";
import React from "react";

const BlockieAvatar: AvatarComponent = ({ address, size, ensImage }) => {
  return (
    //eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-full"
      src={ensImage || blo(address as `0x${string}`)}
      width={size}
      height={size}
      alt={`${address} avatar`}
    />
  );
};

export default BlockieAvatar;
