import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: '¿Está seguro de que desea vaciar el carrito?',
            text: 'Esta acción no puede revertirse.',
            showCancelButton: true,
            confirmButtonText: 'ELIMINAR',
            cancelButtonText: 'RETROCEDER',
            buttonStyling: false
        }).then((result) => {
            if(result.isConfirmed){
                setCart([])
            }
        })
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: '¡Compra exitosa!',
            text: `Tu número de orden es: ${id}`,
            icon: 'sucess',
            confirmButtonText: 'Continuar'
        })
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad*item.precio, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra
        }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCartContext = () => {
    return useContext(CartContext)
}