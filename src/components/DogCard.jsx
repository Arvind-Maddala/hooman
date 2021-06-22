import React from 'react';
import shortid from 'shortid';
import './style.css/DogCard.css'

const DogCard = (props) => {
  console.log(props)
  
  return (
    <>
    {props.data.map((p)=>{
      return (
        <div key={shortid.generate()} className="card">
          <img  src={p} alt="dog" />
          <button className="CardButton">Adopt me!</button>
        </div>
      )
    })}
    </>
  )}

export default DogCard
