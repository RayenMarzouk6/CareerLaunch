import React from 'react';
import './JobCards.css';

const JobCards = () => {
  const jobs = [
    {
      company: 'TechFlow',
      role: 'Frontend Developer',
      type: 'Internship',
      salary: '$4k - $6k',
      tags: ['React', 'TypeScript', 'Remote']
    },
    {
      company: 'DataScale',
      role: 'AI Research Intern',
      type: 'Part-time',
      salary: '$5k - $8k',
      tags: ['Python', 'PyTorch', 'On-site']
    },
    {
      company: 'Creative Labs',
      role: 'Product Designer',
      type: 'Full-time',
      salary: '$90k - $120k',
      tags: ['Figma', 'UI/UX', 'Hybrid']
    }
  ];

  return (
    <section id="jobs" className="jobs container">
      <div className="section-header reveal-up">
        <h2>Recommended for <span className="gradient-text">You</span></h2>
        <p>Based on your profile and dream job interests.</p>
      </div>
      <div className="job-list">
        {jobs.map((job, i) => (
          <div key={i} className="job-card glass reveal-up" style={{ animationDelay: `${0.1 * i}s` }}>
            <div className="job-header">
              <div className="company-logo">{job.company[0]}</div>
              <div className="job-info">
                <h4>{job.role}</h4>
                <p>{job.company}</p>
              </div>
            </div>
            <div className="job-details">
              <span>📍 {job.type}</span>
              <span>💰 {job.salary}</span>
            </div>
            <div className="job-tags">
              {job.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
            <button className="btn-outline w-full mt-1">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCards;
