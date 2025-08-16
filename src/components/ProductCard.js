const ProductCard = ({ plant, addToCart, isPlantInCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 flex flex-col">
      <img 
        src={plant.image} 
        alt={plant.name} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h4 className="text-xl font-semibold text-green-800">{plant.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{plant.description}</p> {/* Aquí */}
      <p className="text-green-600 font-bold mb-4">${plant.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(plant)}
        className={`mt-auto px-4 py-2 text-white rounded-md ${isPlantInCart(plant.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
        disabled={isPlantInCart(plant.id)}
      >
        {isPlantInCart(plant.id) ? 'Ya en el carrito' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ProductCard;