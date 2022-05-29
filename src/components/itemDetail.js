
const ItemDetail = ({ title, description, img, price }) => {
    return (
        <div className="itemDetail">
            <h2>{title}</h2>
            <div className="itemDetailFlex">
                <img src={img} alt={title}></img>
                <p>{description}</p>
            </div>
            <span>U$D{price}</span>
            <button className="buttonItem">Comprar</button>
            <button className="buttonItem">Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail;