import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { plants } from './data/plantsData';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);

  // Funciones del carrito
  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === plant.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const incrementItem = (plantId) => {
    setCart(cart.map(item => 
      item.id === plantId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrementItem = (plantId) => {
    setCart(cart.map(item => 
      item.id === plantId 
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (plantId) => {
    setCart(cart.filter(item => item.id !== plantId));
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const isPlantInCart = (plantId) => cart.some(item => item.id === plantId);

  // Props comunes para pasar a los componentes
  const cartProps = {
    cart,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    getTotalItems,
    getTotalPrice,
    isPlantInCart
  };

  const navigationProps = {
    currentPage,
    setCurrentPage
  };

  // Renderizado condicional de páginas
  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage {...navigationProps} />;
      case 'products':
        return <ProductsPage {...navigationProps} {...cartProps} plants={plants} />;
      case 'cart':
        return <CartPage {...navigationProps} {...cartProps} />;
      default:
        return <LandingPage {...navigationProps} />;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
};

export default App;