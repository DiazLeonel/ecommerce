import { useState, useEffect } from 'react';
import { getProducts } from "../asyncmock";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProductsCategory } from '../asyncmock';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
            getProductsCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])

    return (
        <div>
            <h1>Productos</h1>
            {
                products.length > 0
                    ? <ItemList products={products} />
                    : <h2>No hay Productos</h2>
            }
        </div>
    )
}

export default ItemListContainer;