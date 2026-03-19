import React from 'react';
import '../styles/resumestyles.css';

const EDUCATION = [
  { degree: 'B.Tech — Artificial Intelligence and Machine Learning', institution: 'Kongu Engineering College, Erode', detail: 'CGPA: 8.62*', date: 'Expected 2027', coursework: 'Python, JAVA, C, JavaScript, Machine Learning, Deep Learning' },
  { degree: 'HSC in Computer Science', institution: 'Kongu Vellalar Matric. Hr. Sec. School, Perundurai', detail: '94%', date: '2022 – 2023' },
  { degree: 'SSLC', institution: 'Kongu Vellalar Matric. Hr. Sec. School, Perundurai', detail: '', date: '2020 – 2021' },
];

const SKILLS = ['C','Python','Java','HTML','CSS','JavaScript','React.js','Node.js','MySQL','MongoDB','Express.js','Machine Learning','Git','GitHub'];

const EXPERIENCE = [
  { role: 'Full Stack Intern', company: 'ZEONE', date: 'Nov 2024 – Jan 2025', points: ['Gained practical knowledge in Full Stack development.','Worked on back-end using Node.js for AI Interview Chatbot.'] },
  { role: 'Deep Learning Intern', company: 'SHINELOGICS', date: 'Mar 2025 – May 2025', points: ['Gained practical knowledge in Deep Learning models.','Real-time prediction of fruits and vegetables.'] },
  { role: 'Software Intern', company: 'TWINCORD TECHNOLOGIES', date: 'Jul 2025 – Oct 2025', points: ['Completed assigned tasks and modules as per mentor guidance.'] },
];

const PROJECTS = [
  { title: 'Refined CAPTCHA', desc: 'ML-based bot detection analyzing user behavior patterns.' },
  { title: 'Classify Songs by Genre', desc: 'Audio features → genre classification with 85%+ acc.' },
  { title: 'Feedback Collection System', desc: 'Java Spring Boot student feedback platform.' },
  { title: 'Farm2Bag Chatbot', desc: 'Dynamic NLP chatbot using website data.' },
  { title: 'Attendance Automation', desc: 'MERN stack: 1.5h → 10min attendance process.' },
  { title: 'Fruit & Veg Identifier', desc: 'Flask + Groq LLM real-time recognition.' },
  { title: 'AI Math Tutor', desc: 'Personalized math chatbot with equation viz.' },
  { title: 'DCGRAM', desc: 'Instagram-clone social platform, MERN.' },
  { title: 'Code Vulnerability Detector', desc: 'AI-powered code security scanner.' },
  { title: 'Stock Portfolio Manager', desc: 'AI investment insights + chart generation.' },
  { title: 'ProTube', desc: 'Distraction-free learning video platform.' },
  { title: 'ClauseWise', desc: 'AI legal document analyzer (IBM Granite).' },
  { title: 'Fabric Defect Detection', desc: 'CNN real-time defect detection via webcam.' },
  { title: 'Material Detection', desc: 'Construction material + quantity prediction (85%).' },
];

const INTERESTS = ['Artificial Intelligence','Machine Learning','Full Stack Development','Competitive Programming','Open Source','Hackathons'];

const CERTS = [
  { name: 'Joy of Computing using Python', platform: 'NPTEL' },
  { name: 'The Bits and Bytes of Computer Networking', platform: 'Google — Coursera' },
  { name: 'Cloud Computing 101', platform: 'LinkedIn Learning' },
];

const ACHIEVEMENTS = [
  '2nd Place — Academic Excellence Award, Kongu Vellalar Trust (2023)',
  '1st Place — Hacksphere 2025, AI Coding Club (Feb 2025)',
  '3rd Place — AUTONIX 2024, KEC (Oct 2024)',
  '1st Place — PRODOTHON 2025, PSG College (Mar 2025)',
  '1st Place — ENVISTAS 2025, KEC (Feb 2025)',
  'Best Presentation — BIH 1.0, KEC (Apr 2025)',
  '3rd Place — CognitiveX GenAI Hackathon, IBM (Sep 2025)',
  "2nd Place — Ideathon'25, KEC (Jul 2025)",
  '1st Place — SIH Internal Hackathon 2025, KEC (Sep 2025)',
  'Top 4 Finalist — CTAI @ IIT Bombay (Oct 2025)',
];

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Header */}
      <div className="resume-header">
        <picture>
          <source srcSet="/profile.webp" type="image/webp" />
          <img src="/profile.jpeg" alt="Vijayakanth M" className="resume-photo" width="120" height="120" />
        </picture>
        <div className="resume-header-text">
          <h1>VIJAYAKANTH M</h1>
          <p className="tagline">Aspiring AI &amp; ML Engineer | Web Developer | Innovator</p>
          <p className="bio">
            An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
            to gain valuable experience and contribute significantly in demanding and creative environments.
          </p>
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
        <div className="resume-tags">
          {SKILLS.map((s, i) => <span className="resume-tag" key={i}>{s}</span>)}
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
              <p className="resume-mini-title">{p.title}</p>
              <p className="resume-mini-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="resume-section">
        <h2 className="resume-section-title">Areas of Interest</h2>
        <div className="resume-interests">
          {INTERESTS.map((item, i) => <span className="resume-interest-pill" key={i}>{item}</span>)}
        </div>
      </div>

      {/* Certifications */}
      <div className="resume-section">
        <h2 className="resume-section-title">Certifications</h2>
        {CERTS.map((c, i) => (
          <div className="resume-cert-row" key={i}>
            <span className="resume-cert-name">{c.name}</span>
            <span className="resume-cert-platform">{c.platform}</span>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="resume-section">
        <h2 className="resume-section-title">Achievements</h2>
        <div className="resume-achievements-list">
          {ACHIEVEMENTS.map((a, i) => <p className="resume-ach-item" key={i}>{a}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Resume;
