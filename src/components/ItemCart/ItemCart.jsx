import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemcart">
      <img src={product.img} alt={product.title} />
      <div className="prduct__properties">
        <p>Titulo: {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio u: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button
          onClick={() => removeProduct(product.id)}
          className="btn__delete"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
