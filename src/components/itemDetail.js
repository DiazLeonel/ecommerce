import ItemCount from "./itemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ title, description, img, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuantity(quantity);
    };


    return (
        <div className="itemDetail">
            <h2>{title}</h2>
            <div className="itemDetailFlex">
                <img src={img} alt={title}></img>
                <p>{description}</p>
            </div>
            <span>€{price}</span>
            {quantity > 0 ? <Link className="buttonItem" to='/cart'>Confirmar</Link> : <ItemCount stock={stock} onAdd={handleOnAdd}/>}
        </div>
    )
}

export default ItemDetail;