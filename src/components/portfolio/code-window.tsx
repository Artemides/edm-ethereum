import { JetBrains_Mono } from "next/font/google";
import { Window } from "./window-tab";
import { highlightCertora, highlightSol } from "@/utils/ui";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
type Lang = "sol" | "certora";
export const CodeWindow = ({
  code,
  lang = "sol",
  className,
  codeClassName,
}: {
  code: string;
  lang?: Lang;
  className?: string;
  codeClassName?: string;
}) => {
  return (
    <Window className={className} codeClassName={codeClassName}>
      <pre>
        <code className={jetbrains.className}>{lang === "sol" ? highlightSol(code) : highlightCertora(code)}</code>
      </pre>
    </Window>
  );
};
