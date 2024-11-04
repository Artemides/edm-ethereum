import Image from "next/image";
import React from "react";

const ERC20Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-[calc(100vh-157px)] w-screen  flex">
      {children}
    </div>
  );
};

export default ERC20Layout;
