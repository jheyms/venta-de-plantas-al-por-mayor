// cartSlice.jsx

// Añadir producto al carrito
export const addItem = (cart, product) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    return cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cart, { ...product, quantity: 1 }];
  }
};

// Eliminar producto del carrito
export const removeItem = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};

// Actualizar cantidad (incrementar o decrementar)
export const updateQuantity = (cart, productId, delta) => {
  return cart
    .map(item =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    )
    .filter(item => item.quantity > 0);
};

// Obtener total de ítems
export const getTotalItems = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Obtener precio total
export const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Verificar si el producto está en el carrito
export const isItemInCart = (cart, productId) => {
  return cart.some(item => item.id === productId);
};
