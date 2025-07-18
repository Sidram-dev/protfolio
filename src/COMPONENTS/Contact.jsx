import React from 'react';


const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">📩 Let's Connect</h2>

      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:sid0162002@gmail.com">sid0162002@gmail.com</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Sidram-dev" target="_blank" rel="noreferrer">github.com/Sidram-dev</a></p>
          <p><strong>Phone:</strong> <a href="tel:7483377084">7483377084</a></p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell me about your project or message..." required />
          <button type="submit">Send Me Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
