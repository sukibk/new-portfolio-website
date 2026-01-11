import { useEffect, useState } from "react";

const TIMELINE_BREAKPOINT = 1504;

export function useTimelineWidthChecker() {
  // Always start with false for SSR consistency
  const [showTwoColumns, setShowTwoColumns] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setShowTwoColumns(window.innerWidth >= TIMELINE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value on client

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showTwoColumns;
}
