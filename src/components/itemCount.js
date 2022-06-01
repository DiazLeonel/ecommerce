import { useState } from 'react';
import '../styles/style.scss'
const ItemCount = (props) => {


    const [count, setCount] = useState(parseInt(props.initial));

    const onAdd = () => {

        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    const onDecrease = () => {
        if(count > props.initial){
            setCount(count - 1);
        }
    }

    return(
        <div className='contador'>
            <button className='buttonCount' onClick={onDecrease}>-</button>
                <span>{count}</span>
            <button className='buttonCount' onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount;