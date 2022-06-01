import { useState, useEffect } from "react";
import { getProductsId } from "../asyncmock";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct]= useState();

    const { productId } = useParams()


    useEffect(()=>{
        getProductsId(productId).then(response =>{
            setProduct(response)
        })
    }, [productId])
    return(
        <div>
            <ItemDetail {...product}/> 
        </div>
    )
}
export default ItemDetailContainer;