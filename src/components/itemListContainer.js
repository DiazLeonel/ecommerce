import React, { useState, useEffect } from 'react';
import { getProducts } from "../asyncmock";
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h1>Productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;