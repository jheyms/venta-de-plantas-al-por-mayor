import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{item.image}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-green-600 font-bold">${item.price} c/u</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => decrementItem(item.id)}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="text-xl font-semibold min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button 
            onClick={() => incrementItem(item.id)}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <Plus size={16} />
          </button>
          <button 
            onClick={() => removeItem(item.id)}
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors ml-4"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;