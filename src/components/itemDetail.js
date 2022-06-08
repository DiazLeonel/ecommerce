import ItemCount from "./itemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/cartContext"

const ItemDetail = ({ id, title, description, img, price, stock, }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity);

        addItem({ id, title, price, quantity, img })
    };



    return (
        <div className="itemDetail">
            <h2>{title}</h2>
            <div className="itemDetailFlex">
                <img src={img} alt={title}></img>
                <p>{description}</p>
            </div>
            <span>€{price}</span>
            {quantity > 0
                ? <Link className="buttonItem" to='/cart'>Ver Carrito</Link>
                : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />}
        </div>
    )
}

export default ItemDetail;