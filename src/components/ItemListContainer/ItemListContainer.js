import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId}= useParams()
    
    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where('category', "==", categoryId))
                    : productosRef
        getDocs(q)
            .then((resp)=> {
                const productosDB = resp.docs.map((doc)=> ({id : doc.id, ...doc.data()}))
                setProductos(productosDB)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {
                loading
                ? <h3>Cargando...</h3>
                : <ItemList productos={productos}/>
            }
        </div>
    )

}

export default ItemListContainer;