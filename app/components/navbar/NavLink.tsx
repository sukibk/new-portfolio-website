import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

type NavLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const NavLink = ({ href, children, className, ...rest }: NavLinkProps) => {
  const [activeHash, setActiveHash] = useState<string>("");

  const isActive = activeHash === href;

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#home");

    updateHash(); // run on mount
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        {...rest}
        className={`${className} text-3xl text-foreground-title 
        hover:text-primary md:hover:scale-110 
        md:transition-all md:duration-300
        ${isActive ? "text-primary italic text-4xl" : ""}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
