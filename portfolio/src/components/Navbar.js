import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'achievements', 'projects', 'contact'];
      const pos = window.scrollY + 150;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id, e) => {
    e?.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id, timestamp: Date.now() } });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo" onClick={goHome}>
        VIJAYAKANTH<span className="logo-dot">.M</span>
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {[
          { id: 'about', label: 'About' },
          { id: 'skills', label: 'Skills' },
          { id: 'experience', label: 'Experience' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' },
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${activeSection === id ? 'active' : ''}`}
            onClick={(e) => scrollTo(id, e)}
          >
            {label}
          </a>
        ))}
        <Link
          to="/resume"
          className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </Link>
        <a href="Vijayakanth_resume.pdf" download className="nav-cta">
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Navbar;