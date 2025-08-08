import React from 'react';
import './TechnicalSkills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

function TechnicalSkills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Technical Skills</h2>

      <div className="skills-category">
        <h3 className="category-title">Frontend</h3>
        <div className="skill-bar">
          <span><FaHtml5 className="icon" /> HTML</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><FaCss3Alt className="icon" /> CSS</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><FaJs className="icon" /> JavaScript</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><FaReact className="icon" /> React</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">Backend</h3>
        <div className="skill-bar">
          <span><FaNodeJs className="icon" /> Node.js</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><SiExpress className="icon" /> Express.js</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><SiMongodb className="icon" /> MongoDB</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">Programming & Tools</h3>
        <div className="skill-bar">
          <span><FaPython className="icon" /> Python</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><FaJava className="icon" /> Java</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
        <div className="skill-bar">
          <span><FaGithub className="icon" /> Git & GitHub</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: '100%' }}></div>
            </div>
            <span className="percent-label">100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
