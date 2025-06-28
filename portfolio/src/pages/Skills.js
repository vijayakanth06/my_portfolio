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
  SiBlender,
  SiReact,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import {
  FaLanguage,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaJava
} from 'react-icons/fa';

const technicalSkills = [
  { name: 'C', icon: <SiC style={{ color: '#A8B9CC' }} /> },
  { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
  { name: 'HTML', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
  { name: 'CSS', icon: <SiCss3 style={{ color: '#1572B6' }} /> },
  { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
  { name: 'React.js', icon: <SiReact style={{ color: '#61DAFB' }} /> },
  { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
  { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
  { name: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} /> }
];

const tools = [
  { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <SiGithub style={{ color: '#6e5494' }} /> },
  { name: 'Blender', icon: <SiBlender style={{ color: '#F5792A' }} /> }
];

const softSkills = [
  { name: 'Communication', icon: <FaComments /> },
  { name: 'Teamwork', icon: <FaUsers /> },
  { name: 'Problem-solving', icon: <FaLightbulb /> }
];

const languages = [
  { name: 'English', icon: <FaLanguage /> },
  { name: 'Tamil', icon: <FaLanguage /> }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-container">
        <div className="skills-category">
          <h3 className="skills-subheading">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Tools</h3>
          <div className="skills-grid">
            {tools.map((tool, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{tool.icon}</div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Soft Skills</h3>
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <div className="soft-skill-item" key={index}>
                <div className="soft-skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subheading">Languages</h3>
          <div className="language-list">
            {languages.map((lang, index) => (
              <div className="language-item" key={index}>
                <div className="language-icon">{lang.icon}</div>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
