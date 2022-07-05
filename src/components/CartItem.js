import React from 'react'
import { useContext } from "react";
import CartContext from "../context/cartContext";
import trash from "../img/basura.png"

const CartItem = ({title, id, price, img}) => {
    const {removeItem, getQuantity} = useContext(CartContext)
    const quantity = getQuantity()

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className="allCart">
            

            <div className="cartMap">
                <div>
                    <div>
                        <div className="cartProduct">
                            <div>
                                <img src={img} alt={title} />
                            </div>
                            <div>
                                <p>{title}</p>
                            </div>
                            <div>
                                <p>Price: <strong>€{price}</strong></p>
                            </div>
                            <div>
                                <p>SubPrice: <strong>€{price * quantity}</strong> </p>
                            </div>
                            <div>
                                <p><strong>{quantity}</strong></p>
                            </div>
                            <div>
                                <button className="deleteProduct" onClick={() => handleRemove(id)}><img src={trash} alt='logo' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default CartItem