import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
  return (
      <div className='itemDetail'>
          <div className='ladoA'>
              <div className='imagenDetail'>
                  <img src={ item?.image } alt='imagen del producto' />
              </div>
          </div>
          <div className='ladoB'>
              <div className='detalleProducto'>
                  <h2>{ item?.title }</h2>
                  <p>{ item?.price }</p>
                  <p>Stock: { item?.stock }</p>
                  <div className='countContainer'>
                    <ItemCount initial={0} stock={10} onAdd={() => {}} />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ItemDetail