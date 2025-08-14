import { createContext, useState } from 'react';
import { calcularSubtotal, calcularShipping, calcularTotal } from '../utils/cartUtils';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => setItems([]);

  const subtotal = calcularSubtotal(items);
  const shipping = calcularShipping(items);
  const total = calcularTotal(items);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, subtotal, shipping, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
