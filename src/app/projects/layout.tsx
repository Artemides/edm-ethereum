import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/components/app-provider";
import { getMetadata } from "@/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Speedrun NFT",
  description: "nft`",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppProvider>{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
