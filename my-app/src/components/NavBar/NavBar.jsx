import React from 'react';
import './NavBar.css';
import logoCarrito from './cartWidget.png';


function NavBar(props) {
    return (
        <div>
            <div className='logo'><h1>LaPasteleria</h1></div>
            <ul className='navbar'>
                <a href="/#">Inicio</a>
                <a href="/#">Productos</a>
                <a href="/#">Nosotros</a>
            </ul>
            <a href="/#"><img className='logoCarrito' src={logoCarrito} alt='imagenDeCarrito'></img></a>
        </div>
    );
}

export default NavBar;