import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2 text-amber-50">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((t, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 hover:underline"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;