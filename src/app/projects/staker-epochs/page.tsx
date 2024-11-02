import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import { NextPage } from "next";
import React from "react";
import { StakerEpochs } from "./_components/staker-epochs";

const page: NextPage = () => {
  return <StakerEpochs />;
};

export default page;
