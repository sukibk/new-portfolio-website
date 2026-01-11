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
      {/* Floating code decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {/* Top left bracket */}
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-primary/20 text-6xl md:text-8xl font-code hidden md:block"
        >
          {"{"}
        </motion.span>

        {/* Top right bracket */}
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[8%] text-primary/20 text-6xl md:text-8xl font-code hidden md:block"
        >
          {"}"}
        </motion.span>

        {/* Bottom code snippet */}
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[3%] text-foreground-text/10 font-code text-xs md:text-sm hidden lg:block"
        >
          <p>const developer = {"{"}</p>
          <p className="ml-4">name: &quot;Marko&quot;,</p>
          <p className="ml-4">passionate: true,</p>
          <p>{"}"}</p>
        </motion.div>

        {/* Right side decoration */}
        <motion.div
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[3%] text-foreground-text/10 font-code text-xs md:text-sm hidden lg:block text-right"
        >
          <p>{"// Building the future"}</p>
          <p>{"// One line at a time"}</p>
        </motion.div>

        {/* Floating dots */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-[40%] left-[15%] w-2 h-2 rounded-full bg-primary/30 hidden md:block"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-primary/20 hidden md:block"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[30%] right-[10%] w-2 h-2 rounded-full bg-primary/25 hidden md:block"
        />
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
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
