import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import '../style.css/NavBar.css';
import {MenuList} from '../helpers/MenuList'; 

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({url,title}, index) =>{
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">{title}</NavLink>
      </li>
    )
  })
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    
    <nav>
      <div className="logo">
      <i className="fas fa-dog"></i>
      <h2>Hooman</h2>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
      <div className="social-links">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-pinterest-p"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-google-plus-g"></i>
      </div>
    </nav>
  )
}

export default NavBar
