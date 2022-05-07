import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {

    const [totalDeProductos, setTotalDeProductos] = useState(null);
    
    function addHandler(cantidadAgregar){
        setTotalDeProductos(cantidadAgregar);
    }
  return (
      <div className='itemDetail'>
          <div className='ladoA'>
              <div className='imagenDetail'>
                  <img className='imageItem' src={ item?.image } alt='imagen del producto' />
              </div>
          </div>
          <div className='ladoB'>
              <div className='detalleProducto'>
                  <h2>{ item?.title }</h2>
                  <p>{ item?.price }</p>
                  <p>Stock: { item?.stock }</p>
                  <div className='countContainer'>
                      {totalDeProductos ?
                      <button className='botonItemDetail'><Link to='/cart'className='linkItemDetail'>Finalizar Compra ({ totalDeProductos } item)</Link></button> :
                    <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                      }
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ItemDetail