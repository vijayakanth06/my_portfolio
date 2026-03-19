import React, { memo } from 'react';
import '../styles/Skills.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import {
  SiC, SiPython, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub, SiMysql, SiMongodb, SiReact,
  SiNodedotjs, SiExpress
} from 'react-icons/si';
import { FaLanguage, FaUsers, FaComments, FaLightbulb, FaJava } from 'react-icons/fa';

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
  { name: 'Express.js', icon: <SiExpress style={{ color: '#000' }} /> },
  { name: 'Machine Learning', icon: <FaLightbulb style={{ color: '#FA5D19' }} /> },
];
const tools = [
  { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <SiGithub style={{ color: '#6e5494' }} /> },
];
const softSkills = [
  { name: 'Communication', icon: <FaComments /> },
  { name: 'Teamwork', icon: <FaUsers /> },
  { name: 'Problem-solving', icon: <FaLightbulb /> },
];
const languages = [
  { name: 'English', icon: <FaLanguage /> },
  { name: 'Tamil', icon: <FaLanguage /> },
];

const Skills = () => {
  const ref = useRevealSection();

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <p className="terminal-label reveal">SKILLS</p>
      <h2 className="section-title reveal reveal-delay-1">What I Work With</h2>

      <div className="skills-grid">
        {[
          { title: 'Technical Skills', items: technicalSkills },
          { title: 'Tools', items: tools },
          { title: 'Soft Skills', items: softSkills },
          { title: 'Languages', items: languages },
        ].map(({ title, items }, catIdx) => (
          <div className={`skill-card reveal reveal-delay-${catIdx + 2}`} key={title}>
            <h3 className="skill-card-title">{title}</h3>
            <div className="skill-pills">
              {items.map((item, i) => (
                <span className="skill-pill" key={i}>
                  <span className="icon">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Skills);
