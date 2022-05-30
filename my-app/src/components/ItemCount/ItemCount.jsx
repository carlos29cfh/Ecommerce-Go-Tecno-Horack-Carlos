import { Button } from "react-bootstrap";
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
                <Button variant="danger" className="botonSumar" onClick={() => sumar()}>+</Button>
                <input className='countinput' readOnly value={count} />
                <Button variant="danger" className="botonRestar" onClick={() => restar()}>-</Button>
                <Button variant="primary" className="botonAgregar" onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount