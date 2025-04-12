"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "@/app/context/ThemeContext";
import { useUIContext } from "@/app/context/UIContext";

export const ThemeSwitcher = () => {
  const {
    state: { theme: currentTheme },
    dispatch,
  } = useTheme();

  const { isScrolled, hamburgerOpened } = useUIContext();

  return (
    <button
      className={`text-white fixed 
        text-foreground-h p-2.5 rounded-md cursor-pointer ease-in top-5 z-50
        right-5 transition-all duration-300 hover:bg-background-hover 
        nav:right-[calc(50%-800px)]
        hover:text-foreground-hover-title w-10 h-10
        ${isScrolled || hamburgerOpened ? "nav:mr-6 bg-transparent" : "bg-primary"}
        `}
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      <AnimatePresence>
        {currentTheme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MoonIcon
              className={`${hamburgerOpened && "!text-secondary-background"}`}
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="absolute inset-0 flex items-center justify-center hover:!text-white"
          >
            <SunIcon className={`${hamburgerOpened && "text-primary"}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
