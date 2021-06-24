import React,{useState,useEffect} from 'react';
import DogCard from '../helpers/DogCard';


const HomePagePets = () => {
  const [pets, setPets] = useState([]);
  
  useEffect(() =>{
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response =>response.json())
    .then(data =>setPets(data.message))
    .catch(err =>console.error(err))
  },[])
  return (
   <div className="home-page-pets">
   <h2>Meet Your Perfect Pet</h2>
   <p>World’s largest no-kill rescue and adoption organization</p>
    <div className="dogCards">
      <DogCard data={pets}/>
    </div>
   </div>
  )
}

export default HomePagePets
