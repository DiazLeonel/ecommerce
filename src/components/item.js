import { NavLink } from "react-router-dom";


const Item = ({ id, title, price, img, category }) => {
    return (
        <div className="card">
            <span className="title">{title}</span>
            <img src={img} alt={title}></img>
            <span className="price">€ {price}</span>

            <NavLink to={`/${category}/${id}/${title}`} className='buttonItem'>Ver Detalle</NavLink>
        </div>
    )
}

export default Item;