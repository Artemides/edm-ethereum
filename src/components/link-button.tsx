import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const anchorVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary/10 text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 hover:bg-primary active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-peach text-secondary  hover:bg-peach/80 ",
        secondary: "border-[1px] border-secondary text-secondat-content bg-secondary/10 hover:bg-secondary ",
      },
      size: {
        auto: "h-auto py-5",
        default: "h-[50px] py-2",
        sm: "px-4 py-2",
        md: "px-6 py-3",
        xl: "h-[75px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "auto",
    },
  }
);

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof anchorVariants>;

export const LinkButton = ({ href, variant, size, children, className, ...props }: LinkButtonProps) => {
  return (
    <Link href={href || "/"} className={cn(anchorVariants({ variant, size, className }))} {...props}>
      {children}
    </Link>
  );
};
