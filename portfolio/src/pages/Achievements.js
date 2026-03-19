import React, { memo, useState, useEffect, useRef } from 'react';
import '../styles/Achievements.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AUTO_PLAY_MS = 5000;
const AUTO_RESUME_DELAY_MS = 10000;

const achievements = [
  {
    title: "2nd Place",
    date: "2023",
    description: "Academic Excellence Award — Kongu Vellalar Trust"
  },
  {
    title: "1st Place",
    date: "Feb 2025",
    description: "Hacksphere 2025 (24hr Hackathon) — AI Coding Club"
  },
  {
    title: "3rd Place",
    date: "Oct 2024",
    description: "AUTONIX 2024 Paper Presentation (KEC College)"
  },
  {
    title: "1st Place",
    date: "Mar 2025",
    description: "PRODOTHON 2025 Paper Presentation (PSG College)"
  },
  {
    title: "1st Place",
    date: "Feb 2025",
    description: "ENVISTAS 2025 Paper Presentation (KEC College)"
  },
  {
    title: "Best Presentation & Best Team Collaboration",
    date: "Apr 2025",
    description: "BYTS INDIA HACKATHON (BIH) 1.0 — Artificial Intelligence (KEC College)"
  },
  {
    title: "3rd Place",
    date: "Sep 2025",
    description: "CognitiveX GenAI 24hr Hackathon — IBM Skill Build"
  },
  {
    title: "2nd Place",
    date: "Jul 2025",
    description: "Ideathon'25 Project Presentation — KEC College"
  },
  {
    title: "1st Place",
    date: "Sep 2025",
    description: "SIH Internal Hackathon 2025 (KEC College)"
  },
  {
    title: "Top 4 Finalist",
    date: "Oct 2025",
    description: "CTAI — CTD International Level Hackathon at IIT Bombay (out of 80 teams)"
  }
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const autoResumeTimeoutRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }, AUTO_PLAY_MS);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(autoResumeTimeoutRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    resetAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    clearTimeout(autoResumeTimeoutRef.current);
    autoResumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, AUTO_RESUME_DELAY_MS);
  };

  return (
    <section
      className={`achievements-carousel ${isAutoPlaying ? 'autoplaying' : 'paused'}`}
      id="achievements"
      style={{ '--indicator-duration': `${AUTO_PLAY_MS}ms` }}
    >
      <h2 className="carousel-title">ACHIEVEMENTS</h2>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous achievement">
          <FaChevronLeft />
        </button>

        <div className="carousel-track">
          {achievements.map((achievement, index) => (
            <div
              key={`achievement-${index}`}
              className={`carousel-slide ${
                index === currentIndex ? 'active' :
                index === (currentIndex - 1 + achievements.length) % achievements.length ? 'prev' :
                index === (currentIndex + 1) % achievements.length ? 'next' : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <div className="achievement-card">
                <h3 className="achievement-title">{achievement.title}</h3>
                <span className="achievement-date">{achievement.date}</span>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide} aria-label="Next achievement">
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {achievements.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to achievement ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Achievements);