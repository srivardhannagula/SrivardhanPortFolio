// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// const ProjectCard=({project})=>{
//     return(
//         <div  className="card shadow-sm border-0 rounded-4 h-100" 
//         style={{ width: '100%', maxWidth:'350px',transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
//         onMouseEnter={e => {
//           e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
//           e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
//         }}
//         onMouseLeave={e => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)";
//           e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
//         }}>
//             <img src={project.image} alt={project.name} className="card-img-top" 
//             style={{ widht:'500px',height: '250px', objectFit: 'cover' }}/>
//             <div className="card-body">
//                 <h5 className="card-title">{project.name}</h5>
//                 <p className="card-text">{project.description}</p>
//                 <div>
//                     <strong>Tech Stack:</strong>
//                     <ul className="list-inline">
//                         {project.techStack.map((tech,index)=>(
//                             <li key={index} className="list-inline-item badge bg-secondary">
//                                 {tech}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <a href={project.githubLink}  className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
//           GitHub Repo
//         </a>
//         <br></br>
//         <br></br>
//         {project.hostedLink&&(
//              <a href={project.hostedLink}  className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
//             View Hosted Project
//            </a>
//         )}
//             </div>
//         </div>
//     )
// }
// export default ProjectCard;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectCard = ({ project }) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4 h-100"
      style={{
        width: '100%',
        maxWidth: '350px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="card-img-top"
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
         
      />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
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
        <a
          href={project.githubLink}
          className="btn btn-outline-primary me-2 mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <br />
        <br />
       {project.videoLink && (
  <a
    href={project.videoLink}
    className="btn btn-outline-primary me-2 mt-3"
          target="_blank"
          rel="noopener noreferrer"
  >
     Watch Demo
  </a>
)}

      </div>
    </div>
  );
};

export default ProjectCard;
