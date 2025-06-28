import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'achievements', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
    window.history.replaceState({}, '', '/');
  };

 const handleNavClick = (path) => {
  setIsMenuOpen(false);
  setActiveSection('home');

  if (location.pathname !== path) {
    navigate(path, { state: { scrollToTop: true } });
  } else {
    scrollToTop();
    window.location.reload();
  }
};

  const handleSectionClick = (id, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(id);
    
    setTimeout(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false, state: { scrollTo: id, timestamp: Date.now() } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, '', `#${id}`);
    }
  }, 350); 
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  const isActiveSection = (sectionId) => {
    return activeSection === sectionId || window.location.hash === `#${sectionId}`;
  };

  return (
    <header className="navbar">
      <Link 
  to="/" 
  className={`logo ${isActivePage('/') && !window.location.hash ? 'active' : ''}`}
  onClick={(e) => {
    e.preventDefault();
    handleNavClick('/');
  }}
>
  VIJAYAKANTH
</Link>
      
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </button>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link 
  to="/" 
  className={`nav-link ${isActivePage('/') && !window.location.hash ? 'active' : ''}`}
  onClick={(e) => {
    e.preventDefault();
    handleNavClick('/');
  }}
>
  Home
</Link>
        <Link 
          to="/resume" 
          className={`nav-link ${isActivePage('/resume') ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/resume');
          }}
        >
          Resume
        </Link>
        <a 
          href="#skills" 
          className={`nav-link ${isActiveSection('skills') ? 'active' : ''}`}
          onClick={(e) => handleSectionClick('skills', e)}
        >
          Skills
        </a>
        <a 
          href="#education" 
          className={`nav-link ${isActiveSection('education') ? 'active' : ''}`}
          onClick={(e) => handleSectionClick('education', e)}
        >
          Education
        </a>
        <a 
          href="#achievements" 
          className={`nav-link ${isActiveSection('achievements') ? 'active' : ''}`}
          onClick={(e) => handleSectionClick('achievements', e)}
        >
          Achievements
        </a>
        <a 
          href="#projects" 
          className={`nav-link ${isActiveSection('projects') ? 'active' : ''}`}
          onClick={(e) => handleSectionClick('projects', e)}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${isActiveSection('contact') ? 'active' : ''}`}
          onClick={(e) => handleSectionClick('contact', e)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;