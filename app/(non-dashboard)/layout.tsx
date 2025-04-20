"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

import Intro from "@/app/components/intro/Intro";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useUIContext } from "@/app/context/UIContext";
import useControlledScroll from "@/app/hooks/useControlledScroll";
import useAppStore from "@/app/storage/zustandLocal"; // import your navbar

/** This is layout for landing page. When user first visits page he will see
 * welcome text sequence which will be deactivated, either if he waits it out
 * or if he skips it and completion will be saved in local storage
 *
 * In here I am setting that layout will always have screen width n order for
 * snap scroll to work but, for container (motion.div) that holds landing page
 * I put custom variable size-max-screen which will limit the width of
 * landing page to 100 rem.
 */
export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { scrollRef } = useUIContext();

  const { hasHydrated, introCompleted: isTypingDone } = useAppStore();

  useEffect(() => {
    if (!isTypingDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isTypingDone]);

  // if (!hasHydrated) {
  //   return (
  //     <main className="bg-background h-screen flex justify-center items-center z-50">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 300 150"
  //         className="h-40 w-40"
  //       >
  //         <path
  //           fill="none"
  //           stroke="#A074FF"
  //           stroke-width="15"
  //           stroke-linecap="round"
  //           stroke-dasharray="300 385"
  //           stroke-dashoffset="0"
  //           d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
  //         >
  //           <animate
  //             attributeName="stroke-dashoffset"
  //             calcMode="spline"
  //             dur="2"
  //             values="685;-685"
  //             keySplines="0 0 1 1"
  //             repeatCount="indefinite"
  //           ></animate>
  //         </path>
  //       </svg>
  //     </main>
  //   );
  // }

  return (
    <main className="relative">
      <div
        // className="h-screen snap-y w-screen scrollbar-hide
        // snap-mandatory overflow-y-scroll scroll-smooth flex justify-center
        // font-lilita-one "
        className="h-screen  w-screen scrollbar-hide
        overflow-y-scroll scroll-smooth flex justify-center
        font-lilita-one "
        ref={scrollRef}
      >
        {/*Setting layout for the whole landing page after : */}
        <AnimatePresence mode={"wait"}>
          {!isTypingDone ? (
            <motion.div key="intro-element w-full">
              <Intro />
            </motion.div>
          ) : (
            <motion.div key="page" className="flex-1 size-max-screen w-full">
              {children}
              <ThemeSwitcher />
              <NavbarLayout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
