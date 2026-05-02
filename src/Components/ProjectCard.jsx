import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col">
      {project.image && (
        <div className="w-full mb-4 overflow-hidden rounded-lg h-44">
          <img
            loading="lazy"
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-amber-50">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, index) => (
          <span
            key={index}
            className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:underline transition-colors duration-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;