import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollButtonsProps = {
  currentIndex: number;
  scrollLeft: () => void;
  scrollRight: () => void;
  isScrolling: boolean;
  listSize: number;
};

/**
 * ScrollButtons
 *
 * Renders navigation buttons for scrolling through a list of items.
 *
 * @param {number} currentIndex - The current index in the list
 * @param {() => void} scrollLeft - Handler to scroll left
 * @param {() => void} scrollRight - Handler to scroll right
 * @param {boolean} isScrolling - Whether a scroll animation is in progress
 * @param {number} listSize - Total number of items in the list
 */
const ScrollButtons = ({
  currentIndex,
  scrollLeft,
  scrollRight,
  listSize,
  isScrolling,
}: ScrollButtonsProps) => {
  return (
    <div className="flex items-center gap-6 z-100">
      <button
        onClick={scrollLeft}
        disabled={currentIndex === 0 || isScrolling}
        className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white
          hover:scale-110 hover:shadow-lg hover:shadow-primary/40
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
          cursor-pointer transition-all duration-300 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Progress indicator */}
      <div className="flex gap-2">
        {Array.from({ length: listSize }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-6 bg-primary"
                : "w-2 bg-foreground-text/20 dark:bg-white/20"
            }`}
          />
        ))}
      </div>

      <button
        onClick={scrollRight}
        disabled={currentIndex === listSize - 1 || isScrolling}
        className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white
          hover:scale-110 hover:shadow-lg hover:shadow-primary/40
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
          cursor-pointer transition-all duration-300 active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollButtons;
