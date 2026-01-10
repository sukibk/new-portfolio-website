import { motion, type Variants } from "framer-motion";

import { HamburgerTogglerProps } from "@/app/components/navbar/HamburgerToggler";

interface PathProps extends Partial<HamburgerTogglerProps> {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = ({ hamburgerOpened, isScrolled, ...props }: PathProps) => {
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

const HamburgerSvgSetup = ({
  toggleMenu,
  hamburgerOpened = false,
  isScrolled = false,
}: Partial<HamburgerTogglerProps>) => {
  return (
    <div
      className={`fixed nav:left-[calc(50%-800px)] left-5 z-40 transition-all duration-300
        ${isScrolled ? "top-3 nav:ml-5" : "top-5"}`}
    >
      {/* Code-like label */}
      {!hamburgerOpened && (
        <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-code
          text-foreground-text/40 hidden md:block transition-opacity duration-300">
          .menu()
        </span>
      )}

      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        initial="closed"
        animate={hamburgerOpened ? "open" : "closed"}
        className={`outline-0 border-0 cursor-pointer
          px-[9px] pt-[4.5px] w-10 h-10 transition-all duration-300 rounded-xl
          hover:scale-110 hover:bg-primary/10
          ${!hamburgerOpened && !isScrolled && "bg-foreground-title/5 dark:bg-white/5"}
          ${isScrolled && !hamburgerOpened && "bg-white/10"}`}
        onClick={toggleMenu}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          hamburgerOpened={hamburgerOpened}
          isScrolled={isScrolled}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          hamburgerOpened={hamburgerOpened}
          isScrolled={isScrolled}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          hamburgerOpened={hamburgerOpened}
          isScrolled={isScrolled}
        />
      </motion.svg>
    </div>
  );
};

export default HamburgerSvgSetup;
