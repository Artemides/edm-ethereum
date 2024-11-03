import React from "react";

type BubbleProps = {
  width?: string;
  height?: string;
  bgColor?: string;
  bColor?: string;
};

import { cn } from "@/utils/ui";

export const Bubble = ({
  children,
  className,
  ...props
}: { children?: React.ReactNode; className?: string } & BubbleProps) => {
  return (
    <div className={cn("relative", className)}>
      <BubbleBorder {...props} />
      {children}
    </div>
  );
};

export const BubbleBorder = ({ width, height, bgColor = "#fff", bColor = "#fff" }: BubbleProps) => {
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
        <circle cx="48" cy="40" r="47" fill="url(#paint0_radial_2447_648)" shapeRendering="geometricPrecision" />
        <circle
          cx="48"
          cy="40"
          r="47"
          stroke="url(#paint1_linear_2447_648)"
          stroke-width="2"
          shapeRendering="geometricPrecision"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2447_648"
          x="0"
          y="0"
          width="96"
          height="100"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2447_648" />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2447_648" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2447_648" result="shape" />
        </filter>
        <radialGradient
          id="paint0_radial_2447_648"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48 -14) rotate(90) scale(94)"
        >
          <stop offset="0.67" stop-color="#737373" stop-opacity="0" />
          <stop offset="1" stop-color={bgColor} stop-opacity="0.46" />
        </radialGradient>
        <linearGradient id="paint1_linear_2447_648" x1="48" y1="0" x2="48" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0.095" stop-opacity="0" />
          <stop offset="1" stop-color={bColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};
