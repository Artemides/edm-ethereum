import { JetBrains_Mono } from "next/font/google";
import { Window } from "./window-tab";
import { highlightSol } from "@/utils/ui";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const CodeWindow = ({
  code,
  className,
  codeClassName,
}: {
  code: string;
  className?: string;
  codeClassName?: string;
}) => {
  return (
    <Window className={className} codeClassName={codeClassName}>
      <pre>
        <code className={jetbrains.className}>{highlightSol(code)}</code>
      </pre>
    </Window>
  );
};
