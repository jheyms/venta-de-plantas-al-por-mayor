import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ setCurrentPage, getTotalItems }) => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 
          className="text-2xl font-bold cursor-pointer hover:text-green-200 transition-colors"
          onClick={() => setCurrentPage('landing')}
        >
          🌿 Verde Vida
        </h1>
        <nav className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentPage('products')}
            className="hover:text-green-200 transition-colors font-medium"
          >
            Productos
          </button>
          <button 
            onClick={() => setCurrentPage('cart')}
            className="flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            <ShoppingCart size={20} />
            <span className="bg-red-500 text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
              {getTotalItems()}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;