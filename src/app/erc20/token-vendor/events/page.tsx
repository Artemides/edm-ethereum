"use client";

import { Address } from "@/components/scaffold-eth/address";
import { useSpeedEventHistory } from "@/hooks/useSpeedEventHistory";
import { NextPage } from "next";
import { formatEther } from "viem";

const EventsPage: NextPage = () => {
  const { data: buyEvents, isLoading: buyEventsLoading } = useSpeedEventHistory(
    {
      contractName: "Vendor",
      eventName: "BuyTokens",
      fromBlock: 0n,
      watch: true,
    }
  );

  const { data: sellEvents, isLoading: sellEventsLoading } =
    useSpeedEventHistory({
      contractName: "Vendor",
      eventName: "TokensSold",
      fromBlock: 0n,
      watch: true,
    });

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* BuyTokens Events */}
      <div>
        <div className="text-center mb-4">
          <span className="block text-2xl font-bold">Buy Token Events</span>
        </div>
        {buyEventsLoading ? (
          <div className="flex justify-center items-center mt-8">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primary">Buyer</th>
                  <th className="bg-primary">Amount of Tokens</th>
                  <th className="bg-primary">Amount of ETH</th>
                </tr>
              </thead>
              <tbody>
                {!buyEvents || buyEvents.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center">
                      No events found
                    </td>
                  </tr>
                ) : (
                  buyEvents?.map((event, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">
                          <Address address={event.args.buyer} />
                        </td>
                        <td>{formatEther(event.args?.tokens || 0n)}</td>
                        <td>{formatEther(event.args?.eth || 0n)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="mt-14">
        <div className="text-center mb-4">
          <span className="block text-2xl font-bold">Sell Token Events</span>
        </div>
        {sellEventsLoading ? (
          <div className="flex justify-center items-center mt-8">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primary">Seller</th>
                  <th className="bg-primary">Amount of Tokens</th>
                  <th className="bg-primary">Amount of ETH</th>
                </tr>
              </thead>
              <tbody>
                {!sellEvents || sellEvents.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center">
                      No events found
                    </td>
                  </tr>
                ) : (
                  sellEvents?.map((event, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">
                          <Address address={event.args.seller} />
                        </td>
                        <td>{formatEther(event.args?.amount || 0n)}</td>
                        <td>{formatEther(event.args?.weiPaid || 0n)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
