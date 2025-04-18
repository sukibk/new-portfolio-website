// useControlledScroll.tsx
import { RefObject, useEffect } from "react";

export default function useControlledScroll(scrollRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let currentSectionIndex = 0;
    const sections = Array.from(scrollContainer.children);

    // Function to scroll to a specific section
    const scrollToSection = (index: number) => {
      if (index < 0) index = 0;
      if (index >= sections.length) index = sections.length - 1;

      currentSectionIndex = index;
      sections[index].scrollIntoView({ behavior: "smooth" });
    };

    // Handle wheel events
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;

      // Add a small delay to prevent rapid scrolling
      setTimeout(() => {
        scrollToSection(currentSectionIndex + direction);
      }, 50);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1);
      }
    };

    // Add event listeners
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Clean up
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      window.addEventListener("keydown", handleKeyDown);
    };
  }, [scrollRef]);
}
