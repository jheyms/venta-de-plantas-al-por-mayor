import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/plantsData';

const ProductsPage = ({ 
  setCurrentPage, 
  getTotalItems, 
  plants, 
  addToCart, 
  isPlantInCart 
}) => {
  return (
    <div className="min-h-screen bg-green-50">
      <Header setCurrentPage={setCurrentPage} getTotalItems={getTotalItems} />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Nuestras Plantas
        </h2>
        
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-green-700 mb-6 border-b-2 border-green-200 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plants.filter(plant => plant.category === category).map(plant => (
                <ProductCard 
                  key={plant.id}
                  plant={plant}
                  addToCart={addToCart}
                  isPlantInCart={isPlantInCart}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;