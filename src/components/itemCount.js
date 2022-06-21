import { useState } from 'react';
import "../styles/_buttonCount.scss"

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const onIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const onDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='contador'>
            {stock === 0
            ? <h3>no hay</h3>
            : 
            <div>
            <div className='contador-detalle'>
                <button className='buttonCount' onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                
                <button className='buttonCount' onClick={onIncrement}>+</button>
            </div>
            <div className='contador-detalle-buy'>
                <button className='buttonItem' onClick={() => onAdd(quantity)}>Comprar</button>
            </div>
            </div>
        }

        </div>
    )
}

export default ItemCount;