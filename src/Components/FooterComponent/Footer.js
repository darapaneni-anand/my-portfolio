import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© 2025 Your Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
