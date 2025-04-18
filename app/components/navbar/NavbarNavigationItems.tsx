import { AnimatePresence, motion } from "framer-motion";

import NavLink from "@/app/components/navbar/NavLink";

export interface NavbarNavigationItemProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

const MotionLink = motion(NavLink);

const NAVIGATION_MENU = ["HOME", "ABOUT", "PROJECT", "CONTACT"];

const NavbarNavigationItems = ({
  showMenu = false,
  toggleMenu,
}: NavbarNavigationItemProps) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <div
          key="menu"
          className="h-full w-full flex flex-col justify-center items-center gap-10 xl:gap-24 2xl:gap-28 3xl:gap-36
              transition-all duration-500"
        >
          {NAVIGATION_MENU.map((text, i) => (
            <MotionLink
              key={text}
              href={`#${text.toLowerCase()}`}
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              onClick={(e) => {
                toggleMenu();
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById(text.toLowerCase());

                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });

                    window.history.pushState(
                      null,
                      "",
                      `#${text.toLowerCase()}`
                    );
                  }
                }, 800);
              }}
            >
              {text}
            </MotionLink>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarNavigationItems;
