import React, { memo, useRef, useCallback } from 'react';
import '../styles/Projects.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import mepCopilotImage from '../assets/mep-copilot.jpg';
import resumeforgeImage from '../assets/resumeforge.jpg';
import captchaImage from '../assets/captcha.webp';
import musicImage from '../assets/music-classification.webp';
import feedbackImage from '../assets/feedback-system.webp';
import chatbotImage from '../assets/chatbot.webp';
import attendanceImage from '../assets/attendance-system.webp';
import instaclone from '../assets/instaclone.webp';
import aistudybuddy from '../assets/aistudybuddy.webp';
import stockanalyzer from '../assets/stockanalyzer.webp';
import fruitVegImage from '../assets/fruit-veg-recognition.webp';
import codebase from '../assets/codebase.webp';
import protube from '../assets/protube.webp';
import clausewise from '../assets/clausewise.webp';
import material from '../assets/material.webp';
import fabric from '../assets/fabric.webp';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Autonomous MEP AI Takeoff & Copilot Studio",
    description: "Integrated blueprint analysis, equipment counting, pipe/duct measurement, and an AI copilot into one unified application generating structured reports. Achieved 84.11% takeoff accuracy and 91.8% spatial F1 across real-time drawings.",
    duration: "Oct 2026",
    image: mepCopilotImage,
    technologies: ["Python", "PyTorch", "FastAPI", "LangGraph", "FastMCP", "PyMuPDF", "SQLite"],
  },
  {
    title: "ResumeForge – MCP NLP Pipeline",
    description: "Built an open-source 5-tool FastMCP server aggregating LinkedIn, GitHub, and LeetCode data into clean Markdown with 87% ATS parsing accuracy, cutting resume tailoring time from 2 hours to <10s (4.2s avg across 200+ variants).",
    duration: "Apr 2026",
    image: resumeforgeImage,
    technologies: ["Python", "FastMCP", "MCP Agents", "NLP", "RAG", "LLM"],
    githubLink: "https://github.com/vijayakanth06/ResumeForge",
  },
  {
    title: "Fabric Defect Detection System",
    description: "Deployed a real-time CNN defect detection pipeline (ResNet/EfficientNet) achieving 96.8% accuracy on 2,000+ fabric samples with edge IoT integration. Qualified for SIH 2025 Finals with <200ms inference latency and zero false negatives on critical defects.",
    duration: "Dec 2025",
    image: fabric,
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "Flask", "IoT"],
    githubLink: "https://github.com/vijayakanth06/Fabric_defect_detect",
  },
  {
    title: "ProTube – Educational Video Platform",
    description: "Architected a distraction-free long-form streaming platform with 99.2% short-form blocking accuracy, AI educational search, and a Chrome curator extension featuring O(1) duplicate detection (15 min → <30s). Achieved 94% retention across 40+ pilot users.",
    duration: "Aug 2025",
    image: protube,
    technologies: ["React", "Node.js", "Supabase", "Redis", "TailwindCSS", "JWT"],
    githubLink: "https://github.com/vijayakanth06/protube",
  },
  {
    title: "Material & Quantity Detection",
    description: "AI model to predict construction materials and shipped quantities with 85% accuracy — IIT Bombay CTD 2025 Top-4 Finalist project.",
    duration: "Sep 2025 – Oct 2025",
    image: material,
    technologies: ["Regression", "Feature Eng.", "ML Pipeline"],
    githubLink: "https://github.com/vijayakanth06/ctd",
  },
  {
    title: "ClauseWise – AI Legal Analyzer",
    description: "AI-powered legal assistant that simplifies clauses and extracts key entities using IBM Granite and Ollama.",
    duration: "Sep 2025",
    image: clausewise,
    technologies: ["LLM", "Granite", "NLP", "Ollama"],
    githubLink: "https://github.com/vijayakanth06/genai_hackathon_ibm",
  },
  {
    title: "Refined CAPTCHA",
    description: "An advanced bot detection system that replaces traditional CAPTCHAs with machine learning analyzing user interaction patterns (mouse movements, typing speed) to distinguish humans from bots.",
    duration: "Jul 2025 – Oct 2025",
    image: captchaImage,
    technologies: ["Machine Learning", "Behavior Analysis", "React", "Node.js", "Security"],
  },
  {
    title: "AI Stock Portfolio Manager",
    description: "Analyzes portfolio CSVs, generates performance charts, and provides AI-based investment insights.",
    duration: "May 2025 – Jun 2025",
    image: stockanalyzer,
    technologies: ["Flask", "Pandas", "Groq LLM", "Charts"],
    githubLink: "https://github.com/vijayakanth06/AI_Stock_Analyzer",
  },
  {
    title: "AI Code Vulnerability Detector",
    description: "AI-powered code vulnerability detector with an online editor, chatbot, and Telegram support.",
    duration: "May 2025",
    image: codebase,
    technologies: ["AI Analysis", "Security", "Web Editor", "ML"],
  },
  {
    title: "Fruit & Vegetable Identifier",
    description: "A real-time recognition system using Flask, Groq LLM, and image embeddings to identify fruits or vegetables.",
    duration: "Mar 2025 – May 2025",
    image: fruitVegImage,
    technologies: ["Flask", "OpenCV", "Groq API", "LLM Vision"],
    githubLink: "https://github.com/vijayakanth06/fruits_vegetable_predictor_using_webcam",
  },
  {
    title: "Visualizing Math – AI Tutor",
    description: "A personalized math tutor chatbot using NLP, adaptive learning, and equation visualization.",
    duration: "Apr 2025",
    image: aistudybuddy,
    technologies: ["NLP", "Visualization", "Chatbot", "Telegram"],
    githubLink: "https://github.com/vijayakanth06/Bytes_Hackathon",
  },
  {
    title: "Attendance Automation System",
    description: "An attendance automation system using MERN stack that reduced attendance time from 1.5 hours to 10 minutes.",
    duration: "Feb 2025 – May 2025",
    image: attendanceImage,
    technologies: ["MERN", "MongoDB", "Real-time", "Automation"],
    githubLink: "https://github.com/vijayakanth06/Attendance_Automation",
  },
  {
    title: "DCGRAM – Instagram Clone",
    description: "A fully functional social media platform replicating Instagram features using MERN stack.",
    duration: "Jan 2025 – Apr 2025",
    image: instaclone,
    technologies: ["React", "Node.js", "MongoDB", "Auth"],
    githubLink: "https://github.com/vijayakanth06/instaclone",
  },
  {
    title: "Dynamic Chatbot for Farm2Bag",
    description: "A chatbot that dynamically utilizes website data to assist users in finding products and giving recommendations using NLP.",
    duration: "Feb 2025",
    image: chatbotImage,
    technologies: ["NLP", "Python", "Data Scraping", "Chatbot"],
    githubLink: "https://github.com/vijayakanth06/Vite_hacksphere_2025",
  },
  {
    title: "Feedback Collection System",
    description: "Developed a student feedback system using Java Spring Boot, allowing students to submit and view course evaluations.",
    duration: "Aug 2024 – Dec 2024",
    image: feedbackImage,
    technologies: ["Java", "Spring Boot", "MySQL", "Backend API"],
    githubLink: "https://github.com/vijayakanth06/FeedbackCollectionSystem",
  },
  {
    title: "Classify Songs by Genre",
    description: "A machine learning model that analyzes audio features to automatically categorize music tracks into genres like rock, jazz, or classical with 85%+ accuracy.",
    duration: "Aug 2024 – Dec 2024",
    image: musicImage,
    technologies: ["Python", "Audio Processing", "Feature Extraction", "ML Model"],
    githubLink: "https://github.com/vijayakanth06/Classify-songs-based-on-genre",
  },
];

const TiltCard = ({ project, delay }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease';
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    card.style.transition = 'transform 0.4s ease';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card reveal reveal-delay-${Math.min(delay, 6)}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} className="project-img" loading="lazy" width="640" height="400" />
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-date">{project.duration}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
        </div>
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="gh-icon" /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = useRevealSection();

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <p className="terminal-label reveal">PROJECTS</p>
      <h2 className="section-title reveal reveal-delay-1">What I've Built</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} delay={(index % 3) + 2} />
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
