import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "./Certifications.scss"; // Ensure this line is present to import styles

const certifications = [
  {
    title: "Introduction to C Programming",
    issuer: "Indian Institute of Technology Kanpur",
    badge: "NPTEL",
    duration: "Jan 2023 – March 2023",
    link: "https://drive.google.com/file/d/1fDmuCAcbRo1-DdCp__kB8JuqkFerQNpg/view?usp=sharing",
  },
  {
    title: "Data Base Management System",
    issuer: "Indian Institute of Technology Kharagpur",
    badge: "NPTEL",
    duration: "July 2023 – Sep 2023",
    link: "https://drive.google.com/file/d/1YmGMNLcu6eHfv05gKTnK3-Ck30JN8eBC/view?usp=sharing",
  },
  {
    title: "Data Structure and Algorithms Using Java",
    issuer: "Indian Institute of Technology Kharagpur",
    badge: "NPTEL",
    duration: "July 2023 – Oct 2023",
    link: "https://drive.google.com/file/d/1DJoL53FSsqvjCV0uv2lM_T-YkCft4MCj/view?usp=sharing",
  },
  {
    title: "Introduction To Machine Learning",
    issuer: "Indian Institute of Technology Kharagpur",
    badge: ["NPTEL", ", Silver Medalist"],
    duration: "Jul 2024 – Sep 2024",
    link: "https://drive.google.com/file/d/1AItvyKM2x5qL5h_lkNCk5uKLeSAsSjjn/view?usp=sharing",
  },
  {
    title: "Operating System Fundamentals",
    issuer: "Indian Institute of Technology Kharagpur",
    badge: "NPTEL",
    duration: "Jul 2024 – Oct 2024",
    link: "https://drive.google.com/file/d/13aZVb1siHfGMkvYJImgZQqolY5PJV37O/view?usp=sharing",
  },
];

const Certifications = () => (
  <section id="certifications">
    <h2>Certifications</h2>
    <div className="cert-grid">
      {certifications.map((cert, idx) => (
        <div className="cert-card" key={idx}>
          <span className="badge-above">{cert.badge}</span>
          <h3>{cert.title}</h3>
          <p className="issuer">{cert.issuer}</p>
          <p className="duration">{cert.duration}</p>
          <a href={cert.link} target="_blank" rel="noreferrer">
            <FiExternalLink /> View Certificate
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
