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
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="h-full cursor-pointer"
      onClick={onClick}
    >
      <ArticleCard className="h-full border border-foreground-text/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <div className="p-4 md:p-5 pt-5 md:pt-6 h-full flex flex-col font-code text-[0.65rem] md:text-xs">
          {/* Header with angled text and title */}
          <div className="flex items-start justify-between mb-2">
            <div className="relative">
              <AngledText side="left" className="absolute -top-[0.8rem] left-0 -mb-2">
                const
              </AngledText>
              <h3 className="text-foreground-title text-sm md:text-base font-bold">
                {project.title.toLowerCase().replace(/\s+/g, "_")}
                <span className="text-foreground-text ml-1">=</span>
                <span className="text-foreground-text ml-1">{"{"}</span>
              </h3>
            </div>
          </div>

          {/* Project details */}
          <div className="flex-1 space-y-1.5 pl-3 md:pl-4">
            {/* Description */}
            <div className="flex gap-2">
              <span className="text-foreground-text">description:</span>
              <span className="text-foreground-text flex-1">
                &quot;{project.description}&quot;
              </span>
            </div>

            {/* Year only */}
            <div className="flex gap-2">
              <span className="text-foreground-text">year:</span>
              <span className="text-primary">{project.year}</span>
            </div>

            {/* Technologies */}
            <div className="flex gap-2 items-start">
              <span className="text-foreground-text">stack:</span>
              <span className="text-foreground-text">[</span>
              <div className="flex-1 flex flex-wrap gap-1">
                {project.technologies.slice(0, 5).map((tech, i) => (
                  <span key={i} className="text-primary">
                    &quot;{tech}&quot;
                    {i < Math.min(4, project.technologies.length - 1) && ","}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-foreground-text">
                    ...+{project.technologies.length - 5}
                  </span>
                )}
              </div>
              <span className="text-foreground-text">]</span>
            </div>

            {/* Links */}
            <div className="flex items-start">
              <span className="text-foreground-text">links: {"{"}</span>
              <div className="flex gap-3 ml-2">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground-text hover:text-primary transition-colors"
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
                    className="flex items-center gap-1 text-foreground-text hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    <span>live</span>
                  </Link>
                )}
                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-foreground-text/50 italic">null</span>
                )}
              </div>
              <span className="text-foreground-text ml-1">{"}"}</span>
            </div>
          </div>

          {/* Closing bracket with status badge */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-foreground-text">{"}"}</span>
            <span className={`px-1.5 py-0.5 text-[0.6rem] rounded-md ${
              project.status === "completed" 
                ? "bg-green-500/20 text-green-500" 
                : project.status === "in-progress"
                ? "bg-yellow-500/20 text-yellow-500"
                : "bg-blue-500/20 text-blue-500"
            }`}>
              {project.status}
            </span>
          </div>
        </div>
      </ArticleCard>
    </motion.div>
  );
};

export default ProjectCard;
