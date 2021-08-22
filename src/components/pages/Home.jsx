import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import NavBar from '../layouts/NavBar';
import ProgressBar from '../layouts/ProgressBar';
import HomePagePets from '../layouts/HomePagePets';
import Testimonial from '../helpers/Testimonial';
import BtnComponent from '../helpers/BtnComponent';
import '../style.css/Home.css';
import '../style.css/DogCard.css'


const Home = () => {
  useEffect(() => {
   Aos.init({duration: 2000});
  }, [])
  return (
    <>
    <div className="home">
    <NavBar/>
    <div className="home__context">
    <div className="home-text">
      <h1>Rescue a Pet</h1>
      <p>World’s largest no-kill rescue and adoption organiza tion with hundreds of dogs, cats, puppies and kittens available for adoption every week.</p>
      <div className="buttons">
        <BtnComponent text="learn more" styleName="btn-1"/>
        <BtnComponent text="Adopt now" styleName="btn-2"/>
      </div>
    </div>
    <div className="home-bg">

    </div>
    </div>
    </div>
        
    <div data-aos="fade-up" className="dog-container">
     <div className="dog-outer">
     <div className="dog-cards">
      <div className="donate">
        <h2>Donate and support us</h2>
        <BtnComponent text="Donate now" styleName="btn-3"/>
      </div>
        <div data-aos="fade-up"  className="adoptpup">
          <div className="avatar-1">
          </div>
          <h3>Adopt a Pup</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <BtnComponent text="Adopt pup" styleName="dog-buttons db-1"/>
        </div>
        <div data-aos="fade-up" className="adoptdog">
        <div className="avatar-2">
          </div>
          <h3>Adopt a Dog</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <BtnComponent text="Adopt dog" styleName="dog-buttons db-2"/>
        </div>
        <div data-aos="fade-up" className="buyfood">
        <div className="avatar-3">
          </div>
          <h3>Buy Food</h3>
          <p>World’s largest no-kill rescue and adoption organization with hundreds of dogs, cats, puppies and kittens available</p>
          <BtnComponent text="Buy Food" styleName="dog-buttons db-3"/>

        </div>
      </div>
     </div>
    </div>
    <div data-aos="fade-up"  className="progress-bar">
    <ProgressBar done="70"/>
    </div>
    <div data-aos="fade-up" >
    <HomePagePets />
    </div>
    <Testimonial />
    
     </>
  )
}

export default Home