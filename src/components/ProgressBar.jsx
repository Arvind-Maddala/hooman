import React, {useState} from 'react';
import './style.css/ProgressBar.css'

const ProgressBar = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress-body">
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
