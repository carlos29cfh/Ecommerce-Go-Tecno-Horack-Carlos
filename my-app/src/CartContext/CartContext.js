import { createContext } from 'react';
import React, { useState } from 'react'

const CartContext = createContext({
    products: [],
    addProducts: () => {},
    removeProducts: () => {},
    clear: () => {},
    isInCart: () => {},
    selectQuantity: () => {},
    precioTotal: () => {}
});

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const addProducts = (products) => {
        const itemIndex = productList.findIndex(item => item.id === products.id)
        if (itemIndex !== -1) {
            setProductList(productList.map(p => p.i === products.id ? {...p, quantity: p.quantity + products.quantity} : p));
        }
        else {
            setProductList([products, ...productList]);
        }
    }

    const removeProducts = (id) => {
        const indexRemove = productList.findIndex(item => item.id === id);
        if (productList[indexRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !==id));
        } else{
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity -1} : p));
        }
    }

    const clear = () => {
        setProductList([]);
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    const selectQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    const precioTotal = () => {
        return productList.reduce((total, value) => {
            return total + value.price*value.quantity
        }, 0)
    }

    return (
    <CartContext.Provider value={{
        products: productList,
        addProducts,
        removeProducts,
        clear,
        isInCart,
        selectQuantity,
        precioTotal
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;