import React, { useEffect, useState } from 'react';
/*import ItemCount from '../ItemCount/ItemCount';*/
/*import Item from '../Item/Item';*/
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import '../Item/Item.css';


/*const ItemListContainer = (props) => {
  function carts(){
    console.log('carts function');
}

  return(
    <div className='listcount'>
      <ItemCount initial={0} stock={10} onAdd={carts} />
    </div>
)
}*/

function productos(){
  const myPromise = new Promise((resolve, reject) =>{
    const productsList = [
    {
      id: 1,
      title: 'Reloj Smartwatch Gadnic-RWS10',
      price: '$6.999',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/REL00191/1000x1000-REL00191.jpg&h=220'
    },
    {
      id: 2,
      title: 'Aspiradora Robot Gadnic-Z970',
      price: '$119.500',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/ROB00091/1000x1000-ROB00091.jpg&h=220'
    },
    {
      id: 3,
      title: 'Cámara Deportiva Gadnic-SX10',
      price: '$6.999',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MCDEP013/1000x1000-MCDEP013.jpg&h=220'
    },
    {
      id: 4,
      title: 'Monitor Samsung 24"-F390',
      price: '$33.899',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MON00008/1000x1000-MON00008.jpg&h=220'
    },
    {
      id: 5,
      title: 'Contadora de billetes Gadnic-C4200',
      price: '$24.999',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/CONT0005/1000x1000-CONT0005.jpg&h=220'
    },
    {
      id: 6,
      title: 'Tablet Samsung Galaxy TAB A SM-T515',
      price: '$61.399',
      image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/TABSAM4X/1000x1000-TABSAM4X.jpg&h=220'
    }
    ];
    setTimeout(() =>{
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({mostrar}){
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    productos()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return(
    <div className='listContainer'>
      <ItemList items={products} />
    </div>
  )  
}




export default ItemListContainer