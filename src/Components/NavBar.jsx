import React, { useState } from "react";
import { SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-white/10">
      <div className="container mx-auto px-8 md:px-32 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Ahmad</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </li>
        </ul>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex gap-4 text-white text-xl">
          <a href="https://www.linkedin.com/in/ahmad-tazkrhge-4948aa377/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://www.instagram.com/ahmad__tazkrhge/" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
          </a>
          <a href="mailto:tazkrhgeahmadamen@gmail.com">
            <SiGmail />
          </a>
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-8 flex flex-col gap-4 text-gray-300">
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>

          {/* Social Icons Mobile */}
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a href="https://www.linkedin.com/in/ahmad-tazkrhge-4948aa377/" target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
            <a href="https://www.instagram.com/ahmad__tazkrhge/" target="_blank" rel="noopener noreferrer">
              <SiInstagram />
            </a>
            <a href="mailto:tazkrhgeahmadamen@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
