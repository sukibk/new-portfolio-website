import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ArticleCard from "../layout/ArticleCard";

export interface TestimonialCardProps {
  name: string;
  text: string;
  company: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
};

/**
 * TestimonialCard
 *
 * Displays a single testimonial card with animation when it comes into view.
 *
 * @param name - Name of the person giving the testimonial
 * @param text - Testimonial text
 * @param company - Company of the person
 */
const TestimonialCard = ({ name, text, company }: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group"
    >
      <ArticleCard className="border-l-3 border-l-primary h-[18rem] w-[20rem] md:h-[21rem] md:w-[30rem]
        flex flex-1 flex-col font-code px-4 py-0
        hover:shadow-xl hover:shadow-primary/10 transition-all duration-300
        relative overflow-hidden">
        {/* Subtle gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col gap-2 md:gap-2 justify-center h-full w-full relative z-10">
          <p className="absolute top-3 left-3 text-foreground-text/50 text-lg">{"{"}</p>
          <h3 className="pl-6 font-bold text-foreground-title text-md md:text-3xl">
            <span className="text-foreground-text/60 text-xs md:text-sm">
              name:{" "}
            </span>
            {name}
          </h3>
          <h4 className="pl-6 text-foreground-text/80 text-sm md:text-lg leading-relaxed">
            <span className="text-foreground-text/60 text-xs md:text-sm font-bold">
              text:{" "}
            </span>
            &quot;{text}&quot;
          </h4>
          <p className="pl-6 text-xs md:text-lg text-primary font-semibold">
            <span className="text-foreground-text/60 text-xs md:text-sm font-bold">
              company:{" "}
            </span>
            {company}
          </p>
          <p className="absolute bottom-3 left-3 text-foreground-text/50 text-lg">{"}"}</p>
        </div>
      </ArticleCard>
    </motion.div>
  );
};

export default TestimonialCard;
