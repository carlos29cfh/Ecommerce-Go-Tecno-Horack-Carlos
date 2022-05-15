import { useContext } from 'react';
import CartContext from '../../CartContext/CartContext';
import Globito from '../Globito/Globito';
import './CartItem.css';

function CartItem({ item }) {
    const cartContext = useContext(CartContext);

    return(
        <>
            <div className='cartItem'>
                <div className='cartImage'>
                    <img src={ item?.image} alt='imagen producto' />
                </div>
                <p>{ item?.title }</p>
                <p>{ item?.price }</p>
            </div>
            <div className='globitoClose'>
                <Globito isButton onGlobitoClick={() => cartContext.removeProducts(item.id)}>X</Globito>
            </div>
            <div className='xQuantity'>
                <Globito>{ item?.quantity }</Globito>
            </div>
        </>
    )
}

export default CartItem