import React, { useState, useEffect, useRef } from 'react';
import '../styles/Achievements.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    
    {
      title: "2nd Place",
      date: "2023",
      description: "Academic Excellence Award - Kongu Vellalar Trust"
    },
    {
      title: "1st Place",
      date: "2025",
      description: "Hacksphere 2025 (24hr Hackathon) - AI Coding Club"
    },
    {
      title: "3rd Place",
      date: "2024",
      description: "AUTONIX 2024 Paper Presentation (KEC College)"
    },
    {
      title: "1st Place",
      date: "2025",
      description: "PRODOTHON 2025 Paper Presentation (PSG College)"
    },
    {
      title: "1st Place",
      date: "2025",
      description: "ENVISTAS 2025 Paper Presentation (KEC College)"
    },
     {
      title: "5th Place",
      date: "2025",
      description: "Awarded Best Presentation and Best Team Collaboration in BYTS INDIA HACKATHON (BIH) 1.0- Artificial Intelligence (KEC college)."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % achievements.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, achievements.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % achievements.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + achievements.length) % achievements.length);
    resetAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  return (
    <section className="achievements-carousel" id="achievements">
      <h2 className="carousel-title">ACHIEVEMENTS</h2>
      
      <div className="carousel-container" ref={carouselRef}>
        <button 
          className="carousel-button prev" 
          onClick={prevSlide}
          aria-label="Previous achievement"
        >
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
                <p className="achievement-date">{achievement.date}</p>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.details && (
                  <details className="achievement-details">
                    <summary>More Details</summary>
                    <p>{achievement.details}</p>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={nextSlide}
          aria-label="Next achievement"
        >
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

export default Achievements;