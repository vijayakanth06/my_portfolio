import React, { useContext, useEffect, useRef } from 'react';
import '../styles/homestyles.css';
import { LikeContext } from './LikeContext';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaThumbsUp, FaThumbsDown, FaArrowUp } from 'react-icons/fa';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Achievements from './Achievements';

const HOME = () => {
  const { likes, dislikes, userVote, handleLike, handleDislike } = useContext(LikeContext);
  const homeRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-app" ref={homeRef}>
      <section className="home-section" id="home">
        <div className="home-img-container">
          <img src="profile.jpg" alt="img" className="home-profile-img"/>
        </div>
        <div className="home-content">
          <h1>Hi, It's <span className="home-name-span">Vijayakanth M</span></h1>
          <h3 className="home-typing-text">I'm a <span className="home-typing-span"></span></h3>
          <p className="home-description">
            An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
            to gain valuable experience and contribute significantly to demanding and creative environments.
          </p>
          
          <div className="home-social-icons">
            <a href="https://www.linkedin.com/in/vijayakanth-m-7b7767312" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/vijayakanth06" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://leetcode.com/u/Vijayakanth06/" target="_blank" rel="noopener noreferrer">
              <FaCode className="icon" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
          
          <div className="home-navigation-buttons">
            <a 
              href="vijayakanthm_resume_june25.pdf" 
              download="vijayakanthm_resume_june25.pdf" 
              className="home-btn"
            >
              Download Resume
            </a>
          </div>
          
          <div className="vote-section">
            <button 
              onClick={handleLike} 
              className={`vote-btn like-btn ${userVote === 'like' ? 'active' : ''}`}
              aria-label="Like"
            >
              <FaThumbsUp className="icon" /> {likes}
            </button>
            <button 
              onClick={handleDislike} 
              className={`vote-btn dislike-btn ${userVote === 'dislike' ? 'active' : ''}`}
              aria-label="Dislike"
            >
              <FaThumbsDown className="icon" /> {dislikes}
            </button>
          </div>
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
        <button 
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default HOME;