"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";

const NonDashboardSetup = () => {
  return (
    <>
      <HeroPage />
      <AboutPage />
    </>
  );
};

export default NonDashboardSetup;
