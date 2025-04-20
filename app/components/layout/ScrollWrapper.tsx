import { type HTMLMotionProps, motion } from "framer-motion";
import React from "react";

import { subtleScroll } from "@/app/utils/framer-motion/variants";

interface ScrollWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

/**
 * ScrollWrapper Component
 * ------------------------
 * A reusable motion-enabled wrapper that animates its children when they scroll into view.
 *
 * Features:
 * - Uses Framer Motion for scroll-based reveal animation.
 * - Applies a fade-in + upward motion (`subtleScroll` variant).
 * - Triggers animation only once per page load (via `viewport.once`).
 * - Accepts all standard motion.div props, including `className`, `style`, `ref`, etc.
 *
 * Note:
 * - Extend with custom animation variants by overriding `variants`, `initial`, or `whileInView` if needed.
 *
 * @example
 * <ScrollWrapper className="my-10">
 *   <YourContent />
 * </ScrollWrapper>
 */

const ScrollWrapper = ({ children, ...props }: ScrollWrapperProps) => {
  return (
    <motion.div
      {...props}
      variants={subtleScroll}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;
