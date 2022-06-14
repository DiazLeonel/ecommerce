import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";

const Cart = () => {

    const { cart, removeItem, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    const quantity = getQuantity()



    return (
        <div className="allCart">
            <h1 className="cartTitle">CART</h1>
            {quantity > 0
                ?
                <div className="cartMap">
                    <div>
                        {cart.map(prod => {
                            return (
                                <div key={prod.id}>
                                    <div className="cartProduct">
                                        <img src={prod.img} alt={prod.title} />
                                        <p>{prod.title}</p>
                                        <p><strong>{prod.quantity}</strong></p>
                                        <p>Price: <strong>€{prod.price}</strong></p>
                                        <p>SubPrice: <strong>€{prod.price * prod.quantity}</strong> </p>
                                        <button className="deleteProduct" onClick={() => removeItem(prod.id)}>🗑</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="botonera">
                        <p>{quantity}</p>
                        <p className="totalPrice">€{totalPrice()}</p>
                        <div className="btnDelete">
                            <button  onClick={vaciar} >VACIAR</button>
                            <button /*onClick={Comprar} to='/finalizarCompra'*/>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
                :
                <div className="anyProducts">
                    <h2 className="text parpadea">No hay productos...</h2>
                    <Link className="returnBtn" to='/'>Volver a Comprar</Link>
                </div>}

        </div >
    )
}

export default Cart