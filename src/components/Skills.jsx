import React from "react";
import "./Skills.scss"; // Ensure this line is present to import styles

const skills = [
  "Web Development",
  "MERN Stack",
  "App Development",
  "Flutter",
  "Database Management",
  "Data Structures & Algorithms",
  "C & C++",
  "AI & ML",
  "Python",
];

const Skills = () => (
  <section id="skills">
    <h2>Technical Skills</h2>
    <div className="card">
      <ul
        style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: 0 }}
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              background: "#1f1f1f",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              listStyle: "none",
              color: "#fff",
              fontSize: "0.95rem",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
