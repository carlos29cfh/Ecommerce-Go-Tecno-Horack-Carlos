import React from 'react';
import './Item.css';

function Item ({item}) {
  return (
    <div className='contenedorDeTarjeta'>
    <div className='tarjeta'>
            <div className='imagen'>
                <img src={item.image} alt="imagen del articulo" />
            </div>
        <div className='contenido'>
            <div className='tituloDeTarjeta'>{item.title}</div>
            <div className='pieDeTarjeta'>{item.price}</div>
            <button className='agregar'>Agregar al Carrito</button>
        </div>
    </div>
    </div>
  )
}

export default Item