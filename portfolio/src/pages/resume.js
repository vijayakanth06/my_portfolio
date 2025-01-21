import React from 'react'
import '../styles/resumestyles.css';
const RESUME = () => {
  return (
    <div className="app">
    <header className="header">
      <h1  style={{ textAlign: 'left', marginRight: '40px',marginTop:'-50px'}}>VIJAYAKANTH M</h1>
      <p className="subheading"  style={{ textAlign: 'left' }}>Aspiring AI & ML Engineer | Web Developer | Innovator</p>
      <div className="profile-picture" style={{ textAlign: 'right', marginRight: '40px', marginTop: '-100px' }}>
        <img src="IMG_20240811_193707.jpg" alt="Profile" style={{ height: '180px', width: '180px', borderRadius: '50%' }} />
      </div>
    </header>

    <section className="section">
      <h2>OBJECTIVE</h2>
      <p>
        An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
        to gain valuable experience and contribute significantly to demanding and creative environments.
      </p>
    </section>

    <section className="section">
      <h2>EDUCATION</h2>
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
      <h2>SKILLS</h2>
      <ul>
        <li><strong>Technical Skills:</strong> C, Python, Java, HTML, CSS, JavaScript</li>
        <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
        <li><strong>Languages:</strong> English, Tamil</li>
        <li><strong>Tools:</strong> Git, GitHub, MySQL, MongoDB, Blender</li>
      </ul>
    </section>

    <section className="section">
      <h2>PROJECTS</h2>
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
      <h2>AREA OF INTEREST</h2>
      <ul>
        <li> Web Development</li>
        <li>Animation</li>
        <li>Video Editing</li>
      </ul>
    </section>

    <section className="section">
      <h2>CERTIFICATE</h2>
      <ul>
        <li>Ethical Hacking – NPTEL (2024)</li>
        <li>Web Development - GDC AI Workspace (2024)</li>
      </ul>
    </section>

    <section className="section">
      <h2>ACHIEVEMENTS</h2>
      <ul>
        <li>2nd Place - 2023 Academic Excellence Award</li>
        <li>85th Place - 2024 Internal Hackathon (SIH)</li>
        <li>3rd Place - AUTONIX 2024 Paper Presentation</li>
      </ul>
    </section>

    <section className="section">
      <h2>CONTACT:</h2>
      <p>Phone: +91 93601 77805</p>
      <p>Email: <a href="mailto:vikymahendiran123@gmail.com" target="_blank" rel="noopener noreferrer">
          vikymahendiran123@gmail.com
        </a></p><br></br>
      <p style={{ fontSize: '1.5rem' }}>
        <a href="https://www.linkedin.com/in/vijayakanth-m-7b7767312/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </section>
  </div>
  )
}

export default RESUME;
