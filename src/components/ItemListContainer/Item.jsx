import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    

    return (
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.img} alt=""/>
            <h3>{info.title}</h3>
            <button className="btn__product">Ver Producto</button>
        </Link>
    )
}

export default Item;