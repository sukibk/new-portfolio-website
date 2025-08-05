// useControlledScroll.tsx
import { RefObject, useEffect, useRef } from "react";

export default function useControlledScroll(scrollRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let currentSectionIndex = 0;
    const sections = Array.from(scrollContainer.children);

    // Debounce timer reference
    let scrollTimeout: NodeJS.Timeout | null = null;
    let isScrolling = false;

    // Function to scroll to a specific section
    const scrollToSection = (index: number) => {
      if (isScrolling) return;

      if (index < 0) index = 0;
      if (index >= sections.length) index = sections.length - 1;

      // Don't do anything if we're already at this section
      if (currentSectionIndex === index) return;

      isScrolling = true;
      currentSectionIndex = index;

      sections[index].scrollIntoView({ behavior: "smooth" });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrolling = false;
      }, 800); // Match this with the CSS scroll-behavior duration
    };

    // Handle wheel events with proper debouncing
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // If already scrolling or debounce timer active, ignore this event
      if (isScrolling || scrollTimeout) return;

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;

      // Set debounce timer
      scrollTimeout = setTimeout(() => {
        scrollToSection(currentSectionIndex + direction);
        scrollTimeout = null;
      }, 200); // Longer timeout for better debouncing
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (!isScrolling) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    };

    // Add event listeners
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Clean up
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);

      // Clear any pending timeouts
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollRef]);
}
