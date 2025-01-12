import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>VIJAYAKANTH M</h1>
        <p className="subheading">Aspiring AI & ML Engineer | Web Developer | Innovator</p>
      </header>

      <section className="section">
        <h2>Objective</h2>
        <p>
          An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
          to gain valuable experience and contribute significantly to demanding and creative environments.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.Tech - Artificial Intelligence and Machine Learning</strong>, Kongu Engineering College, Erode
            <br />
            <span>Expected 2027 | CGPA: 8.89*</span>
          </li>
          <li>
            <strong>HSC in Computer Science</strong>, Kongu Vellalar Matriculation Hr. Sec. School, Perundurai
            <br />
            <span>2022 - 2023 | Percentage: 94%</span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Technical Skills:</strong> C, Python, Java, HTML, CSS, JavaScript</li>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
          <li><strong>Languages:</strong> English, Tamil</li>
          <li><strong>Tools:</strong> Git, GitHub, MySQL, MongoDB, Blender</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Refined CAPTCHA:</strong> Built a CAPTCHA solution using ReactJS and NodeJS for bot detection with machine learning.
          </li>
          <li>
            <strong>Classify Songs by Genre:</strong> Applied ML techniques to classify songs, featuring data preprocessing, feature extraction, and model training.
          </li>
          <li>
            <strong>Feedback Collection System:</strong> Developed a system for course evaluations using Java Spring Boot.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <ul>
          <li>2nd Place - 2023 Academic Excellence Award</li>
          <li>85th Place - 2024 Internal Hackathon (SIH)</li>
          <li>3rd Place - AUTONIX 2024 Paper Presentation</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Phone: +91 93601 77805</p>
        <p>Email: vikymahendiran123@gmail.com</p>
        <p>
          <a href="https://linkedin.com/in/VIJAYAKANTH-M" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
};

export default App;
