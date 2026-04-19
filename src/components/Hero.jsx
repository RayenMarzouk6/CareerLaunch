import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container reveal-up">
      <div className="hero-content">
        <h1 className="hero-title">
          Land Your <span className="gradient-text">Dream Job</span> Before You Graduate
        </h1>
        <p className="hero-subtitle">
          The all-in-one platform for students to navigate their career path, build impossible-to-ignore resumes, and connect with top-tier companies.
        </p>
        <div className="search-box glass">
          <input type="text" placeholder="What's your dream job? (e.g. AI Engineer, Product Designer)" />
          <button className="btn-primary">Launch Career</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">500+</span>
            <span className="stat-label">Partner Companies</span>
          </div>
          <div className="stat">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Student Successes</span>
          </div>
          <div className="stat">
            <span className="stat-value">95%</span>
            <span className="stat-label">Hiring Rate</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card glass c1">
          <span>🎯 Applied to Google</span>
          <span className="badge">Interviewing</span>
        </div>
        <div className="floating-card glass c2">
          <span>📄 Resume Optimized</span>
          <span className="badge success">98 Score</span>
        </div>
        <div className="floating-card glass c3">
          <span>🛣️ Fintech Roadmap</span>
          <span className="badge">80% Done</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
