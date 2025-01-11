import React from 'react';
import "../styles/Menu.css"

function MenuItem({ image, name }) {
  return (
    <div className="menuItem">
      <div 
        style={{ backgroundImage: `url(${image})` }} 
        className="menuItemImage" 
      ></div>
      <h1>{name}</h1>
    </div>
  );
}

export default MenuItem;
