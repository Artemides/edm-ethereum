import Avatar from "@/components/avatar";
import { NextPage } from "next";
import React from "react";

const Portfolio: NextPage = () => {
  return (
    <div className="min-h-screen gradient-base ">
      <section id="hero" className="grid grid-cols-2">
        <div className="py-14 flex-col justify-items-center">
          <Avatar img="/images/portfolio/edmundus.jpeg" alt="edmundo arias" size="" bordered={true} />
        </div>
        <div>some</div>
      </section>
    </div>
  );
};

export default Portfolio;
