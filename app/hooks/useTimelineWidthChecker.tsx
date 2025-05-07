import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 1472;

export function useTimelineWidthChecker() {
  const [showTwoColumns, setShowTwoColumns] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth > MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setShowTwoColumns(window.innerWidth > MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showTwoColumns;
}
