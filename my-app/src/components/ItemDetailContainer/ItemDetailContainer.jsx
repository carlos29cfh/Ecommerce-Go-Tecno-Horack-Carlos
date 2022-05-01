import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function producto (){
    const myPromise = new Promise((resolve, reject) =>{
      const item = {
        id: 1,
        title: 'Reloj Smartwatch Gadnic-RWS10',
        stock: '10',
        price: '$6.999',
        image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/REL00191/1000x1000-REL00191.jpg&h=220'
      };
      setTimeout(() =>{
        resolve(item);
      }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        producto()
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

  return (
    <div className='itemDetailConteiner'>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer