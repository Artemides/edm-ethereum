import { useGlobalState } from "@/services/store/store";
import { ChainWithAttributes } from "@/utils/scaffold-eth/network";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { scaffoldConfig } from "../../scaffold.config";
import { NETWORKS_EXTRA_DATA } from "../utils/scaffold-eth/network";

export const useTargetNetwork = (): {
  targetNetwork: ChainWithAttributes;
} => {
  const { chain } = useAccount();
  const targetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
  const setTargetNetwork = useGlobalState(
    ({ setTargetNetwork }) => setTargetNetwork
  );

  useEffect(() => {
    const newNetwork = scaffoldConfig.targetNetworks.find(
      (nt) => nt.id === chain?.id
    );

    if (newNetwork && newNetwork.id !== targetNetwork.id) {
      setTargetNetwork(newNetwork);
    }
  }, [chain?.id, setTargetNetwork, targetNetwork.id]);

  return {
    targetNetwork: {
      ...targetNetwork,
      ...NETWORKS_EXTRA_DATA[targetNetwork.id],
    },
  };
};
