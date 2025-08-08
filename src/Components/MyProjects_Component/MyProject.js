import React, { useState } from 'react';
import './MyProject.css';
import portfolio from '../../assets/portfolio.png';
import about_pic from '../../assets/about_pic.jpg';

function ProjectCard({
  title,
  image,
  shortDesc,
  fullDesc,
  technologies,
  githubLink,
  demoLink,
  timeline,
  role
}) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="tech-stack">
        {technologies.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
      <p>{expanded ? fullDesc : shortDesc}</p>
      <div className="project-meta">
        <p><strong>Timeline:</strong> {timeline}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <button className="read-more-btn" onClick={toggleExpand}>
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

function MyProject() {
  const projects = [
    {
      title: 'Portfolio Website',
      image: portfolio,
      shortDesc: 'Personal portfolio showcasing skills and projects.',
      fullDesc: 'A responsive portfolio built with modern web technologies to highlight my experience, skills, and personal projects. Includes contact form, project gallery, and tech stack.',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/darapaneni-anand/my-portfolio',
      demoLink: 'https://yourportfolio.com',
      timeline: 'May 2025',
      role: 'Frontend Developer'
    },
    {
      title: 'E-Commerce Website',
      image: portfolio,
      shortDesc: 'Responsive shopping site with full stack features.',
      fullDesc: 'Supports product listings, cart, checkout, login, and admin dashboard. Mobile-first and user-friendly design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/darapaneni-anand/ecommerce',
      demoLink: 'https://e-commerce-1-tfzt.onrender.com',
      timeline: 'July 2025',
      role: 'Full Stack Developer'
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default MyProject;
