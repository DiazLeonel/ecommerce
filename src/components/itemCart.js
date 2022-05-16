import cartLogo from '../img/cart.png'
import '../styles/itemCart.scss'

const Carrito = () => {
    return (
        <div className='cartWidget'>
            <img className='itemCart' src={cartLogo} alt="Cart-widget"/>
            0
        </div>
    )
}
export default Carrito;