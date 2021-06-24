import React from 'react';
import shortid from 'shortid';
import '../style.css/DogCard.css';
import BtnComponent from '../helpers/BtnComponent';

const DogCard = (props) => {
  console.log(props)
  
  return (
    <>
    {props.data.map((p)=>{
      return (
        <div key={shortid.generate()} className="card">
          <img  src={p} alt="dog" />
          <BtnComponent styleName="CardButton" text="Adopt me!"/>
        </div>
      )
    })}
    </>
  )}

export default DogCard
