import React from 'react';

const About: React.FC = () => {
  const services = [
    {
      icon: "/assets/images/pic1.jpeg",
      title: "Developing Advanced Web Applications",
      description: "Working with the MERN stack to create responsive and user-friendly web applications, focusing on user experiences and efficient back-end functionality."
    },
    {
      icon: "/assets/images/pic2.jpg",
      title: "Contributing to Open Sources",
      description: "Recently completed Hacktoberfest 2024, where I contributed to open-source projects and expanded my skills in collaborative development."
    },
    {
      icon: "/assets/images/pic3.jpeg",
      title: "Continuous Learning and Certification",
      description: "Staying ahead of the curve by continuously expanding my knowledge in emerging technologies."
    }
  ];

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm Pallavi, a software developer with a strong background in computer science. 
          I've graduated in 2025 with a B.E in Computer Science and Engineering from P.A. College of Engineering, Mangalore.
        </p>
        <p>
          Throughout my academic journey, I've gained hands-on experience through diverse projects and developed solid skills in the MERN stack.
        </p>
        <p>
          I recently joined Cognizant as a Programmer Analyst Trainee, where I'm part of the ADM track.
          I’ve gained experience in full-stack development, with proficiency in backend technologies such as  C#, .NET 8, ASP.NET Web API, and SQL, along with exposure to frontend development using React.
        </p>
        <p>
          Apart from tech, I'm a good communicator, a team player, and someone who enjoys taking initiative. 
          Whether it's collaborating with others or taking the lead on a task, I'm always eager to learn and contribute. 
          I'm excited about opportunities where I can keep growing, take on new challenges, and help create solutions that make a difference.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt="service icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="resume-download">
          <a href="#" className="download-button">
            See my resume
          </a>
        </div>
      </section>
    </article>
  );
};

export default About;