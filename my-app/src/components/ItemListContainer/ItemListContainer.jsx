import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


const ItemListContainer = (props) => {
  function carts(){
    console.log('carts function');
}

  return(
    <div className='listcount'>
      <ItemCount initial={0} stock={10} onAdd={carts} />
    </div>
)
}





export default ItemListContainer