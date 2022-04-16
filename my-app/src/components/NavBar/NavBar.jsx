import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <div className='logo'><h1>LaPasteleria</h1></div>
            <ul className='navbar'>
                <a href="/#">Inicio</a>
                <a href="/#">Productos</a>
                <a href="/#">Nosotros</a>
            </ul>
        </div>
    );
}

export default NavBar;