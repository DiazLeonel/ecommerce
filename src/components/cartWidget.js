import cartLogo from '../img/cart.png'
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()


    return (
        <Link to='/cart' className='cartWidget'>
            <img className='itemCart' src={cartLogo} alt="Cart-widget" />
            {quantity}
        </Link>
    )
}
export default CartWidget;