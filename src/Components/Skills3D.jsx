import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
} from "react-icons/si";
import React from "react";
import { MdDevices } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Git / GitHub", icon: <SiGithub />, color: "text-gray-300" },
  {
    name: "Responsive Design",
    icon: <MdDevices />,
    color: "text-indigo-400",
  },
];

const Skills3D = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 bg-slate-900 text-white"
    >
      {/* container مثل Navbar */}
      <div className="container mx-auto px-8 md:px-32">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`flex flex-col items-center gap-4 group
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Icon */}
              <div
                className={`text-5xl ${skill.color}
                transition-all duration-300
                group-hover:scale-105
                group-hover:rotate-1
                group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.6)]`}
              >
                {skill.icon}
              </div>

              {/* Label */}
              <p className="text-sm text-gray-300 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills3D;
