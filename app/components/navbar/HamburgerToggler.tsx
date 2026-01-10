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
    height: hamburgerOpened ? "100%" : isScrolled ? "4rem" : "2.5rem",
    borderBottomLeftRadius:
      hamburgerOpened || isScrolled ? "1rem" : "0.75rem",
    borderBottomRightRadius:
      hamburgerOpened || isScrolled ? "1rem" : "0.75rem",
    borderTopLeftRadius: hamburgerOpened || isScrolled ? "0rem" : "0.75rem",
    borderTopRightRadius: hamburgerOpened || isScrolled ? "0rem" : "0.75rem",
  };

  const bgClass = hamburgerOpened
    ? "!bg-background"
    : isScrolled
      ? "bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-md shadow-lg shadow-primary/20"
      : "bg-foreground-title/90 dark:bg-white/90";

  return (
    <motion.div
      initial={false}
      animate={animatedRect}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed nav:!left-[calc(50%-800px)] nav:size-max-screen
        transition-colors duration-300 z-40 top-0 left-0 ${bgClass}`}
    >
      {/* Code-like branding when scrolled */}
      {isScrolled && !hamburgerOpened && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
          <span className="text-white/80 font-code text-sm">
            <span className="text-white/50">{`{`}</span>
            marko
            <span className="text-white font-bold">Sudar</span>
            <span className="text-white/50">{`}`}</span>
          </span>
        </div>
      )}
      <NavbarNavigationItems showMenu={showMenu} toggleMenu={toggleMenu} />
    </motion.div>
  );
};
