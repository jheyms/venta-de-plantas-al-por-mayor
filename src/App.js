import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { plants } from './data/plantsData';

// Importar funciones del slice
import {
  addItem,
  removeItem,
  updateQuantity,
  getTotalItems,
  getTotalPrice,
  isItemInCart
} from './slices/cartSlice';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);

  // Envuelve las funciones con setCart
  const addToCart = (plant) => {
    setCart(prev => addItem(prev, plant));
  };

  const incrementItem = (plantId) => {
    setCart(prev => updateQuantity(prev, plantId, 1));
  };

  const decrementItem = (plantId) => {
    setCart(prev => updateQuantity(prev, plantId, -1));
  };

  const removeCartItem = (plantId) => {
    setCart(prev => removeItem(prev, plantId));
  };

  const cartProps = {
    cart,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem: removeCartItem,
    getTotalItems: () => getTotalItems(cart),
    getTotalPrice: () => getTotalPrice(cart),
    isPlantInCart: (id) => isItemInCart(cart, id)
  };

  const navigationProps = {
    currentPage,
    setCurrentPage
  };

  const renderPage = () => {
    switch (currentPage) {
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
