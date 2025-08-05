import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import TestimonialCard from "@/app/components/testimonial/TestimonialCard";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { testimonials } from "@/app/constants/testimonials";

type TestimonialContainerProps = {
  isScrolling: boolean;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type TestimonialsContainerRef = {
  scrollToTestimonial: (dir: "left" | "right") => void;
  isScrolling: () => boolean;
  currentIndex: () => number;
};

/**
 * TestimonialsContainer
 *
 * Horizontally scrollable container for testimonial cards. Exposes imperative methods for scrolling and index management.
 *
 * @param {boolean} isScrolling - Whether a scroll animation is in progress
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsScrolling - Setter for isScrolling state
 * @param {number} currentIndex - Index of the currently visible testimonial
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentIndex - Setter for currentIndex state
 */
const TestimonialsContainer = forwardRef<
  TestimonialsContainerRef,
  TestimonialContainerProps
>(({ isScrolling, setIsScrolling, currentIndex, setCurrentIndex }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useImperativeHandle(ref, () => ({
    scrollToTestimonial: (direction: "left" | "right") => {
      if (!containerRef.current || isScrolling) return;

      setIsScrolling(true);

      const container = containerRef.current;
      const testimonialWidth = isMobile ? 320 : 480;
      const gapBetweenTestimonials = 240;

      const scrollAmount =
        direction === "left"
          ? -(testimonialWidth + gapBetweenTestimonials)
          : testimonialWidth + gapBetweenTestimonials;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setCurrentIndex((prev) => {
        const newIndex = direction === "left" ? prev - 1 : prev + 1;
        return Math.max(0, Math.min(newIndex, testimonials.length - 1));
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    },
    isScrolling: () => isScrolling,
    currentIndex: () => currentIndex,
  }));

  return (
    <div className="relative h-[22rem] md:h-[25rem] w-full">
      <div className="absolute h-full w-full top-0">
        <div
          ref={containerRef}
          className="flex gap-[15rem] h-[22rem] md:h-[25rem] overflow-hidden snap-x snap-mandatory pl-[10rem] pr-[10rem] items-center"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="snap-center flex-shrink-0">
              <TestimonialCard
                name={testimonial.name}
                text={testimonial.text}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialsContainer.displayName = "TestimonialsContainer";

export default TestimonialsContainer;
