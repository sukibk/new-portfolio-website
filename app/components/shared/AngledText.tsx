import { cn } from "@/lib/utils";

interface AngledTextProps {
  side?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const AngledText = ({
  side = "right",
  className,
  children,
}: AngledTextProps) => {
  return (
    <p
      className={cn(
        "text-foreground-text dark:text-foreground-text/80 rounded-md font-semibold -mb-5 md:-mb-4",
        "text-sm font-code z-20 inline-block",
        "hover:text-primary cursor-default",
        side === "right" && "rotate-6 md:rotate-5 ml-40 md:ml-60",
        side === "left" && "-rotate-6 md:-rotate-5 -ml-[10px] md:-ml-[10px]",
        className
      )}
    >
      <span className="text-primary">{`{`}</span>
      {children}
      <span className="text-primary">{`}`}</span>
    </p>
  );
};

export default AngledText;
