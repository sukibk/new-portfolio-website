"use client";

import { useState } from "react";

import { type Project, projects } from "@/app/constants/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsContainer = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear project after animation
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Filter buttons with code-like syntax */}
      <div className="flex items-center gap-3 font-code text-xs md:text-sm">
        <span className="text-foreground-text">filter:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("featured")}
            className={`px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-200 cursor-pointer ${
              filter === "featured"
                ? "bg-primary text-white"
                : "bg-foreground-text/10 text-foreground-text hover:bg-foreground-text/20"
            }`}
          >
            .featured()
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-200 cursor-pointer ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-foreground-text/10 text-foreground-text hover:bg-foreground-text/20"
            }`}
          >
            .all()
          </button>
        </div>
        <span className="text-foreground-text ml-auto">
          {"//"} {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsContainer;
