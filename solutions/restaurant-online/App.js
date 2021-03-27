import React from 'react';
import axios from 'axios';
import './App.css';
import OrderTypeSelector from './OrderTypeSelector/OrderTypeSelector';
import MenuCard from './MenuCard/MenuCard';
import OrderCart from './OrderCart/OrderCart';
import CartContext from './CartContext';

const CATEGORIES = [{ name: 'All' }, { name: 'Drink' }, { name: 'Food' }];

export const App = () => {
  const [orders, setOrders] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/items")
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:3000/orders")
    .then((response) => {
      setOrders(response.data);
    });
  }, []);

  const addToCart = (item) => {
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

    axios.put("http://localhost:3000/orders", updatedOrders);
  };

  const MenuCards = items.filter(item => {
    return selectedCategory === "All" || item.category === selectedCategory
  }).map((item) => {
    return (
      <MenuCard
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        onClick={() => addToCart(item)}
      />
    );
  });

  const cartContext = {
    orders: orders,
    addToCart: addToCart
  };

  return (
    <div className="App">
      <CartContext.Provider value={cartContext}>
        <h1>Restaurant App</h1>
        <OrderTypeSelector
          categories={CATEGORIES}
          onChange={(category) => setSelectedCategory(category)}
        />
        <div className="restaurant">
          <div className="menu">{MenuCards}</div>
          <OrderCart />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;
