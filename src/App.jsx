import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Certifications from "./components/Certifications";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
