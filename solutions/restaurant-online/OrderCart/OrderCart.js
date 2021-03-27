import React from 'react'
import CartContext from '../CartContext';


const OrderCart = (props) => {
  const cartContext = React.useContext(CartContext);

  let items = null;
  let totalCost = 0;

  if (cartContext && cartContext.orders && cartContext.orders.length > 0) {
    items = cartContext.orders.map(order => {
      return (
        <div className="orderChosen" key={order.id}>
          <span>{order.name}</span>
          <span>{order.quantity}</span>
          <span>{order.price} PHP</span>
        </div>
      );
    });

    totalCost = cartContext.orders.reduce((total, order) => {
      return total + order.price;
    }, 0);
  }


  return (
    <div className="OrderCart">
      <h2>Cart</h2>
      <div className="orders">{items}</div>
      <div>
        <hr />
        <div className="orderTotal">
          Total: <span>{totalCost} PHP</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCart;