/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import NavBar from './NavBar';
import './style.css/Contact.css';

const Contact = () => {
  return (
    <>
      
      <div className="main">
      </div>
      <div className="main-inner">
      <NavBar/>
      <div className="text-overlay">
      <h2>Contact us</h2>
      <p>World’s largest no-kill rescue and adoption</p>
      </div>
      </div>
      <div className="contact-container">
     <div className="map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.394670513584!2d78.40028251487708!3d17.440814188046623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914655519481%3A0x17489ace316a8751!2sBlue%20Cross%20Of%20Hyderabad!5e0!3m2!1sen!2sin!4v1624196083322!5m2!1sen!2sin" width="500" height="450" style={{border:0}} ></iframe>
     </div>
      <div className="form">
      <input className="form-input" type="text" placeholder="YOUR FULL NAME"></input>
      <input className="form-input" type="text" placeholder="YOUR EMAIL ADDRESS"></input>
      <input className="form-input" type="text" placeholder="SUBJECT"></input>
      <textarea className="text-area"  placeholder="WRITE HERE"></textarea>
      <button className="contactBtn" type="submit">DONATE NOW</button>
      </div>
    </div>
    </>
  )
}

export default Contact
