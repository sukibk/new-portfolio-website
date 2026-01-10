import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ArticleCard from "@/app/components/layout/ArticleCard";
import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import AngledText from "@/app/components/shared/AngledText";
const AboutText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <ArticleCard className="flex-1 px-6 md:px-8 py-10 md:py-16 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <ScrollWrapper>
        <AngledText side="left" className="">
          process.env
        </AngledText>
        <motion.h2
          className="text-foreground-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          .FULL_STACK
          <span className="text-primary transition-all duration-500">
            _DEVELOPER
          </span>
        </motion.h2>
      </ScrollWrapper>
      <ScrollWrapper>
        <motion.h3
          className="text-xl md:text-3xl text-foreground-text/80 dark:text-foreground-text/70 font-medium mb-6 transition-all duration-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Partnering with founders to bring innovative ideas to life through
          immersive digital experiences
        </motion.h3>
      </ScrollWrapper>

      <ScrollWrapper className="text-foreground-text font-code text-base md:text-lg leading-relaxed space-y-4 transition-colors duration-500">
        <p className="relative pl-4 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
          Hey, I&apos;m Marko Sudar — a full-stack developer passionate about
          turning bold ideas into seamless digital experiences. From the
          Backend, accross the Frontend, to the Cloud, and AI integration, I
          build across the stack with a love for clean, scalable code.
        </p>
        <p className="relative pl-4 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300">
          I&apos;m especially into drones, uncrewed systems, and using cloud
          tools to power big ideas. When I&apos;m not building, I&apos;m on the
          tennis court or exploring how AI can change the way we live and work.
        </p>
        <p className="text-primary/80 font-semibold text-lg md:text-xl mt-6">
          <span className="text-foreground-text/50">{`> `}</span>
          Let&apos;s build something awesome.
          <span className="inline-block w-2 h-5 bg-primary/60 ml-1 animate-pulse" />
        </p>
      </ScrollWrapper>
    </ArticleCard>
  );
};

export default AboutText;
