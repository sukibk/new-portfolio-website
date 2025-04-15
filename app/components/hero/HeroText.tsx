import { motion } from "framer-motion";

import {
  ht_childVariants,
  ht_parentVariants,
} from "@/app/utils/framer-motion/variants";
import HeroCallToAction from "@/app/components/hero/HeroCallToAction";

const HeroText = () => {
  return (
    <motion.div
      variants={ht_parentVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center gap-y-4
        w-full h-1/3 md:h-full px-5 z-10"
    >
      {/*Weird issue of incorrectly displaying sites when visited from mobile
         Safari device for this p , but work in devtools smaller screen
         simulator TODO: check*/}
      {/*Software Engineer like design*/}
      {/*<motion.p*/}
      {/*  variants={childVariants}*/}
      {/*  className="*/}
      {/*  bg-gray-800 text-gray-400 -mb-2 rounded-md*/}
      {/*  text-sm p-1 font-code inline-block"*/}
      {/*>*/}
      <motion.p
        variants={ht_childVariants}
        className="
           text-foreground-text -mb-5 ml-40 md:-mb-4 md:ml-60 rounded-md font-semibold
          text-sm font-code inline-block z-20 rotate-6 md:rotate-5"
      >
        console.log
      </motion.p>
      <motion.h1
        variants={ht_childVariants}
        className="text-4xl md:text-5xl text-foreground-title transition-colors duration-500"
      >
        HELLO WORLD!
      </motion.h1>

      <motion.h2
        variants={ht_childVariants}
        className="text-2xl md:text-4xl font-light text-foreground-title
          transition-colors duration-500"
      >
        My name is
        <span
          className="text-primary italic font-bold ml-2
          transition-colors duration-500"
        >
          Marko Sudar
        </span>
      </motion.h2>

      <motion.p
        variants={ht_childVariants}
        className="text-base md:text-lg text-foreground-text leading-10
           transition-colors duration-500"
      >
        I’m a{" "}
        <span
          className={
            "bg-gray-800 italic text-gray-300 p-2 mx-1 rounded-md " +
            "font-code text-sm"
          }
        >
          {" "}
          &lt;p&gt;Sof4war3 Eng1n33r&lt;/p&gt;
        </span>{" "}
        working and living in the United States.
      </motion.p>
      <HeroCallToAction className="hidden md:flex" />
    </motion.div>
  );
};

export default HeroText;
