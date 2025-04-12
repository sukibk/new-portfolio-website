"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

import Intro from "@/app/components/intro/Intro";
import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { useUIContext } from "@/app/context/UIContext"; // import your navbar

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
  const [isTypingDone, setIsTypingDone] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("introCompleted") === "true";
    }
    return false;
  });

  const { scrollRef } = useUIContext();

  return (
    <main className="relative">
      <div
        className="h-screen snap-y w-screen scrollbar-hide
        snap-mandatory overflow-y-scroll scroll-smooth flex justify-center"
        ref={scrollRef}
      >
        {/*Setting layout for the whole landing page after : */}
        <AnimatePresence mode={"wait"}>
          {!isTypingDone ? (
            <motion.div key="intro-element w-full">
              <Intro turnIntroOff={setIsTypingDone} />
            </motion.div>
          ) : (
            <motion.div key="page" className="flex-1 size-max-screen">
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        <ThemeSwitcher />
        <NavbarLayout />
      </div>
    </main>
  );
}
