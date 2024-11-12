"use client";
import { cn } from "@/utils";
import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

type OrbitProps = {
  offsetDegree?: number;
  gap?: number;
  className?: string;
  elements: React.ReactNode[];
  rotateElements?: boolean;
};

export const Orbit = ({ elements, className, offsetDegree = 0, gap = 0, rotateElements = true }: OrbitProps) => {
  const [orbitDim, setOrbitDim] = useState({ width: 0, height: 0 });
  const orbitRef = useRef<HTMLDivElement>(null);
  const refs = elements.map(() => createRef<HTMLDivElement>());

  useEffect(() => {
    if (!orbitRef.current) return;

    setOrbitDim({ width: orbitRef.current.clientWidth, height: orbitRef.current.clientHeight });
  }, []);

  return (
    <div
      ref={orbitRef}
      className={cn(
        "m-auto relative w-[100px] aspect-square border-[1px] border-white/5  rounded-full will-change-transform",
        className
      )}
    >
      {elements.map((el, i) => {
        let angle = (360 / (gap > 0 ? gap : elements.length)) * i + offsetDegree;
        const radius = orbitDim.width / 2;
        const top = radius + radius * Math.sin((angle * Math.PI) / 180) - (refs[i].current?.clientHeight ?? 0) / 2;
        const left = radius + radius * Math.cos((angle * Math.PI) / 180) - (refs[i].current?.clientWidth ?? 0) / 2;
        return (
          <div
            key={i}
            ref={refs[i]}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all duration-1000",
              rotateElements ? " animate-orbit-reverse-origin" : ""
            )}
            style={{ ...(top && left ? { top, left } : {}) }}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};
