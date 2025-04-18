"use client";

import { type RefObject, useEffect } from "react";

import { useUIContext } from "@/app/context/UIContext";

/**
 * Hook to observer sections within a scroll container and update URL hash
 * when sections come into view
 *
 * @returns An object with getSectionProps function
 */

const useSectionObserver = () => {
  const { scrollRef } = useUIContext();

  useEffect(() => {
    if (!scrollRef.current) return;

    const updateUrlOnView = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            // Use pushState to update the URL without causing a navigation
            window.history.pushState(null, "", `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(updateUrlOnView, {
      root: scrollRef.current,
      threshold: 0.7, // Can keep it like this because of snap behaviour
    });

    // This will find all sections with IDs within the scroll container
    const sections = scrollRef.current.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [scrollRef]);

  /**
   * Creates props for a section element
   * @param id The ID of the section (used for URL hash)
   * @param existingRef Optional existing ref to merge with
   *
   * @example:
   * Instead of:
   *  <section id="home" ref={ref} className="...">
   *    { content }
   *  </section>
   * Now I can do:
   *  const { getSectionProps } = useSectionObserver();
   *  <section {...getSectionProps("home", ref)} className="...">
   *    { content }
   *  </section>
   */

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
