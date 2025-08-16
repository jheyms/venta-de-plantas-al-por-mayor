import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { ArrowLeft } from 'lucide-react';

const CartPage = ({ 
  setCurrentPage, 
  getTotalItems, 
  cart, 
  getTotalPrice, 
  incrementItem, 
  decrementItem, 
  removeItem 
}) => {
  return (
    <div className="min-h-screen bg-green-50">
      <Header setCurrentPage={setCurrentPage} getTotalItems={getTotalItems} />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Tu Carrito de Compras
        </h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío</p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        ) : (
          <div>
            {/* Resumen del carrito */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center text-xl font-semibold text-gray-800">
                <span>Total de plantas: {getTotalItems()}</span>
                <span className="text-green-600">Coste total: ${getTotalPrice()}</span>
              </div>
            </div>

            {/* Items del carrito */}
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  incrementItem={incrementItem}
                  decrementItem={decrementItem}
                  removeItem={removeItem}
                />
              ))}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('products')}
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Continuar Comprando</span>
              </button>
              <button 
                onClick={() => alert('Próximamente - ¡Función de pago en desarrollo!')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;