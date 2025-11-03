// import React, { useState } from "react";
// function ContactForm(){
//     const [formData,setFormData]=useState({
//         name:'',
//         email:'',
//         message:'',
//     });
//     const [isSubmitting,setIsSubmitting]=useState(false);
//     const [responseMessage, setResponseMessage] = useState(''); 
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setFormData({
//             ...formData,
//             [name]:value,
//         });
//     };
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         setIsSubmitting(true);
    
//         const data = {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//     };
//     try{
//         const response=await fetch('https://script.google.com/macros/s/AKfycbzppaRzUvtZEM-fegmwy4uwAtMc8-gOK8nYfAgjtpB_/dev',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//             },
//             body:JSON.stringify(data),
//         });
//         if(response.ok){
//             setResponseMessage("Your message has been sent");
//             setFormData({ name: '', email: '', message: '' });
//         }
//         else {
//             setResponseMessage('There was an error. Please try again.');
//           }
//         } catch (error) {
//           console.error('Error:', error);
//           setResponseMessage('There was an error. Please try again.');
//         }
    
//         setIsSubmitting(false);
      
//     };
   
   
//     return (
//         <div className="container my-5">
//           <h2 className="text-center">Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//           {responseMessage && (
//             <div className="mt-3 alert alert-info">
//               {responseMessage}
//             </div>
//           )}
//         </div>
//       );
//     }
// export default ContactForm;

// import React, { useState } from "react";
// import { FaLinkedin, FaGithub, FaLeetcode, FaRegBookmark } from 'react-icons/fa';   


// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formDataToSend  = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("message", formData.message);
//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwSJ2kXV_ce0EAF39uvY0TETGemVrW_kOWrK_wg8aZ1OXpn1O2Sr542uE3DZxBXvOA1vg/exec",
//         {
//           method: "POST",
          
//           body:  formDataToSend,
//         }
//       );
//       if (response.ok) {
//         setResponseMessage("Your message has been sent");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setResponseMessage("There was an error. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setResponseMessage("There was an error. Please try again.");
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center">Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">
//             Message
//           </label>
//           <textarea
//             className="form-control"
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//           {isSubmitting ? (
//             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//           ) : (
//             "Submit"
//           )}
//         </button>
//       </form>
//       {responseMessage && (
//         <div className={`mt-3 alert ${responseMessage.includes("error") ? "alert-danger" : "alert-success"}`}>
//           {responseMessage}
//         </div>
//       )}
//        <div className="mt-5 text-center">
//         <h5>Find me on:</h5>
//         <a href="https://c:\Users\91801\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{855A726A-636D-4816-AEB4-9696D3942264}.pngwww.linkedin.com/in/srivardhannagula" target="_blank" rel="noopener noreferrer" className="mx-3">
//           <FaLinkedin size={30} />
//         </a>
//         <a href="https://github.com/srivardhannagula" target="_blank" rel="noopener noreferrer" className="mx-3">
//           <FaGithub size={30} />
//         </a>
        
//       </div>
//     </div>
//   );
// }

// export default ContactForm;


import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Contact Me</h2>
      <p className="lead">
        I'm always open to connecting! Feel free to reach out through email or connect with me on LinkedIn.
      </p>

      {/* Contact Info */}
      <div className="mt-4">
        <h5>Email:</h5>
        <a
          href="mailto:nagulasrivardhan@gmail.com"
          className="text-decoration-none"
        >
          nagulasrivardhan@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-4">
        <h5>Connect with me:</h5>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://www.linkedin.com/in/srivardhannagula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/srivardhannagula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <FaGithub size={35} />
          </a>
          {/* <a href="mailto:nagulasrivardhan@gmail.com" className="text-danger">
            <FaEnvelope size={35} />
          </a> */}
        </div>
      </div>

      {/* Optional Styling */}
      <div className="mt-5">
        <p className="text-muted">
          © {new Date().getFullYear()} Nagula Srivardhan 
        </p>
      </div>
    </div>
  );
}

export default ContactForm;

 