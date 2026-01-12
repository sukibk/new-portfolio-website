import "./globals.css";

import type { Metadata, Viewport } from "next";
import {
  Fira_Code,
  Geist,
  Geist_Mono,
  Lilita_One,
  Pacifico,
} from "next/font/google";

import BreakpointDebuggerWrapper from "@/app/components/BreakpointDebuggerWrapper";
import { InitTheme } from "@/app/components/InitTheme";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { UIProvider } from "@/app/context/UIContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
});

const pacificoFont = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Marko Sudar",
    template: "%s | Marko Sudar",
  },
  description:
    "Full-stack developer passionate about building innovative digital experiences.",
  metadataBase: new URL("https://markosudar.com"),
  openGraph: {
    title: "Marko Sudar",
    description:
      "Full-stack developer passionate about building innovative digital experiences.",
    url: "https://markosudar.com",
    siteName: "Marko Sudar",
    type: "website",
    images: [
      {
        url: "/site/dark_mode_logo.png",
        width: 1200,
        height: 630,
        alt: "Marko Sudar - Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marko Sudar",
    description:
      "Full-stack developer passionate about building innovative digital experiences.",
    images: ["/site/dark_mode_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="dark transition-colors duration-500 height-100 overflow-y-scroll overflow-x-hidden overscroll-none scrollbar-hide"
    >
      <body
        className={`${lilitaOne.variable} ${geistMono.variable}
         ${firaCode.variable} ${pacificoFont.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          <UIProvider>
            <main className="relative flex items-center justify-center ">
              {children}
            </main>
          </UIProvider>
        </ThemeProvider>
        <BreakpointDebuggerWrapper />
      </body>
    </html>
  );
}
