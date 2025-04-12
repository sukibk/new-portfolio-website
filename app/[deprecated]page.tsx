"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Intro from "@/app/components/intro/Intro";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";

export default function Home() {
  const [isTypingDone, setIsTypingDone] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("introCompleted") === "true";
    }
    return false; // default to false during SSR
  });

  return (
    <>
      <AnimatePresence mode={"wait"}>
        {!isTypingDone ? (
          <Intro turnIntroOff={setIsTypingDone} />
        ) : (
          <motion.section
            key="main"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="h-screen snap-start flex items-center justify-center
              bg-background dark:text-cover
              transition-colors duration-500"
          >
            <ThemeSwitcher />
          </motion.section>
        )}
        {/*<AboutPage />*/}
      </AnimatePresence>
    </>
  );
}
