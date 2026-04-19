import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass reveal-down">
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">CareerLaunch</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Resources</a></li>
          <li><a href="#jobs">Dream Jobs</a></li>
          <li><button className="btn-primary">Sign In</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
