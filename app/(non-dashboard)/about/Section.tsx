"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import HeroImage from "@/app/components/hero/HeroImage";
import HeroText from "@/app/components/hero/HeroText";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    // <motion.section
    //   ref={ref}
    //   initial={{ opacity: 0, x: 50 }}
    //   animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
    //   transition={{ duration: 0.4 }}
    //   className="h-screen snap-start flex items-center justify-center text-white transition-colors duration-500"
    // >
    //   <motion.div
    //     initial={{ y: 40 }}
    //     animate={{ y: isInView ? 0 : 40 }}
    //     transition={{ duration: 0.6 }}
    //   >
    //     <h1 className="text-4xl">I fade in & out on scroll</h1>
    //   </motion.div>
    // </motion.section>
    <section
      ref={ref}
      id="about"
      className="relative h-screen snap-start flex flex-col
       items-center justify-center py-[5rem]
       md:flex-row dark:text-cover px-5 md:gap-8
       transition-colors duration-500 w-full flex-1 font-lilita-one"
    >
      <HeroText />
      <HeroImage />
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt=""
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-30 left-[-150px] bottom-[-80px]
              pointer-events-none select-none fill-[#222] 2xl:left-0 2xl:bottom-0"
      />
    </section>
  );
};

export default AboutPage;
