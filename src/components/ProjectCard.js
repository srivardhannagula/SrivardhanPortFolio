 import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4 h-100 d-flex flex-row align-items-stretch"
      style={{
        width: '100%',
        maxWidth: '850px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image Section */}
      <div style={{ flex: '1 1 40%', maxWidth: '40%' }}>
        <img
          src={project.image}
          alt={project.name}
          className="img-fluid h-100"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Content Section */}
      <div className="card-body d-flex flex-column justify-content-center" style={{ flex: '1 1 60%', padding: '20px' }}>
        <h5 className="card-title fw-bold">{project.name}</h5>
        <p className="card-text text-muted">{project.description}</p>

        <div>
          <strong>Tech Stack:</strong>
          <ul className="list-inline mt-2">
            {project.techStack.map((tech, index) => (
              <li key={index} className="list-inline-item badge bg-secondary m-1">
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
  );
};

export default ProjectCard;

