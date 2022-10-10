import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div className="containerCard">
            <div className="cardList">
                <div className="card">
                    <img className="imagenProducto" src={producto.img}/>
                    <h3 className="nombreProducto">{producto.nombre}</h3>
                    <h4 className="infoDesc">Descripción: {producto.desc}</h4>
                    <div>
                        <h2 className="infoPrecio">Precio: AR$ {producto.precio}</h2>
                    </div>
                        {
                            producto.stock>0
                            ? <div className="verMas">
                                <Link to={`/item/${producto.id}`} className="verMasButton">Ver detalles...</Link>
                            </div>
                            : <h3 className='noHayStock'>PRODUCTO NO DISPONIBLE</h3>
                        }
                </div>
            </div>
        </div>
    )
}

export default Item;