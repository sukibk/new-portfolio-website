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
    <div className="flex gap-4 z-100 text-white ">
      <button
        onClick={scrollLeft}
        disabled={currentIndex === 0 || isScrolling}
        className="p-2 rounded-full bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollRight}
        disabled={currentIndex === listSize - 1 || isScrolling}
        className="p-2 rounded-full bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollButtons;
