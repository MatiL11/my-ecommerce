import React, {useState, useEffect} from "react";
import TextItemList from "./TextItemList";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import "./ItemListContainer.css";

export const ItemListContainer = ({texto}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    
    } ,[categoriaId]);
        

    return (
        <div className="itemlist__container">
            <TextItemList greeting={texto}/>
            <div className="data__container">
                <ItemList data={data} />
            </div>
            
        </div>
        );
}

export default ItemListContainer;