import { NavLink } from "react-router-dom";


const Item = ({ id, title, price, img, category, stock }) => {
    return (
        <>
            {stock < 1
                ?
                <div className="card cardOut">
                    <span className="title">{title}</span>
                    <img src={img} alt={title}></img>
                    <span className="price">€ {price}</span>
                    <NavLink to={`/${category}/${id}/${title}`} className='buttonItem'>Ver Detalle</NavLink>
                </div>
                :
                <div className="card">
                    <span className="title">{title}</span>
                    <img src={img} alt={title}></img>
                    <span className="price">€ {price}</span>
                    <NavLink to={`/${category}/${id}/${title}`} className='buttonItem'>Ver Detalle</NavLink>
                </div>

            }
        </>
    )
}

export default Item;