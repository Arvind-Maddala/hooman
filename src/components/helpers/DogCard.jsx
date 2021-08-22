import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import shortid from 'shortid';
import '../style.css/DogCard.css';
import BtnComponent from '../helpers/BtnComponent';

const DogCard = (props) => {
  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])
  return (
    <>
    {props.data.map((p)=>{
      return (
        <div data-aos="fade-up" key={shortid.generate()} className="card">
          <img  src={p} alt="dog" />
          <BtnComponent styleName="CardButton" text="Adopt me!"/>
        </div>
      )
    })}
    </>
  )}

export default DogCard
