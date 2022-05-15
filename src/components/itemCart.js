import cartLogo from '../img/cart.png'
import '../styles/itemCart.scss'
const Carrito = () => {
    return (
        <div className='cartWidget'>
            <img className='itemCart' src={cartLogo} alt="Cart-widget"/>
            <span className='contador'>0</span>
        </div>
    )
}
export default Carrito;