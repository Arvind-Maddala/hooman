import React, {useState, useEffect} from 'react';
import DogCard from './DogCard';
import './style.css/DogCard.css';
import NavBar from './NavBar';

const Pets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() =>{
    let mounted = true
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response =>response.json())
    .then(data =>{
      if(mounted) {
        setPets(data.message)
       }
    })
    .catch(err =>console.error(err))
    return (()=> {
      mounted = false
    })
  },[])
  return (
    <>
    <div className="main">
      </div>
      <div className="main-inner">
      <NavBar/>
      <div className="text-overlay">
      <h2>Choose your next pet</h2>
      <p>World’s largest no-kill rescue and adoption</p>
      </div>
      </div>
      <div className="dogCards">
      <DogCard data={pets}/>
    </div>
    </>
   
  )
}

export default Pets;
