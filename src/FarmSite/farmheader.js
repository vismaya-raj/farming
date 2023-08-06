


import React, { useState } from 'react';
import { Menubar } from './Menubar';
import { Button } from '@material-ui/core';
import './style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';
// import './hire.css';
// import hazerlogo from '../assets/logo.png'
// import { motion } from 'framer-motion';

function FarmHeader() {
  const [iconState, setIconState] = useState('fas fa-bars')
  const [menuState, setMenuState] = useState('nav-menu')

  const handleClick = () => {
    if (iconState === 'fas fa-bars') {
      setIconState('fas fa-times')
      setMenuState('nav-menu active')
    }
    else {
      setIconState('fas fa-bars')
      setMenuState('nav-menu  ')
    }
   
  }



  return (
    <nav className='navbar-items'>
      
      <div className='menu-icons'>
        <Button onClick={handleClick}><i className={iconState}></i></Button>
      </div>
     
      
    

  
      <div onClick={handleClick}>
        <ul className={menuState}>
          {Menubar.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}
                  className={item.cName}>
                  {item.title}
                </a>
              </li>

            )
          })}

        </ul>
      </div>
<a href='/cart'><ShoppingCartIcon style={{color:'black'}}/></a>
      
 
    </nav>
    
  )
}

export default FarmHeader;
