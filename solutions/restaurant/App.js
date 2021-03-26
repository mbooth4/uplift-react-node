import React, { Component } from 'react';
import './App.css';
import OrderTypeSelector from './OrderTypeSelector/OrderTypeSelector';
import MenuCard from './MenuCard/MenuCard';
import OrderCart from './OrderCart/OrderCart';

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

export const App = () => {
  const [totalCost, setTotalCost] = React.useState(0);
  const [orders, setOrders] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const orderClicked = (item) => {
    const existingOrderIndex = orders.findIndex((order) => {
      return order.id === item.id;
    });

    let updatedOrders = [...orders];

    if (existingOrderIndex >= 0) {
      updatedOrders[existingOrderIndex] = {
        ...updatedOrders[existingOrderIndex],
      };
      updatedOrders[existingOrderIndex].quantity += 1;
      updatedOrders[existingOrderIndex].price += item.price;
    } else {
      const newOrder = {
        ...item,
        quantity: 1
      };
      updatedOrders = [...orders, newOrder];
    }

    setTotalCost(totalCost + item.price);
    setOrders(updatedOrders);
  };

  const MenuCards = ITEMS.filter(item => {
    return selectedCategory === "all" || item.category === selectedCategory
  }).map((item) => {
    return (
      <MenuCard
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        onClick={() => orderClicked(item)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <OrderTypeSelector
        categories={CATEGORIES}
        onChange={(category) => setSelectedCategory(category)}
      />
      <div className="restaurant">
        <div className="menu">{MenuCards}</div>
        <OrderCart orders={orders} total={totalCost} />
      </div>
    </div>
  );
}

export default App;
