import React from 'react';

function Contact() {
  return (
    <div>
     <div className="container">
       <h1>Contact Me</h1>
       <p>
         <a href="mailto:liamhbradley11@gmail.com">
           <i className="fas fa-envelope icon">liamhbradley11@gmail.com</i>
          </a>
       </p>

       <p>
         <a href="https://www.linkedin.com/in/liam-bradley-49492670/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin icon"> LinkedIn</i>
         </a>
       </p>

       <p>
         <a href="https://github.com/Liamhbradley11" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github icon"> GitHub</i>
         </a>
       </p>
     </div>
    </div>
    
  );  
}

export default Contact;
