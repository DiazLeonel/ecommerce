import { useContext } from "react";
import CartContext from "../context/cartContext";

const Cart = () => {

    const { cart, removeItem, vaciar } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <div>
                                <p>{prod.title}</p>
                                <p>{prod.quantity}</p>
                                <p>€{prod.price}</p>
                                <p>€{prod.price * prod.quantity}</p>
                                {/* <img src={prod.img} alt={prod.title} /> */}
                                <button onClick={() => removeItem(prod.id)}>x</button>
                                <hr></hr>
                            </div>
                            <div>
                                <button onClick={vaciar}>VACIAR</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div >
    )
}

export default Cart