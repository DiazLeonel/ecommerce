import ItemCount from './itemCount'


const Item = ({ id, title, price, img, stock }) => {
    return (
        <div className="card">
                <span className="title">{title}</span>
                <img src={img} alt={title}></img>
                <span className="price">${price}</span>
                <ItemCount initial='0' stock={stock}/>
                <button className='buttonItem'>Comprar</button>
                <button className='buttonItem'>Agregar al carrito</button>
        </div>
    )
}

export default Item;