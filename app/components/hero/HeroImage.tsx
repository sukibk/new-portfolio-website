import { motion } from "framer-motion";
import Image from "next/image";

import HeroCallToAction from "@/app/components/hero/HeroCallToAction";
import {
  hi_childrenVariants,
  hi_parentVariants,
} from "@/app/utils/framer-motion/variants";

const MotionImage = motion(Image);

/**
 * Image on the Hero page with following labeling and Call To Action on mobile
 * */
const HeroImage = () => {
  return (
    <div
      className="w-full h-2/3 md:h-full md:w-full flex flex-col items-center md:items-center
       justify-start md:justify-center pt-5 md:pt-0 z-10
       px-5 md:px-0"
    >
      <motion.div
        variants={hi_parentVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative rounded-md"
      >
        {/*p seems like it is not supported by mobile*/}
        <MotionImage
          variants={hi_childrenVariants}
          src="/images/hero-section/marko_sudar.png"
          alt="Marko Sudar"
          width={350}
          height={350}
          className="mx-auto md:mx-0 rounded-xl relative z-10 lg:w-[450px] lg:h-[400px] xl:w-[550px] xl:h-[500px] cursor-pointer
            shadow-[-20px_20px_40px_rgba(0,0,0,0.3)] dark:shadow-[-20px_20px_35px_rgba(0,0,0,0.5)]
            ring-1 ring-foreground-title/10 dark:ring-white/10"
        />

        <motion.p
          variants={hi_childrenVariants}
          className="absolute bg-gradient-to-r from-primary to-primary/80 font-bold top-0 left-0
            text-white p-1.5 px-2.5 rounded-br-lg rounded-tl-xl
            text-xs font-code z-20
            flex items-center justify-center gap-1.5
            shadow-lg shadow-primary/30
            backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Open for Collaboration
        </motion.p>
        <motion.div variants={hi_childrenVariants} className="md:hidden w-full">
          <HeroCallToAction />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
