import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


function productos(category){
  const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    const q = category && query(
      itemsCollection,
      where('category', '==', category)
    );

    return getDocs(q || itemsCollection)
}

function ItemListContainer(){
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() =>{
    
    productos(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        }));
      })
  }, [categoryId]);

  return(
      <div className='listContainer'>
        <ItemList items={products} />
      </div>
  )  
}




export default ItemListContainer