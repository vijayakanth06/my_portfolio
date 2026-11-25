import React, { memo, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    role: 'AI / Data Science Intern',
    company: 'Twincord Technologies',
    date: 'Jul 2025 – Oct 2025',
    points: [
      'Deployed FastAPI ML inference endpoints; monitored latency and optimized scalability of the AI platform.',
      'Collaborated with senior developers on algorithm implementation, model validation, and troubleshooting.',
    ],
  },
  {
    role: 'Deep Learning Intern',
    company: 'Shinelogics',
    date: 'Mar 2025 – May 2025',
    points: [
      'Trained CNN models (ResNet, EfficientNet, MobileNet) on GPU for real-time product identification; deployed and validated on edge hardware over a 2-week production trial with 98%+ uptime and zero critical failures.',
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

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          // Stagger reveal each item
          const items = el.querySelectorAll('.reveal-left, .reveal-right');
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), 200 + i * 200);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience">
      <p className="terminal-label">EXPERIENCE</p>
      <h2 className="section-title">Where I've Worked</h2>

      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className={`timeline-card ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-date">{exp.date}</p>
              <ul className="timeline-points">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
