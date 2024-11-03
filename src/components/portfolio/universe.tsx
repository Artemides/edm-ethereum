import React from "react";
import { Bubble } from "./bubble";

const topics = [
  {
    title: "design",
    icon: "⚙️",
    bColor: "#CAB3F5",
    bgColor: "#CAB3F5b0",
  },
  {
    title: "develop",
    icon: "🛠️",
    bColor: "#B8FBF6",
    bgColor: "#B8FBF6b0",
  },
  {
    title: "test",
    icon: "🪲",
    bColor: "#89FFA3",
    bgColor: "#89FFA3b0",
  },
  {
    title: "secure",
    icon: "⚔️",
    bColor: "#FF4C4C",
    bgColor: "#FF4C4Cb0",
  },
  {
    title: "verify",
    icon: "♻️",
    bColor: "#9853FF",
    bgColor: "#9853FFb0",
  },
  {
    title: "deploy",
    icon: "🚀",
    bColor: "#FFF459",
    bgColor: "#fff459b0",
  },
  {
    title: "monitor",
    icon: "📺",
    bColor: "#87A9F0",
    bgColor: "#87A9F0b0",
  },
];

export const Universe = () => {
  return (
    <div id="universe" className="">
      <div className="relative w-96 aspect-square border-2 border-white/15 rounded-full">
        {/* 
            a = (360 / 7) * i 
            x = (cx+ radius) * cos(a)  - half \
            y = (cy+ radius) * sin(a)  - half *
        */}
        {topics.map((topic, i) => {
          let alpha = (360 / topics.length) * i;
          let x = 192 + (384 / 2) * Math.cos((alpha * Math.PI) / 180);
          let y = 192 + (384 / 2) * Math.sin((alpha * Math.PI) / 180);
          return (
            <div style={{ left: `${x}px`, top: `${y}px` }} className="absolute">
              <Bubble
                id={`border-gradient-${i}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 aspect-square "
                bColor={topic.bColor}
                bgColor={topic.bgColor}
              >
                <span className="absolute text-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  {topic.icon}
                </span>
              </Bubble>
            </div>
          );
        })}
      </div>
    </div>
  );
};
