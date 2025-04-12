"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    // <motion.section
    //   ref={ref}
    //   initial={{ opacity: 0, x: 50 }}
    //   animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
    //   transition={{ duration: 0.4 }}
    //   className="h-screen snap-start flex items-center justify-center text-white transition-colors duration-500"
    // >
    //   <motion.div
    //     initial={{ y: 40 }}
    //     animate={{ y: isInView ? 0 : 40 }}
    //     transition={{ duration: 0.6 }}
    //   >
    //     <h1 className="text-4xl">I fade in & out on scroll</h1>
    //   </motion.div>
    // </motion.section>
    <div className="h-screen snap-start"></div>
  );
};

export default AboutPage;
