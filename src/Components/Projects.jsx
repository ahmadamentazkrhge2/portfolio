import React from "react";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-slate-900 min-h-[91.6vh] pt-16"
    >
      {/* نفس container المستخدم في باقي الموقع */}
      <div className="container mx-auto px-8 md:px-32">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-50">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`transition-all duration-700 ease-out
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
