import { AnimatePresence, motion } from "framer-motion";

import { NAVIGATION_MENU } from "@/app/constants/navigation";

export interface NavbarNavigationItemProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

const NavbarNavigationItems = ({
  showMenu = false,
  toggleMenu,
}: NavbarNavigationItemProps) => {
  const handleNavClick = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    toggleMenu();
    setTimeout(() => {
      const el = document.getElementById(text.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${text.toLowerCase()}`);
      }
    }, 800);
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <div
          key="menu"
          className="h-full w-full flex flex-col justify-center items-center gap-10 xl:gap-20 2xl:gap-24
              transition-all duration-500"
        >
          {NAVIGATION_MENU.map((text, i) => (
            <motion.a
              key={text}
              href={`#${text.toLowerCase()}`}
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.2, delay: i * 0.15 }}
              onClick={(e) => handleNavClick(e, text)}
              className="text-2xl md:text-3xl text-foreground-title font-code
                hover:text-primary transition-all duration-300
                relative group cursor-pointer"
            >
              <span className="text-primary/50 text-lg mr-1">{`{`}</span>
              {text.toLowerCase()}
              <span className="text-primary/50 text-lg ml-1">{`}`}</span>

              {/* Underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary
                group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarNavigationItems;
