import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import JobCards from './components/JobCards';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <JobCards />
      </main>
      <footer className="container" style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid #e2e8f0', marginTop: '4rem', color: '#64748b' }}>
        <p>&copy; 2026 CareerLaunch. Empowering the next generation of talent.</p>
      </footer>
    </div>
  );
}

export default App;
