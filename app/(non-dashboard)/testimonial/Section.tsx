import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import AngledText from "@/app/components/shared/AngledText";
import TestimonialCard from "@/app/components/testimonial/TestimonialCard";
import TestimonialsContainer, {
  TestimonialsContainerRef,
} from "@/app/components/testimonial/TestimonialContainer";
import { testimonials } from "@/app/utils/framer-motion/testimonials";
import TestimonialsTitle from "@/app/components/testimonial/TestimonialsTitle";
import ScrollButtons from "@/app/components/shared/ScrollButtons";

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Exposing scrolling function from TestimonialsContainer to TestimonialPage using
  // useImperativeHandle
  const testimonialRef = useRef<TestimonialsContainerRef>(null);
  const scrollToTestimonial = (dir: "left" | "right") =>
    testimonialRef.current?.scrollToTestimonial(dir);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollToTestimonial("left");
      } else if (e.key === "ArrowRight") {
        scrollToTestimonial("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative  min-h-[40rem] h-[60vh] md:min-h-[50rem] md:h-[80vh] flex  flex-col justify-center gap-20
       items-center px-5 transition-colors duration-500 w-full flex-1 font-lilita-one border border-green-400
      "
    >
      <TestimonialsTitle />
      <TestimonialsContainer
        ref={testimonialRef}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        setIsScrolling={setIsScrolling}
        isScrolling={isScrolling}
      />
      <ScrollButtons
        currentIndex={currentIndex}
        isScrolling={isScrolling}
        scrollLeft={() => scrollToTestimonial("left")}
        scrollRight={() => scrollToTestimonial("right")}
        listSize={testimonials.length}
      />
      <img
        src="/images/testimonial-section/ai.png"
        alt="ai.png"
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-7 left-[-180px] bottom-[-200px]  dark:opacity-5
              pointer-events-none select-none  2xl:left-0 2xl:bottom-[-200px] -z-10"
      />
    </section>
  );
};

export default TestimonialsPage;
