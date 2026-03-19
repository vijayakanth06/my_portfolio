import React, { useState, useEffect, memo } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'HERO' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

const counterStyle = {
  position: 'fixed',
  left: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 80,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '11px',
  letterSpacing: '0.08em',
  color: '#999',
  userSelect: 'none',
};

const labelStyle = {
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.12em',
  marginTop: '2px',
};

const SectionCounter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = 0;

      SECTIONS.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const section = SECTIONS[activeIndex];

  return (
    <div style={counterStyle} aria-hidden="true">
      <span style={{ color: activeIndex > 0 ? '#FA5D19' : '#999', fontWeight: 600 }}>
        [ {String(activeIndex + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')} ]
      </span>
      <span style={{ ...labelStyle, color: activeIndex > 0 ? '#FA5D19' : '#bbb' }}>
        . {section.label}
      </span>
    </div>
  );
};

export default memo(SectionCounter);
