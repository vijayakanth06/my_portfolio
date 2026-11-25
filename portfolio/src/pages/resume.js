import React from 'react';
import '../styles/resumestyles.css';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaDownload } from 'react-icons/fa';

const EDUCATION = [
  {
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    institution: 'Kongu Engineering College, Erode',
    detail: 'CGPA: 8.49',
    date: 'May 2027',
    coursework: 'Python, Java, SQL, Machine Learning, Deep Learning, Computer Vision, NLP, LLMs & RAG',
  },
  {
    degree: 'HSC in Computer Science',
    institution: 'Kongu Vellalar Matric. Hr. Sec. School, Perundurai',
    detail: '94%',
    date: '2022 – 2023',
  },
  {
    degree: 'SSLC',
    institution: 'Kongu Vellalar Matric. Hr. Sec. School, Perundurai',
    detail: '',
    date: '2020 – 2021',
  },
];

const SKILL_GROUPS = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI / ML & Data',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLMs', 'RAG', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'ONNX'],
  },
  {
    category: 'Data & Stats',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'Statistical Analysis'],
  },
  {
    category: 'Frameworks',
    items: ['Flask', 'FastAPI', 'Node.js', 'FastMCP', 'LangGraph', 'React.js', 'Express.js'],
  },
  {
    category: 'Databases',
    items: ['MongoDB (Certified)', 'MySQL', 'PostgreSQL', 'SQLite', 'ChromaDB', 'Supabase', 'Redis'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Docker', 'REST APIs', 'Render', 'Railway', 'Firebase', 'Git/GitHub'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem-Solving', 'Teamwork', 'Communication', 'Agile Collaboration'],
  },
];

const EXPERIENCE = [
  {
    role: 'AI / Data Science Intern',
    company: 'Twincord Technologies',
    date: 'Jul 2025 – Oct 2025',
    points: [
      'Deployed FastAPI ML inference endpoints; monitored latency and optimized scalability of AI platform.',
      'Collaborated with senior developers on algorithm implementation, model validation, and troubleshooting.',
    ],
  },
  {
    role: 'Deep Learning Intern',
    company: 'Shinelogics',
    date: 'Mar 2025 – May 2025',
    points: [
      'Trained CNN models (ResNet, EfficientNet, MobileNet) on GPU for real-time product identification; deployed and validated on edge hardware over 2-week production trial with 98%+ uptime and zero critical failures.',
      'Optimized model inference pipeline reducing latency by 35%; tested across 70+ product images during real-time deployment validation.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'ZEONE',
    date: 'Nov 2024 – Jan 2025',
    points: [
      'Built 6 RESTful APIs in Node.js/Express for an AI-powered interview application; optimized database queries and caching reducing average API response time from 1.2s to 450ms (62% improvement).',
      'Implemented JWT authentication and request validation; processed 500+ concurrent interview sessions during QA testing with zero downtime.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Autonomous MEP AI Takeoff & Copilot Studio',
    date: 'Oct 2026',
    tech: 'Python, PyTorch, FastAPI, LangGraph, FastMCP, PyMuPDF, SQLite',
    desc: 'Integrated blueprint analysis, equipment counting, pipe/duct measurement, and user query handling into one AI application achieving 84.11% takeoff accuracy and 91.8% spatial F1 across real-time drawings.',
  },
  {
    title: 'ResumeForge — MCP-Based NLP Resume Pipeline',
    date: 'Apr 2026',
    tech: 'Python, MCP Agents, NLP, RAG, FastMCP, LLM',
    desc: 'Built an open-source 5-tool FastMCP server aggregating LinkedIn, GitHub, and LeetCode data into clean Markdown with 87% ATS parsing accuracy, cutting tailoring time from 2 hours to <10s (4.2s avg across 200+ variants).',
  },
  {
    title: 'Fabric Defect Detection System',
    date: 'Dec 2025',
    tech: 'Python, TensorFlow, CNN, OpenCV, Flask, IoT Integration',
    desc: 'Deployed a real-time CNN defect detection pipeline (ResNet/EfficientNet) achieving 96.8% accuracy on 2,000+ fabric samples with <200ms latency and zero false negatives on critical defects, qualifying for SIH 2025 Finals.',
  },
  {
    title: 'ProTube — Distraction-Free Educational Video Platform',
    date: 'Aug 2025',
    tech: 'React, Node.js/Express, Supabase, Redis, TailwindCSS, JWT',
    desc: 'Architected a long-form educational streaming platform with 99.2% short-form blocking accuracy, AI educational search, and a Chrome curator extension with O(1) duplicate detection (94% retention across 40+ pilot users).',
  },
  {
    title: 'Material & Quantity Detection',
    date: 'Sep 2025 – Oct 2025',
    tech: 'Regression, Feature Engineering, ML Pipeline',
    desc: 'AI model to predict construction materials and shipped quantities with 85% accuracy (IIT Bombay CTD 2025 Top-4 Finalist).',
  },
  {
    title: 'ClauseWise — AI Legal Analyzer',
    date: 'Sep 2025',
    tech: 'LLM, IBM Granite, NLP, Ollama',
    desc: 'AI-powered legal assistant that simplifies clauses and extracts entities using IBM Granite and Ollama.',
  },
  {
    title: 'Refined CAPTCHA',
    date: 'Jul 2025 – Oct 2025',
    tech: 'Machine Learning, Behavior Analysis, React, Node.js',
    desc: 'ML-based bot detection analyzing user interaction patterns (mouse movements, typing cadence).',
  },
  {
    title: 'AI Stock Portfolio Manager',
    date: 'May 2025 – Jun 2025',
    tech: 'Flask, Pandas, Groq LLM, Charts',
    desc: 'Analyzes portfolio CSVs, generates performance charts, and delivers AI-based investment insights.',
  },
  {
    title: 'Fruit & Vegetable Identifier',
    date: 'Mar 2025 – May 2025',
    tech: 'Flask, OpenCV, Groq API, LLM Vision',
    desc: 'Real-time recognition system using Flask, Groq LLM, and image embeddings.',
  },
  {
    title: 'Attendance Automation System',
    date: 'Feb 2025 – May 2025',
    tech: 'MERN, MongoDB, Real-time Automation',
    desc: 'Automated attendance workflow reducing processing time from 1.5 hours to 10 minutes.',
  },
];

const INTERESTS = [
  'Machine Learning & Deep Learning',
  'Natural Language Processing',
  'Large Language Models',
  'Retrieval-Augmented Generation',
  'Agentic AI & AI Systems',
];

const CERTS_AND_AWARDS = [
  { name: 'Winner — CTD 2026 AI/ML Hackathon', issuer: 'CTAI Foundation, IIT Bombay · Oct 2026' },
  { name: 'Create Your First Gemini Enterprise Application', issuer: 'Google · May 2026' },
  { name: 'Finalist — AI Summit 2026 Buildathon (HCL & GUVI)', issuer: 'HCL / GUVI · Feb 2026' },
  { name: 'Fundamentals of MCP', issuer: 'Hugging Face · Jan 2026' },
  { name: 'SIH 2025 National Finalist', issuer: 'Smart India Hackathon · Dec 2025' },
  { name: 'Top 4 Finalist — CTD 2025 AI/ML Hackathon', issuer: 'CTAI Foundation, IIT Bombay · Oct 2025' },
  { name: 'Generative AI with Diffusion Models', issuer: 'NVIDIA · Sep 2025' },
  { name: 'MongoDB Node.js Associate Developer', issuer: 'MongoDB University · Dec 2024' },
];

const ADDITIONAL_ACHIEVEMENTS = [
  '1st Place — SIH Internal Hackathon 2025, KEC (Sep 2025)',
  '3rd Place — CognitiveX GenAI 24hr Hackathon, IBM Skill Build (Sep 2025)',
  "2nd Place — Ideathon'25 Project Presentation, KEC (Jul 2025)",
  'Best Presentation — BYTS India Hackathon (BIH) 1.0, KEC (Apr 2025)',
  '1st Place — PRODOTHON 2025 Paper Presentation, PSG College (Mar 2025)',
  '1st Place — Hacksphere 2025 (24hr Hackathon), AI Coding Club (Feb 2025)',
  '1st Place — ENVISTAS 2025 Paper Presentation, KEC (Feb 2025)',
  '3rd Place — AUTONIX 2024 Paper Presentation, KEC (Oct 2024)',
  '2nd Place — Academic Excellence Award, Kongu Vellalar Trust (2023)',
];

const Resume = () => {
  useDocumentMetadata({
    title: 'Vijayakanth M | Resume & CV',
    description: 'Resume of Vijayakanth M, final-year AI & ML Engineer at Kongu Engineering College. Winner of CTD 2026 AI/ML Hackathon at IIT Bombay, SIH 2025 National Finalist, and Top-4 Finalist at IIT Bombay CTD 2025.',
    keywords: 'Vijayakanth M Resume, AI ML Engineer Resume, Deep Learning CV, FastMCP, LangGraph, FastAPI, Kongu Engineering College Resume',
  });

  return (
    <div className="resume-page">
      {/* Header */}
      <div className="resume-header">
        <picture>
          <source srcSet="/profile.webp" type="image/webp" />
          <img src="/profile.jpeg" alt="Vijayakanth M" className="resume-photo" width="120" height="120" />
        </picture>
        <div className="resume-header-text">
          <div className="resume-header-top">
            <div>
              <h1>VIJAYAKANTH M</h1>
              <p className="tagline">Final-Year AI &amp; ML Engineer | Deep Learning, RAG &amp; Agentic AI</p>
            </div>
            <a href="/Vijayakanth_resume.pdf" download className="resume-download-btn">
              <FaDownload /> Download PDF
            </a>
          </div>
          <p className="bio">
            Final year AI &amp; ML engineer with internship experience in AI, ML, Data Science and Deep Learning,
            skilled in Python, machine learning, and deploying deep learning models. Proven through internships,
            SIH 2025 Finals, Top-4 finalist at IIT Bombay CTD International Hackathon 2025, and CTD 2026 AI/ML Hackathon Winner at IIT Bombay.
          </p>
          <div className="resume-contact-bar">
            <a href="mailto:vikymahendiran123@gmail.com"><FaEnvelope /> vikymahendiran123@gmail.com</a>
            <a href="tel:+919360177805"><FaPhoneAlt /> +91 93601 77805</a>
            <span><FaMapMarkerAlt /> Erode, Perundurai</span>
            <a href="https://vkportfolio-8a5cb.web.app" target="_blank" rel="noopener noreferrer"><FaGlobe /> vkportfolio-8a5cb.web.app</a>
            <a href="https://www.linkedin.com/in/vijayakanth06" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/vijayakanth06</a>
            <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer"><FaGithub /> github.com/vijayakanth06</a>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        {EDUCATION.map((e, i) => (
          <div className="resume-edu-row" key={i}>
            <div className="resume-edu-main">
              <h4>{e.degree}</h4>
              <p>{e.institution}{e.detail ? ` — ${e.detail}` : ''}</p>
              {e.coursework && <p className="coursework">Coursework: {e.coursework}</p>}
            </div>
            <span className="resume-date-pill">{e.date}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h2 className="resume-section-title">Skills</h2>
        <div className="resume-skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div className="resume-skill-group" key={group.category}>
              <span className="resume-skill-cat">{group.category}</span>
              <div className="resume-tags">
                {group.items.map((s, i) => <span className="resume-tag" key={i}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="resume-section">
        <h2 className="resume-section-title">Experience</h2>
        {EXPERIENCE.map((exp, i) => (
          <div className="resume-exp-item" key={i}>
            <p className="resume-exp-role">{exp.role}</p>
            <p className="resume-exp-company">{exp.company}</p>
            <p className="resume-exp-date">{exp.date}</p>
            <ul className="resume-exp-points">
              {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h2 className="resume-section-title">Projects</h2>
        <div className="resume-projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="resume-mini-card" key={i}>
              <div className="resume-mini-top">
                <p className="resume-mini-title">{p.title}</p>
                <span className="resume-mini-date">{p.date}</span>
              </div>
              <p className="resume-mini-tech">{p.tech}</p>
              <p className="resume-mini-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="resume-section">
        <h2 className="resume-section-title">Areas of Interest</h2>
        <div className="resume-interests">
          {INTERESTS.map((item, i) => <span className="resume-interest-pill" key={i}>{item}</span>)}
        </div>
      </div>

      {/* Certifications & Major Awards */}
      <div className="resume-section">
        <h2 className="resume-section-title">Certifications &amp; Awards</h2>
        {CERTS_AND_AWARDS.map((c, i) => (
          <div className="resume-cert-row" key={i}>
            <span className="resume-cert-name">{c.name}</span>
            <span className="resume-cert-platform">{c.issuer}</span>
          </div>
        ))}
      </div>

      {/* Additional Recognitions */}
      <div className="resume-section">
        <h2 className="resume-section-title">Hackathons &amp; Recognitions</h2>
        <div className="resume-achievements-list">
          {ADDITIONAL_ACHIEVEMENTS.map((a, i) => <p className="resume-ach-item" key={i}>{a}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Resume;
