import React from 'react';
import Puppies_AI from "../assets/Puppies_AI.jpeg";
import '../styles/Puppies.css';

function Puppies() {
  return (
    <div className="puppies">
      <div 
      className="puppiesTop"
        style= {{ backgroundImage: `url(${Puppies_AI }`}}
        ></div>

      <div className="puppiesBottom">
      <h1>Puppies</h1>
      <p>info about puppies </p>
    

      <div className="buttons">
      <button className="puppyButton">Planned Litters</button>
      <button className="puppyButton">Gallery</button>
      <button className="puppyButton">Puppy Enquiry</button>

    </div>
      </div>
        </div>
  )
}

export default Puppies