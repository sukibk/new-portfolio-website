import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 10): "up" | "down" {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) < threshold) return;

      setScrollDir(diff > 0 ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDir);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrollDir;
}
