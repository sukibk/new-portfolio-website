"use client";

import { motion } from "framer-motion";

import HeroImage from "@/app/components/hero/HeroImage";
import HeroText from "@/app/components/hero/HeroText";

const HeroPage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col
       items-center justify-center py-[5rem]
       md:flex-row dark:text-cover px-5 md:gap-8
       transition-colors duration-500 w-full flex-1 font-lilita-one
       overflow-hidden
      "
    >
      {/* Floating brackets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-primary/20 text-6xl md:text-8xl font-code hidden md:block"
        >
          {"{"}
        </motion.span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[8%] text-primary/20 text-6xl md:text-8xl font-code hidden md:block"
        >
          {"}"}
        </motion.span>
      </motion.div>

      <HeroText />
      <HeroImage />

      {/* Background image */}
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt="mainIconsLight.png"
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-10 hidden lg:block left-0 bottom-0 -z-10
              pointer-events-none select-none fill-[#222] 2xl:left-0 2xl:bottom-0"
      />

      {/* Bottom code decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-0 right-0 flex justify-between px-6 md:px-12 pointer-events-none"
      >
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-foreground-text/15 font-code text-xs hidden md:block"
        >
          <p>const developer = {"{"}</p>
          <p className="ml-4">name: &quot;Marko&quot;,</p>
          <p className="ml-4">passionate: true,</p>
          <p>{"}"}</p>
        </motion.div>

        <motion.div
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="text-foreground-text/15 font-code text-xs hidden md:block text-right"
        >
          <p>{"// Building the future"}</p>
          <p>{"// One line at a time"}</p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-foreground-text/40 text-xs font-code">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-foreground-text/30 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroPage;
