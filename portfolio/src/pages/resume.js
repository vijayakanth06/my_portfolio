import React from 'react';
import '../styles/resumestyles.css';

const RESUME = () => {
  // Updated data structure to match the PDF resume
  const resumeData = {
    header: {
      name: "VIJAYAKANTH M",
      title: "Aspiring AI & ML Engineer | Web Developer | Innovator",
      image: "IMG_20240811_193707.jpg"
    },
    objective: "An engineering student who is eager to apply technical skills and problem-solving strategies in real-world projects in order to get valuable experience and contribute significantly in demanding and creative environments.",
    education: [
      {
        degree: "B.Tech - Artificial Intelligence and Machine Learning",
        institution: "Kongu Engineering College, Erode",
        details: "Expected 2027 | CGPA: 8.72",
        coursework: "Coursework: Python, JAVA, C, and JavaScript"
      },
      {
        degree: "HSC in Computer Science",
        institution: "Kongu cellular Matriculation hr.sec.school, Perundurai",
        details: "2022 - 2023 | Percentage: 94%"
      },
      {
        degree: "SSLC",
        institution: "Kongu cellular matriculation hr.sec. school, Perundurai, Erode",
        details: "2020 - 2021"
      }
    ],
    skills: {
      technical: [ "C", "Python", "Java", "HTML", "CSS", "JavaScript",
 "React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "Machine Learning"],
      soft: ["Communication", "Teamwork", "Problem-solving"],
      tools: ["GIT", "GITHUB", "Blender"],
      languages: ["English", "Tamil"]
    },
    experience: [
      {
        role: "Intern",
        company: "ZEONE",
        points: [
          "Gained practical knowledge in Full Stack development as part of a program conducted by Zeone.",
          "Worked on back-end development using Node.js for an AI Interview Chatbot."
        ]
      },
      {
        role: "Intern",
        company: "SHINELOGICS",
        points: [
          "Gained practical knowledge in Deep Learning models as part of a program conducted by Shinelogics.",
          "Worked on real-time projects involving Deep Learning applications, including the prediction of fruits and vegetables."
        ]
      }
    ],
    projects:[
  {
    "title": "Refined CAPTCHA",
    "description": "An advanced bot detection system that replaces traditional CAPTCHAs with machine learning analyzing user interaction patterns (mouse movements, typing speed) to distinguish humans from bots while being less frustrating for users."
  },
  {
    "title": "Classify Songs by Genre",
    "description": "A machine learning model that analyzes audio features (tempo, frequency spectrum) to automatically categorize music tracks into genres like rock, jazz, or classical with 85%+ accuracy."
  },
  {
    "title": "Feedback Collection System",
    "description": "Developed and implemented a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations."
  },
  {
    "title": "Dynamic Chatbot for Farm2Bag",
    "description": "Worked on a project to develop a chatbot that dynamically utilizes website data to assist users in finding products and providing recommendations. Implemented data preprocessing and natural language processing."
  },
  {
    "title": "Attendance Automation System",
    "description": "Developed an attendance automation system using the MERN stack, reducing the manual attendance process from 1.5 hours to just 10 minutes. Implemented efficient data handling, real-time updates, and a user-friendly interface to streamline attendance tracking."
  },
  {
    "title": "Fruit and Vegetable Identifier",
    "description": "Built a real-time fruit and vegetable recognition system using Flask, Groq LLM, and image embeddings to identify fruits or vegetables from uploaded images. Integrated LLM-based visual inference with semantic similarity for accurate classification from a predefined label set."
  },
  {
    "title": "Visualizing Math– AI for Learning",
    "description": "Built a personalized math tutor chatbot using NLP and adaptive learning algorithms. The system evaluates student responses to customize lesson difficulty, generates dynamic visualizations of equations, and tracks progress to optimize learning paths in real-time."
  },
  {
    "title": "DCGRAM– Instagram Clone",
    "description": "A fully functional social media platform with comments, follower system, and secure login – replicating core Instagram features using the MERN stack."
  },
  {
    "title": "AI Study Buddy",
    "description": "A smart scheduling assistant that sets reminders for assignments/exams via Telegram and web app, with Q&A capabilities using educational content databases."
  },
  {
    "title": "AI Stock Portfolio Manager",
    "description": "Analyzes investment portfolios by processing CSV exports from brokerages, generates performance charts, and provides AI-generated insights using market data and Groq’s LLM."
  }
],
    interests: ["Web Development", "Machine Learning", "Animation", "Video Editing"],
    certifications: [
      "MongoDB Associate Developer",
      "Ethical Hacking - NPTEL"
    ],
    achievements: [
      "Secured 2nd Place in 2023 Academic Excellence Award - Kongu Vellalar Trust",
      "Secured 1st place in Hacksphere 2025(24hr Hackathon) - AI Coding club",
      "Secured 3rd place in AUTONIX 2024 Paper Presentation(KEC college)",
      "Secured 1st Place in PRODOTHON 2025 Paper Presentation(PSG college)",
      "Secured 1st place in ENVISTAS 2025 Paper Presentation(KEC college)",
      "Awarded Best Presentation and Best Team Collaboration in BYTS INDIA HACKATHON (BIH) 1.0 - Artificial Intelligence (KEC college)"
    ]
  };

  return (
    <div className="resume-container">
        {/* Header Section */}
      <header className="resume-header">
        <div className="header-content">
          <h1 className="resume-name">{resumeData.header.name}</h1>
          <p className="resume-title">{resumeData.header.title}</p>
        </div>
        <div className="profile-image-container">
          <img src={resumeData.header.image} alt="Profile" className="profile-image"/>
        </div>
      </header>
      {/* Objective Section */}
      <section className="resume-section">
        <h2 className="section-title">OBJECTIVE</h2>
        <div className="section-content">
          <p className="objective-text">{resumeData.objective}</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-grid">
          {resumeData.education.map((edu, index) => (
            <div key={`education-${index}`} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-details">{edu.details}</p>
              {edu.coursework && (
                <p className="education-coursework">{edu.coursework}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-title">Technical Skills</h3>
            <div className="skill-tags">
              {resumeData.skills.technical.map((skill, index) => (
                <span key={`tech-skill-${index}`} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">Soft Skills</h3>
            <div className="skill-tags">
              {resumeData.skills.soft.map((skill, index) => (
                <span key={`soft-skill-${index}`} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">Tools</h3>
            <div className="skill-tags">
              {resumeData.skills.tools.map((tool, index) => (
                <span key={`tool-${index}`} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {resumeData.skills.languages.map((lang, index) => (
                <span key={`lang-${index}`} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-list">
          {resumeData.experience.map((exp, index) => (
            <div key={`exp-${index}`} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={`exp-point-${index}-${i}`} className="experience-point">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <div key={`project-${index}`} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="resume-section">
        <h2 className="section-title">AREA OF INTEREST</h2>
        <div className="interests-container">
          {resumeData.interests.map((interest, index) => (
            <div key={`interest-${index}`} className="interest-tag">
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="resume-section">
        <h2 className="section-title">CERTIFICATE</h2>
        <div className="certifications-list">
          {resumeData.certifications.map((cert, index) => (
            <div key={`cert-${index}`} className="certification-item">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
<section className="resume-section">
  <h2 className="section-title">ACHIVEMENTS</h2>
  <div className="achievements-list">
    <ul className="achievement-items">
      {resumeData.achievements.map((achievement, index) => (
        <li key={`achievement-${index}`} className="achievement-item">
          {achievement}
        </li>
      ))}
    </ul>
  </div>
</section>
    </div>
  );
};

export default RESUME;