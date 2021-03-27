import React from "react";

const CartContext = React.createContext({
    orders: [],
    addToCart: (item) => null,
    removeFromCart: (item) => null,
});

export default CartContext;