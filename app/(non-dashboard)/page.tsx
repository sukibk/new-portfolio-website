"use client";

import AboutPage from "@/app/(non-dashboard)/about/Section";
import ContactPage from "@/app/(non-dashboard)/contact/Section";
import HeroPage from "@/app/(non-dashboard)/hero/Section";
import ProjectsPage from "@/app/(non-dashboard)/projects/Section";
// import TestimonialsPage from "@/app/(non-dashboard)/testimonial/Section";
import Footer from "@/app/components/footer/Footer";
import useSectionObserver from "@/app/hooks/useSectionObserver";

import TimelinePage from "./timeline/Section";

const NonDashboardSetup = () => {
  useSectionObserver();

  return (
    <>
      <HeroPage />
      <AboutPage />
      <TimelinePage />
      <ProjectsPage />
      {/* <TestimonialsPage /> */}
      <ContactPage />
      <Footer />
    </>
  );
};

export default NonDashboardSetup;
