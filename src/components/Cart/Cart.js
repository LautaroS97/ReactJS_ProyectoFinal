import { CartContext, useCartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useCartContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className="carritoVacioMsj">
                <center><h2>¡Ups! El carrito está vacío...</h2></center>
                <hr/>
                <Link to="/" className='volverComprar'>Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div>
            <h2 className="checkoutTitulo">Carrito de compras</h2>
            <hr/>
            <div className="cartBox">
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <h4>Precio: AR$ {item.precio}</h4>
                    <h4>Cantidad: {item.cantidad}</h4>
                    <h4>Variante: {item.variante}</h4>
                    <button className="tachito" onClick={() => removeItem(item.id)}><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}
            </div>
        
            <h3 className="totalCompra">Total: AR${cartTotal()}</h3>
            <div className="botonesFinales">
            <button onClick={emptyCart} className="vaciarCarrito">Vaciar el carrito</button>
            <Link className="finalizarCompra" to="/Checkout">Finalizar compra</Link>
            </div>
        </div>
    ) 
}

export default Cart;