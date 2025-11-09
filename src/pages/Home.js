 
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          
        
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/srivardhan.jpg"
              alt="Srivardhan"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

        
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Hello, I'm <span style={{ color: "#007bff" }}>Srivardhan</span>
            </h1>
            <h4 style={{ fontSize: "1.8rem", color: "#6c757d", marginBottom: "1.5rem" }}>
              Aspiring Software Engineer
            </h4>

            <p className="lead" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Passionate about using <strong style={{ color: "#FF5722" }}>Java</strong>, 
              <strong style={{ color: "#FF5722" }}> Spring Boot</strong>, 
              <strong style={{ color: "#FF5722" }}> React JS</strong>, 
              <strong style={{ color: "#FF5722" }}> JavaScript</strong>, and 
              <strong style={{ color: "#FF5722" }}> MySQL</strong> to create innovative solutions.
              <br /><br />
              Currently pursuing my pre-final year of BTech in Computer Science and Engineering at 
              St. Martin's Engineering College, Hyderabad, with a strong academic record (CGPA: 8.6). 
              Skilled in software development, databases, and algorithms, and eager to apply my knowledge in real-world projects.
            </p>

              
            <a
              href="/SRIVARDHAN_RESUME.pdf"   
              className="btn btn-primary mt-3 px-4 py-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "600", fontSize: "1rem" }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

 

