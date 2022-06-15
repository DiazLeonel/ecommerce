import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import Loader from "./loading";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()


    useEffect(() => {
        

        getDoc(doc(db, 'products', productId )).then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <Loader/>
    }


    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer;