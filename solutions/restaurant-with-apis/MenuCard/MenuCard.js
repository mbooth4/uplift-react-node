import React from 'react'
import OrdersContext from "../OrdersContext";

const MenuCard = (props) => {
  const ordersContext = React.useContext(OrdersContext);

  return (
    <div className="MenuCard">
      <img className="food" src={props.item.image} alt="food" />
      <div className="MenuCardDetails">
        <h4>{props.item.name}</h4>
        <p> PHP {props.item.price}</p>
        <button className="btn" type="button"
          onClick={() => ordersContext.addToCart(props.item)} >
          Order
        </button>
      </div>

    </div>
  );
}


export default MenuCard;