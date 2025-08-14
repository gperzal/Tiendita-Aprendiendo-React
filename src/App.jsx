
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './modules/layouts/Layout';

import HomePage from './modules/home/pages/HomePage';
import LoginPage from './modules/auth/pages/LoginPage';
import RegisterPage from './modules/auth/pages/RegisterPage';
import ProductsPage from './modules/products/pages/ProductsPage';

function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
