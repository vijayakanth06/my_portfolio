import React, { memo } from 'react';
import '../styles/Achievements.css';
import { useRevealSection } from '../hooks/useScrollReveal';

const achievements = [
  { rank: '2nd Place', event: 'Academic Excellence Award — Kongu Vellalar Trust', date: '2023' },
  { rank: '1st Place', event: 'Hacksphere 2025 (24hr Hackathon) — AI Coding Club', date: 'Feb 2025' },
  { rank: '3rd Place', event: 'AUTONIX 2024 Paper Presentation — KEC College', date: 'Oct 2024' },
  { rank: '1st Place', event: 'PRODOTHON 2025 Paper Presentation — PSG College', date: 'Mar 2025' },
  { rank: '1st Place', event: 'ENVISTAS 2025 Paper Presentation — KEC College', date: 'Feb 2025' },
  { rank: 'Best Presentation', event: 'BYTS INDIA HACKATHON (BIH) 1.0 — KEC College', date: 'Apr 2025' },
  { rank: '3rd Place', event: 'CognitiveX GenAI 24hr Hackathon — IBM Skill Build', date: 'Sep 2025' },
  { rank: '2nd Place', event: "Ideathon'25 Project Presentation — KEC College", date: 'Jul 2025' },
  { rank: '1st Place', event: 'SIH Internal Hackathon 2025 — KEC College', date: 'Sep 2025' },
  { rank: 'Top 4 Finalist', event: 'CTAI — CTD International Hackathon @ IIT Bombay', date: 'Oct 2025' },
];

const Achievements = () => {
  const ref = useRevealSection();

  // Duplicate for infinite scroll effect
  const doubled = [...achievements, ...achievements];

  return (
    <section className="achievements-section" id="achievements" ref={ref}>
      <p className="terminal-label reveal">ACHIEVEMENTS</p>
      <h2 className="section-title reveal reveal-delay-1">Awards & Recognition</h2>

      <div className="achievements-ticker-wrap reveal reveal-delay-2">
        <div className="achievements-ticker">
          {doubled.map((a, i) => (
            <div className="achievement-badge" key={i}>
              <span className="badge-rank">{a.rank}</span>
              <span className="badge-event">{a.event}</span>
              <span className="badge-date">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Achievements);