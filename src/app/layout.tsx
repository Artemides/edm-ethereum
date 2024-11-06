import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/components/app-provider";
import { getMetadata } from "@/utils/scaffold-eth/getMetadata";
import { TooltipProvider } from "@/components/ui/tooltip";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = getMetadata({
  title: "edm.eth",
  description: "smart contract developer portfolio",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={jetbrains.className}>
        <TooltipProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
