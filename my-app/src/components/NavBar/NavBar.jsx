import React from 'react';
import './NavBar.css';
import logoCarrito from './cartWidget.png';
import { NavLink } from 'react-router-dom';


function NavBar(props) {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink to='/' className={nav => nav.isActive ? 'nav-active' : ''}>Inicio</NavLink></li>
                <li><NavLink to='/category/relojes' className={nav => nav.isActive ? 'nav-active' : ''}>Relojes</NavLink></li>
                <li><NavLink to='/category/computacion' className={nav => nav.isActive ? 'nav-active' : ''}>Computación</NavLink></li>
                <li><NavLink to='/category/limpieza' className={nav => nav.isActive ? 'nav-active' : ''}>Limpieza</NavLink></li>
            </ul>
            <a href="/#"><img className='logoCarrito' src={logoCarrito} alt='imagenDeCarrito'></img></a>
        </div>
    );
}

export default NavBar;