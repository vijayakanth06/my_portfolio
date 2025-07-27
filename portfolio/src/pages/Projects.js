import React from 'react';
import '../styles/Projects.css';
import captchaImage from '../assets/captcha.png';
import musicImage from '../assets/music-classification.png';
import feedbackImage from '../assets/feedback-system.png';
import chatbotImage from '../assets/chatbot.png';
import attendanceImage from '../assets/attendance-system.png';
import instaclone from '../assets/instaclone.png';
import aistudybuddy from '../assets/aistudybuddy.png';
import stockanalyzer from '../assets/stockanalyzer.png';
import fruitVegImage from '../assets/fruit-veg-recognition.png';
import codebase from '../assets/codebase.png';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
  {
    title: "Refined CAPTCHA",
    description: "An advanced bot detection system that replaces traditional CAPTCHAs with machine learning analyzing user interaction patterns (mouse movements, typing speed) to distinguish humans from bots while being less frustrating for users.",
    duration: "Aug 2024 - Nov 2024",
    image: captchaImage,
    technologies: ["React", "Node.js", "Machine Learning"],
    githubLink: "https://github.com/vijayakanth06/imagecaptcha-v1"
  },
  {
    title: "Classify Songs by Genre",
    description: "A machine learning model that analyzes audio features (tempo, frequency spectrum) to automatically categorize music tracks into genres like rock, jazz, or classical with 85%+ accuracy.",
    duration: "Aug 2024 - Dec 2024",
    image: musicImage,
    technologies: ["Python", "Machine Learning", "Audio Processing"],
    githubLink: "https://github.com/vijayakanth06/Classify-songs-based-on-genre"
  },
  {
    title: "Feedback Collection System",
    description: "Developed and implemented a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.",
    duration: "Aug 2024 - Dec 2024",
    image: feedbackImage,
    technologies: ["Java", "Spring Boot", "MySQL"],
    githubLink: "https://github.com/vijayakanth06/FeedbackCollectionSystem"
  },
  {
    title: "Dynamic Chatbot for Farm2Bag",
    description: "Worked on a project to develop a chatbot that dynamically utilizes website data to assist users in finding products and providing recommendations. Implemented data preprocessing, natural language processing.",
    duration: "Feb 2025 - Feb 2025",
    image: chatbotImage,
    technologies: ["Python", "NLP", "Chatbot"],
    githubLink: "https://github.com/vijayakanth06/Vite_hacksphere_2025"
  },
  {
    title: "Attendance Automation System",
    description: "Developed an attendance automation system using the MERN stack, reducing the manual attendance process from 1.5 hours to just 10 minutes. Implemented efficient data handling, real-time updates, and a user-friendly interface to streamline attendance tracking.",
    duration: "Feb 2025 - May 2025",
    image: attendanceImage,
    technologies: ["MERN Stack", "MongoDB", "Real-time Updates"],
    githubLink: "https://github.com/vijayakanth06/Attendance_Automation"
  },
  {
    title: "Fruit and Vegetable Identifier",
    description: "Built a real-time fruit and vegetable recognition system using Flask, Groq LLM, and image embeddings to identify fruits or vegetables from uploaded images. Integrated LLM-based visual inference with semantic similarity for accurate classification from a predefined label set.",
    duration: "Mar 2025 - May 2025",
    image: fruitVegImage,
    technologies: ["Flask", "OpenCV", "Groq", "LLaMA-3", "HTML", "JavaScript"],
    githubLink: "https://github.com/vijayakanth06/fruits_vegetable_predictor_using_webcam"
  },
  {
    title: "Visualizing Math – AI for Learning",
    description: "Built a personalized math tutor chatbot using NLP and adaptive learning to adjust difficulty, visualize equations, and track progress. Integrated smart scheduling and Q&A via Telegram/web app for assignment and exam reminders.",
    duration: "Apr 2025 - Apr 2025",
    image: aistudybuddy,
    technologies: ["React", "Express.js", "Python", "Flask", "Telegram Bot"],
    githubLink: "https://github.com/vijayakanth06/Bytes_Hackathon"
  },
  {
    title: "DCGRAM – Instagram Clone",
    description: "A fully functional social media platform with comments, followers system, and secure login — replicating core Instagram features with MERN stack.",
    duration: "Jan 2025 - Apr 2025",
    image: instaclone,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubLink: "https://github.com/vijayakanth06/instaclone"
  },
  {
    title: "AI Code Vulnerability Detector",
    description: "Developed an AI-powered code vulnerability detector with an online editor, integrated chatbot, and Telegram bot support. The system answers coding queries, detects vulnerabilities in real time, and provides customized, secure code suggestions.",
    duration: "May 2025 - May 2025",
    image: codebase, 
    technologies: ["AI", "Security", "JavaScript", "Telegram Bot"],
    githubLink: "https://github.com/Umadevim-ML/aicodebase"
  },
  {
    title: "AI Stock Portfolio Manager",
    description: "Analyzes investment portfolios by processing CSV exports from brokerages, generates performance charts, and provides AI-generated insights using market data and Groq’s LLM.",
    duration: "May 2025 - Jun 2025",
    image: stockanalyzer,
    technologies: ["React", "Flask", "Python", "Pandas", "Matplotlib", "Groq API", "Machine Learning"],
    githubLink: "https://github.com/vijayakanth06/AI_Stock_Analyzer"
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
              <h3 className="project-title">{project.title} <p className="project-duration">{project.duration}</p></h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-button"
              >
                <FaGithub className="github-icon" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;