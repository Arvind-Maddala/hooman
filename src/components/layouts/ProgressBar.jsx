import React, {useState, useEffect} from 'react';
import '../style.css/ProgressBar.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const ProgressBar = ({done}) => {
  useEffect(() => {
    Aos.init({duration: 2000});
   }, [])
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 1000);
	
	return (
		<div data-aos="fade-up" className="progress-body">
      <div className="progress-left">
        <h1>About the Sanctuary</h1>
        <p>World’s largest no-kill rescue and adoption organiza tion with hundreds of dogs, cats, puppies and kittens available for adoption</p>
      <div className="progress">
        
        <div className="progress-done" style={style}>
          {done}%
        </div>
        
      </div>
      <button className="donate-btn">help vaccinated</button>
      </div>
    <div className="progress-bg">
        
      </div>
    </div>
	)
}


export default ProgressBar
