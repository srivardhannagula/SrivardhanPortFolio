 
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
     
      {!showNavbar && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "20px",
            width: "16px",
            height: "16px",
            backgroundColor: "#5c7a9b",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            cursor: "pointer",
            zIndex: 1001,
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to top"
        ></div>
      )}

      
      <nav
        style={{
          position: "fixed",
          top: showNavbar ? "20px" : "-80px",  
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          padding: "10px 25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "top 0.5s ease, opacity 0.5s ease",
          opacity: showNavbar ? 1 : 0,
        }}
      >
        <div className="d-flex justify-content-around align-items-center">
          <Link
            to="home"
            smooth
            duration={400}
            offset={-100}
            className="text-dark fw-semibold text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth
            duration={400}
            offset={-100}
            className="text-dark fw-semibold text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            Projects
          </Link>
          <Link
            to="work"
            smooth
            duration={400}
            offset={-100}
            className="text-dark fw-semibold text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            Work
          </Link>
          <Link
            to="contact"
            smooth
            duration={400}
            offset={-100}
            className="text-dark fw-semibold text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
