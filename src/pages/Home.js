import React from 'react';
import {Link} from"react-router-dom";
import BannerImage from "../assets/rosanay.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" 
    style= {{ backgroundImage: `url(${BannerImage}`}}>
        <div className="headerContainer">
            <h1>Karenda Labradors</h1>
            <p> Striving for success</p>
            <Link to="contact" />
            <button> Contact Us </button>
        </div>
      
    </div>
  );
}

export default Home
