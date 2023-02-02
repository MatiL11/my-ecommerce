import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Juan',
            phone: '13112425',
            email: 'Juancito@gmail.com'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        date: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({id}) => console.log(id))
        

    }

    if (cart.length === 0) {
        return( 
            <div className="empty__container">
                <h1 className="cart__empty">No hay productos en el carrito</h1>
                <Link to='/' className="btn__continue">Seguir comprando</Link>
            </div>
        );    
    }

    return (
        <div className="cart__container">
            <h1 className="cart__title"> Tus productos</h1>
            <div className="cart__text">
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <h2>Total: ${totalPrice()}</h2>
            <Link to='/' className="btn__continue">Seguir comprando</Link>
            <button onClick={handleClick} className="btn__order">Generar orden</button>
        </div>
    );
}

export default Cart;