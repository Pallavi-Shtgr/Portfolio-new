import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';

interface Project {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web development",
      subcategory: "MERN Stack",
      image: "/assets/images/pro1.jpeg",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web development",
      subcategory: "React & Node.js",
      image: "/assets/images/pro2.jpeg",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "web development",
      subcategory: "JavaScript & API",
      image: "/assets/images/pro3.jpeg",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web development",
      subcategory: "React & TypeScript",
      image: "/assets/images/pro4.jpeg",
      link: "#"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile app",
      subcategory: "React Native",
      image: "/assets/images/pro5.jpeg",
      link: "#"
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      category: "data science",
      subcategory: "Python & D3.js",
      image: "/assets/images/pro6.png",
      link: "#"
    },
    {
      id: 7,
      title: "Chat Application",
      category: "web development",
      subcategory: "Socket.io & Express",
      image: "/assets/images/pro7.jpg",
      link: "#"
    },
    {
      id: 8,
      title: "Machine Learning Model",
      category: "data science",
      subcategory: "Python & TensorFlow",
      image: "/assets/images/pro8.jpeg",
      link: "#"
    },
    {
      id: 9,
      title: "Social Media Dashboard",
      category: "web development",
      subcategory: "Vue.js & Firebase",
      image: "/assets/images/pro9.jpg",
      link: "#"
    }
  ];

  const filterCategories = ['all', 'web development', 'mobile app', 'data science'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <article className="portfolio active" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterCategories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeFilter === category ? 'active' : ''}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>
              {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
            </div>
            <div className="select-icon">
              <IoEyeOutline />
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => setActiveFilter(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-subcategory">{project.subcategory}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;