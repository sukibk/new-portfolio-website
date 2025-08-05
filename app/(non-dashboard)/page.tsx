"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
import TestimonialsPage from "@/app/(non-dashboard)/testimonial/Section";
import useCheckBrowser from "@/app/hooks/useCheckBrowser";
// import SkillsPage from "@/app/(non-dashboard)/skills/page";
import useSectionObserver from "@/app/hooks/useSectionObserver";

import TimelinePage from "./timeline/Section";

const NonDashboardSetup = () => {
  useSectionObserver();
  const system = useCheckBrowser();

  console.log(system);

  return (
    <>
      <HeroPage />
      <AboutPage />
      <TestimonialsPage />
      <TimelinePage />
    </>
  );
};

export default NonDashboardSetup;
