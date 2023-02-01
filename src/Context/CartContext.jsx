import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    console.log('carrito', cart);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const totalPrice = () => {
        return cart.reduce((acumulador, productoActual) => {
            return acumulador + productoActual.price * productoActual.quantity;
        }, 0);
    };

    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => {
            return acumulador + productoActual.quantity;
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            addProduct,
            clearCart,
            isInCart,
            removeProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;