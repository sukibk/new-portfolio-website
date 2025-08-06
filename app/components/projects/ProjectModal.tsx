import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { type Project, statusColors } from "@/app/constants/projects";
import {
  projectModalContentVariants,
  projectModalVariants,
} from "@/app/utils/framer-motion/variants";

import AngledText from "../shared/AngledText";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore body styles and scroll position
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={projectModalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={projectModalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-xl shadow-2xl border border-foreground-text/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-foreground-text/10 hover:bg-foreground-text/20 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-foreground-title" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6 font-code">
                <div className="relative">
                  <AngledText
                    side="left"
                    className="absolute -top-[0.9rem] left-0 -mb-2"
                  >
                    const
                  </AngledText>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-title pt-1">
                    {project.title.toLowerCase().replace(/\s+/g, "_")}
                    <span className="text-foreground-text text-sm ml-2">=</span>
                    <span className="text-foreground-text text-sm ml-1">
                      {"{"}
                    </span>
                  </h2>
                </div>

                {/* Status and Year */}
                <div className="flex gap-6 pl-8 mb-4">
                  <div className="flex gap-2">
                    <span className="text-foreground-text text-sm">year:</span>
                    <span className="text-primary text-sm">{project.year}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-foreground-text text-sm">
                      status:
                    </span>
                    <span className={`text-sm ${statusColors[project.status]}`}>
                      &quot;{project.status}&quot;
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pl-8 mb-6">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-foreground-text/10 rounded-md text-foreground-text hover:bg-foreground-text/20 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="text-sm">View Code</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-md text-primary hover:bg-primary/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span className="text-sm">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 font-code">
                <span className="text-foreground-text text-sm">
                  description:
                </span>
                <p className="text-foreground-text mt-2 pl-4 leading-relaxed">
                  &quot;{project.longDescription || project.description}&quot;
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6 font-code">
                <span className="text-foreground-text text-sm">
                  technologies: [
                </span>
                <div className="flex flex-wrap gap-2 mt-2 pl-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      &quot;{tech}&quot;
                    </span>
                  ))}
                </div>
                <span className="text-foreground-text text-sm">]</span>
              </div>

              {/* Responsibilities */}
              {project.responsibilities &&
                project.responsibilities.length > 0 && (
                  <div className="mb-6 font-code">
                    <span className="text-foreground-text text-sm">
                      responsibilities: [
                    </span>
                    <ul className="mt-2 pl-8 space-y-2">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="text-foreground-text text-sm">
                          <span className="text-primary mr-2">•</span>&quot;
                          {resp}&quot;
                        </li>
                      ))}
                    </ul>
                    <span className="text-foreground-text text-sm">]</span>
                  </div>
                )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-6 font-code">
                  <span className="text-foreground-text text-sm">
                    challenges: [
                  </span>
                  <ul className="mt-2 pl-8 space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="text-foreground-text text-sm">
                        <span className="text-yellow-500 mr-2">⚡</span>
                        &quot;{challenge}&quot;
                      </li>
                    ))}
                  </ul>
                  <span className="text-foreground-text text-sm">]</span>
                </div>
              )}

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mb-6 font-code">
                  <span className="text-foreground-text text-sm">
                    outcomes: [
                  </span>
                  <ul className="mt-2 pl-8 space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-foreground-text text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        &quot;{outcome}&quot;
                      </li>
                    ))}
                  </ul>
                  <span className="text-foreground-text text-sm">]</span>
                </div>
              )}

              {/* Closing bracket */}
              <div className="font-code">
                <span className="text-foreground-text text-sm">{"}"}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Use portal to render modal at document root
  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};

export default ProjectModal;
