import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-[91.6vh] flex flex-col justify-center bg-slate-900"
      id="hero"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <p className="text-indigo-400 text-sm mb-3 tracking-widest uppercase">
          Front-End Developer
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Hi, I'm Ahmad Tazkrhge
        </h1>

        <p className="text-gray-400 mb-8 max-w-3xl">
          I build modern, responsive web applications using
          <span className="text-white font-medium"> React</span>,
          <span className="text-white font-medium"> Tailwind CSS</span>, and
          <span className="text-white font-medium"> JavaScript</span>.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
