import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext'
import Globito from '../Globito/Globito';
import './CartWidget.css';
import logoCarrito from './cart.png';

function CartWidget() {
    const cartContext = useContext(CartContext);

  return (
    <div className='cart-item'>
        <Link to='/Cart'>
        <img className='logoCarrito' src={logoCarrito} alt='imagen del carrito'></img>   
        </Link>
        {cartContext.products.length !== 0 &&
            <div className='cart-globito'>
                <Globito>
                    { cartContext.selectQuantity()}
                </Globito>
            </div>
            }
    </div>
  )
}

export default CartWidget

