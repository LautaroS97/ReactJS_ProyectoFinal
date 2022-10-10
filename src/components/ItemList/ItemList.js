import Item from "../Item/Item";

const ItemList = ({productos = []}) => {

    return(
        <div>
            <h2 className="checkoutTitulo">PRODUCTOS</h2>
            <hr/>
            <div>
                <div className="cardList">
                    {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemList;