import { getNFTMetadataFromIPFS } from "@/utils/simpleNFT/ipfs";

export async function POST(request: Request) {
  try {
    const { cid } = await request.json();
    const metadata = await getNFTMetadataFromIPFS(cid);
    return Response.json(metadata);
  } catch (error) {
    console.error("Error getting metadata from IPFS: ", error);
    return Response.json(
      { error: "error fetching metadata from ipfs" },
      { status: 404 }
    );
  }
}
