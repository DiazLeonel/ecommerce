import cartLogo from '../img/cart.png'
import '../styles/itemCart.scss'
import ItemListContainer from './itemListContainer'

const Carrito = () => {
    return (
        <div className='cartWidget'>
            <img className='itemCart' src={cartLogo} alt="Cart-widget"/>
            <ItemListContainer />
        </div>
    )
}
export default Carrito;