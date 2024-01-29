import React, { useState } from 'react';
import '../styles/NavButton.scss'

function NavButton ({text, link}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={link}>
          <button 
      className={`nav-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >{text}</button>
        
        </a>
        )
}

export default NavButton;