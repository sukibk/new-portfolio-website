"use client";

import { useRef } from "react";

import HeroImage from "@/app/components/hero/HeroImage";
import HeroText from "@/app/components/hero/HeroText";
import ResumeContainer from "@/app/components/timeline/ResumeContainer";
import TimelineTree from "@/app/components/timeline/TimelineTree";

const TimelinePage = () => {
  return (
    <section
      id="timeline"
      className="relative min-h-screen  w-full flex  flex-col
       items-center justify-center py-[5rem]
       md:flex-row dark:text-cover px-8 md:gap-8
       transition-colors duration-500  flex-1 font-lilita-one border border-red-500
      "
    >
      <article className="flex min-h-screen w-full flex-col-reverse  gap-20 lg:flex-row">
        <TimelineTree />
        <ResumeContainer />
      </article>
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt="mainIconsLight.png"
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-10  left-[-150px] bottom-[-80px] -z-10
              pointer-events-none select-none fill-[#222] 2xl:left-0 2xl:bottom-0"
      />
    </section>
  );
};

export default TimelinePage;
