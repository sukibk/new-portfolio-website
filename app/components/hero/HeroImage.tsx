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
          className="mx-auto md:mx-0 rounded-md relative z-10 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[450px] cursor-pointer shadow-lg"
        />
        <motion.p
          variants={hi_childrenVariants}
          className="absolute bg-primary font-bold top-0 left-[1.56rem] md:left-0
    text-white p-1 rounded-br-md rounded-tl-md
    text-xs font-code z-20
    flex items-center justify-center
    transition-colors duration-500"
        >
          US Permanent Resident
        </motion.p>
        <motion.p
          variants={hi_childrenVariants}
          className=" absolute
           text-foreground-text right-0 rounded-md font-semibold
          text-xs font-code inline-block z-20 right-[1.56rem] md:right-0"
        >
          just-a-chill-guy.jpg
        </motion.p>
        <HeroCallToAction className="md:hidden" />
      </motion.div>
    </div>
  );
};

export default HeroImage;
