import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logoTienda from '../LogoTienda/logo.png';
import '../LogoTienda/LogoTienda.css';


function NavBar(props) {
    return (
        <div>
            <Link to='/'>
                <img className='logoTienda' src={logoTienda} alt='imagen de la tienda'></img>
            </Link>
            <ul className='navbar'>
                <li><NavLink to='/' className={nav => nav.isActive ? 'nav-active' : ''}>Inicio</NavLink></li>
                <li><NavLink to='/category/relojes' className={nav => nav.isActive ? 'nav-active' : ''}>Relojes</NavLink></li>
                <li><NavLink to='/category/computacion' className={nav => nav.isActive ? 'nav-active' : ''}>Computación</NavLink></li>
                <li><NavLink to='/category/limpieza' className={nav => nav.isActive ? 'nav-active' : ''}>Limpieza</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;