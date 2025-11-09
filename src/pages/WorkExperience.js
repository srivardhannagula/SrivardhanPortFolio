 
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkExperience() {
  const experiences = [
    {
      certificate: "Internship Certificate",
      date: "May 2024 - July 2024",
      title: "Java Intern",
      description: "Built a Flight Management System using Spring Boot and JSP during the Infosys Springboard Internship.",
      image: "internship.png"
    },
    {
      certificate: "Event Participation",
      date: "2024",
      title: "Code Clash Event - 3rd Place",
      description: "Achieved 3rd place in Code Clash coding competition during college technical fest.",
      image: "convergence1.jpg"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
    style={{
      backgroundColor: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
      // minHeight: "100vh",
      // paddingTop: "60px",
      // paddingBottom: "60px",
    }}
  >
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}>
        Work Experience & Achievements
      </h2>
      <div className="row g-5">
        {experiences.map((exp, index) => (
          <div key={index} className="col-12">
            <div
              className="row align-items-center p-4 shadow rounded-4"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "transform 0.3s ease",
                transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
             
              <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                <img
                  src={exp.image}
                  alt={`${exp.title} Certificate`}
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    cursor: "pointer"
                  }}
                />
                <div className="mt-3 fw-semibold text-secondary" style={{ fontSize: "1rem" }}>
                  {exp.certificate === "Event Participation" ? "Achievement Certificate" : exp.certificate}
                </div>
              </div>

              
              <div className="col-12 col-md-7">
                <h4 className="fw-bold" style={{ fontSize: "1.8rem" }}>
                  {exp.title}
                </h4>

                 
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#6c757d",
                    fontWeight: "500",
                    marginTop: "0.5rem",
                    marginBottom: "1rem"
                  }}
                >
                  {exp.date}
                </div>

                <p className="text-muted" style={{ fontSize: "1rem" }}>
                  {exp.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default WorkExperience;
