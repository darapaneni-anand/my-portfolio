import React from 'react';
import './Aboutme.css';
import about_pic from '../../assets/about_pic.jpg';

function Aboutme() {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>

      <section className="about-section">
        <div className="about-left">
          <img src={about_pic} alt="Darapaneni Anand Teja" className="profile-pic" />
        </div>

        <div className="about-right">
          <p className="about-text">
            I'm <strong>Darapaneni Anand Teja</strong> from <strong>Nellore, Andhra Pradesh</strong>,
            currently pursuing my <strong>B.Tech at RGUKT IIIT Nuzvid</strong>. As an aspiring 
            <strong> Full Stack Developer</strong>, I’m passionate about building user-friendly, 
            responsive web applications and exploring the power of <strong>AI-driven solutions</strong>.
          </p>

          <p className="about-text">
            I enjoy transforming ideas into reality through code. From developing a 
            <strong> mess monitoring app</strong> for my university to working on an 
            <strong> emotion-aware chatbot</strong> that recommends movies, I’m always eager to 
            experiment and solve meaningful problems.
          </p>

          <p className="about-text">
            So far, I’ve completed <strong>2 internships</strong>, built multiple projects, and earned 
            <strong> 12+ certifications</strong> in areas like <strong>Data Science</strong> and 
            <strong> Web Development</strong>. I'm proficient in technologies like 
            <strong> React, Node.js, Express, MongoDB, Python, and Java</strong>.
          </p>

       
        </div>
      </section>

      <section className="about-achievements">
        <div className="achievement">
          <h1>2</h1>
          <p>Internships Completed</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>2+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>12</h1>
          <p>Certifications Earned</p>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
