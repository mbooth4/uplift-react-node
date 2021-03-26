import React from 'react'

const MenuCard = (props) =>{

  return (
    <div className="MenuCard">
      <img className="food" src={props.image} alt="food" />
      <div className="MenuCardDetails">
        <h4>{props.name}</h4>
        <p> PHP {props.price}</p>
        <button id={props.name} className="btn" type="button" onClick={props.onClick} >Order</button>
      </div>
     
    </div>
  );
}


export default MenuCard;