import { cn } from "@/utils";
import { highlightSol } from "@/utils/ui";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const Window = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const windowOptions = () => {
    return (
      <div className={cn("absolute top-2 left-2 flex [&>span]:w-2 [&>span]:h-2 [&>span]:rounded-full gap-x-[2px]")}>
        <span className="bg-[#FD4646]"></span>
        <span className="bg-[#FCAF24]"></span>
        <span className="bg-[#29C031]"></span>
      </div>
    );
  };
  return (
    <div
      className={cn(
        "relative min-h-2 w-fit bg-[#0F101B] rounded-lg border-[1px] border-[#6D6D6D]/25 px-6 pt-6 pb-2 drop-shadow ",
        className
      )}
    >
      <div className="text-xs">
        {windowOptions()}
        {children}
      </div>
    </div>
  );
};

export const CodeWindow = ({ code, className }: { code: string; className?: string }) => {
  return (
    <Window className={className}>
      <pre>
        <code className={jetbrains.className}>{highlightSol(code)}</code>
      </pre>
    </Window>
  );
};
