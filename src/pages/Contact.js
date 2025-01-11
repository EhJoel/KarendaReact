import React from 'react'
import PuppyImg from '../assets/Blackpuppy.jpg'
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contactLeft"
      style= {{ backgroundImage: `url(${PuppyImg}`}}>
      </div>
      <div className='contactRight'>
        <h1>Contact Us</h1>

        <form id="contactForm" method="POST">
            
            <label htmlFor='name'>Full Name</label>
            <input name="name" placeholder="Enter full name" type="text" />
            
            <label htmlFor='email'>Email</label>
            <input name="email" placeholder="Enter Email" type="email" />
           
            <label htmlFor='message'> Message</label>
            <textarea 
            rows="6" 
            placeholder="Enter message"
            name="message"
            required>
            </textarea>
            <button type="submit">Send Message</button>
            

        </form>
      </div>
    </div>
  )
}

export default Contact
