"use client";

import { useRef } from "react";

import AboutGraphics from "@/app/components/about/AboutGraphics";
import AboutText from "@/app/components/about/AboutText";
import HeroImage from "@/app/components/hero/HeroImage";
import HeroText from "@/app/components/hero/HeroText";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col
       items-center justify-center pt-[5rem] md:pt-0  border border-blue-500
       lg:flex-row dark:text-cover px-5 md:gap-8
       transition-colors duration-500 w-full flex-1 font-lilita-one overflow-hidden
       "
    >
      <AboutText />
      <AboutGraphics />
      <img
        className="absolute top-200 sm:top-150 md:top-120 lg:top-80 -right-40 -z-10 opacity-10 dark:opacity-20 rotate-150 nav:right-0 nav:top-170 transition-all duration-500"
        src="/images/about-section/tech.png"
        alt="technologie.png"
      />
    </section>
  );
};

export default AboutPage;
