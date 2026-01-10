import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, onClick, ...rest }, ref) => {
    const [activeHash, setActiveHash] = useState<string>("");

    const isActive = activeHash === href;

    useEffect(() => {
      const updateHash = () => setActiveHash(window.location.hash || "#home");

      updateHash();
      window.addEventListener("hashchange", updateHash);
      return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    return (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        className={`${className || ""} text-3xl text-foreground-title font-code
          hover:text-primary md:hover:scale-110
          md:transition-all md:duration-300
          ${isActive ? "text-primary italic text-4xl" : ""}`}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
