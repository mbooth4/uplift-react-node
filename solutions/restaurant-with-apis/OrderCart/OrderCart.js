import React from 'react'
import OrdersContext from "../OrdersContext";

const OrderCart = (props) => {
  const ordersContext = React.useContext(OrdersContext);

  let items =  null;
  let itemTotal = null;

  let totalCost = 0;
  for (let order of ordersContext.orders) {
    totalCost += order.price;
  }

  if (ordersContext.orders.length > 0) {
    items = ordersContext.orders.map(order => {
      return (
        <div className="orderChosen" key={order.id}>
          <span>{order.name}</span>
          <span>{order.quantity}</span>
          <span>{order.price} PHP</span>
        </div>
      );
    });

    itemTotal = (
      <div>
        <hr />
        <div className="orderTotal">
          Total: <span>{totalCost} PHP</span>
        </div>
      </div>
    );

  }


  return (
    <div className="OrderCart">
      <h2>Cart</h2>
      <div className="orders">{items}</div>
      {itemTotal}
    </div>
  );
}

export default OrderCart;