import { cn } from "@/utils";
import React from "react";

type BubbleProps = {
  id: string;
  width?: string;
  height?: string;
  bgColor?: string;
  bColor?: string;
};

export const Bubble = ({
  children,
  className,
  ...props
}: { children?: React.ReactNode; className?: string } & BubbleProps) => {
  return (
    <div className={cn("relative ", className)}>
      <div className="absolute-center w-full aspect-square shadow-lg shadow-black/75 rounded-full "></div>
      <BubbleBorder {...props} />
      {children}
    </div>
  );
};

export const BubbleBorder = ({ id, width, height, bgColor = "#fff", bColor = "#fff" }: BubbleProps) => {
  return (
    <svg
      width={width ?? "100%"}
      height={height ?? "100%"}
      viewBox="0 0 96 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute "
    >
      <g filter="url(#filter0_d_2447_648)">
        <circle
          cx="48"
          cy="40"
          r="47"
          fill={`url(#paint0_radial_2447_648_${id})`}
          shapeRendering="geometricPrecision"
        />
        <circle
          cx="48"
          cy="40"
          r="47"
          stroke={`url(#paint1_linear_2447_648_${id})`}
          stroke-width="2"
          shapeRendering="geometricPrecision"
        />
      </g>
      <defs>
        <radialGradient
          id={`paint0_radial_2447_648_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48 -14) rotate(90) scale(94)"
        >
          <stop offset="0.67" stop-color="#737373" stop-opacity="0" />
          <stop offset="1" stop-color={bgColor} stop-opacity="0.46" />
        </radialGradient>
        <linearGradient
          id={`paint1_linear_2447_648_${id}`}
          x1="48"
          y1="0"
          x2="48"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.095" stop-opacity="0" />
          <stop offset="1" stop-color={bColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};
