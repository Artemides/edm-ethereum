import { cn } from "@/utils";

export const Window = ({
  children,
  className,
  codeClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  codeClassName?: string;
}) => {
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
        "text-start relative min-h-2 w-fit bg-[#0F101B] rounded-lg border-[1px] border-[#6D6D6D]/25 px-2 pt-6 pb-2 drop-shadow ",
        className
      )}
    >
      <div className={cn("text-xs", codeClassName)}>
        {windowOptions()}
        {children}
      </div>
    </div>
  );
};
