import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {

    const cartContext = useContext(CartContext);

    function addHandler(cantidadAgregar){
        /*setTotalDeProductos(cantidadAgregar);*/
        cartContext.addProducts({quantity: cantidadAgregar, ...item});
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
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        <button onClick={() => console.log(cartContext.products)} className='botonesCarrito' >Mostrar Carrito</button>
                        <button onClick={() => cartContext.removeProducts(item.id)} className='botonesCarrito' >Quitar</button>
                        <button onClick={() => cartContext.clear()} className='botonesCarrito' >Borrar</button>
                        <button onClick={() => console.log(cartContext.isInCart(item.id))} className='botonesCarrito' >Contenido</button>
                        <button onClick={() => console.log(cartContext.selectQuantity())} className='botonesCarrito' >Cantidad</button>
                        
                        {cartContext.products.length &&
                            <button onClick={() => console.log(cartContext)} className='botonItemDetail'><Link to='/cart'className='linkItemDetail'>Finalizar Compra ({ cartContext.selectQuantity() } items)</Link></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail