"use client";

import { notification } from "@/utils/scaffold-eth/notification";
import { getMetadataFromIPFS } from "@/utils/simpleNFT/ipfs-fetch";
import { lazy, useEffect, useState } from "react";

const LazyReactJson = lazy(() => import("react-json-view"));

const IpfsDownload = () => {
  const [json, setJson] = useState({});
  const [cid, setCid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    const notificationId = notification.loading(
      "Downloading content from IPFS"
    );
    try {
      const metadata = await getMetadataFromIPFS(cid);
      notification.remove(notificationId);
      notification.success("Download completed");

      setJson(metadata);
    } catch (error) {
      notification.remove(notificationId);
      notification.error("Download Failed");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-center mb-4">
          <span className="block text-4xl font-bold">Download from IPFS</span>
        </h1>
        <div
          className={`flex border-2 border-accent/95 bg-base-200 rounded-full text-accent w-96`}
        >
          <input
            className="input input-ghost focus:outline-none focus:bg-transparent focus:text-secondary-content h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-secondary-content/75"
            placeholder="IPFS CID"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button
          className={`btn btn-secondary my-6 ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
          onClick={handleDownload}
        >
          Download from IPFS
        </button>
        {isMounted && (
          <LazyReactJson
            style={{ padding: "1rem", borderRadius: "0.75rem" }}
            src={json}
            theme="solarized"
            enableClipboard={false}
            onEdit={(edit) => {
              setJson(edit.updated_src);
            }}
            onAdd={(add) => {
              setJson(add.updated_src);
            }}
            onDelete={(del) => {
              setJson(del.updated_src);
            }}
          />
        )}
      </div>
    </>
  );
};

export default IpfsDownload;
