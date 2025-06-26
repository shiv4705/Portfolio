import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">Shiv Patel</div>
      <nav>
        <a href="#hero">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
