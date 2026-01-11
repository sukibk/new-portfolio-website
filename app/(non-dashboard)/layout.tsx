"use client";

import { ReactNode } from "react";

import NavbarLayout from "@/app/components/navbar/NavbarLayout";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative">
      <div className="w-screen scrollbar-hide scroll-smooth flex justify-center font-lilita-one">
        <div className="flex-1 size-max-screen w-full">
          {children}
          <ThemeSwitcher />
          <NavbarLayout />
        </div>
      </div>
    </main>
  );
}
