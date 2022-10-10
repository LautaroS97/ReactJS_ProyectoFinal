import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value    
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
        }

        if(values.nombre.length < 4) {
            alert("El nombre ingresado es demasiado corto (mínimo 4 caracteres)")
            return
        }

        if(values.email.length < 7) {
            alert("El correo electrónico ingresado es demasiado corto (mínimo 7 caracteres)")
            return
        }

        if(values.direccion.length < 6) {
            alert("La dirección ingresada es demasiado corta (mínimo 6 caracteres)")
            return
        }

        if(values.telefono.length < 6) {
            alert("El teléfono ingresado es demasiado corto (mínimo 6 caracteres)")
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) =>{
                terminarCompra(doc.id)
            })

    }

    if(cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2 className="checkoutTitulo">
                Checkout
            </h2>
            <hr/>
            <div className="checkoutContainer">
                <form onSubmit={handleSubmit}>
                    <label className="formFieldTitle">Nombre completo</label>
                    <input 
                        className="formField"
                        onChange={handleInputChange}
                        name="nombre"
                        type={'text'} 
                        placeholder=" Nombre y Apellido"
                        value={values.nombre}
                        required
                    /><br/>
                    <label className="formFieldTitle">Correo electrónico</label>
                    <input
                        className="formField"
                        onChange={handleInputChange}
                        name="email"
                        type={'email'} 
                        placeholder=" ejemplo@prueba.com"
                        value={values.email}
                        required
                    /><br/>
                    <label className="formFieldTitle">Dirección</label>
                    <input
                        className="formField"
                        onChange={handleInputChange}
                        name="direccion" 
                        type={'text'} 
                        placeholder=" Calle, número, ciudad."
                        value={values.direccion}
                        required
                    /><br/>
                    <label className="formFieldTitle">Teléfono</label>
                    <input
                        className="formField"
                        onChange={handleInputChange}
                        name="telefono" 
                        type={'tel'} 
                        placeholder=" 54 11 XXXX XXXX"
                        value={values.telefono}
                        required
                    /><br/>
                    <label className="verificacionTitulo">
                        Acepto los <Link to='/Terms'>términos y condiciones</Link>.
                    </label>
                    <input
                        className="verificacionCasilla"
                        name="terminos y condiciones" 
                        type={'checkbox'} 
                        required
                    /><br/>
                    <div className="EnviarContainer">
                        <button className="checkoutEnviar" type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout;