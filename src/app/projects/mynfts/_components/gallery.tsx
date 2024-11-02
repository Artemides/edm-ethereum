import { useScaffoldContract } from "@/hooks/useScaffoldContract";
import { useSpeedReadContract } from "@/hooks/useSpeedReadContract";
import { useSpeedWriteContract } from "@/hooks/useSpeedWriteContract";
import { notification } from "@/utils/scaffold-eth/notification";
import { getMetadataFromIPFS } from "@/utils/simpleNFT/ipfs-fetch";
import { NFTMetaData } from "@/utils/simpleNFT/nftsMetadata";
import { Address } from "abitype";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { NFTCard } from "./nft-card";

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
          const metadata: NFTMetaData = await getMetadataFromIPFS(cid);
          collectibles.push({
            id: parseInt(tokenId.toString()),
            uri: tokenURI,
            owner: connectedAddress,
            ...metadata,
          });
        } catch (error) {
          notification.error("Error fetching your collection");
          setLoadingCollectibles(false);
          console.log(error);
        }
      }

      collectibles.sort((a, b) => a.id - b.id);
      setAllCollectibles(collectibles);
      setLoadingCollectibles(false);
    };
    getCollectibles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectibleBalance, connectedAddress]);

  if (loadingCollectibles)
    return (
      <div className="flex justify-center items-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <>
      {allCollectibles.length === 0 ? (
        <div className="flex justify-center items-center mt-10">
          <div className="text-2xl text-primary-content">No NFTs found</div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
          {allCollectibles.map((item) => (
            <NFTCard nft={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};
