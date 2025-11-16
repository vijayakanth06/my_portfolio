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
import protube from '../assets/protube.png';
import clausewise from '../assets/clausewise.png';
import material from '../assets/material.png';
import fabric from '../assets/fabric.png';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
const projects = [
  {
    title: "Refined CAPTCHA",
    description: "An advanced bot detection system that replaces traditional CAPTCHAs with machine learning analyzing user interaction patterns (mouse movements, typing speed) to distinguish humans from bots.",
    duration: "Jul 2025 - Oct 2025",
    image: captchaImage,
    technologies: ["Machine Learning", "Behavior Analysis", "React", "Node.js", "User Interaction", "Security"],
    githubLink: "https://github.com/dummy/refined-captcha"
  },
  {
    title: "Classify Songs by Genre",
    description: "A machine learning model that analyzes audio features to automatically categorize music tracks into genres like rock, jazz, or classical with 85%+ accuracy.",
    duration: "Aug 2024 - Dec 2024",
    image: musicImage,
    technologies: ["Python", "Audio Processing", "Feature Extraction", "ML Model", "Classification", "Signal Analysis"],
    githubLink: "https://github.com/vijayakanth06/Classify-songs-based-on-genre"
  },
  {
    title: "Feedback Collection System",
    description: "Developed a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.",
    duration: "Aug 2024 - Dec 2024",
    image: feedbackImage,
    technologies: ["Java", "Spring Boot", "MySQL", "Backend API", "Web Forms"],
    githubLink: "https://github.com/vijayakanth06/FeedbackCollectionSystem"
  },
  {
    title: "Dynamic Chatbot for Farm2Bag",
    description: "A chatbot that dynamically utilizes website data to assist users in finding products and giving recommendations using preprocessing and NLP.",
    duration: "Feb 2025 - Feb 2025",
    image: chatbotImage,
    technologies: ["NLP", "Python", "Data Scraping", "Recommendation Engine", "Chatbot"],
    githubLink: "https://github.com/vijayakanth06/Vite_hacksphere_2025"
  },
  {
    title: "Attendance Automation System",
    description: "An attendance automation system using MERN stack that reduced attendance time from 1.5 hours to 10 minutes with real-time updates.",
    duration: "Feb 2025 - May 2025",
    image: attendanceImage,
    technologies: ["MERN", "MongoDB", "Real-time Sync", "React UI", "Automation"],
    githubLink: "https://github.com/vijayakanth06/Attendance_Automation"
  },
  {
    title: "Fruit and Vegetable Identifier",
    description: "A real-time recognition system using Flask, Groq LLM, and image embeddings to identify fruits or vegetables from uploaded images.",
    duration: "Mar 2025 - May 2025",
    image: fruitVegImage,
    technologies: ["Flask", "OpenCV", "Groq API", "Embeddings", "LLM Vision"],
    githubLink: "https://github.com/vijayakanth06/fruits_vegetable_predictor_using_webcam"
  },
  {
    title: "Visualizing Math – AI for Learning",
    description: "A personalized math tutor chatbot using NLP, adaptive learning, and equation visualization with Telegram/web integration.",
    duration: "Apr 2025 - Apr 2025",
    image: aistudybuddy,
    technologies: ["NLP", "Adaptive Learning", "Visualization", "Chatbot", "Telegram API"],
    githubLink: "https://github.com/vijayakanth06/Bytes_Hackathon"
  },
  {
    title: "DCGRAM – Instagram Clone",
    description: "A fully functional social media platform replicating Instagram features using MERN stack.",
    duration: "Jan 2025 - Apr 2025",
    image: instaclone,
    technologies: ["React", "Node.js", "MongoDB", "Authentication", "Social Feed"],
    githubLink: "https://github.com/vijayakanth06/instaclone"
  },
  {
    title: "AI Code Vulnerability Detector",
    description: "AI-powered code vulnerability detector with an online editor, chatbot, and Telegram support providing secure coding suggestions.",
    duration: "May 2025 - May 2025",
    image: codebase,
    technologies: ["AI Analysis", "Security Scanner", "Web Editor", "Chatbot", "ML Models"],
    githubLink: "https://github.com/dummy/aicodevulnerability"
  },
  {
    title: "AI Stock Portfolio Manager",
    description: "Analyzes portfolio CSVs, generates performance charts, and provides AI-based investment insights using Groq LLM.",
    duration: "May 2025 - Jun 2025",
    image: stockanalyzer,
    technologies: ["Flask", "Pandas", "Charting", "Groq LLM", "Financial Analysis"],
    githubLink: "https://github.com/vijayakanth06/AI_Stock_Analyzer"
  },
  {
    title: "ProTube – Productive Video Platform",
    description: "A distraction-free video platform that blocks shorts and ads, showing only useful learning content.",
    duration: "Jul 2025 - Aug 2025",
    image: protube,
    technologies: ["React", "Filtering Engine", "API Integration", "Video Player", "Productivity Tools"],
    githubLink: "https://github.com/vijayakanth06/protube"
  },
  {
    title: "ClauseWise – AI Legal Document Analyzer",
    description: "An AI-powered legal assistant that simplifies clauses, extracts entities, and classifies documents using IBM Granite and Ollama.",
    duration: "Sep 2025 - Sep 2025",
    image: clausewise,
    technologies: ["LLM", "Granite Model", "Document Parsing", "Entity Extraction", "Ollama"],
    githubLink: "https://github.com/vijayakanth06/genai_hackathon_ibm"
  },
  {
    title: "Fabric Defect Detection System",
    description: "Trained a CNN model for real-time fabric defect detection through webcam using textile defect dataset.",
    duration: "Nov 2024 - Dec 2024",
    image: fabric,
    technologies: ["CNN", "Computer Vision", "Dataset Training", "OpenCV", "Real-time Detection"],
    
  },
  {
    title: "Material & Quantity Detection System",
    description: "AI model to predict construction materials and shipped quantities with 85% accuracy using text, numeric, and metadata features.",
    duration: "Sep 2025 - Oct 2025",
    image: material,
    technologies: ["Regression Models", "Feature Engineering", "ML Pipeline", "Data Processing", "Prediction"],
    githubLink: "https://github.com/vijayakanth06/ctd"
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
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <FaGithub className="github-icon" /> View on GitHub
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;