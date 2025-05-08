"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
import TestimonialsPage from "@/app/(non-dashboard)/testimonial/Section";
// import SkillsPage from "@/app/(non-dashboard)/skills/page";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import useSectionObserver from "@/app/hooks/useSectionObserver";

import TimelinePage from "./timeline/Section";

const NonDashboardSetup = () => {
  useSectionObserver();

  return (
    <>
      <HeroPage />
      <AboutPage />
      <TestimonialsPage />
      <TimelinePage />
      <AboutPage />
    </>
  );
};

export default NonDashboardSetup;
