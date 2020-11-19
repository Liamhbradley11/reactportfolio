import React, { Component } from 'react';
import Card from '../components/Card';
import projects from '../myProjects.json';
import "../styles/portfolio.css"


class Portfolio extends Component {

  state = {
    projects: projects,
  }

  render() {

    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Card 
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        deployedLink={project.deployedLink}
        repository={project.repository} 
      />
    );

    return(
      <div>

        <div className="container mb-5">
          <h1>Portfolio</h1>
        </div>
          
        
        <div className="flex-container">
          
          {newProjectsArr}

        </div>
      </div>
        
    );
  }
}

export default Portfolio;
