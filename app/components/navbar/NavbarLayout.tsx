"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { RefObject, useRef, useState } from "react";

import HamburgerSvgSetup from "@/app/components/navbar/HamburgerSvgSetup";
import { HamburgerToggler } from "@/app/components/navbar/HamburgerToggler";
import NavbarNavigationItems from "@/app/components/navbar/NavbarNavigationItems";
import { useUIContext } from "@/app/context/UIContext";

export interface NavBarLayoutProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

const NavbarLayout = () => {
  const { isScrolled, hamburgerOpened, dispatch } = useUIContext();

  const [showMenu, setShowMenu] = useState(false);
  const isAnimating = useRef(false);

  const toggleMenu = () => {
    // Prevent double clicks during animation
    if (isAnimating.current) return;
    isAnimating.current = true;

    if (hamburgerOpened) {
      setShowMenu(false);
      setTimeout(() => {
        dispatch({ type: "TOGGLE_HAMBURGER" });
        isAnimating.current = false;
      }, 500);
    } else {
      setShowMenu(true);
      dispatch({ type: "TOGGLE_HAMBURGER" });
      // Allow clicks again after menu open animation
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    }
  };

  return (
    <>
      {/* Animated rectangle */}
      <HamburgerToggler
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        hamburgerOpened={hamburgerOpened}
        isScrolled={isScrolled}
      />
      <HamburgerSvgSetup
        toggleMenu={toggleMenu}
        hamburgerOpened={hamburgerOpened}
        isScrolled={isScrolled}
      />
    </>
  );
};

export default NavbarLayout;
