import React, { memo } from 'react';
import '../styles/Achievements.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import { FaCertificate } from 'react-icons/fa';

const achievements = [
  { rank: 'Winner', event: 'CTD 2026 AI/ML Hackathon — CTAI Foundation @ IIT Bombay', date: 'Oct 2026' },
  { rank: 'Finalist', event: 'AI Summit 2026 Buildathon — HCL & GUVI', date: 'Feb 2026' },
  { rank: 'National Finalist', event: 'Smart India Hackathon (SIH 2025)', date: 'Dec 2025' },
  { rank: 'Top 4 Finalist', event: 'CTD 2025 International AI/ML Hackathon — CTAI @ IIT Bombay', date: 'Oct 2025' },
  { rank: '1st Place', event: 'SIH Internal Hackathon 2025 — KEC College', date: 'Sep 2025' },
  { rank: '3rd Place', event: 'CognitiveX GenAI 24hr Hackathon — IBM Skill Build', date: 'Sep 2025' },
  { rank: '2nd Place', event: "Ideathon'25 Project Presentation — KEC College", date: 'Jul 2025' },
  { rank: 'Best Presentation', event: 'BYTS INDIA HACKATHON (BIH) 1.0 — KEC College', date: 'Apr 2025' },
  { rank: '1st Place', event: 'PRODOTHON 2025 Paper Presentation — PSG College', date: 'Mar 2025' },
  { rank: '1st Place', event: 'Hacksphere 2025 (24hr Hackathon) — AI Coding Club', date: 'Feb 2025' },
  { rank: '1st Place', event: 'ENVISTAS 2025 Paper Presentation — KEC College', date: 'Feb 2025' },
  { rank: '3rd Place', event: 'AUTONIX 2024 Paper Presentation — KEC College', date: 'Oct 2024' },
  { rank: '2nd Place', event: 'Academic Excellence Award — Kongu Vellalar Trust', date: '2023' },
];

const certifications = [
  { name: 'Create Your First Gemini Enterprise Application', issuer: 'Google', date: 'May 2026' },
  { name: 'Fundamentals of MCP', issuer: 'Hugging Face', date: 'Jan 2026' },
  { name: 'Generative AI with Diffusion Models', issuer: 'NVIDIA', date: 'Sep 2025' },
  { name: 'MongoDB Node.js Associate Developer', issuer: 'MongoDB University', date: 'Dec 2024' },
];

const Achievements = () => {
  const ref = useRevealSection();

  // Duplicate for infinite scroll effect
  const doubled = [...achievements, ...achievements];

  return (
    <section className="achievements-section" id="achievements" ref={ref}>
      <p className="terminal-label reveal">ACHIEVEMENTS</p>
      <h2 className="section-title reveal reveal-delay-1">Awards &amp; Certifications</h2>

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

      <div className="certs-block reveal reveal-delay-3">
        <p className="certs-heading">CERTIFICATIONS</p>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon-wrap">
                <FaCertificate />
              </div>
              <div className="cert-body">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Achievements);
