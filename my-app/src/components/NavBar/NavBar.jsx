import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logoTienda from '../LogoTienda/logo.png';
import '../LogoTienda/LogoTienda.css';
import { Navbar, Nav, Container  } from 'react-bootstrap';


function NavBar(props) {
    return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/" className='contenedor-imagen'>
      <img src= {logoTienda} className='logo-Tienda' alt='logo de la tienda' />
    </Link>
    <Nav className="mx-auto">
      <Nav.Link as={Link} to="/category/relojes">Relojes</Nav.Link>
      <Nav.Link as={Link} to="/category/computacion">Computación</Nav.Link>
      <Nav.Link as={Link} to="/category/limpieza">Limpieza</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
</>
    );
}

export default NavBar;