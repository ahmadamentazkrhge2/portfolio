import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-8 md:px-32 bg-slate-900 min-h-[91.6vh] pt-6">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-50 ">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
