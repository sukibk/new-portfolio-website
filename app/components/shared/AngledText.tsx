import { motion } from "framer-motion";

import { ht_childVariants } from "@/app/utils/framer-motion/variants";
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
    <motion.p
      variants={ht_childVariants}
      className={cn(
        "text-foreground-text  rounded-md font-semibold -mb-5 md:-mb-4 transition-colors duration-500" +
          "text-sm font-code z-20 inline-block",
        side === "right" && "rotate-6 md:rotate-5 ml-40 md:ml-60",
        side === "left" && "-rotate-6 md:-rotate-5 -ml-[10px] md:-ml-[10px]",
        `${className}`
      )}
    >
      {children}
    </motion.p>
  );
};

export default AngledText;
