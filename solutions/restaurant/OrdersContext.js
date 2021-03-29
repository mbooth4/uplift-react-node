import React from "react";

const OrdersContext = React.createContext(
    {
        orders: [],
        addToCart: (item) => {
            // Intentionally empty
        }
    }
);

export default OrdersContext;