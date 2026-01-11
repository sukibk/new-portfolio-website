"use client";

import AngledText from "@/app/components/shared/AngledText";

const BlogTitle = () => {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div className="flex justify-center items-center">
        <div className="relative">
          <AngledText side="left" className="!-mt-[10px] absolute">
            const
          </AngledText>
          <h1 className="text-foreground-title text-3xl gap-1 md:text-4xl xl:text-5xl font-bold transition-all duration-500">
            my
            <span className="text-primary mr-3 transition-all duration-500">
              Blog =
            </span>
            <span className="text-foreground-text/60">{"{"}</span>
          </h1>
        </div>
      </div>
      <p className="text-foreground-text/60 dark:text-foreground-text/50 text-xs md:text-sm font-code mt-2">
        <span className="text-primary/70">{`// `}</span>
        Tutorials, scripts, and thoughts on development
      </p>
    </div>
  );
};

export default BlogTitle;
