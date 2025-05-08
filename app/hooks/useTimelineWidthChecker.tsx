import { useEffect, useState } from "react";

const TIMELINE_BREAKPOINT = 1504;

export function useTimelineWidthChecker() {
  const [showTwoColumns, setShowTwoColumns] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth > TIMELINE_BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setShowTwoColumns(window.innerWidth >= TIMELINE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return !!showTwoColumns;
}
