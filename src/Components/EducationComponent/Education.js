import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, IIIT Nuzvid',
      duration: '2022 - 2026',
      cgpa: '8.5',
    },
    {
      degree: 'Pre-University Course',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, IIIT Nuzvid',
      duration: '2020 - 2022',
      cgpa: '9.7',
    },
    {
      degree: 'High School Diploma',
      institution: 'Ratnam English Medium High School, Nellore',
      duration: '2020',
      cgpa: '10.0',
    },
  ];

  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, idx) => (
          <article key={idx} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration"> {edu.duration}</p>
            <p className="cgpa"><strong>CGPA:</strong> {edu.cgpa}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
