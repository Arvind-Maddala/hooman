/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css/Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
      <div className="about">
        <h2>Hooman</h2>
        <p>World’s largest no-kill rescue world’s largest no-kill rescue and adoption organization with hundreds of dogs and puppies available and adoption organization with hundreds of dogs and puppies available</p>
        <div className="social-links">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest-p"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-google-plus-g"></i>
      </div>
      </div>
      <div className="links">
        <h2>How to Adopt Us?</h2>
        <ul className="tags" >
          <li>Homepage</li>
          <li>How to Adopt A Pet</li>
          <li>What are the prerequisites</li>
          <li>Our shelter contact</li>
          <li>Homepage</li>
          <li>How to Adopt A Pet</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Our Shelter Location</h2>
        <iframe className="mapFooter" title="blue cross hyderabad" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8123.883071848541!2d78.40354784700122!3d17.44152868780983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914655519481%3A0x17489ace316a8751!2sBlue%20Cross%20Of%20Hyderabad!5e0!3m2!1sen!2sin!4v1624223335936!5m2!1sen!2sin"></iframe>
        <p>Rd Number 35,Jubilee Hills </p>
        <p>Hyderabad, Telangana 500033</p>
      </div>
      </div>
      <div className="copyright">
        <p>© Copyright <span>Aravind Maddala</span></p>
        <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Why Adopt</a>
        <a href="#">Pets</a>
        <a href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
