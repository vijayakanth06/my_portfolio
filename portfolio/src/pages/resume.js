import React from 'react';
import '../styles/resumestyles.css';

const Resume = () => {
  return (
    <div className="resume-page">
      {/* ── Header ── */}
      <header className="resume-header">
        <div className="resume-photo-wrapper">
          <picture>
            <source srcSet="/IMG_20240811_193707.webp" type="image/webp" />
            <img src="/IMG_20240811_193707.jpg" alt="Vijayakanth M" className="resume-photo" width="140" height="140" />
          </picture>
        </div>
        <div className="resume-header-info">
          <h1 className="resume-name">VIJAYAKANTH M</h1>
          <p className="resume-title">Aspiring AI &amp; ML Engineer | Web Developer | Innovator</p>
          <p className="resume-subtitle">
            An engineering student who is eager to apply technical skills and problem-solving strategies
            in real-world projects in order to get valuable experience and contribute significantly
            in demanding and creative environments.
          </p>
        </div>
      </header>

      {/* ── Education ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">B.Tech - Artificial Intelligence and Machine Learning</h3>
            <span className="resume-item-duration">Expected 2027</span>
          </div>
          <p className="resume-item-subtitle">Kongu Engineering College, Erode — CGPA: 8.62*</p>
          <p className="resume-item-coursework">Coursework: Python, JAVA, C, JavaScript, Machine Learning, Deep Learning</p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">HSC in Computer Science</h3>
            <span className="resume-item-duration">2022 – 2023</span>
          </div>
          <p className="resume-item-subtitle">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai — 94%</p>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">SSLC</h3>
            <span className="resume-item-duration">2020 – 2021</span>
          </div>
          <p className="resume-item-subtitle">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai, Erode</p>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Skills</h2>

        <p className="resume-tag-category">Technical Skills</p>
        <div className="resume-tags">
          {['C', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Machine Learning'].map((skill) => (
            <span key={skill} className="resume-tag">{skill}</span>
          ))}
        </div>

        <p className="resume-tag-category">Soft Skills</p>
        <div className="resume-tags">
          {['Communication', 'Teamwork', 'Problem-solving'].map((skill) => (
            <span key={skill} className="resume-tag">{skill}</span>
          ))}
        </div>

        <p className="resume-tag-category">Tools</p>
        <div className="resume-tags">
          {['Git', 'GitHub'].map((tool) => (
            <span key={tool} className="resume-tag">{tool}</span>
          ))}
        </div>

        <p className="resume-tag-category">Languages</p>
        <div className="resume-tags">
          {['English', 'Tamil'].map((lang) => (
            <span key={lang} className="resume-tag">{lang}</span>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">Intern — ZEONE</h3>
            <span className="resume-item-duration">Nov 2024 – Jan 2025</span>
          </div>
          <ul className="resume-item-points">
            <li>Gained practical knowledge in Full Stack development as part of a program conducted by Zeone.</li>
            <li>Worked on back-end development using Node.js for an AI Interview Chatbot.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">Intern — SHINELOGICS</h3>
            <span className="resume-item-duration">Mar 2025 – May 2025</span>
          </div>
          <ul className="resume-item-points">
            <li>Gained practical knowledge in Deep Learning models as part of a program conducted by Shinelogics.</li>
            <li>Worked on real-time projects involving Deep Learning applications, including the prediction of fruits and vegetables.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <h3 className="resume-item-title">Intern — TWINCORD TECHNOLOGIES</h3>
            <span className="resume-item-duration">Jul 2025 – Oct 2025</span>
          </div>
          <ul className="resume-item-points">
            <li>Completed assigned tasks and completed modules as per mentor guidance.</li>
          </ul>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Projects</h2>

        <div className="resume-project">
          <h3 className="resume-project-title">Refined CAPTCHA</h3>
          <p className="resume-project-duration">Jul 2025 – Oct 2025</p>
          <p className="resume-project-desc">An advanced bot detection system that replaces traditional CAPTCHAs with machine learning analyzing user interaction patterns (mouse movements, typing speed) to distinguish humans from bots.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Classify Songs by Genre</h3>
          <p className="resume-project-duration">Aug 2024 – Dec 2024</p>
          <p className="resume-project-desc">A machine learning model that analyzes audio features to automatically categorize music tracks into genres like rock, jazz, or classical with 85%+ accuracy.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Feedback Collection System</h3>
          <p className="resume-project-duration">Aug 2024 – Dec 2024</p>
          <p className="resume-project-desc">Developed a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Dynamic Chatbot for Farm2Bag</h3>
          <p className="resume-project-duration">Feb 2025</p>
          <p className="resume-project-desc">A chatbot that dynamically utilizes website data to assist users in finding products and giving recommendations using preprocessing and NLP.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Attendance Automation System</h3>
          <p className="resume-project-duration">Feb 2025 – May 2025</p>
          <p className="resume-project-desc">An attendance automation system using MERN stack that reduced attendance time from 1.5 hours to 10 minutes with real-time updates.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Fruit and Vegetable Identifier</h3>
          <p className="resume-project-duration">Mar 2025 – May 2025</p>
          <p className="resume-project-desc">A real-time recognition system using Flask, Groq LLM, and image embeddings to identify fruits or vegetables from uploaded images.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Visualizing Math – AI for Learning</h3>
          <p className="resume-project-duration">Apr 2025</p>
          <p className="resume-project-desc">A personalized math tutor chatbot using NLP, adaptive learning, and equation visualization with Telegram/web integration.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">DCGRAM – Instagram Clone</h3>
          <p className="resume-project-duration">Jan 2025 – Apr 2025</p>
          <p className="resume-project-desc">A fully functional social media platform replicating Instagram features using MERN stack.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">AI Code Vulnerability Detector</h3>
          <p className="resume-project-duration">May 2025</p>
          <p className="resume-project-desc">AI-powered code vulnerability detector with an online editor, chatbot, and Telegram support providing secure coding suggestions.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">AI Stock Portfolio Manager</h3>
          <p className="resume-project-duration">May 2025 – Jun 2025</p>
          <p className="resume-project-desc">Analyzes portfolio CSVs, generates performance charts, and provides AI-based investment insights using Groq LLM.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">ProTube – Productive Video Platform</h3>
          <p className="resume-project-duration">Jul 2025 – Aug 2025</p>
          <p className="resume-project-desc">A distraction-free video platform that blocks shorts and ads, showing only useful learning content.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">ClauseWise – AI Legal Document Analyzer</h3>
          <p className="resume-project-duration">Sep 2025</p>
          <p className="resume-project-desc">An AI-powered legal assistant that simplifies clauses, extracts entities, and classifies documents using IBM Granite and Ollama.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Fabric Defect Detection System</h3>
          <p className="resume-project-duration">Nov 2024 – Dec 2024</p>
          <p className="resume-project-desc">Trained a CNN model for real-time fabric defect detection through webcam using textile defect dataset.</p>
        </div>

        <div className="resume-project">
          <h3 className="resume-project-title">Material &amp; Quantity Detection System</h3>
          <p className="resume-project-duration">Sep 2025 – Oct 2025</p>
          <p className="resume-project-desc">AI model to predict construction materials and shipped quantities with 85% accuracy using text, numeric, and metadata features.</p>
        </div>
      </section>

      {/* ── Areas of Interest ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Areas of Interest</h2>
        <div className="resume-interests">
          {['Web Development', 'Machine Learning', 'Computer Vision', 'Chatbots', 'Software Engineering', 'Video Editing'].map((interest) => (
            <span key={interest} className="resume-interest-tag">{interest}</span>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Certification Courses</h2>

        <div className="resume-cert">
          <span className="resume-cert-name">MongoDB Associate Developer (Mongo University)</span>
          <span className="resume-cert-date">Jan 2025 – Feb 2025</span>
        </div>

        <div className="resume-cert">
          <span className="resume-cert-name">Ethical Hacking — NPTEL</span>
          <span className="resume-cert-date">Jul 2024 – Oct 2024</span>
        </div>

        <div className="resume-cert">
          <span className="resume-cert-name">Generative AI with Diffusion Models — NVIDIA</span>
          <span className="resume-cert-date">Oct 2025</span>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="resume-section">
        <h2 className="resume-section-title">Achievements</h2>

        <div className="resume-achievement">
          <strong>2nd Place</strong> — Academic Excellence Award — Kongu Vellalar Trust (2023)
        </div>
        <div className="resume-achievement">
          <strong>1st Place</strong> — Hacksphere 2025 (24hr Hackathon) — AI Coding Club (Feb 2025)
        </div>
        <div className="resume-achievement">
          <strong>3rd Place</strong> — AUTONIX 2024 Paper Presentation — KEC College (Oct 2024)
        </div>
        <div className="resume-achievement">
          <strong>1st Place</strong> — PRODOTHON 2025 Paper Presentation — PSG College (Mar 2025)
        </div>
        <div className="resume-achievement">
          <strong>1st Place</strong> — ENVISTAS 2025 Paper Presentation — KEC College (Feb 2025)
        </div>
        <div className="resume-achievement">
          <strong>Best Presentation &amp; Best Team Collaboration</strong> — BYTS INDIA HACKATHON (BIH) 1.0 — KEC College (Apr 2025)
        </div>
        <div className="resume-achievement">
          <strong>3rd Place</strong> — CognitiveX GenAI 24hr Hackathon — IBM Skill Build (Sep 2025)
        </div>
        <div className="resume-achievement">
          <strong>2nd Place</strong> — Ideathon'25 Project Presentation — KEC College (Jul 2025)
        </div>
        <div className="resume-achievement">
          <strong>1st Place</strong> — SIH Internal Hackathon 2025 — KEC College (Sep 2025)
        </div>
        <div className="resume-achievement">
          <strong>Top 4 Finalist</strong> — CTAI — CTD International Level Hackathon at IIT Bombay (Oct 2025)
        </div>
      </section>

      <footer className="resume-footer">
        © 2025 Vijayakanth M. Built with React.
      </footer>
    </div>
  );
};

export default Resume;
