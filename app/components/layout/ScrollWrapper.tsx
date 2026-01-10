import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface ScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ScrollWrapper Component
 * ------------------------
 * A reusable motion-enabled wrapper that animates its children when they scroll into view.
 */
const ScrollWrapper = ({ children, style, className }: ScrollWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;
