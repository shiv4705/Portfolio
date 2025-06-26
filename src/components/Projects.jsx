import React from "react";

const projects = [
  {
    name: "AgroSync",
    link: "https://github.com/shiv4705/AgroSync/tree/main",
    duration: "Dec 2024 – Apr 2025",
    desc: `A MERN-based web platform that connects farmers directly with consumers and retailers, 
    eliminating middlemen. Includes produce listing, real-time chat, order management, and 
    Razorpay-integrated payments.`,
    features: [
      "Farmer & Buyer login with JWT",
      "Produce listing and price negotiation",
      "Secure payments with Razorpay",
      "Analytics dashboard",
    ],
    stack: "React.js, Node.js, Express.js, MongoDB, Razorpay",
  },
  {
    name: "LiveLoop",
    link: "https://github.com/shiv4705/LiveLoop",
    duration: "May 2025 – June 2025",
    desc: `LiveLoop is a collaborative code editor with real-time synchronization and 
    multi-language compilation support using JDoodle API. Built with React and Express.`,
    features: [
      "Live multi-user code editing",
      "Socket.IO-based collaboration",
      "Modern UI with React + Bootstrap",
      "Room-based session management",
    ],
    stack: "React, Socket.IO, Express.js, JDoodle API, Bootstrap",
  },
  {
    name: "GreenMind",
    link: "https://github.com/shiv4705/GreenMind",
    duration: "Dec 2024 – May 2025",
    desc: `A Flutter mobile app for plant lovers that sends personalized watering reminders, 
    tracks plant care, and syncs data in real-time with Firebase.`,
    features: [
      "Smart watering reminders",
      "Google Sign-In & Email auth",
      "Firestore-powered data sync",
      "Calendar & 'Mark as Watered' view",
      "Beautiful UI with animations",
    ],
    stack:
      "Flutter, Firebase Auth, Firestore, Local Notifications, TableCalendar",
  },
  {
    name: "Stock Market Analysis & Forecasting",
    link: "https://github.com/shiv4705/Stock-Market-Analysis-and-Forecasting",
    duration: "July 2024 – Nov 2024",
    desc: `A two-part data-driven project focused on analyzing stock market trends and forecasting prices 
    using fundamental and technical analysis. Includes online learning models for continuous updates.`,
    features: [
      "Stock market data visualization and analysis",
      "Fundamental and technical analysis integration",
      "Stock price prediction and trend forecasting",
      "Online learning for adaptive forecasting",
    ],
    stack: "Python, Pandas, Matplotlib, Scikit-learn, Streamlit",
  },
];

const Projects = () => (
  <section id="projects">
    <h2>Featured Projects</h2>
    <div className="project-list">
      {projects.map((project, idx) => (
        <div className="card" key={idx}>
          <h3>{project.name}</h3>
          <p>
            <strong>{project.duration}</strong>
          </p>
          <p>{project.desc}</p>
          <ul style={{ paddingLeft: "1.2rem" }}>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p>
            <strong>Tech Stack:</strong> {project.stack}
          </p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
