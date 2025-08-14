import { useContext } from 'react';
import CartContext from '../components/CartProvider.jsx';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}