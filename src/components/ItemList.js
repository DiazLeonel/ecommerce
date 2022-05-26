
import Item from "./item";

const ItemList= ({products}) => {
    return(
        <div className="itemListGrid">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList;