import React from "react";

type SolidityProps = {
  width?: string;
  height?: string;
};

export const Solidity = ({ height, width }: SolidityProps) => {
  return (
    <svg
      viewBox="0 0 100 160"
      focusable="false"
      width={width ?? "100%"}
      height={height ?? "100%"}
      preserveAspectRatio="xMidYMid meet"
      className="fill-white"
    >
      <path opacity="0.8" d="M50 44.3013L25 1L0 44.3013L25 87.6025L50 44.3013Z"></path>
      <path opacity="0.45" d="M50 44.3091L75 1.00781L25 1.00781L0 44.3091H50Z"></path>
      <path opacity="0.6" d="M75 1.00781L25 1.00781L50 44.3091H100L75 1.00781Z"></path>
      <path opacity="0.8" d="M50 115.699L75 159L100 115.699L75 72.3975L50 115.699Z"></path>
      <path opacity="0.45" d="M50 115.691L25 158.993H75L100 115.691L50 115.691Z"></path>
      <path opacity="0.6" d="M25 158.993H75L50 115.691L0 115.691L25 158.993Z"></path>
    </svg>
  );
};