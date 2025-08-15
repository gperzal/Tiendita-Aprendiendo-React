import { createContext, useState, useContext } from 'react';
import { calcularSubtotal, calcularShipping, calcularTotal } from '@/modules/cart/utils/cartUtils.js';
import toast from 'react-hot-toast';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (producto) => {
    const productoEncontrado = items.find(item => item.id === producto.id);

    if (productoEncontrado) {
      const cantidadActual = productoEncontrado.cantidad ?? 0;

      if (cantidadActual < producto.stock) {
        setItems(prevItems =>
          prevItems.map(item =>
            item.id === producto.id
              ? { ...item, cantidad: cantidadActual + 1 }
              : item
          )
        );
      } else {
        toast.error(`Stock máximo alcanzado para ${producto.name}`);
      }

    } else {
      setItems(prevItems => [...prevItems, { ...producto, cantidad: 1 }]);
    }
  };

  const decreaseCartItem = (producto) => {
    setItems((prevItems) => {

      const esCantidadUno = prevItems.find(item => item.id === producto.id)?.cantidad === 1;

      if (esCantidadUno) {
        return prevItems.filter((item) => item.id !== producto.id);
      } else {
        return prevItems.map((item) => 
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      }
    });
  };

  const removeFromCart = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => setItems([]);

  const subtotal = calcularSubtotal(items);
  const shipping = calcularShipping(items);
  const total = calcularTotal(items);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, decreaseCartItem, subtotal, shipping, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
