import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import trash from "../img/basura.png"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { db } from "../services/firebase";
import OrderEnd from "./form";

const Cart = () => {

    const { cart, removeItem, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    const quantity = getQuantity()

    
    const createOrder = () => {

        const objOrder = {
            
            buyer: {
                name: '',
                email: '',
                phone: '',
            },
            items: cart,
            total: totalPrice()
        }
    const ids = cart.map(prod => prod.id)

    const collectionRef = collection(db, 'products')

    const batch = writeBatch(db)

    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if (dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })
        }).then(() => {
            if (outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')

                return addDoc(collectionRef, objOrder)

            } else {
                return Promise.reject({ type: 'out_of_stock', products: outOfStock })
            }
        }).then(({ id }) => {
            batch.commit()
            `${id}`
            vaciar()
        }).catch(e => {
            console.log(e)
        }) 
    }

    console.log(createOrder)
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
                            <OrderEnd/>
                        </div>
                        <div className="botonera">
                            <p>{quantity}</p>
                            <p className="totalPrice">€{totalPrice()}</p>
                            <div className="btnDelete">
                                <button onClick={vaciar} >VACIAR</button>
                                {/* <Link to='/order'>
                                    <button>Generar Orden</button>
                                </Link> */}
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
export default Cart