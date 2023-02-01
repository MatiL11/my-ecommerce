import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return( 
            <>
                <h1>No hay productos en el carrito</h1>;
                <Link to='/'>Seguir comprando</Link>
            </>
        );    
    }

    return (
        <>
            <h1>Carrito</h1>
            <div className="cart">
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <h2>Total: ${totalPrice()}</h2>
            <Link to='/'>Seguir comprando</Link>
        </>
    );
}

export default Cart;