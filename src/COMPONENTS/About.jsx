import React from "react";


const About = () => {
  return (
    <div className="about-section" id="about">
      <aside className="about-info">
        <h2>About Me</h2>
        <p>
          I am Sidramappa Chadchan, a passionate Full Stack Developer specializing
          in building efficient and scalable web applications using technologies like
          React,Spring, servlet, and Mysql. I enjoy solving problems, contributing
          to open-source, and continuously learning new tools in the software world.
        </p>
      </aside>

  <aside className="about-image">
  <div className="image-container">
    <img
      src="https://i.pinimg.com/736x/5d/60/c1/5d60c1ab7aaf158a5e261f07c4e67b5a.jpg"
      alt="Full Stack Java Developer"
    />
    <div className="caption">Crafting Scalable Web Apps</div>
  </div>
</aside>

    </div>
  );
};

export default About;
