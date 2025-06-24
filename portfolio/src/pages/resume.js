import React from 'react';
import '../styles/resumestyles.css';

const RESUME = () => {
  // Data structure for easy updates
  const resumeData = {
    header: {
      name: "VIJAYAKANTH M",
      title: "Aspiring AI & ML Engineer | Web Developer | Innovator",
      image: "IMG_20240811_193707.jpg"
    },
    objective: "An engineering student eager to apply technical skills and problem-solving strategies in real-world projects to gain valuable experience and contribute significantly to demanding and creative environments.",
    education: [
      {
        degree: "B.Tech - Artificial Intelligence and Machine Learning",
        institution: "Kongu Engineering College, Erode",
        details: "Expected 2027 | CGPA: 8.72*",
        coursework: "Python, JAVA, C, and JavaScript"
      },
      {
        degree: "HSC in Computer Science",
        institution: "Kongu Vellalar Matriculation Hr. Sec. School, Perundurai",
        details: "2022 - 2023 | Percentage: 94%",
        coursework: ""
      },
      {
        degree: "SSLC",
        institution: "Kongu Vellalar Matriculation Hr. Sec. School, Perundurai",
        details: "2020 - 2021",
        coursework: ""
      }
    ],
    skills: {
      technical: ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
      soft: ["Communication", "Teamwork", "Problem Solving"],
      tools: ["Git", "GitHub", "MySQL", "MongoDB", "Blender"],
      languages: ["English", "Tamil"]
    },
    experience: [
      {
        role: "Intern at ZEONE",
        duration: "Nov 2024 - Jan 2025",
        points: [
          "Gained practical knowledge in Full Stack development as part of a program conducted by Zeone",
          "Worked on backend development using Node.js for an AI Interview Chatbot"
        ]
      },
      {
        role: "Intern at SHINELOGICS",
        duration: "Feb 2025 - Present",
        points: [
          "Gained practical knowledge in Deep Learning models",
          "Worked on real-time projects involving Deep Learning applications, including the prediction of fruits and vegetables"
        ]
      }
    ],
    projects: [
      {
        title: "Refined CAPTCHA",
        description: "Built a CAPTCHA solution with ReactJS, NodeJS to detect bots using machine learning and user behavior analysis, offering a smoother and more secure experience than traditional CAPTCHA."
      },
      {
        title: "Classify Songs by Genre",
        description: "Worked on a project to classify songs based on genre using machine learning techniques, implementing data preprocessing, feature extraction, and model training."
      },
      {
        title: "Feedback Collection System",
        description: "Developed and implemented a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations."
      },
      {
        title: "Dynamic Chatbot for Farm2Bag",
        description: "Developed a chatbot that dynamically utilizes website data to assist users in finding products and providing recommendations. Implemented data preprocessing and NLP."
      },
      {
        title: "Attendance Automation for AI Department",
        description: "Developed an attendance automation system using the MERN stack, reducing manual attendance process from 1.5 hours to just 10 minutes."
      }
    ],
    interests: ["Web Development", "Machine Learning", "Animation", "Video Editing"],
    certifications: [
      "MongoDB Associate Developer",
      "Ethical Hacking - NPTEL (2024)"
    ],
    achievements: [
      {
        title: "2nd Place",
        description: "2023 Academic Excellence Award - Kongu Vellalar Trust"
      },
      {
        title: "1st Place",
        description: "Hacksphere 2025 (24hr Hackathon) - AI Coding Club"
      },
      {
        title: "3rd Place",
        description: "AUTONIX 2024 Paper Presentation (KEC College)"
      },
      {
        title: "1st Place",
        description: "PRODOTHON 2025 Paper Presentation (PSG College)"
      },
      {
        title: "1st Place",
        description: "ENVISTAS 2025 Paper Presentation (KEC College)"
      }
    ],
    contact: [
      {
        label: "Phone",
        value: "+91 93601 77805",
        link: "https://wa.me/919360177805"
      },
      {
        label: "Email",
        value: "vikymahendiran123@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/vijayakanth-m",
        link: "https://www.linkedin.com/in/vijayakanth-m-7b7767312/"
      },
      {
        label: "GitHub",
        value: "github.com/vijayakanth06",
        link: "https://github.com/vijayakanth06"
      }
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
                <p className="education-coursework">
                  <span className="detail-label">Coursework:</span> {edu.coursework}
                </p>
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
                <span className="experience-duration">{exp.duration}</span>
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
        <h2 className="section-title">CERTIFICATIONS</h2>
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
        <h2 className="section-title">ACHIEVEMENTS</h2>
        <div className="achievements-grid">
          {resumeData.achievements.map((achievement, index) => (
            <div key={`achievement-${index}`} className="achievement-card">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="resume-section">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-info">
          {resumeData.contact.map((contact, index) => (
            <div key={`contact-${index}`} className="contact-item">
              <span className="contact-label">{contact.label}:</span>
              <a 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RESUME;