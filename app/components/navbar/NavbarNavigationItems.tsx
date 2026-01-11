import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BLOG_NAVIGATION_MENU, NAVIGATION_MENU } from "@/app/constants/navigation";

export interface NavbarNavigationItemProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

const NavbarNavigationItems = ({
  showMenu = false,
  toggleMenu,
}: NavbarNavigationItemProps) => {
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blog");

  const menuItems = isBlogPage ? BLOG_NAVIGATION_MENU : NAVIGATION_MENU;

  const getHref = (text: string) => {
    if (text === "BLOG") return "/blog";
    if (text === "HOME" && isBlogPage) return "/";
    return `#${text.toLowerCase()}`;
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <div
          key="menu"
          className="h-full w-full flex flex-col justify-center items-center gap-10 xl:gap-20 2xl:gap-24
              transition-all duration-500"
        >
          {menuItems.map((text, i) => {
            const href = getHref(text);
            const isPageLink = href.startsWith("/");
            const isBlogLink = text === "BLOG";
            const isCurrentPage = isBlogLink && isBlogPage;

            // Add a subtle separator before blog on home page
            const showSeparator = isBlogLink && !isBlogPage;

            if (isPageLink) {
              return (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -500 }}
                  transition={{ duration: 0.2, delay: i * 0.15 }}
                  className="flex flex-col items-center"
                >
                  {showSeparator && (
                    <div className="w-8 h-px bg-foreground-text/20 mb-8" />
                  )}
                  <Link
                    href={href}
                    onClick={() => toggleMenu()}
                    className={`text-2xl md:text-3xl font-code
                      hover:text-primary transition-all duration-300
                      relative group cursor-pointer
                      ${isCurrentPage ? "text-primary" : "text-foreground-title"}`}
                  >
                    <span className="text-primary/50 text-lg mr-1">{`{`}</span>
                    {text.toLowerCase()}
                    <span className="text-primary/50 text-lg ml-1">{`}`}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary
                      transition-all duration-300
                      ${isCurrentPage ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={text}
                href={href}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -500 }}
                transition={{ duration: 0.2, delay: i * 0.15 }}
                onClick={() => toggleMenu()}
                className="text-2xl md:text-3xl text-foreground-title font-code
                  hover:text-primary transition-all duration-300
                  relative group cursor-pointer"
              >
                <span className="text-primary/50 text-lg mr-1">{`{`}</span>
                {text.toLowerCase()}
                <span className="text-primary/50 text-lg ml-1">{`}`}</span>

                {/* Underline effect */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary
                  group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarNavigationItems;
