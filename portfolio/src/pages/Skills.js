import React from 'react';
import '../styles/Skills.css';
import { 
  SiC, 
  SiPython, 
  SiJavascript,
  SiHtml5, 
  SiCss3,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiBlender
} from 'react-icons/si';
import { 
  FaJava,
  FaLanguage,
  FaUsers,
  FaComments,
  FaLightbulb
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">SKILLS</h2>
      
      <div className="skills-container">
        <div className="skills-category">
          <h3 className="skills-subheading">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <SiC className="skill-icon" style={{ color: '#A8B9CC' }} />
              <span>C</span>
            </div>
            <div className="skill-item">
              <SiPython className="skill-icon" style={{ color: '#3776AB' }} />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <FaJava className="skill-icon" style={{ color: '#007396' }} />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <SiHtml5 className="skill-icon" style={{ color: '#E34F26' }} />
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <SiCss3 className="skill-icon" style={{ color: '#1572B6' }} />
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <SiJavascript className="skill-icon" style={{ color: '#F7DF1E' }} />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Tools</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <SiGit className="skill-icon" style={{ color: '#F05032' }} />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <SiGithub className="skill-icon" style={{ color: '#6e5494' }} />
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <SiMysql className="skill-icon" style={{ color: '#4479A1' }} />
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <SiBlender className="skill-icon" style={{ color: '#F5792A' }} />
              <span>Blender</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Soft Skills</h3>
          <div className="soft-skills-list">
            <div className="soft-skill-item">
              <FaComments className="soft-skill-icon" />
              <span>Communication</span>
            </div>
            <div className="soft-skill-item">
              <FaUsers className="soft-skill-icon" />
              <span>Teamwork</span>
            </div>
            <div className="soft-skill-item">
              <FaLightbulb className="soft-skill-icon" />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Languages</h3>
          <div className="language-list">
            <div className="language-item">
              <FaLanguage className="language-icon" />
              <span>English</span>
            </div>
            <div className="language-item">
              <FaLanguage className="language-icon" />
              <span>Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;