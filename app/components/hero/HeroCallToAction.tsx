import Button from "@/app/components/layout/Button";
import { motion } from "framer-motion";
import { ht_childVariants } from "@/app/utils/framer-motion/variants";

interface HeroCallToActionProps {
  className?: string;
}

const HeroCallToAction = ({ className = "" }: HeroCallToActionProps) => {
  return (
    <motion.div
      variants={ht_childVariants}
      className={`flex gap-10 w-[400px] justify-center items-center mt-10 z-50 ${className}`}
    >
      <Button variant="primary" onClick={() => alert("Hey")}>
        DOWNLOAD RESUME
      </Button>
      <Button variant="secondary">CONTACT ME</Button>
    </motion.div>
  );
};

export default HeroCallToAction;
