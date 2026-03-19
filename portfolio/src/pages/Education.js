import React, { memo } from 'react';
import '../styles/Education.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const ref = useRevealSection();

  return (
    <section className="education-section" id="education" ref={ref}>
      <p className="terminal-label reveal">EDUCATION</p>
      <h2 className="section-title reveal reveal-delay-1">Where I Studied</h2>

      <div className="edu-list">
        <div className="edu-card reveal reveal-delay-2">
          <div className="edu-icon-wrap"><FaGraduationCap /></div>
          <div className="edu-info">
            <h3 className="edu-title">B.Tech — Artificial Intelligence and Machine Learning</h3>
            <p className="edu-subtitle">Kongu Engineering College, Erode</p>
            <p className="edu-meta">Expected 2027 · CGPA: 8.62*</p>
            <p className="edu-coursework">Python, JAVA, C, JavaScript, Machine Learning, Deep Learning</p>
          </div>
        </div>

        <div className="edu-card reveal reveal-delay-3">
          <div className="edu-icon-wrap"><FaSchool /></div>
          <div className="edu-info">
            <h3 className="edu-title">HSC in Computer Science</h3>
            <p className="edu-subtitle">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai</p>
            <p className="edu-meta">2022 – 2023 · 94%</p>
          </div>
        </div>

        <div className="edu-card reveal reveal-delay-4">
          <div className="edu-icon-wrap"><FaSchool /></div>
          <div className="edu-info">
            <h3 className="edu-title">SSLC</h3>
            <p className="edu-subtitle">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai</p>
            <p className="edu-meta">2020 – 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Education);
