import { useState } from 'react';
import '../styles/style.scss'
const ItemCount = ({ stock, initial = 1, onAdd }) => {


    const [count, setCount] = useState(initial);


    const onIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const onDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='contador'>
            <div className='contador-detalle'>
                <button className='buttonCount' onClick={onDecrease}>-</button>
                <span>{count}</span>
                <button className='buttonCount' onClick={onIncrement}>+</button>
            </div>
            <div className='contador-detalle-buy'>
                <button className='buttonItem' onClick={() => onAdd(count)}>Comprar</button>
            </div>

        </div>
    )
}

export default ItemCount;