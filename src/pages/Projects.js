 

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "Library Management Platform",
      description:
        "A full-stack library management system built using React and Spring Boot with MySQL. It features user and admin dashboards, book issuing, return tracking, and fine calculation.",
      githubLink: "https://github.com/srivardhannagula/LibraryManagementPlatform",
      videoLink:
        "https://drive.google.com/file/d/1F5XS1DThQZZlDGxjhJUOpwLBEExeuUBx/view",
      image: "library.png",
      techStack: ["React", "Spring Boot", "MySQL"],
    },
    {
      name: "Flight Management System",
      description:
        "A flight booking and management web application developed during my Infosys internship. It handles flight scheduling, booking management, and admin operations using JSP and Spring Boot.",
      githubLink: "https://github.com/srivardhannagula/FlightManagementSystem",
      videoLink:
        "https://drive.google.com/file/d/1Sz0UOt9e-7BqUX1sXAFEZei6sT9hyvXg/view?usp=sharing",
      image: "flightproject.png",
      techStack: ["Java", "Spring Boot", "JSP"],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
       
      }}
    >
      <div className="container my-5">
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}>
          My Projects
        </h2>

        <div className="row g-5">
          {projects.map((project, index) => (
            <div key={index} className="col-12 d-flex justify-content-center">
              <div
                className="d-flex flex-column flex-md-row align-items-center shadow rounded-4 p-4 w-100"
                style={{
                  backgroundColor: "#f8f9fa",
                  maxWidth: "950px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 8px 20px rgba(0,0,0,0.25)"
                      : "0 4px 10px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Left Side - Image */}
                <div
                  className="flex-shrink-0 text-center mb-4 mb-md-0 me-md-4"
                  style={{
                    width: "45%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="img-fluid"
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                      cursor: "pointer",
                      objectFit: "contain",
                      width: "100%",
                      maxHeight: "330px",
                      backgroundColor: "#f4f4f4",
                      padding: "10px",
                    }}
                  />
                </div>

                {/* Right Side - Text */}
                <div className="flex-grow-1">
                  <h4 className="fw-bold mb-2" style={{ fontSize: "1.8rem" }}>
                    {project.name}
                  </h4>
                  <p className="text-muted" style={{ fontSize: "1rem" }}>
                    {project.description}
                  </p>

                  <div className="mt-2">
                    <strong>Tech Stack:</strong>
                    <ul className="list-inline mt-2">
                      {project.techStack.map((tech, idx) => (
                        <li
                          key={idx}
                          className="list-inline-item badge bg-secondary m-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <a
                      href={project.githubLink}
                      className="btn btn-outline-primary me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        className="btn btn-outline-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
