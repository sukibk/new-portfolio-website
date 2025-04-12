"use client";

import { motion, type Variants } from "framer-motion";
import { RefObject, useState } from "react";

import { useUIContext } from "@/app/context/UIContext";
import useScroll from "@/app/hooks/useScroll";

export interface NavBarLayoutProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => {
  const { isScrolled, hamburgerOpened } = useUIContext();

  return (
    <motion.path
      strokeWidth="3"
      stroke={
        hamburgerOpened
          ? "var(--color-primary)"
          : isScrolled
            ? "white"
            : "var(--color-background)"
      }
      fill={"transparent"}
      strokeLinecap="round"
      {...props}
    />
  );
};

const NavbarLayout = () => {
  const { isScrolled, hamburgerOpened, dispatch } = useUIContext();

  const animatedRect = {
    width: hamburgerOpened ? "100%" : isScrolled ? "100%" : "2.5rem",
    left: hamburgerOpened || isScrolled ? 0 : "1.25rem",
    top: hamburgerOpened || isScrolled ? 0 : "1.25rem",
    height: hamburgerOpened ? "100%" : isScrolled ? "5rem" : "2.5rem",
    // borderRadius: hamburgerOpened || isScrolled ? "0rem" : "0.375rem",
    borderBottomLeftRadius:
      hamburgerOpened || isScrolled ? "0.5rem" : "0.375rem",
    borderBottomRightRadius:
      hamburgerOpened || isScrolled ? "0.5rem" : "0.375rem",
    borderTopLeftRadius: hamburgerOpened || isScrolled ? "0rem" : "0.375rem",
    borderTopRightRadius: hamburgerOpened || isScrolled ? "0rem" : "0.375rem",
  };

  const bgClass = hamburgerOpened
    ? "!bg-background"
    : isScrolled
      ? "bg-primary/80"
      : "bg-background-hover";

  return (
    <>
      {/* Animated rectangle */}
      <motion.div
        initial={false}
        animate={animatedRect}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed nav:!left-[calc(50%-800px)] size-max-screen 
        transition-colors duration-800 z-40 top-0 left-0 ${bgClass}`}
      />

      {/* Optional text overlay for testing */}
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        initial="closed"
        animate={hamburgerOpened ? "open" : "closed"}
        className={`outline-0 border-0 cursor-pointer fixed nav:left-[calc(50%-800px)]
      top-5 left-5  px-[9px] pt-[4.5px] w-10 h-10  transition-all duration-300 z-40 rounded-md hover:scale-120
      ${isScrolled && "nav:ml-5"}`}
        onClick={() => dispatch({ type: "TOGGLE_HAMBURGER" })}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </motion.svg>
    </>
  );
};

export default NavbarLayout;
