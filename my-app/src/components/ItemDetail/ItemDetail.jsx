import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {

    const cartContext = useContext(CartContext);

    function addHandler(cantidadAgregar){

        cartContext.addProducts({quantity: cantidadAgregar, ...item});
    }

    return (
        <div className='itemDetail'>
                <div className='imagenDetail'>
                    <img className='imageItem' src={ item?.image } alt='imagen del producto' width='250' height='250' />
                </div>
                <div className='detalleProducto'>
                    <h2>{ item?.title }</h2>
                    <p>{ item?.price }</p>
                    <p>Stock: { item?.stock }</p>
                    <div className='countContainer'>
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        {cartContext.isInCart(item.id) &&
                            <Button variant='secondary' onClick={() => console.log(cartContext)} className='botonItemDetail'><Link to='/cart'className='linkItemDetail'>Finalizar Compra ({ cartContext.selectQuantity() } item)</Link></Button>
                        }
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail