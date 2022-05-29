import { useState, useEffect } from "react";
import { getProductsId } from "../asyncmock";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct]= useState();
    useEffect(()=>{
        getProductsId('4').then(response =>{
            setProduct(response)
        })
    }, [])
    return(
        <div>
            <ItemDetail {...product}/> 
        </div>
    )
}
export default ItemDetailContainer;