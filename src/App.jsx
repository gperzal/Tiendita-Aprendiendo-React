
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './modules/layouts/Layout';

import HomePage from './modules/home/pages/HomePage';
import LoginPage from './modules/auth/pages/LoginPage';
import RegisterPage from './modules/auth/pages/RegisterPage';
import ProductsPage from './modules/products/pages/ProductsPage';
import CartPage from './modules/cart/pages/CartPage';
import { CartProvider } from '@context/CartProvider.jsx';

function App() {
  return (
     <CartProvider>
      <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
