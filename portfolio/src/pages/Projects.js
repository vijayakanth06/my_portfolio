import React from 'react';
import '../styles/Projects.css';
import captchaImage from '../assets/captcha.png';
import musicImage from '../assets/music-classification.png';
import feedbackImage from '../assets/feedback-system.png';
import chatbotImage from '../assets/chatbot.png';
import attendanceImage from '../assets/attendance-system.png';

const Projects = () => {
  const projects = [
    {
      title: "Refined CAPTCHA",
      description: "Built a CAPTCHA solution with ReactJS, NodeJS to detect bots using machine learning and user behavior analysis, offering a smoother and more secure experience than traditional CAPTCHA.",
      image: captchaImage,
      technologies: ["React", "Node.js", "Machine Learning"]
    },
    {
      title: "Classify Songs Based on Genre",
      description: "Worked on a project to classify songs based on genre using machine learning techniques, implementing data preprocessing, feature extraction, and model training to achieve accurate predictions.",
      image: musicImage,
      technologies: ["Python", "Machine Learning", "Audio Processing"]
    },
    {
      title: "Feedback Collection System",
      description: "Developed and implemented a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.",
      image: feedbackImage,
      technologies: ["Java", "Spring Boot", "MySQL"]
    },
    {
      title: "Dynamic Chatbot for Farm2Bag",
      description: "Developed a chatbot that dynamically utilizes website data to assist users in finding products and providing recommendations. Implemented data preprocessing and natural language processing.",
      image: chatbotImage,
      technologies: ["Python", "NLP", "Chatbot"]
    },
    {
      title: "Attendance Automation for AI Department",
      description: "Developed an attendance automation system using the MERN stack, reducing the manual attendance process from 1.5 hours to just 10 minutes. Implemented efficient data handling and real-time updates.",
      image: attendanceImage,
      technologies: ["MERN Stack", "MongoDB", "Real-time Updates"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">PROJECTS</h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;