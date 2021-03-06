import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const cartContext = useContext(CartContext);

  return (
      <div className="Cart">
        {cartContext.products.map(p =>
          <CartItem item={p} key={p.id} />
        )}
        {cartContext.products.length !== 0 ?
          <div className="total">
            <p>Importe Total: ${cartContext.precioTotal()}</p>
            <Link to="/Checkout">
              <button>Finalizar Compra</button>
            </Link>
          </div> :
          <>
            <h2>No hay productos en el carrito</h2>
            <button className="Inicio">
              <Link to="/" className="inicioLink">
                Inicio
              </Link>
            </button>
          </>
        }
      </div>
  );
}

export default Cart;
