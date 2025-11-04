import React, { useEffect, useRef, useState } from 'react';

const Resume: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const education = [
    {
      title: "Bachelor of Engineering (Hons)",
      institution: "P A College of Engineering, Mangalore",
      period: "2021 — 2025",
      description: "Computer Science and Engineering"
    }
  ];

  const experience = [
    {
      title: "Programmer Analyst Trainee | Full-Time",
      company: "Cognizant Technology Solutions",
      period: "Oct 2025 — Present",
      location: "Kochi, India",
      description: "Currently engaged in backend-focused responsibilities within the .NET ecosystem, including ASP.NET Core and C#. Actively learning clean architecture and scalable backend practices."
    },
    {
      title: "Programmer Analyst Trainee | Training",
      company: "Cognizant Technology Solutions",
      period: "June 2025 — Oct 2025",
      location: "Chennai, Tamil Nadu",
      description: "Worked on full-stack development using .NET and React, gaining experience in ASP.NET Web API, C#, SQL, Postman, and agile practices. Built an online exam portal as a training project, with hands-on exposure to API integration, UI workflows, component design, and unit testing."
    },
    {
      title: "Machine Learning Developer | Internship",
      company: "Rooman Technologies Pvt Ltd",
      period: "Sep 2024 — Feb 2025",
      location: "Remote",
      description: "Worked with ML tools like Scikit-learn and Pandas to analyze genomic data. Applied EDA, feature selection, and data cleaning to uncover genetic patterns and improve insights."
    }
  ];

  const skills = {
    "Programming Languages": ["C#", "Java", "Python"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js","Redux.js", "Bootstrap", "Tailwind CSS"],
    "Backend": ["EF Core","ASP.NET Core", "ASP.NET Web API", "Node.js", "SQL", "PostgreSQL"],
    "Tools & Software Proficiency": ["GitHub","Docker", "VS Code", "Visual Studio 2022", "Postman", "MS 365"]
  };

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className={`timeline-item animate-on-scroll ${visibleItems.has(index) ? 'visible' : ''}`} data-index={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.institution}</span>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className={`timeline-item animate-on-scroll ${visibleItems.has(index + 10) ? 'visible' : ''}`} data-index={index + 10}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.company}</span>
              <span>{item.period}</span>
              <span className="timeline-location">({item.location})</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <div className="skills-container">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div key={category} className={`skills-category animate-on-scroll ${visibleItems.has(catIndex + 20) ? 'visible' : ''}`} data-index={catIndex + 20}>
              <h4 className="h4 skills-category-title">{category}</h4>
              <div className="skills-list">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;