import ItemDetail from '../ItemDetailContainer/ItemDetail';
import React, { useEffect, useState} from 'react';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    
    const [data, setData] = useState([]);

    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }));
        getData.then((res) => setData(res.find(product => product.id === parseInt(detalleId))));
        
    }, []);

    return (
        <div>
            <ItemDetail data={data}/>
        </div>
    );
};

export default ItemDetailContainer;