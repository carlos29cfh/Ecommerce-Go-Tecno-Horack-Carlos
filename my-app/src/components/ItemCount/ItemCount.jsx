import React, { useState } from 'react';

import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    function sumar(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function restar(){
        if (count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div className='count'>
            <div>
                <button className='boton1' onClick={() => sumar()}>+</button>
                <input className='countinput' readOnly value={count} />
                <button className='boton1' onClick={() => restar()}>-</button>
                <button className='boton2' onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount