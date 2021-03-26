import React from 'react'


const OrderCart = (props) => {

  let items =  null;
  let itemTotal = null;

  if (props.orders.length > 0) {
    items = props.orders.map(order => {
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
          Total: <span>{props.total} PHP</span>
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