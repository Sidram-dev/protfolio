import React from "react";


const projectData = [
  {
    title: "🛒 FlipZone - E-Commerce Website",
    image: "", 
    description:
      "FlipZone is a fully functional e-commerce platform inspired by Amazon, where users can browse, search, and purchase products seamlessly. Features include product listings, cart system, order summary, and user management.",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Thymeleaf",
      "HTML",
      "CSS",
    ],
    tools: ["Eclipse", "Postman", "VS Code"],
  },
  {
    title: "🚌 RedBus Clone - Ticket Booking System",
    image: "", 
    description:
      "RedBus clone is a CRUD-based bus booking system where users can add, edit, delete, and view available tickets. Admins can manage routes and bookings, offering a real-time-like interface.",
    techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    tools: ["Eclipse", "Postman", "VS Code"],
  },
  {
    title: "🎬 Movie Booking App",
    image: "https://alphacodecamp.com.ng/uploads/images/2022/06/image_750x_62b4e46690ea3.jpg", // Add your screenshot path here
    description:
      "A movie booking application enabling users to search movies, book tickets, and manage bookings. Implements full CRUD operations for both users and admin roles.",
    techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    tools: ["Eclipse", "Postman", "VS Code"],
  },
  {
    title: "📺 YouTube Clone - Frontend Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6xpHTGdb1CUaJks_gi81rbcs0gBaI3JRLg&s", // Add your screenshot path here
    description:
      "A frontend clone of YouTube built using React. Users can search and play videos, view thumbnails, and experience a simplified responsive layout mimicking the original UI.",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    tools: ["VS Code"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">💼 My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                <strong>Tech Stack:</strong>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                <strong>Tools Used:</strong>
                <ul>
                  {project.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
