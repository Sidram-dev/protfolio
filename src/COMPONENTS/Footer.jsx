import React from 'react';
import { FaGithub, FaEnvelope, FaLightbulb } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3 className="footer-heading">✨ Ready to design anything, anytime!</h3>
        <p className="footer-funfact">
          <FaLightbulb className="icon" /> Fun Fact: Great design isn't just how it looks — it's how it *feels* 🧠💡
        </p>

        <div className="footer-links">
          <a href="mailto:sid0162002@gmail.com" title="Email Me">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Sidram-dev" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          {/* Optional: Add LinkedIn or Portfolio */}
          {/* <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a> */}
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Sidramappa Chadchan • Built with passion 💛</p>
      </div>
    </footer>
  );
};

export default Footer;
