import React, {useState, useEffect} from "react";
import TextItemList from "./TextItemList";
import ItemList from "./ItemList";
import {products} from "../../mock/products";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({texto}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(product => product.category === categoriaId)));
        } else{
            getData.then(res => setData(res));
        }

    } ,[categoriaId]);
        

    return (
        <>
            <TextItemList greeting={texto}/>
            <ItemList data={data} />
        </>
        );
}

export default ItemListContainer;