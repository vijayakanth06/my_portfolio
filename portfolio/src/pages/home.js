import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import '../styles/homestyles.css';
import { LikeContext } from './LikeContext';
import { useRevealSection } from '../hooks/useScrollReveal';
import DotGridCanvas from '../components/DotGridCanvas';
import SectionCounter from '../components/SectionCounter';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaThumbsUp, FaThumbsDown, FaArrowUp, FaChevronDown } from 'react-icons/fa';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Achievements from './Achievements';
import Experience from './Experience';

const TYPING_ROLES = [
  'Engineering Student',
  'Hackathon Winner',
  'MERN Stack Developer',
  'LeetCode 100+ Solved',
  'LLM Enthusiast',
  'AI Project Builder',
];

const HOME = () => {
  const { likes, dislikes, userVote, handleLike, handleDislike } = useContext(LikeContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [heroReady, setHeroReady] = useState(false);
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const aboutRef = useRevealSection();

  // Hero reveal delay
  useEffect(() => { setTimeout(() => setHeroReady(true), 200); }, []);

  // Typing animation
  useEffect(() => {
    const tick = () => {
      const current = TYPING_ROLES[roleIdx.current];
      if (!deleting.current) {
        setTypedText(current.substring(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          return setTimeout(tick, 1800);
        }
      } else {
        setTypedText(current.substring(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % TYPING_ROLES.length;
        }
      }
      setTimeout(tick, deleting.current ? 35 : 70);
    };
    const t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
  const scrollToAbout = useCallback(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), []);

  // Hero letter animation
  const renderName = (text, delay = 0) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="hero-letter"
        style={{ animationDelay: `${delay + i * 0.04}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <div className="home-app">
      <DotGridCanvas />
      <SectionCounter />

      {/* ASCII decorations */}
      <div className="ascii-block ascii-block--left" aria-hidden="true">
        {`--=+XXX+=-\n=++X:X:++=\n+X -XXXXX+\nXXX:XXXXXXX\nXXXXXXXXXXX`}
      </div>
      <div className="ascii-block ascii-block--right" aria-hidden="true">
        {`-=-XXX+=-\n=XX:X:++=+\n+X -XXXXX++\nXXX:XXXXXXXXX\nXXXXXXXXXXXXX`}
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <p className={`hero-label ${heroReady ? '' : 'reveal'} ${heroReady ? '' : ''}`}>
          <span>{"//"}</span> HELLO WORLD <span>{"//"}</span>
        </p>

        <h1 className="hero-name" style={{ opacity: heroReady ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {heroReady && renderName('VIJAYAKANTH', 0.3)}
          {heroReady && <> </>}
          {heroReady && <span className="heat">{renderName('M', 0.8)}</span>}
        </h1>

        <p className="hero-typing">
          I'm a <span className="cursor">{typedText}</span>
        </p>

        <p className="hero-tagline">
          Engineering student building real-world AI &amp; MERN projects.
          Multiple hackathon winner. Driven by impact.
        </p>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/vijayakanth-m-7b7767312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://leetcode.com/u/Vijayakanth06/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><FaCode /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>

        <div className="hero-actions">
          <button onClick={scrollToAbout} className="hero-btn-primary">
            Explore My Work <FaChevronDown style={{ fontSize: 12 }} />
          </button>
          <a href="Vijayakanth_resume.pdf" download className="hero-btn-ghost">
            Download CV
          </a>
        </div>

        <div className="scroll-indicator" onClick={scrollToAbout}>
          <span>scroll</span>
          <FaChevronDown className="chevron" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about" ref={aboutRef}>
        <p className="terminal-label reveal">ABOUT</p>
        <h2 className="section-title reveal reveal-delay-1">Who I Am</h2>

        <div className="about-grid">
          <div className="about-photo-wrap reveal reveal-delay-2">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img src="/profile.jpeg" alt="Vijayakanth M" className="about-photo" width="160" height="160" />
            </picture>
          </div>

          <div className="about-text">
            <p className="reveal reveal-delay-3">
              I'm <strong>Vijayakanth M</strong>, a B.Tech AI &amp; ML student at Kongu Engineering College (CGPA 8.62*).
              I specialize in building full-stack web applications and AI-powered solutions that solve real problems.
            </p>
            <p className="reveal reveal-delay-4">
              With 14 projects, 3 internships, and 10 hackathon wins under my belt,
              I thrive in fast-paced, creative environments where I can push the boundaries of what's possible
              with code.
            </p>

            <div className="about-stats reveal reveal-delay-5">
              <div className="stat-item">
                <div className="stat-number">14</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10</div>
                <div className="stat-label">Awards</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">LeetCode</div>
              </div>
            </div>

            <div className="vote-row reveal reveal-delay-6">
              <button onClick={handleLike} className={`vote-btn ${userVote === 'like' ? 'active' : ''}`}>
                <FaThumbsUp /> {likes}
              </button>
              <button onClick={handleDislike} className={`vote-btn ${userVote === 'dislike' ? 'active' : ''}`}>
                <FaThumbsDown /> {dislikes}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Projects />
      <Contact />

      <footer className="footer">
        © 2025 <a href="https://github.com/vijayakanth06">Vijayakanth M</a>. Built with React.
      </footer>

      <button
        onClick={scrollToTop}
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default HOME;