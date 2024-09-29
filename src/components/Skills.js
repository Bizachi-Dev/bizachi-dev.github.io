// src/components/Skills.js
import React from 'react';
import SkillsData from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  const categories = ['Game Developer', 'Web Developer', 'Tools/Others'];
  let cardIndex = 0; 

  return (
    <main className="content">
    <section className="skills">
      {categories.map((category) => {
        const categorySkills = SkillsData.filter(skill => skill.category === category);
        return (
          <div key={category} className="skills-category-group">
            <div className="skills-category">
              <p>{category}</p>
            </div>
            <div className="skills-content">
              <div className="skills-cards">
                {categorySkills.map((skill) => {
                  cardIndex += 1; // Increment card index
                  const animationDelay = `${cardIndex * 0.1}s`; // Calculate delay
                  return (
                    <div
                      key={skill.id}
                      className="skill-card"
                      style={{ animationDelay }} // Apply delay inline
                    >
                      <div className="skill-icon-container">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      </div>
                      <p>{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
    </main>
  );
};

export default Skills;
