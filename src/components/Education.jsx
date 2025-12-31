import React from "react";
import "./Education.scss";
import transcriptPdf from "../assets/Transcript_22IT110.pdf";

const Education = () => (
  <section id="education">
    <h2>Education</h2>
    <div className="card">
      <h3>B.Tech - Information Technology Engineering</h3>
      <h4>CHARUSAT University (2022 – 2026)</h4>
      <p>CGPA: 8.48</p>
      <p>
        <a href={transcriptPdf} target="_blank" rel="noreferrer">
          Transcript
        </a>
      </p>
    </div>
    <div className="card">
      <h3>XII - SCIENCE (GSEB)</h3>
      <h4>June 2021 – March 2022</h4>
      <p>Percentile: 91.40</p>
    </div>
  </section>
);

export default Education;
