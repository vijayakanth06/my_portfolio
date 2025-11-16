import React from 'react';
import '../styles/resumestyles.css';

const RESUME = () => {
  const resumeData = {
    header: {
      name: "VIJAYAKANTH M",
      title: "Aspiring AI & ML Engineer | Web Developer | Innovator",
      image: "IMG_20240811_193707.jpg"
    },

    objective:
      "An engineering student who is eager to apply technical skills and problem-solving strategies in real-world projects in order to get valuable experience and contribute significantly in demanding and creative environments.",

    education: [
      {
        degree: "B.Tech - Artificial Intelligence and Machine Learning",
        institution: "Kongu Engineering College, Erode",
        details: "Expected 2027 | CGPA: 8.62",
        coursework: "Coursework: Python, JAVA, C, and JavaScript"
      },
      {
        degree: "HSC in Computer Science",
        institution: "Kongu Vellalar Matriculation Hr.Sec.School, Perundurai",
        details: "2022 - 2023 | Percentage: 94%"
      },
      {
        degree: "SSLC",
        institution: "Kongu Vellalar Matriculation Hr.Sec.School, Perundurai, Erode",
        details: "2020 - 2021"
      }
    ],

    skills: {
      technical: [
        "C", "Python", "Java", "HTML", "CSS", "JavaScript",
        "React.js", "Node.js", "Express.js",
        "MySQL", "MongoDB", "Machine Learning"
      ],
      soft: ["Communication", "Teamwork", "Problem-solving"],
      tools: ["Git", "GitHub"],
      languages: ["English", "Tamil"]
    },

    experience: [
      {
        role: "Intern",
        company: "ZEONE",
        duration: "Nov 2024 - Jan 2025",
        points: [
          "Gained practical knowledge in Full Stack development as part of a program conducted by Zeone.",
          "Worked on back-end development using Node.js for an AI Interview Chatbot."
        ]
      },
      {
        role: "Intern",
        company: "SHINELOGICS",
        duration: "Mar 2025 - May 2025",
        points: [
          "Gained practical knowledge in Deep Learning models as part of a program conducted by Shinelogics.",
          "Worked on real-time projects involving Deep Learning applications, including the prediction of fruits and vegetables."
        ]
      },
      {
        role: "Intern",
        company: "TWINCORD TECHNOLOGIES",
        duration: "Jul 2025 - Oct 2025",
        points: [
          "Completed assigned tasks and completed modules as per mentor guidance."
        ]
      }
    ],

    projects: [
      {
        title: "Refined CAPTCHA",
        duration: "Aug 2024 – Nov 2024",
        description:
          "An advanced bot detection system that replaces traditional CAPTCHAs using machine learning to analyze user interaction patterns."
      },
      {
        title: "Classify Songs by Genre",
        duration: "Aug 2024 – Dec 2024",
        description:
          "A machine learning model that analyzes audio features to classify songs with 85%+ accuracy."
      },
      {
        title: "Feedback Collection System",
        duration: "Aug 2024 – Dec 2024",
        description:
          "Developed a student feedback system using Java Spring Boot to submit and view course evaluations."
      },
      {
        title: "Dynamic Chatbot for Farm2Bag",
        duration: "Feb 2025",
        description:
          "Built a chatbot that uses website data for product search and recommendations using NLP."
      },
      {
        title: "Attendance Automation System",
        duration: "Feb 2025 – May 2025",
        description:
          "Created a MERN system that reduces manual attendance from 1.5 hours to 10 minutes."
      },
      {
        title: "Fruit and Vegetable Identifier",
        duration: "Mar 2025 – May 2025",
        description:
          "Developed a real-time recognition system using Flask, Groq LLM, and embeddings."
      },
      {
        title: "Visualizing Math – AI for Learning",
        duration: "Apr 2025",
        description:
          "Built an adaptive math tutor chatbot using NLP and visualization."
      },
      {
        title: "DCGRAM – Instagram Clone",
        duration: "Jan 2025 – Apr 2025",
        description:
          "A MERN-based social media app with comments, followers, and secure authentication."
      },
      {
        title: "AI Code Vulnerability Detector",
        duration: "May 2025",
        description:
          "An AI tool to detect coding vulnerabilities with live editor and chatbot integration."
      },
      {
        title: "AI Stock Portfolio Manager",
        duration: "May 2025 – Jun 2025",
        description:
          "Analyzes portfolios from CSV files, generates charts, and provides insights with Groq LLM."
      },
      {
        title: "ProTube – Productive Video Platform",
        duration: "Jul 2025 – Aug 2025",
        description:
          "A distraction-free video platform that blocks shorts and ads for learning."
      },
      {
        title: "ClauseWise – AI Legal Document Analyzer",
        duration: "Sep 2025",
        description:
          "AI tool to simplify clauses and classify legal documents using IBM Granite + Ollama."
      },
      {
        title: "Fabric Defect Detection System",
        duration: "Nov 2024 – Dec 2024",
        description:
          "Trained a CNN model to detect fabric defects in real time using webcam feed."
      },
      {
        title: "Material & Quantity Detection System",
        duration: "Sep 2025 – Oct 2025",
        description:
          "Model predicting construction materials and shipment quantities with 85% accuracy."
      }
    ],

    interests: [
      "Web Development",
      "Machine Learning",
      "Computer Vision",
      "Chatbots",
      "Software Engineering",
      "Video Editing"
    ],

    certifications: [
      "MongoDB Associate Developer (Jan 2025 - Feb 2025)",
      "Ethical Hacking - NPTEL (Jul 2024 - Oct 2024)",
      "Generative AI with Diffusion Models - NVIDIA (Oct 2025)"
    ],

    achievements: [
      "Secured 2nd Place in 2023 Academic Excellence Award - Kongu Vellalar Trust",
      "Secured 1st place in Hacksphere 2025 (24hr Hackathon) - AI Coding Club",
      "Secured 3rd place in AUTONIX 2024 Paper Presentation (KEC college)",
      "Secured 1st Place in PRODOTHON 2025 Paper Presentation (PSG college)",
      "Secured 1st place in ENVISTAS 2025 Paper Presentation (KEC college)",
      "Best Presentation & Collaboration – BYTS INDIA HACKATHON (BIH) 1.0",
      "Secured 3rd place in CognitiveX GenAI 24hr Hackathon - IBM Skill Build",
      "Secured 2nd place in Ideathon’25 (KEC college)",
      "Secured 1st place in SIH Internal Hackathon 2025 (KEC college)",
      "Top 4 Finalists in CTAI – CTD International Hackathon at IIT Bombay"
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
          <img src={resumeData.header.image} alt="Profile" className="profile-image" />
        </div>
      </header>

      {/* Objective */}
      <section className="resume-section">
        <h2 className="section-title">OBJECTIVE</h2>
        <p className="objective-text">{resumeData.objective}</p>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-grid">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-details">{edu.details}</p>
              {edu.coursework && <p className="education-coursework">{edu.coursework}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-container">

          <div className="skill-category">
            <h3 className="skill-category-title">Technical Skills</h3>
            <div className="skill-tags">
              {resumeData.skills.technical.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Soft Skills</h3>
            <div className="skill-tags">
              {resumeData.skills.soft.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Tools</h3>
            <div className="skill-tags">
              {resumeData.skills.tools.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {resumeData.skills.languages.map((lang, index) => (
                <span key={index} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-list">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">

              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>

              <p className="experience-duration">{exp.duration}</p>

              <ul className="experience-points">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="experience-point">{point}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">

          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-card">

              <h3 className="project-title">{project.title}</h3>

              <p className="project-date">{project.duration}</p>

              <p className="project-description">{project.description}</p>

            </div>
          ))}

        </div>
      </section>

      {/* Interests */}
      <section className="resume-section">
        <h2 className="section-title">AREA OF INTEREST</h2>
        <div className="interests-container">
          {resumeData.interests.map((interest, index) => (
            <div key={index} className="interest-tag">
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <h2 className="section-title">CERTIFICATION COURSES</h2>
        <div className="certifications-list">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="resume-section">
        <h2 className="section-title">ACHIVEMENTS</h2>
        <div className="achievements-list">
          <ul className="achievement-items">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
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
