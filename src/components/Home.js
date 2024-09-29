import React from 'react';
import projectsData from '../data/projectsData'; // Importação dos dados dos projetos
import './Home.css';

const Home = () => {
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <main className="content">
      <section className="home">
        <div className="home-header">
          <h1>Transforming ideas, games, and projects into reality.</h1>
          <p>SHOWCASE</p>
        </div>
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="project-list">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on Asset Store
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
