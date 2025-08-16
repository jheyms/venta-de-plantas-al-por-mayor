import React from 'react';

const ProductCard = ({ plant, addToCart, isPlantInCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="text-6xl text-center mb-4">{plant.image}</div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h4>
        <p className="text-2xl font-bold text-green-600 mb-4">${plant.price}</p>
        <button 
          onClick={() => addToCart(plant)}
          disabled={isPlantInCart(plant.id)}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
            isPlantInCart(plant.id) 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
          }`}
        >
          {isPlantInCart(plant.id) ? 'Agregada al Carrito' : 'Añadir a la Cesta'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;