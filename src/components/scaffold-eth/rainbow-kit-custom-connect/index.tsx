import { useNetworkColor } from "@/hooks/useNetworkColor";
import { useTargetNetwork } from "@/hooks/useTargetNetwork";
import {
  getBlockExplorerAddressLink,
  getTargetNetworks,
} from "@/utils/scaffold-eth/network";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { WrongNetworkDropdown } from "./wrong-network-dropdwon";
import { Balance } from "../balance";
import { Address } from "viem";
import { AddressInfoDropdown } from "./address-infor-dropdrown";
import { AddressQRCodeModal } from "./address-qr-code-modal";

export const RainbowConnectButton = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = account && mounted && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain?.unsupported || chain?.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance
                      address={account.address as Address}
                      className="min-h-0 h-auto"
                    />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: networkColor }}
                    >
                      {chain.name}
                    </span>
                  </div>
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                  />
                  <AddressQRCodeModal
                    address={account.address as Address}
                    modalId="qrcode-modal"
                  />
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
