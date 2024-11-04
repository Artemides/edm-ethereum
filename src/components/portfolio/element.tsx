import { cn } from "@/utils/ui";
export const Element = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn("relative p-2", className)}>
      <ElementBorder />
      {children}
    </a>
  );
};

const ElementBorder = () => {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 96 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <path
        d="M8 0.5H88C92.1421 0.5 95.5 3.85786 95.5 8V102C95.5 106.142 92.1421 109.5 88 109.5H8C3.85786 109.5 0.5 106.142 0.5 102V8C0.5 3.85786 3.85786 0.5 8 0.5Z"
        fill="url(#paint0_linear_2447_651)"
        fillOpacity="0.19"
        stroke="url(#paint1_linear_2447_651)"
      />
      <defs>
        <linearGradient id="paint0_linear_2447_651" x1="48" y1="0" x2="48" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0.68" stopColor="#797979" stopOpacity="0" />
          <stop offset="1" stopColor="#DFDFDF" />
        </linearGradient>
        <linearGradient id="paint1_linear_2447_651" x1="48" y1="0" x2="48" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F4F4F" stopOpacity="0" />
          <stop offset="0.46" stopColor="#585858" stopOpacity="0.08" />
          <stop offset="1" stopColor="#B5B5B5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
