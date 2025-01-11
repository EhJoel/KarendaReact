import React from 'react';
import Puppies_AI from "../assets/Puppies_AI.jpeg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div 
      className="aboutTop"
        style= {{ backgroundImage: `url(${Puppies_AI}`}}
        >aa</div>

      <div className="aboutBottom"></div>
      <h1>About Us</h1>
      <p>about use descrip </p>
    </div>
  )
}

export default About
