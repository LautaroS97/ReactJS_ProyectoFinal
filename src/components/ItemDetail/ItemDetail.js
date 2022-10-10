import Contador from "../Counter/Counter";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import Select from "../Select/Select";

const ItemDetail = ({item}) => {

    const{addToCart, isInCart} = useCartContext()
    
    const [cantidad, setCantidad] = useState(1)
    const [variante, setVariante] = useState(item.variant[0].value)
    
    const handleAgregar = () => {
        const itemToCart={
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            variante: variante,
            cantidad
        }
        addToCart(itemToCart)
    }

    return(
        <div>
            <h2 className="checkoutTitulo">Detalles del producto</h2><hr/>
            <div className="boxContainerDetail">
                <div className="containerDetail">
                    <img src={item.img}/>
                    <h2 className="containerDetailNombre">{item.nombre}</h2>
                    <p className="containerDetailInfo">Descripción: {item.desc}</p><hr/>
                    <p className="containerDetailInfo">Categoría: {item.category}</p><hr/>
                    <h3 className="containerDetailInfo">Precio: AR$ {item.precio}</h3><hr/>
                    <p className="containerDetailInfo">Existencias: {item.stock}</p><hr/>
                    <h1 className="containerSelector">
                        <Select options={item.variant} onSelect={setVariante}/>
                    </h1><hr/>
                    {
                        isInCart(item.id)
                        ? <div className="terminarCompraBox"><Link className="terminarCompra" to="/cart">Terminar mi compra</Link></div>
                        : <h1 className="containerDetailContador">
                        <Contador max={item.stock}
                                counter={cantidad}
                                setCounter={setCantidad}
                                handleAgregar={handleAgregar}/>
                        </h1>
                    }
                    
                </div>  
            </div>
        </div>
    )
}

export default ItemDetail;