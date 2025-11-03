
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import ProjectCard from "../components/ProjectCard";
const projects = [
    {
      name: 'Library Management Platform',
      description: 'A full-stack library management Platform with React and Spring Boot.',
      githubLink: 'https://github.com/srivardhannagula/LibraryManagementPlatform',
      //hostedLink: 'https://library-management-platform-ruddy.vercel.app/',
      videoLink: 'https://drive.google.com/file/d/1F5XS1DThQZZlDGxjhJUOpwLBEExeuUBx/view',
      image: 'library.png',
      techStack: ['React', 'Spring Boot', 'MySQL'],
    },
    {
      name: 'Flight Management System',
      description: 'A flight booking and management system built during my internship.',
      githubLink: 'https://github.com/srivardhannagula/FlightManagementSystem',
      videoLink: 'https://drive.google.com/file/d/1Sz0UOt9e-7BqUX1sXAFEZei6sT9hyvXg/view?usp=sharing',
      image: 'flightproject.png',
      techStack: ['Java', 'Spring Boot', 'JSP'],
    },
    // Add more projects as needed
  ];



const Projects=()=>{
    return(
        <div
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <Container className="my-5" >
      <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}>
        My Projects
      </h2>
      <Row className="justify-content-center g-5">
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={12}
            sm={10}
            md={6}
            lg={5}
            className="d-flex justify-content-center"
          >
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container></div>
  );
}

export default Projects;