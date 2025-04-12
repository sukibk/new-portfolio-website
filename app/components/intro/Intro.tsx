import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

import IntroText from "@/app/components/intro/IntroText";
import Button from "@/app/components/layout/Button";
import useDelayShowElement from "@/app/hooks/useDelayShowElement";

interface IntroProps {
  turnIntroOff: (off: boolean) => void;
}

/**
 * Intro Component
 *
 * Displays a typing animation introducing me.
 * Includes a fade/slide-in animation and a "Skip Intro" button.
 *
 * @component
 * @returns JSX.Element
 *
 * @example
 * <Intro turnIntroOff={(off) => setIntroShown(!off)} />
 */
const Intro: FC<IntroProps> = ({ turnIntroOff }) => {
  const displayEndButton = useDelayShowElement({
    initialState: false,
    delay: 19000,
  });

  return (
    <motion.div
      key="intro"
      className="size-max-screen w-screen h-screen  flex flex-col justify-start
            pt-[15rem] gap-40
            items-center text-center overflow-hidden break-words
            md:justify-center md:pt-0 md:gap-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      {/* w-screen might not be the best solution for upper motion.div
       TODO: Make change for w-screen */}
      <IntroText />
      <AnimatePresence mode="wait">
        {displayEndButton ? (
          <motion.div
            key="enter"
            initial={{ opacity: 0.3, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <Button
              variant="skeleton"
              onClick={() => {
                // localStorage.setItem("introCompleted", "true");
                turnIntroOff(true);
              }}
            >
              ENTER WEBSITE
              {/* Loading bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear", delay: 1 }}
                onAnimationComplete={() => {
                  // localStorage.setItem("introCompleted", "true");
                  turnIntroOff(true);
                }}
                className="absolute bottom-0 left-0 h-full bg-primary z-0
                 "
              />
              {/* Content stays above the loading bar */}
              <span
                className="absolute inset-0 z-10 flex items-center
                justify-center text-foreground-title
              hover:bg-background-hover  hover:text-foreground-hover-title
              hover:z-30 hover:cursor-pointer transition-colors duration-300"
              >
                ENTER WEBSITE
              </span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="skip"
            initial={{ opacity: 0.1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={() => {
                // localStorage.setItem("introCompleted", "true");
                turnIntroOff(true);
              }}
              variant="skeleton"
            >
              SKIP INTRO
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Intro;
