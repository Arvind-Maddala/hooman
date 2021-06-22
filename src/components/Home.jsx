import React from 'react';
import NavBar from './NavBar';
import './style.css/Home.css';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import HomePagePets from './HomePagePets';
import Testimonial from './Testimonial';
import './style.css/DogCard.css'


const Home = () => {
  return (
    <>
    <div className="home">
    </div>
    <div className="home-inner">
      <NavBar/>
      <div className="home-container">
        <div className="home-text">
          <h1>Rescue a Pet</h1>
          <p>World’s largest no-kill rescue and adoption organiza tion with hundreds of dogs, cats, puppies and kittens available for adoption every week.</p>
          <div className="buttons">
            <button className="home-btn btn-1">Learn More</button>
            <button className="home-btn btn-2">Adopt now</button>
          </div>
        </div>
        <div className="home-bg">

        </div>
      </div>
    </div>
    <div className="dog-container">
     <div className="dog-outer">
     <div className="dog-cards">
      <div className="donate">
        <h2>Donate and support us</h2>
        <button className="home-btn btn-1">Donate now</button>
      </div>
        <div className="adoptpup">
          <div className="avatar-1">
          </div>
          <h3>Adopt a Pup</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <button className="dog-buttons db-1">Adopt pup</button>
        </div>
        <div className="adoptdog">
        <div className="avatar-2">
          </div>
          <h3>Adopt a Dog</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <button className="dog-buttons db-2">Adopt dog</button>
        </div>
        <div className="buyfood">
        <div className="avatar-3">
          </div>
          <h3>Buy Food</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <button className="dog-buttons db-3">Buy Food</button>
        </div>
      </div>
     </div>
    </div>
    <div className="progress-bar">
    <ProgressBar done="70"/>
    </div>
    <Testimonial/>
 
    </>
  )
}

export default Home