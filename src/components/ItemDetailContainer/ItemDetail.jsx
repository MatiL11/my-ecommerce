import "./ItemDetail.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="item__container">
            <div className="detail">
                <img className="detail__image" src={data.img} alt="" />
                <div className="content">
                    <h1 className="data__title">{data.title}</h1>
                    <p className="data__price">${data.price}</p>
                    <p className="data__description">{data.description}</p>
                    {
                        goToCart
                        ? <Link className="final__button" to='/cart'>Terminar compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    }
                </div>
            </div>    
        </div>
    );
}

export default ItemDetail;