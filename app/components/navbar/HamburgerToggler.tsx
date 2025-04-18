import { motion } from "framer-motion";

import NavbarNavigationItems, {
  NavbarNavigationItemProps,
} from "@/app/components/navbar/NavbarNavigationItems";

export interface HamburgerTogglerProps extends NavbarNavigationItemProps {
  hamburgerOpened: boolean;
  isScrolled: boolean;
}
export const HamburgerToggler = ({
  showMenu,
  toggleMenu,
  hamburgerOpened = false,
  isScrolled = false,
}: HamburgerTogglerProps) => {
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
    <motion.div
      initial={false}
      animate={animatedRect}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed nav:!left-[calc(50%-800px)] size-max-screen
        transition-colors duration-800 nav:duration-500 z-40 top-0 left-0 ${bgClass}`}
    >
      <NavbarNavigationItems showMenu={showMenu} toggleMenu={toggleMenu} />
    </motion.div>
  );
};
