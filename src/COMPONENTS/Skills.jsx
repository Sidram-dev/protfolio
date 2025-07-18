import React from "react";


const Skills = () => {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Spring",
    "Spring Boot",
    "MySQL",
    "JDBC",
    "Hibernate",
    "GitHub",
  ];

  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">🚀 My Tech Arsenal</h2>
      <div className="skills-marquee">
        <div className="skills-track">
          {[...skillList, ...skillList].map((skill, index) => (
            <span className="skill-item" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
