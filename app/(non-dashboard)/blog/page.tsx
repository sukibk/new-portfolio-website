"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import BlogContainer from "@/app/components/blog/BlogContainer";
import BlogTitle from "@/app/components/blog/BlogTitle";
import Footer from "@/app/components/footer/Footer";

const BlogPage = () => {
  return (
    <>
      <section className="relative min-h-screen py-[6rem] md:py-[8rem] flex flex-col items-center px-5 transition-colors duration-500 w-full flex-1 font-lilita-one">
        {/* Back to home link */}
        <div className="w-full max-w-6xl mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground-text/60 hover:text-primary transition-colors duration-200 font-code text-sm"
          >
            <FaArrowLeft className="w-3 h-3" />
            <span>cd ~</span>
          </Link>
        </div>

        <BlogTitle />

        {/* Blog content */}
        <div className="w-full max-w-6xl px-4 md:px-8">
          <BlogContainer />
        </div>

        {/* Floating brackets decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute top-[15%] left-[5%] text-primary/10 text-6xl md:text-8xl font-code hidden md:block">
            {"{"}
          </span>
          <span className="absolute top-[20%] right-[8%] text-primary/10 text-6xl md:text-8xl font-code hidden md:block">
            {"}"}
          </span>
        </div>

        {/* Background decoration */}
        <img
          src="/images/hero-section/mainIconsLight.png"
          alt="decoration"
          aria-hidden="true"
          className="absolute w-[450px] h-[450px] opacity-5 hidden lg:block right-0 bottom-0 -z-10
            pointer-events-none select-none dark:opacity-5"
        />
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
