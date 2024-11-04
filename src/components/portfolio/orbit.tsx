"use client";
import { cn } from "@/utils/ui";
import React, { createRef, useEffect, useRef, useState } from "react";

type OrbitProps = {
  className?: string;
  elements: React.ReactNode[];
};

export const Orbit = ({ elements, className }: OrbitProps) => {
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
      className={cn("m-auto relative w-[100px] aspect-square border-[1px] border-white/5  rounded-full ", className)}
    >
      {elements.map((el, i) => {
        if (!orbitRef.current) return null;

        let angle = (360 / elements.length) * i;
        const radius = orbitDim.width / 2;
        const top = radius + radius * Math.sin((angle * Math.PI) / 180) - (refs[i].current?.clientHeight ?? 0) / 2;
        const left = radius + radius * Math.cos((angle * Math.PI) / 180) - (refs[i].current?.clientWidth ?? 0) / 2;
        return (
          <div
            ref={refs[i]}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse-origin"
            style={{ top, left }}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};
