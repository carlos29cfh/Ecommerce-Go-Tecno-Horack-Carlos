import React from 'react'
import './Globito.css';

function Globito({ children, isButton, onGlobitoClick }) {
  return (
    <div className={`globito ${isButton ? 'globito-button' : ''}`} onClick={() => isButton && onGlobitoClick()}>
        { children }
    </div>
    
  )
}

export default Globito