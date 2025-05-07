"use client";

import { type RefObject, useEffect } from "react";

const useSectionObserver = () => {
  useEffect(() => {
    const updateUrlOnView = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            window.history.pushState(null, "", `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(updateUrlOnView, {
      root: null, // 👈 window viewport
      threshold: 0.7,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const getSectionProps = (
    id: string,
    existingRef?: RefObject<HTMLElement> | null
  ) => {
    return {
      id,
      ref: existingRef || undefined,
    };
  };

  return { getSectionProps };
};

export default useSectionObserver;
