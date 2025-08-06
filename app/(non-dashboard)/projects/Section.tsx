"use client";

import ProjectsContainer from "@/app/components/projects/ProjectsContainer";
import ProjectsTitle from "@/app/components/projects/ProjectsTitle";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-[6rem] md:py-[10rem] flex flex-col
        items-center px-5 transition-colors duration-500 w-full
        flex-1 font-lilita-one"
    >
      <ProjectsTitle />

      {/* Code-like description text */}
      <div className="font-code text-foreground-text text-xs md:text-sm mb-8 -mt-8">
        <p className="text-center">
          <span className="text-primary">{`// `}</span>
          Featured projects and contributions
        </p>
        <p className="text-center">
          <span className="text-primary">{`// `}</span>
          Built with modern technologies and best practices
        </p>
      </div>

      <div className="size-max-screen w-full px-8">
        <ProjectsContainer />
      </div>

      {/* Background decoration image */}
      <img
        src="/images/hero-section/mainIconsLight.png"
        alt="decoration"
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] opacity-10 right-[-150px] top-[-80px] -z-10
          pointer-events-none select-none dark:opacity-5 2xl:right-0 2xl:top-0"
      />
    </section>
  );
};

export default ProjectsSection;
