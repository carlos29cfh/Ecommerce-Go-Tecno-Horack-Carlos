import React from 'react';
import './LogoTienda.css';
import logoTienda from './logo.png';
function LogoTienda (props) {
    return (
            /*<div className='logo'><h1>LaPasteleria</h1></div>*/
            <img className='logoTienda' src={logoTienda} alt='logo de la tienda'></img>
    );
}

export default LogoTienda;