import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectsData from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const categories = [...new Set(projectsData.map((project) => project.category))];
  const categoryNames = {
    assets: 'Assets',
    games: 'Games',
    'web/others': 'Web and Others',
  };

  return (
    <main className="content projects-page">
      <section className="projects">
        <h2>Projects and Assets</h2>
        {categories.map((category) => {
          const categoryProjects = projectsData.filter(
            (project) => project.category === category
          );

          return (
            <div key={category} className="project-category">
              <h1 className="category-title">{categoryNames[category] || category}</h1>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    centeredSlides: true, 
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false, 
                  },
                  1024: {
                    slidesPerView: 3,
                    centeredSlides: false, 
                  },
                }}
              >
                {categoryProjects.map((project) => (
                  <SwiperSlide key={project.id} className='swiper-center'>
                    <div className="project-card">
                      <img src={project.image} alt={project.title} />
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
