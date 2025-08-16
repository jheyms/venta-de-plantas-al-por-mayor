import React from 'react';

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%234ade80" width="1000" height="600"/><circle fill="%2322c55e" cx="200" cy="150" r="80"/><circle fill="%2316a34a" cx="800" cy="400" r="120"/><rect fill="%2315803d" x="300" y="200" width="400" height="200" rx="20"/></svg>')`
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-90 p-12 rounded-2xl shadow-2xl max-w-2xl mx-4 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">🌿 Verde Vida</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Bienvenido a Verde Vida, tu tienda especializada en plantas de interior. 
            Ofrecemos una cuidadosa selección de plantas que transformarán tu hogar en un 
            oasis verde. Desde elegantes monstera hasta delicadas suculentas, tenemos la 
            planta perfecta para cada espacio y cada persona. Nuestras plantas son cultivadas 
            con amor y cuidado para garantizar su salud y belleza.
          </p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Comenzar 🌱
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;