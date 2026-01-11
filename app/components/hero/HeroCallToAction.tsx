import { motion } from "framer-motion";
import Link from "next/link";

import Button from "@/app/components/layout/Button";
import DownloadResumeButton from "@/app/components/timeline/DownloadResumeButton";
import { ht_childVariants } from "@/app/utils/framer-motion/variants";

interface HeroCallToActionProps {
  className?: string;
}

/**
 * Call to action on Hero Section
 *
 * @example
 * <HeroCallToAction className="md:hidden" />
 *
 * @example
 * <HeroCallToAction className="hidden md:flex" />
 * */
const HeroCallToAction = ({ className = "" }: HeroCallToActionProps) => {
  return (
    <motion.div
      variants={ht_childVariants}
      className={`flex flex-col items-center gap-6 mt-10 z-50 ${className}`}
    >
      <div className="flex justify-center gap-8 md:gap-16 items-center">
        <DownloadResumeButton variant="alwaysDisplay" />
        <Button variant="secondary">CONTACT ME</Button>
      </div>
      <Link href="/blog">
        <span className="text-foreground-text/60 hover:text-primary font-code text-sm transition-colors duration-200 cursor-pointer">
          {"{"} <span className="hover:underline">read my blog</span> {"}"}
        </span>
      </Link>
    </motion.div>
  );
};

export default HeroCallToAction;
