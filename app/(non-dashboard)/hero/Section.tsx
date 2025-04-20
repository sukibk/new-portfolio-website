"use client";

import { useRef } from "react";

import HeroImage from "@/app/components/hero/HeroImage";
import HeroText from "@/app/components/hero/HeroText";

const HeroPage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen snap-start flex  flex-col
       items-center justify-center py-[5rem]
       md:flex-row dark:text-cover px-5 md:gap-8
       transition-colors duration-500 w-full flex-1 font-lilita-one border border-red-500
      "
    >
      <HeroText />
      <HeroImage />
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt=""
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-10  left-[-150px] bottom-[-80px]
              pointer-events-none select-none fill-[#222] 2xl:left-0 2xl:bottom-0"
      />
    </section>
  );
};

export default HeroPage;
