import { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRUDCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRUDCTION_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

const titleTemplate = "%s | Speedrun-nft";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/thumbnail.jpg",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const imageUrl = `${baseUrl}${imageRelativePath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: title,
    },
    description,
    openGraph: {
      title: {
        default: title,
        template: title,
      },
      description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      title: {
        default: title,
        template: title,
      },
      description,
      images: [imageUrl],
    },
    icons: {
      icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    },
  };
};
