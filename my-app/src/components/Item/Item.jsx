import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item ({item}) {
  return (
    /*<div className='contenedorDeTarjeta'>*/
    <div className='tarjeta'>
            <div className='imagen'>
                <img src={item.image} alt="imagen del articulo" />
            </div>
        <div className='contenido'>
            <div className='tituloDeTarjeta'>{item.title}</div>
            <div className='pieDeTarjeta'>{item.price}</div>
            <Link to={'/item/' + item?.id} className='agregar'>
              <button>Ver Producto</button>
            </Link>
        </div>
    </div>
    /*</div>*/
  )
}

export default Item