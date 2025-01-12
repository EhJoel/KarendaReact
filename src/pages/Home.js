import React from 'react';
import {Link} from"react-router-dom";
import BannerImage from "../assets/rosanay.jpg";
import BannerImage2 from "../assets/Blackpuppy.jpg"
import '../styles/Home.css';

function Home() {
  return (
    <><div className="home">
      <div id="homeLeftID" className="homeLeft"
        style={{ backgroundImage: `url(${BannerImage})` }}>
      </div>
      <div className='homeRight'>
        <h1>Karenda Labradors</h1>
        <p className="homeText"> We are reputable Registered Breeders (Dogs Australia) of Labrador Retrievers and local members of Dogs Tasmania.
          We strive to breed and show quality Labradors, focusing on breeding dogs with only exceptional temperaments, soundness and producing well-rounded family-friendly dogs.
          We regularly exhibit our dogs in the show ring both in Tasmania and interstate.
          We are based in Wesley Vale, Tasmania, on a small acreage property.</p>
          <Link to="/Contact">
          <button className="homeButton">Contact Us</button>
          </Link>
      </div> 



    </div>
    
    <div id="home2" className="home">
        <div className="homeLeft2">
        <h1>Puppies</h1>
          <p className="homeText"> We strive to breed and show quality Labradors,
             focusing on breeding dogs with only exceptional temperaments,
              soundness and producing well-rounded family-friendly dogs.
                </p>
                <Link to="/Contact">
                <button className="homeButton">Puppy Enquiry </button>
                </Link>
        </div>
        <div className='homeRight2' style={{ backgroundImage: `url(${BannerImage2})` }}>
         
        </div>

      </div></>
    
  );
}

export default Home



