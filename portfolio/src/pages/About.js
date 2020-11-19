import React from 'react';
import liamheadshot from '../assets/images/liamheadshot.jpg';
import "../styles/about.css"

function About() {
  return (
    <div>
      <div className="container">
    
        <div className="row">
          
          <div className="col-lg-6">

            <img src={liamheadshot} alt="Liam's Headshot" className="w-100" />
            
          </div>

          <div className="col-lg-6">
            <p className="aboutText">
            Hello! My name is Liam, welcome to my portfolio! I'm originally from New York and currently reside in San Francsico, CA. I've worked in the fitness indusrty for the last 5 1/2 years both in NY and CA. While majority of my background is in fitness I developed a new found interest in web development. Flash forward, I'm currently enrolled in a 12-week, full-time development course at UC Berkeley.            </p>
      
            <p className="aboutText">
            One of the many reasons I decided to pursue becoming a web developer was because after COVID-19 hit I had to reevaulte what the rest of my life was going to look like. Web development has been something I’ve wanted to study and do for a long time and I’m finally able to take advantage of this opportunity. Please enjoy, click around and dive into the projects I've worked on!            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
