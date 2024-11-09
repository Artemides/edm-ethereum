import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary/10 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 hover:bg-primary active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "border-[1px] border-primary text-primary-content",
        secondary: "border-[1px] border-secondary text-secondat-content bg-secondary/10 hover:bg-secondary ",
      },
      size: {
        auto: "h-auto py-5",
        default: "h-[50px] py-2",
        sm: "h-[25px]",
        xl: "h-[75px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "auto",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props}></button>;
};
