import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills3D from "./Components/Skills3D";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <NavBar />
      <Hero />
      <Projects />
      <Skills3D />
      <Contact />
    </div>
  );
}

export default App;
