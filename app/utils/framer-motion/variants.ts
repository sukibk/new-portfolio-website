/** Here are defined all the variants for framer-motion used in
 * this project categorized by where they are used
 */

// Project-wide
const subtleScroll = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -20,

    transition: { duration: 0.25, ease: "easeIn" as const },
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
      ease: "easeOut" as const,
    },
  },
};

// components/about/Card.tsx
const techCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -20,

    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

// components/projects/ProjectCard.tsx
const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

// components/projects/ProjectModal.tsx
const projectModalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const projectModalContentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export {
  hi_childrenVariants,
  hi_parentVariants,
  ht_childVariants,
  ht_parentVariants,
  projectCardVariants,
  projectModalContentVariants,
  projectModalVariants,
  subtleScroll,
  techCardVariants,
};
