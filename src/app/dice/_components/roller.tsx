"use client";

import React, { useEffect, useState } from "react";
import { Roll } from "./roll-events";

const rollingValues = "0123456789ABCDEF";
const winValues = "012345";
type RollerProps = {
  rolling: boolean;
  result?: Roll;
  failed?: boolean;
};

export const Roller = ({ failed, result, rolling }: RollerProps) => {
  const [rollingValue, setRollingValue] = useState("0");
  useEffect(() => {
    let rolling = true;
    let interval: NodeJS.Timeout;
    const roll = () => {
      let index = 0;
      interval = setInterval(() => {
        setRollingValue(rollingValues[index]);
        index = (index + 1) % rollingValues.length;
      }, 100);
    };

    const handleFn = async () => {
      try {
        roll();
        if (result) {
          clearInterval(interval);
        }
      } catch (error) {
        clearInterval(interval);
      }
    };

    handleFn();

    return () => {
      rolling = false;
      clearInterval(interval);
    };
  }, [rolling, result, failed]);

  if (rolling) {
    return (
      <div className="flex justify-center items-center my-4">
        <div className="size-48 bg-base-100 border-4 border-primary rounded-full overflow-hidden shadow-lg shadow-primary">
          <div className="relative h-full">
            <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-75 ease-linear transform translate-y-0">
              <div className="text-9xl font-bold">{rollingValue}</div>
            </div>
          </div>
          )
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center my-4">
      <div className="size-48 bg-base-100 border-4 border-primary rounded-full overflow-hidden shadow-lg shadow-primary">
        {result && !failed && (
          <div className="flex justify-center items-center h-full text-4xl font-bold ">
            <div className="text-9xl font-bold">{result.roll}</div>
          </div>
        )}
      </div>
    </div>
  );
};
