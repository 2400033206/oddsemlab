import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>J. Akshitha</h1>
        <p>Frontend Developer | Passionate about clean design & code</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a student developer who loves creating responsive and dynamic web
          applications using modern frameworks like React, Vite, and Tailwind.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal portfolio made with React and CSS Grid.</p>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Displays live weather data using OpenWeather API.</p>
          </div>
          <div className="project-card">
            <h3>Todo Manager</h3>
            <p>Helps organize tasks efficiently with a clean UI.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Akshitha | Built with React + Vite</p>
      </footer>
    </div>
  );
}