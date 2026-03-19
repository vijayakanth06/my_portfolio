import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import '../styles/homestyles.css';
import { LikeContext } from './LikeContext';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaThumbsUp, FaThumbsDown, FaArrowUp } from 'react-icons/fa';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Achievements from './Achievements';

const TYPING_ROLES = [
  'Engineering Student',
  'Hackathon Winner',
  'MERN Stack Developer',
  'LeetCode 100+ Solved',
  'LLM Enthusiast',
  'AI Project Builder'
];

const HOME = () => {
  const { likes, dislikes, userVote, handleLike, handleDislike } = useContext(LikeContext);
  const homeRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  // Typing animation
  useEffect(() => {
    const tick = () => {
      const current = TYPING_ROLES[roleIndex.current];
      if (!isDeleting.current) {
        setTypedText(current.substring(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          isDeleting.current = true;
          return setTimeout(tick, 1800);
        }
      } else {
        setTypedText(current.substring(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % TYPING_ROLES.length;
        }
      }
      setTimeout(tick, isDeleting.current ? 40 : 80);
    };
    const timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowScrollButton((prev) => (prev === shouldShow ? prev : shouldShow));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-app" ref={homeRef}>
      <section className="home-section" id="home">
        <div className="home-content">
          <h1>Hi, It's <span className="home-name-span">Vijayakanth M</span></h1>
          <h3 className="home-typing-text">I'm a <span className="home-typing-span">{typedText}</span></h3>
          <p className="home-description">
            An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
            to gain valuable experience and contribute significantly to demanding and creative environments.
          </p>

          <div className="home-social-icons">
            <a href="https://www.linkedin.com/in/vijayakanth-m-7b7767312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="icon" />
            </a>
            <a href="https://leetcode.com/u/Vijayakanth06/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <FaCode className="icon" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com" aria-label="Email">
              <FaEnvelope className="icon" />
            </a>
          </div>

          <div className="home-navigation-buttons">
            <a href="Vijayakanth_resume.pdf" download="Vijayakanth_resume.pdf" className="home-btn">
              Download Resume
            </a>
          </div>

          <div className="vote-section">
            <button onClick={handleLike} className={`vote-btn like-btn ${userVote === 'like' ? 'active' : ''}`} aria-label="Like">
              <FaThumbsUp className="icon" /> {likes}
            </button>
            <button onClick={handleDislike} className={`vote-btn dislike-btn ${userVote === 'dislike' ? 'active' : ''}`} aria-label="Dislike">
              <FaThumbsDown className="icon" /> {dislikes}
            </button>
          </div>
        </div>

        <div className="home-img-container">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            <img
              src="/profile.jpg"
              alt="Vijayakanth M profile"
              className="home-profile-img"
              width="480"
              height="608"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      <Skills id="skills" />
      <Education id="education" />
      <Achievements id="achievements" />
      <Projects id="projects" />
      <Contact id="contact" />

      <footer className="footer">
        © 2025 Vijayakanth M. Built with React.
      </footer>

      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default HOME;