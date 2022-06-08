import { useState, useEffect } from "react";
import { getProductsId } from "../asyncmock";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()


    useEffect(() => {
        getProductsId(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer;