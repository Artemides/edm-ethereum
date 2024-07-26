import { useScaffoldContract } from "@/hooks/useScaffoldContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { NFTMetaData } from "@/utils/simpleNFT/nftsMetadata";
import { Address } from "abitype";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export interface Collectible extends Partial<NFTMetaData> {
  id: number;
  uri: string;
  owner: Address;
}

export const Gallery = () => {
  const { address: connectedAddress } = useAccount();
  const [allCollectibles, setAllCollectibles] = useState<Collectible[]>([]);
  const [loadingCollectibles, setLoadingCollectibles] = useState(false);
  const { data: collectibleContract } = useScaffoldContract({
    contractName: "YourCollectible",
  });

  const { data: collectibleBalance } = useSpeedReadContract({
    contractName: "YourCollectible",
    functionName: "balanceOf",
    args: [connectedAddress],
    watch: true,
  });

  useEffect(() => {
    const getCollectibles = async () => {
      if (
        collectibleBalance === undefined ||
        collectibleContract === undefined ||
        connectedAddress === undefined
      )
        return;
      setLoadingCollectibles(true);
      const collectibles: Collectible[] = [];
      const balance = Number(collectibleBalance.toString());
      for (let tokenIdx = 0; tokenIdx < balance; tokenIdx++) {
        try {
          const tokenId = await collectibleContract.read.tokenOfOwnerByIndex([
            connectedAddress,
            BigInt(tokenIdx),
          ]);

          const tokenURI = await collectibleContract.read.tokenURI([tokenId]);
          const cid = tokenURI.replace("https://ipfs.io/ipfs/", "");
        } catch (error) {}
      }
      return () => {};
    };
  }, []);

  return <div>Gallery</div>;
};
