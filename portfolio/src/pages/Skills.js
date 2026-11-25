import React, { memo } from 'react';
import '../styles/Skills.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import {
  SiPython, SiJavascript, SiTensorflow, SiPytorch, SiOpencv,
  SiScikitlearn, SiOnnx, SiPandas, SiNumpy, SiFlask, SiFastapi,
  SiNodedotjs, SiExpress, SiReact, SiMongodb, SiMysql, SiPostgresql,
  SiSqlite, SiDocker, SiFirebase, SiRender, SiRailway, SiGit,
  SiGithub, SiSupabase, SiRedis, SiLangchain
} from 'react-icons/si';
import {
  FaJava, FaDatabase, FaBrain, FaRobot, FaChartBar,
  FaProjectDiagram, FaServer, FaCode, FaUsers, FaComments,
  FaLightbulb, FaCogs, FaSearch
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
      { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
      { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: 'SQL', icon: <FaDatabase style={{ color: '#336791' }} /> },
    ],
  },
  {
    title: 'AI / ML & Deep Learning',
    items: [
      { name: 'Machine Learning', icon: <FaBrain style={{ color: '#FA5D19' }} /> },
      { name: 'Deep Learning', icon: <FaProjectDiagram style={{ color: '#FA5D19' }} /> },
      { name: 'Computer Vision', icon: <FaSearch style={{ color: '#0EA5E9' }} /> },
      { name: 'NLP', icon: <FaComments style={{ color: '#8B5CF6' }} /> },
      { name: 'LLMs', icon: <FaRobot style={{ color: '#10B981' }} /> },
      { name: 'RAG', icon: <FaDatabase style={{ color: '#F59E0B' }} /> },
      { name: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} /> },
      { name: 'PyTorch', icon: <SiPytorch style={{ color: '#EE4C2C' }} /> },
      { name: 'OpenCV', icon: <SiOpencv style={{ color: '#5C3EE8' }} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn style={{ color: '#F7931E' }} /> },
      { name: 'ONNX', icon: <SiOnnx style={{ color: '#005CED' }} /> },
    ],
  },
  {
    title: 'Data & Statistics',
    items: [
      { name: 'Pandas', icon: <SiPandas style={{ color: '#150458' }} /> },
      { name: 'NumPy', icon: <SiNumpy style={{ color: '#013243' }} /> },
      { name: 'Matplotlib', icon: <FaChartBar style={{ color: '#11557C' }} /> },
      { name: 'Seaborn', icon: <FaChartBar style={{ color: '#4C72B0' }} /> },
      { name: 'Feature Engineering', icon: <FaCogs style={{ color: '#FA5D19' }} /> },
      { name: 'Statistical Analysis', icon: <FaChartBar style={{ color: '#059669' }} /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'FastAPI', icon: <SiFastapi style={{ color: '#009688' }} /> },
      { name: 'Flask', icon: <SiFlask style={{ color: '#000000' }} /> },
      { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
      { name: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} /> },
      { name: 'React.js', icon: <SiReact style={{ color: '#61DAFB' }} /> },
      { name: 'FastMCP', icon: <FaServer style={{ color: '#FA5D19' }} /> },
      { name: 'LangGraph', icon: <SiLangchain style={{ color: '#1C3C3C' }} /> },
    ],
  },
  {
    title: 'Databases & Vector Stores',
    items: [
      { name: 'MongoDB (Certified)', icon: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
      { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
      { name: 'SQLite', icon: <SiSqlite style={{ color: '#003B57' }} /> },
      { name: 'ChromaDB', icon: <FaDatabase style={{ color: '#FA5D19' }} /> },
      { name: 'Supabase', icon: <SiSupabase style={{ color: '#3ECF8E' }} /> },
      { name: 'Redis', icon: <SiRedis style={{ color: '#DC382D' }} /> },
    ],
  },
  {
    title: 'Tools, Platforms & Soft Skills',
    items: [
      { name: 'Docker', icon: <SiDocker style={{ color: '#2496ED' }} /> },
      { name: 'REST APIs', icon: <FaCode style={{ color: '#FA5D19' }} /> },
      { name: 'Render', icon: <SiRender style={{ color: '#46E3B7' }} /> },
      { name: 'Railway', icon: <SiRailway style={{ color: '#0B0D0E' }} /> },
      { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
      { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
      { name: 'GitHub', icon: <SiGithub style={{ color: '#6e5494' }} /> },
      { name: 'Problem-Solving', icon: <FaLightbulb style={{ color: '#F59E0B' }} /> },
      { name: 'Teamwork', icon: <FaUsers style={{ color: '#3B82F6' }} /> },
      { name: 'Communication', icon: <FaComments style={{ color: '#10B981' }} /> },
      { name: 'Agile Collaboration', icon: <FaCogs style={{ color: '#6366F1' }} /> },
    ],
  },
];

const areasOfInterest = [
  'Machine Learning & Deep Learning',
  'Natural Language Processing',
  'Large Language Models',
  'Retrieval-Augmented Generation',
  'Agentic AI & AI Systems',
];

const Skills = () => {
  const ref = useRevealSection();

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <p className="terminal-label reveal">SKILLS</p>
      <h2 className="section-title reveal reveal-delay-1">What I Work With</h2>

      <div className="skills-grid">
        {skillCategories.map(({ title, items }, catIdx) => (
          <div className={`skill-card reveal reveal-delay-${Math.min(catIdx + 2, 6)}`} key={title}>
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

      <div className="interests-strip reveal reveal-delay-6">
        <h3 className="skill-card-title">Areas of Interest</h3>
        <div className="skill-pills">
          {areasOfInterest.map((interest) => (
            <span className="interest-pill" key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
