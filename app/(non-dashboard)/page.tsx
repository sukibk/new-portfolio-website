"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
// import SkillsPage from "@/app/(non-dashboard)/skills/page";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import useSectionObserver from "@/app/hooks/useSectionObserver";

const NonDashboardSetup = () => {
  useSectionObserver();

  return (
    <>
      <HeroPage />
      <AboutPage />
      {/* <SkillsPage /> */}
    </>
  );
};

export default NonDashboardSetup;
