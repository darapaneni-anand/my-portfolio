import React from 'react';
import './Self.css';
import anann from '../../assets/anann.jpg';

function Self() {
  return (
    <div className="container">
      <img 
        src={anann} 
        alt="Portfolio" 
        height="200px" 
        width="200px" 
        className="photo" 
      />
      <h1 className='main-text'>
        Hi, I'm <span className="name">Darapaneni Anand Teja</span> — a passionate and curious Full Stack Developer
      </h1>
      <p className="description">
  I love building responsive web apps and exploring AI-powered solutions.  
  Always eager to learn, collaborate, and turn ideas into impactful projects.
</p>
<div className="actions">

<a href="#contact">
    <button className="connect">Connect with Me</button>
</a>

<button className='res'>My resume</button>
    </div>

    </div>
  );
}

export default Self;
