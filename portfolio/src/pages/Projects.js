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
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Refined CAPTCHA",
      description: "Built a CAPTCHA solution with ReactJS, NodeJS to detect bots using machine learning and user behavior analysis, offering a smoother and more secure experience than traditional CAPTCHA.",
      image: captchaImage,
      technologies: ["React", "Node.js", "Machine Learning"],
      githubLink: "https://github.com/vijayakanth06/imagecaptcha-v1"
    },
    {
      title: "Classify Songs Based on Genre",
      description: "Worked on a project to classify songs based on genre using machine learning techniques, implementing data preprocessing, feature extraction, and model training to achieve accurate predictions.",
      image: musicImage,
      technologies: ["Python", "Machine Learning", "Audio Processing"],
      githubLink: "https://github.com/vijayakanth06/Classify-songs-based-on-genre"
    },
    {
      title: "Feedback Collection System",
      description: "Developed and implemented a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.",
      image: feedbackImage,
      technologies: ["Java", "Spring Boot", "MySQL"],
      githubLink: "https://github.com/vijayakanth06/FeedbackCollectionSystem"
    },
    {
      title: "Dynamic Chatbot for Farm2Bag",
      description: "Developed a chatbot that dynamically utilizes website data to assist users in finding products and providing recommendations. Implemented data preprocessing and natural language processing.",
      image: chatbotImage,
      technologies: ["Python", "NLP", "Chatbot"],
      githubLink: "https://github.com/vijayakanth06/Vite_hacksphere_2025"
    },
    {
      title: "Attendance Automation for AI Department",
      description: "Developed an attendance automation system using the MERN stack, reducing the manual attendance process from 1.5 hours to just 10 minutes. Implemented efficient data handling and real-time updates.",
      image: attendanceImage,
      technologies: ["MERN Stack", "MongoDB", "Real-time Updates"],
      githubLink: "https://github.com/vijayakanth06/Attendance_Automation"
    },
    {
  "title": "DCGRAM - Instagram Clone",
  "description": "Developed a full-featured Instagram clone with user authentication using JWT, responsive profile management, and a modern UI. Built with MERN stack to mimic core social media functionalities.",
  "image": instaclone,
  "technologies": ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  "githubLink": "https://github.com/vijayakanth06/instaclone"
},
{
  "title": "AI Study Buddy",
  "description": "An intelligent chatbot-powered study assistant with a web frontend, Flask backend, and Telegram bot integration. Offers smart scheduling, reminders, and educational support. Frontend runs with React, backend with Express, and chatbot logic via Python and Telegram bot.",
  "image": aistudybuddy,
  "technologies": ["React", "Express.js", "Python", "Flask", "Telegram Bot"],
  "githubLink": "https://github.com/vijayakanth06/Bytes_Hackathon"
},
{
  "title": "AI Stock Portfolio Manager",
  "description": "Developed a full-stack investment analysis platform with React and Flask that processes portfolio CSVs in-memory, generates interactive visualizations, and provides AI-powered stock market advice through Groq's LLM. Offers real-time portfolio analysis without storing sensitive financial data.",
  "image": stockanalyzer,
  "technologies": ["React", "Flask", "Python", "Pandas", "Matplotlib", "Groq API", "Machine Learning"],
  "githubLink": "https://github.com/vijayakanth06/AI_Stock_Analyzer"
},
{
  "title": "Fruit & Vegetable Recognition",
  "description": "Developed a real-time fruit and vegetable recognition web app using Flask and Groq's LLaMA-3 model. Integrated webcam feed using OpenCV, sent live frames for inference, and filtered predictions using a labels.txt reference to ensure accurate classification.",
  "image": fruitVegImage,
  "technologies": ["Flask", "OpenCV", "Groq", "LLaMA-3", "HTML", "JavaScript"],
  "githubLink": "https://github.com/vijayakanth06/fruits_vegetable_predictor_using_webcam"
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