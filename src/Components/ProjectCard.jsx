import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2 text-amber-50">{project.title}</h3>

      <p className="text-gray-400 text-sm mb-4">{project.description}</p>

      {/* Tech Stack */}
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

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-white transition"
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
  );
};

export default ProjectCard;
