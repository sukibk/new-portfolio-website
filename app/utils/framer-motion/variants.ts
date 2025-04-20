/** Here are defined all the variants for framer-motion used in
 * this project categorized by where they are used
 */

// Project-wide
const subtleScroll = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,

    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// components/hero/HeroText.tsx
const ht_parentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const ht_childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// components/hero/HeroImage.tsx
const hi_parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const hi_childrenVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// components/about/Card.tsx
const techCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,

    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export {
  hi_childrenVariants,
  hi_parentVariants,
  ht_childVariants,
  ht_parentVariants,
  subtleScroll,
  techCardVariants,
};
