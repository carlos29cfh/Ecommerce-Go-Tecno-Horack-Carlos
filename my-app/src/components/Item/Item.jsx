import { Button } from "react-bootstrap";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';
import Globito from '../Globito/Globito';
import './Item.css';

function Item ({item}) {
  const cartContext = useContext(CartContext);

  return (

    <div className='tarjeta'>
            <div className='imagen'>
                <img src={item.image} alt="imagen del articulo" />
            </div>
        <div className='contenido'>
            <div className='tituloDeTarjeta'>{item.title}</div>
            <div className='pieDeTarjeta'>{item.price}</div>
            <Link to={'/item/' + item?.id} className='agregar'>
              <Button variant="primary">Ver Producto</Button>
            </Link>
            <div className='botonSumarCarrito'>
              <Globito isButton onGlobitoClick={() => cartContext.addProducts({quantity: 1, ...item})}>+</Globito>
            </div>
        </div>
    </div>
  )
}

export default Item