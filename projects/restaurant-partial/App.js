import React from 'react';
import './App.css';

const CATEGORIES = [{ name: 'All' }, { name: 'Drink' }, { name: 'Food' }];
const ITEMS = [
  {
    id: 1,
    name: 'Burger',
    price: 50,
    category: 'Food',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323526.png',
  },
  {
    id: 2,
    name: 'Pizza',
    price: 100,
    category: 'Food',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323563.png',
  },
  {
    id: 3,
    name: 'Fries',
    price: 25,
    category: 'Food',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323544.png',
  },
  {
    id: 4,
    name: 'Frappe',
    price: 35,
    category: 'Drink',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323561.png',
  },
  {
    id: 5,
    name: 'Iced Tea',
    price: 45,
    category: 'Drink',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323568.png',
  },
  {
    id: 6,
    name: 'Soda',
    price: 10,
    category: 'Drink',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323567.png',
  },
  {
    id: 7,
    name: 'Burrito',
    price: 55,
    category: 'Food',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323564.png',
  },
  {
    id: 8,
    name: 'Shrimp',
    price: 75,
    category: 'Food',
    image: 'https://image.flaticon.com/icons/png/512/2323/2323565.png',
  },
];

const ItemComponent = (props) => {

  return (<div className="ItemCard">
    Name: {props.item.name}
    <br />
    Price: {props.item.price}
    <br/>
    <button onClick={props.handleBuyClick}>Buy</button>
  </div>);
}

const App = () => {

  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item.name);
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      {
        ITEMS.map(item => {
          return <ItemComponent 
                    key={item.name} 
                    item={item}
                    handleBuyClick={() => addToCart(item)}
                  />;
        })
      }
      {
        cart.map(name => <div key={name}>{name}</div>)
      }
    </div>
  );
}

export default App;
