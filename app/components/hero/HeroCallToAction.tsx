import { motion } from "framer-motion";

import Button from "@/app/components/layout/Button";
import { ht_childVariants } from "@/app/utils/framer-motion/variants";
import DownloadResumeButton from "@/app/components/timeline/DownloadResumeButton";

interface HeroCallToActionProps {
  className?: string;
}

/**
 * Call to action on Hero Section - TODO: Add real actions
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
      className={`flex  w-[400px] justify-center gap-16 items-center mt-10 z-50 ${className}`}
    >
      <DownloadResumeButton variant="alwaysDisplay" />
      <Button variant="secondary">CONTACT ME</Button>
    </motion.div>
  );
};

export default HeroCallToAction;
