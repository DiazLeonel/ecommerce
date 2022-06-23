import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import trash from "../img/basura.png"

const Cart = () => {

    const { cart, removeItem, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    const quantity = getQuantity()


    return (
        <div className="allCart">
            <h1 className="cartTitle">CART</h1>
            {quantity > 0
                ? (
                    <div className="cartMap">
                        <div>
                            {cart.map(prod => {
                                return (
                                    <div key={prod.id}>
                                        <div className="cartProduct">
                                            <div>
                                                <img src={prod.img} alt={prod.title} />
                                            </div>

                                            <div>
                                                <p>{prod.title}</p>
                                            </div>
                                            <div>
                                                <p>Price: <strong>€{prod.price}</strong></p>
                                            </div>
                                            <div>
                                                <p>SubPrice: <strong>€{prod.price * prod.quantity}</strong> </p>
                                            </div>
                                            <div>
                                                <p><strong>{prod.quantity}</strong></p>
                                            </div>
                                            <div>
                                                <button className="deleteProduct" onClick={() => removeItem(prod.id)}><img src={trash} alt='logo' /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div>
                        </div>
                        <div className="botonera">
                            <p>{quantity}</p>
                            <p className="totalPrice">€{totalPrice()}</p>
                            <div className="btnDelete">
                                <button onClick={vaciar} >VACIAR</button>
                                <Link to='/order'>
                                    <button>Generar Orden</button>
                                </Link> 
                                <Link to={'/'}>
                                <button>Seguir Comprando</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="anyProducts">
                        <h2 className="text parpadea">No hay productos...</h2>
                        <Link className="returnBtn" to='/'>Volver a Comprar</Link>
                    </div>)}
        </div >
    )
}
export default Cart;


