import React, { memo, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    role: 'Full Stack Intern',
    company: 'ZEONE',
    date: 'Nov 2024 – Jan 2025',
    points: [
      'Gained practical knowledge in Full Stack development.',
      'Worked on back-end development using Node.js for an AI Interview Chatbot.',
    ],
  },
  {
    role: 'Deep Learning Intern',
    company: 'SHINELOGICS',
    date: 'Mar 2025 – May 2025',
    points: [
      'Gained practical knowledge in Deep Learning models.',
      'Worked on real-time projects including prediction of fruits and vegetables.',
    ],
  },
  {
    role: 'Software Intern',
    company: 'TWINCORD TECHNOLOGIES',
    date: 'Jul 2025 – Oct 2025',
    points: [
      'Completed assigned tasks and modules as per mentor guidance.',
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
