import React from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import WorkExperience from "../pages/WorkExperience";
import Contact from "../pages/Contact";

const Portfolio = () => {
  return (
    <div>
      <section id="home" style={{ paddingBottom: "80px" }}>
        <Home />
      </section>

      <section id="projects" style={{ paddingBottom: "80px" }}>
        <Projects />
      </section>

      <section id="work" style={{ paddingBottom: "80px" }}>
        <WorkExperience />
      </section>

      <section id="contact" style={{ paddingBottom: "80px" }}>
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
