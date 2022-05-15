import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

function Cart() {

  const cartContext = useContext(CartContext);

  return (
    <div>
       <div className='Cart'>
         {cartContext.products.map(p => <CartItem item={p} key={p.id}/>)}
         {cartContext.products.length !== 0 ? 
          <div className='total'>
            <p>Importe Total: ${cartContext.precioTotal()}</p>
            <button>Finalizar Compra</button>
          </div> :
          <>
            <h2>No hay productos en el carrito</h2>
            <button className='Inicio'><Link to='/' className='inicioLink' >Inicio</Link></button>
          </>
          }
       </div>
       {/*<div><p className='cartText'>Gracias por su compra!!</p></div>*/}
    </div>

  )
}

export default Cart