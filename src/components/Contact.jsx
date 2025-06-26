import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => (
  <section id="contact">
    <h2>Get in Touch</h2>
    <div className="card">
      <p>
        Email: <a href="mailto:spatel2732@gmail.com">spatel2732@gmail.com</a>
      </p>
      <p>Phone: +91 97236 31232</p>
      <p>Location: Surat, Gujarat</p>

      <div className="social-links">
        <a
          href="https://github.com/shiv4705"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shiv-patel-b8321825a/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
