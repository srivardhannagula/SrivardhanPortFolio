// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Home(){
//     const handleMouseEnter = (e) => {
//         e.currentTarget.style.transform = "scale(1.05)";
//         e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
//     };

//     const handleMouseLeave = (e) => {
//         e.currentTarget.style.transform = "scale(1)";
//         e.currentTarget.style.boxShadow = "none";
//     };

//     return(
//         <div className="container my-5">
//             <div className="row align-items-center">
//                 <div className="col-12 col-md-6 text-center text-md-start">
//                     <img 
//                     src="/srivardhan.jpg"
//                     alt="srivardhan"
//                     className="img-fluid rounded-circle"
//                     style={{
//                         maxWidth: '400px',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                         cursor: 'pointer'
//                     }}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}                 >
//                     </img>
//                 </div>
//                 <div className="col-12 col-md-6  mt-4 mt-md-0">
//                     <h2  style={{ fontSize: '3rem' }}>Hello, I'm Srivardhan</h2>
//                     <h4  style={{ fontSize: '2rem' }}>Aspiring Software Engineer</h4>
//                     <p className="lead"  style={{ fontSize: '1.25rem' }}>
//             Passionate about using <strong>Java, Spring Boot, React JS, JavaScript, and MySQL </strong>to create innovative solutions.<br></br>
//             I am currently in my pre-final year of BTech in Computer Science and Engineering at St Martins Engineering College Hyderabad.
//              I have a strong academic background with a CGPA of 8.6. During my studies, I have gained comprehensive knowledge in various subjects related to 
//             computer science, including software development, databases, and algorithms, and I am eager to apply these skills in real-world projects.
//           </p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Home;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
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
              href="/SRIVARDHAN_RESUME.pdf"  // <-- place your Resume PDF in the public folder
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
