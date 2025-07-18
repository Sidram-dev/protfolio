import React from 'react';

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-background">
      <div className="intro-box">
        <h1>Hi, I’m <span className="name">Sidramappa Chadchan</span></h1>
        <h2 className="typewriter">Full Stack Developer</h2>

        <div className="tech-icons">
          <FaHtml5 title="HTML5" className="icon html" />
          <FaCss3Alt title="CSS3" className="icon css" />
          <FaReact title="React" className="icon react" />
  <span title="MySQL" className="icon emoji">🐬</span> {/* Dolphin for MySQL */}
         <a href="https://github.com/Sidram-dev"  target="_blank" rel="noopener noreferrer">  <FaGithub title="GitHub" className="icon github" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
