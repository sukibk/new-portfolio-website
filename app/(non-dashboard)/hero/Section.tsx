"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import {
  childVariants,
  parentVariants,
} from "@/app/utils/framer-motion/variants";

const HeroPage = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  const ref = useRef(null);
  const isInView = useInView(ref);

  // Image will shift up slightly as you scroll
  // const imageY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Text will shift down slightly
  // const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative h-screen snap-start flex flex-col
       items-center justify-center gap-8 py-[5rem]
       md:flex-row dark:text-cover
       transition-colors duration-500 w-full flex-1 "
    >
      {/* Left Side */}
      <motion.div
        // style={{ y: textY }}
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center text-center gap-y-4
        px-5 md:px-0  w-full h-1/2 z-10"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-semibold text-foreground-title transition-colors duration-500"
        >
          Well Hello There!
        </motion.h1>

        <motion.h2
          variants={childVariants}
          className="text-2xl md:text-4xl font-light text-foreground-title transition-colors duration-500"
        >
          My name is
          <span className="text-primary font-bold ml-2 transition-colors duration-500">
            Marko Sudar
          </span>
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-base md:text-lg text-foreground-text transition-colors duration-500"
        >
          I’m a Software Engineer from Serbia, currently living in the United
          States.
        </motion.p>
      </motion.div>

      {/* Right Side - Animated Image */}
      <motion.div
        // style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-1/2 md:h-full flex items-center justify-center z-10
        px-5 md:px-0 "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative rounded-md shadow-lg"
        >
          <Image
            src="/images/hero-section/marko_sudar.png"
            alt="Marko Sudar"
            width={400}
            height={400}
            className="rounded-md relative z-10 xl:w-[500px] xl:h-[450px] cursor-pointer"
          />
        </motion.div>
      </motion.div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-section/mainIconsdark.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-30 left-[-120px] bottom-[-120px]
              pointer-events-none select-none fill-[#222] 2xl:left-0 2xl:bottom-0"
      />
    </section>
  );
};

export default HeroPage;
