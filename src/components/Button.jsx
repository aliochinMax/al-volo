import React, { useState } from 'react';
import '../styles/Button.scss'

function Button ({text, link}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={link}>
          <button 
      className={`${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >{text}</button>
        
        </a>
        )
}

export default Button;