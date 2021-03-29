import React from 'react';
import axios from 'axios';

import './App.css';
import OrderTypeSelector from './OrderTypeSelector/OrderTypeSelector';
import MenuCard from './MenuCard/MenuCard';
import OrderCart from './OrderCart/OrderCart';
import OrdersContext from "./OrdersContext";

export const App = () => {
  const [orders, setOrders] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const [items, setItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  // Use React.useEffect to query our backend
  React.useEffect(() => {

    axios.get("http://localhost:3000/items").then(
      (response) => {
        setItems(response.data);
      });

    axios.get("http://localhost:3000/categories").then(
      (response) => {
        setCategories(response.data);
      }
    );

    axios.get("http://localhost:3000/orders").then(
      (response) => {
        setOrders(response.data);
      }
    )
  }, []);

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

    setOrders(updatedOrders);

    axios.post("http://localhost:3000/orders", updatedOrders);
  };

  const MenuCards = items.filter(item => {
    return selectedCategory === "All" || item.category === selectedCategory
  }).map((item) => {
    return (
      <MenuCard
        key={item.id}
        item={item}
      />
    );
  });

  const ordersContext = {
    orders: orders,
    addToCart: orderClicked
  };

  return (
    <div className="App">
      <OrdersContext.Provider value={ordersContext}>
        <h1>Restaurant App</h1>
        <OrderTypeSelector
          categories={categories}
          onChange={(category) => setSelectedCategory(category)}
        />
        <div className="restaurant">
          <div className="menu">{MenuCards}</div>
          <OrderCart orders={orders} />
        </div>
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
