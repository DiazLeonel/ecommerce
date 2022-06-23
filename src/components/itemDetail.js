import ItemCount from "./itemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import '../styles/style.scss';
import { useNotification } from '../notification/notification';


const ItemDetail = ({ id, title, description, img, price, stock, }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const { setNotification } = useNotification()
    const handleOnAdd = (quantity) => {

        setQuantity(quantity)
        setNotification("success", "Se agregó correctamente a su compra")

        addItem({ id, title, price, quantity })
    }

    console.log(<ItemCount />)

    return (
        <div className="itemDetail">
            <div className="div1">
                <img src={img} alt={title}></img>
            </div>
            <div className="div2">
                <h2>{title}</h2>
            </div>
            <div className="div3">
                <div className="Dprice">
                    <p>{description}</p>
                    <span>€{price}</span>
                </div>
                <div className="Counter">
                    {quantity > 0
                        ? <Link className="btnItem" to='/cart'>Ver Carrito</Link>
                        : <ItemCount className="btnCount" stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />}
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;