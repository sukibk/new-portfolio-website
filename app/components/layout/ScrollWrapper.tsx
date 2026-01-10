import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { useIsMobile } from "@/app/hooks/useIsMobile";

interface ScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ScrollWrapper Component
 * ------------------------
 * A reusable motion-enabled wrapper that animates its children when they scroll into view.
 * Mobile: fade only | Desktop: fade + y-scroll
 */
const ScrollWrapper = ({ children, style, className }: ScrollWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isMobile = useIsMobile();

  const hiddenState = isMobile ? { opacity: 0 } : { opacity: 0, y: 15 };
  const visibleState = isMobile ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;
