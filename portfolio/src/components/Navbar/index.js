import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="flexbox-container">
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light ">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" id="FSC">Liam Bradley</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarResponsive">
     <ul className="navbar-nav mr-auto"></ul>    
     <ul className="navbar-nav ml-auto">
         <li className="nav-item active">
             <Link className="nav-link" to="/"><strong>About</strong></Link>
         </li>
         <li className="nav-item active">
             <Link className="nav-link" to="/portfolio"><strong>Portfolio</strong></Link>
         </li>
         <li className="nav-item active">
             <Link className="nav-link" to="/contact"><strong>Contact</strong></Link>
         </li>
         
     </ul>
    </div>
    </div>    
    </nav>
    
    </div>
  );
}

export default Navbar;