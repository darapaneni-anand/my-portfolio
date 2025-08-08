import React, { useState } from 'react';
import './MyProject.css';
import portfolio from '../../assets/portfolio.png';
import ecommerceImg from '../../assets/E-Commerce.png'; 

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
      demoLink: 'https://my-portfolio-nine-pearl-35.vercel.app/',
      timeline: 'May 2025',
      role: 'Frontend Developer'
    },
    {
      title: 'E-Commerce Website',
      image: ecommerceImg,
      shortDesc: 'Full-featured shopping platform with modern UI and backend integration.',
      fullDesc: 'A fully functional e-commerce platform built using the MERN stack. Features include product catalog with search and filter options, secure authentication, shopping cart, and an admin dashboard for managing products and orders. Designed with TailwindCSS for a responsive and modern interface, and deployed with backend APIs for real-time data handling.',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/darapaneni-anand/E-Commerce',
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
