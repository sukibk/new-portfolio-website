import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { type Project, statusColors } from "@/app/constants/projects";
import { projectCardVariants } from "@/app/utils/framer-motion/variants";

import ArticleCard from "../layout/ArticleCard";
import AngledText from "../shared/AngledText";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      variants={projectCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ scale: 1.02, y: -4 }}
      className="h-full cursor-pointer"
      onClick={onClick}
    >
      <ArticleCard
        className="h-full border border-foreground-text/10 dark:border-white/5 hover:border-primary/40
        transition-all duration-300 hover:shadow-xl hover:shadow-primary/10
        relative overflow-hidden group"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-4 md:p-5 pt-5 md:pt-6 h-full flex flex-col font-code text-[0.65rem] md:text-xs relative z-10">
          {/* Header with angled text and title */}
          <div className="flex items-start justify-between mb-2">
            <div className="relative">
              <AngledText
                side="left"
                className="absolute -top-[0.8rem] left-0 -mb-2"
              >
                const
              </AngledText>
              <h3 className="text-foreground-title text-sm md:text-base font-bold">
                {project.title.toLowerCase().replace(/\s+/g, "_")}
                <span className="text-foreground-text/60 ml-1">=</span>
                <span className="text-foreground-text/60 ml-1">{"{"}</span>
              </h3>
            </div>
          </div>

          {/* Project details */}
          <div className="flex-1 space-y-1.5 pl-3 md:pl-4">
            {/* Description */}
            <div className="flex gap-2">
              <span className="text-foreground-text/70">description:</span>
              <span className="text-foreground-text/80 flex-1">
                &quot;{project.description}&quot;
              </span>
            </div>

            {/* Year only */}
            <div className="flex gap-2">
              <span className="text-foreground-text/70">year:</span>
              <span className="text-primary font-semibold">{project.year}</span>
            </div>

            {/* Technologies */}
            <div className="flex gap-2 items-start">
              <span className="text-foreground-text/70">stack:</span>
              <span className="text-foreground-text/50">[</span>
              <div className="flex-1 flex flex-wrap gap-1">
                {project.technologies.slice(0, 5).map((tech, i) => (
                  <span key={i} className="text-primary/90">
                    &quot;{tech}&quot;
                    {i < Math.min(4, project.technologies.length - 1) && (
                      <span className="text-foreground-text/40">,</span>
                    )}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-foreground-text/50">
                    ...+{project.technologies.length - 5}
                  </span>
                )}
              </div>
              <span className="text-foreground-text/50">]</span>
            </div>

            {/* Links */}
            <div className="flex items-start">
              <span className="text-foreground-text/70">links: {"{"}</span>
              <div className="flex gap-3 ml-2">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-foreground-text/70 hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <FaGithub className="w-3 h-3 md:w-4 md:h-4" />
                    <span>github</span>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-foreground-text/70 hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <FaExternalLinkAlt className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    <span>live</span>
                  </Link>
                )}
                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-foreground-text/30 italic">null</span>
                )}
              </div>
              <span className="text-foreground-text/70 ml-1">{"}"}</span>
            </div>
          </div>

          {/* Closing bracket with status badge */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-foreground-text/60">{"}"}</span>
            <span
              className={`px-2 py-0.5 text-[0.6rem] rounded-lg font-semibold ${
                project.status === "completed"
                  ? "bg-green-500/15 text-green-500 ring-1 ring-green-500/30"
                  : project.status === "in-progress"
                    ? "bg-yellow-500/15 text-yellow-500 ring-1 ring-yellow-500/30"
                    : "bg-blue-500/15 text-blue-500 ring-1 ring-blue-500/30"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </ArticleCard>
    </motion.div>
  );
};

export default ProjectCard;
