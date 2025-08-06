"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
import ProjectsPage from "@/app/(non-dashboard)/projects/Section";
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
      <TimelinePage />
      <ProjectsPage />
      <TestimonialsPage />
    </>
  );
};

export default NonDashboardSetup;
