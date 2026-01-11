"use client";

import { motion } from "framer-motion";

import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import ProjectsContainer from "@/app/components/projects/ProjectsContainer";
import ProjectsTitle from "@/app/components/projects/ProjectsTitle";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-[4rem] md:py-[6rem] flex flex-col
        items-center px-5 transition-colors duration-500 w-full
        flex-1 font-lilita-one"
    >
      <ProjectsTitle />

      {/* Code-like description text */}
      <ScrollWrapper>
        <motion.div
          className="font-code text-foreground-text/60 dark:text-foreground-text/50 text-xs md:text-sm mb-8 -mt-8 space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <p className="text-center transition-colors duration-300 hover:text-foreground-text/80">
            <span className="text-primary/70">{`// `}</span>
            Featured projects and contributions
          </p>
          <p className="text-center transition-colors duration-300 hover:text-foreground-text/80">
            <span className="text-primary/70">{`// `}</span>
            Built with modern technologies and best practices
          </p>
        </motion.div>
      </ScrollWrapper>

      <div className="size-max-screen w-full px-8">
        <ProjectsContainer />
      </div>

      {/* Background decoration image */}
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt="decoration"
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-10 hidden lg:block right-0 top-0 -z-10
          pointer-events-none select-none dark:opacity-5 2xl:right-0 2xl:top-0"
      />
    </section>
  );
};

export default ProjectsSection;
