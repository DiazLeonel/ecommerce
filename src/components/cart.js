import CartItem from "./CartItem";
import CartContext from "../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, getQuantity , vaciar, totalPrice} = useContext(CartContext)
    const quantity = getQuantity()

    
    return (
        <>
        <h1 className="cartTitle">CART</h1>
            {quantity === 0 ?
                <div className="anyProducts">
                    <h2 className="text parpadea">No hay productos...</h2>
                    <Link className="returnBtn" to='/'>Volver a Comprar</Link>
                </div>
                :
                <div className="allCart">
                    { cart.map(p => <CartItem key={p.id} {...p}/>) }
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
                </div>}

        </>
    )

}
export default Cart;


