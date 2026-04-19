import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Skill Roadmap',
      desc: 'Get a personalized step-by-step path to master the skills required for your dream role.'
    },
    {
      icon: '📄',
      title: 'Resume AI',
      desc: 'Build a high-performance resume that bypasses ATS and catches the eye of top recruiters.'
    },
    {
      icon: '🤝',
      title: 'Mock Interviews',
      desc: 'Practice with AI-driven interview scenarios tailored specifically to your target company.'
    }
  ];

  return (
    <section id="features" className="features container">
      <div className="section-header reveal-up">
        <h2>Built for <span className="gradient-text">Student Success</span></h2>
        <p>Everything you need to go from a classroom to a boardroom.</p>
      </div>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card glass reveal-up" style={{ animationDelay: `${0.2 * i}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <button className="btn-text">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
