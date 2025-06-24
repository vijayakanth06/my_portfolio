import React from 'react';
import '../styles/Education.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">EDUCATION</h2>
      
      <div className="education-container">
        <div className="education-item">
          <div className="education-icon-container">
            <FaGraduationCap className="education-icon" />
          </div>
          <div className="education-details">
            <h3 className="education-title">B.Tech - Artificial Intelligence and Machine Learning</h3>
            <p className="education-institution">Kongu Engineering College, Erode</p>
            <p className="education-duration">Expected 2027 | CGPA: 8.72*</p>
            <p className="education-coursework">Coursework: Python, JAVA, C, and JavaScript</p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-icon-container">
            <FaSchool className="education-icon" />
          </div>
          <div className="education-details">
            <h3 className="education-title">HSC in Computer Science</h3>
            <p className="education-institution">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai</p>
            <p className="education-duration">2022 - 2023 | Percentage: 94%</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-icon-container">
            <FaSchool className="education-icon" />
          </div>
          <div className="education-details">
            <h3 className="education-title">SSLC</h3>
            <p className="education-institution">Kongu Vellalar Matriculation Hr. Sec. School, Perundurai</p>
            <p className="education-duration">2020 - 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
