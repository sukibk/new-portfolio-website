"use client";

import { type RefObject, useEffect, useState } from "react";

import { NavBarLayoutProps } from "@/app/components/navbar/NavbarLayout";

interface UseScrollProps extends NavBarLayoutProps {}

const useScroll = ({ scrollRef }: UseScrollProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return scrolled;
};

export default useScroll;
