import { motion, Variants } from "framer-motion";

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
    <motion.svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      initial="closed"
      animate={hamburgerOpened ? "open" : "closed"}
      className={`outline-0 border-0 cursor-pointer fixed nav:left-[calc(50%-800px)]
      top-5 left-5  px-[9px] pt-[4.5px] w-10 h-10  transition-all duration-300 z-40 rounded-md hover:scale-120
      ${isScrolled && "nav:ml-5"}`}
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
  );
};

export default HamburgerSvgSetup;
