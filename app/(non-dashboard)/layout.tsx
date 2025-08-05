"use client";

import { log } from "console";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import Intro from "@/app/components/intro/Intro";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useAppStore } from "@/app/storage/zustandLocal";

/**
 * This is layout for landing page.
 * When user first visits page, they will see a welcome text sequence
 * which will be deactivated either if they wait it out or skip it.
 * Completion will be saved in local storage.
 *
 * Layout always has screen width so that snap scroll can work,
 * but the container (motion.div) that holds landing page
 * has a custom variable size-max-screen which limits the width to 100 rem.
 */
export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { introCompleted: isTypingDone } = useAppStore();

  // useEffect(() => {
  //   if (!isTypingDone) {
  //     document.body.style.overflow = "hidden";
  //     console.log("hidden");
  //   } else {
  //     document.body.style.overflow = "auto";
  //     console.log("auto");
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isTypingDone]);

  // Optional hydration fallback
  // if (!hasHydrated) {
  //   return (
  //     <main className="bg-background h-screen flex justify-center items-center z-50">
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="h-40 w-40">
  //         <path
  //           fill="none"
  //           stroke="#A074FF"
  //           strokeWidth="15"
  //           strokeLinecap="round"
  //           strokeDasharray="300 385"
  //           strokeDashoffset="0"
  //           d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
  //         >
  //           <animate
  //             attributeName="stroke-dashoffset"
  //             calcMode="spline"
  //             dur="2"
  //             values="685;-685"
  //             keySplines="0 0 1 1"
  //             repeatCount="indefinite"
  //           />
  //         </path>
  //       </svg>
  //     </main>
  //   );
  // }

  return (
    <main className="relative">
      <div className="w-screen scrollbar-hide scroll-smooth flex justify-center font-lilita-one">
        {/* Setting layout for the whole landing page */}
        <AnimatePresence mode="wait">
          {!isTypingDone ? (
            <motion.div key="intro-element" className="w-full">
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
