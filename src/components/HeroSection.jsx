import React from "react";
import "./HeroSection.scss";
import profilePic from "../assets/profile.jpg";

const HeroSection = () => (
  <section id="hero">
    <div className="hero-row">
      {/* LEFT: Profile, Name, Title */}
      <div className="hero-left">
        <img src={profilePic} alt="Shiv Patel" className="profile-pic" />
        <h1>Shiv Patel</h1>
        <h2>Software Developer</h2>
      </div>

      {/* RIGHT: About + Button */}
      <div className="hero-right">
        <p>
          I’m a passionate <strong>Full Stack Developer</strong> specializing in
          building scalable, efficient and user-friendly web applications using
          the <strong>MERN stack</strong>. I thrive on solving real-world
          problems through clean, maintainable code and intuitive UI/UX. I also
          have knowledge of <strong>Flutter</strong> which helps me to
          create cross-platform mobile applications.
        </p>
        <p>
          Based in <strong>Surat, Gujarat</strong>, I enjoy exploring new
          technologies, collaborating with teams, and contributing to meaningful
          projects.
        </p>
        <a href="#contact" className="cta">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
