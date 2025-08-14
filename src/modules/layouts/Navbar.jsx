// src/modules/layouts/Navbar.jsx
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hook/useAuth';
import CartIcon from '../cart/components/CartIcon';
import {
  FaHome,
  FaBoxOpen,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaShoppingBag,
  FaHeart,
  FaSearch,
  FaBell,
  FaCog,
  FaChevronDown,
  FaStar,
  FaGift,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      {/* Top promotional bar */}
      <div className="bg-gradient bg-dark" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '8px 0'
      }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center  text-white">
            <FaGift className="me-2 animate__animated animate__pulse animate__infinite" />
            <small className="fw-medium">¡Envío gratis en compras superiores a $50.000!</small>
            <FaStar className="ms-2 text-warning animate__animated animate__pulse animate__infinite" />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm transition-all ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}>
        <div className="container">
          {/* Enhanced Brand */}
          <Link className="navbar-brand d-flex align-items-center gap-2 animate-hover" to="/">
            <div className="brand-icon-wrapper">
              <span className="badge bg-gradient-primary rounded-circle p-3 shadow-sm brand-icon">
                <FaShoppingBag className="fs-6 bg-primary" />
              </span>
            </div>
            <div className="brand-text">
              <span className="fw-bold fs-4 text-primary">Tiendita</span>
              <small className="d-block text-muted lh-1">Premium Store</small>
            </div>
          </Link>

          {/* Mobile toggler */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop navigation */}
          <div className="d-none d-lg-flex align-items-center w-100">
            {/* Navigation links */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill mx-1 nav-link-custom ${
                      isActive ? 'active bg-primary text-white shadow-sm' : 'text-dark'
                    }`
                  }
                >
                  <FaHome className="me-2" />
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill mx-1 nav-link-custom ${
                      isActive ? 'active bg-primary text-white shadow-sm' : 'text-dark'
                    }`
                  }
                >
                  <FaBoxOpen className="me-2" />
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill mx-1 nav-link-custom ${
                      isActive ? 'active bg-primary text-white shadow-sm' : 'text-dark'
                    }`
                  }
                >
                  <FaStar className="me-2" />
                  Categorías
                </NavLink>
              </li>
            </ul>

   

            {/* Right side actions */}
            <ul className="navbar-nav align-items-center">
 

              {/* Cart */}
              <li className="nav-item me-3">
                <div className="cart-wrapper">
                  <CartIcon />
                </div>
              </li>

              {/* Authentication */}
              {!isAuthenticated ? (
                <>
                  <li className="nav-item me-2">
                    <NavLink
                      to="/login"
                      className="btn btn-outline-primary rounded-pill px-4 py-2"
                    >
                      <FaSignInAlt className="me-2" />
                      Iniciar Sesión
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="btn btn-primary rounded-pill px-4 py-2 shadow-sm"
                    >
                      <FaUserPlus className="me-2" />
                      Registro
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* Notifications */}
                  <li className="nav-item me-3">
                    <button className="btn btn-outline-light rounded-circle p-2 position-relative icon-btn">
                      <FaBell className="text-muted" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning badge-sm">
                        2
                      </span>
                    </button>
                  </li>

                  {/* User dropdown */}
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-light rounded-pill px-3 py-2 d-flex align-items-center gap-2 dropdown-toggle user-dropdown"
                      id="userMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="user-avatar bg-primary rounded-circle d-flex align-items-center justify-content-center">
                        <FaUser className="text-white" style={{ fontSize: '12px' }} />
                      </div>
                      <div className="d-flex flex-column align-items-start lh-1">
                        <span className="fw-medium text-dark" style={{ fontSize: '14px' }}>
                          {user?.username}
                        </span>
                        <small className="text-muted">Mi cuenta</small>
                      </div>
                      <FaChevronDown className="text-muted" style={{ fontSize: '10px' }} />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 p-2 mt-2">
                      <li>
                        <h6 className="dropdown-header d-flex align-items-center">
                          <FaUser className="me-2 text-primary" />
                          Mi Cuenta
                        </h6>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link className="dropdown-item rounded-2 p-2" to="/profile">
                          <FaUser className="me-2 text-muted" />
                          Mi Perfil
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded-2 p-2" to="/orders">
                          <FaBoxOpen className="me-2 text-muted" />
                          Mis Pedidos
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded-2 p-2" to="/settings">
                          <FaCog className="me-2 text-muted" />
                          Configuración
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button 
                          className="dropdown-item rounded-2 p-2 text-danger" 
                          onClick={handleLogout}
                        >
                          <FaSignOutAlt className="me-2" />
                          Cerrar Sesión
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Enhanced Mobile Offcanvas - solo visible en móvil */}
          <div
            id="offcanvasNav"
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex="-1"
            aria-labelledby="offcanvasNavLabel"
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: '300px'
            }}
          >
            <div className="offcanvas-header border-bottom border-light border-opacity-25">
              <div className="d-flex align-items-center gap-3">
                <div className="user-avatar bg-white bg-opacity-25 rounded-circle p-2">
                  <FaUser className="text-white" />
                </div>
                <div className="text-white">
                  <h6 className="offcanvas-title mb-0" id="offcanvasNavLabel">
                    {isAuthenticated ? `Hola, ${user?.username}` : 'Menú'}
                  </h6>
                  <small className="opacity-75">Bienvenido a Tiendita</small>
                </div>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Cerrar"
              />
            </div>

            <div className="offcanvas-body p-0">
              {/* Search in mobile */}
              <div className="p-3 border-bottom border-light border-opacity-25">
                <form onSubmit={handleSearch} className="position-relative">
                  <input
                    type="text"
                    className="form-control rounded-pill bg-white bg-opacity-25 border-0 text-white placeholder-white-75"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2 text-white"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              {/* Navigation links */}
              <ul className="navbar-nav p-3">
                <li className="nav-item mb-2">
                  <NavLink
                    end
                    to="/"
                    data-bs-dismiss="offcanvas"
                    className={({ isActive }) =>
                      `nav-link text-white p-3 rounded-3 mobile-nav-link ${
                        isActive ? 'active bg-white bg-opacity-25' : ''
                      }`
                    }
                  >
                    <FaHome className="me-3" />
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink
                    to="/products"
                    data-bs-dismiss="offcanvas"
                    className={({ isActive }) =>
                      `nav-link text-white p-3 rounded-3 mobile-nav-link ${
                        isActive ? 'active bg-white bg-opacity-25' : ''
                      }`
                    }
                  >
                    <FaBoxOpen className="me-3" />
                    Productos
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink
                    to="/categories"
                    data-bs-dismiss="offcanvas"
                    className={({ isActive }) =>
                      `nav-link text-white p-3 rounded-3 mobile-nav-link ${
                        isActive ? 'active bg-white bg-opacity-25' : ''
                      }`
                    }
                  >
                    <FaStar className="me-3" />
                    Categorías
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink
                    to="/wishlist"
                    data-bs-dismiss="offcanvas"
                    className="nav-link text-white p-3 rounded-3 mobile-nav-link"
                  >
                    <FaHeart className="me-3" />
                    Lista de Deseos
                    <span className="badge bg-danger ms-auto">3</span>
                  </NavLink>
                </li>
              </ul>

              <hr className="border-light border-opacity-25 mx-3" />

              {/* Cart in mobile */}
              <div className="p-3">
                <div className="d-flex align-items-center justify-content-between text-white mb-3">
                  <span className="fw-medium">Mi Carrito</span>
                  <CartIcon />
                </div>
              </div>

              {/* Authentication actions */}
              <div className="p-3 mt-auto">
                {!isAuthenticated ? (
                  <div className="d-grid gap-2">
                    <NavLink
                      to="/login"
                      data-bs-dismiss="offcanvas"
                      className="btn btn-light rounded-pill py-3"
                    >
                      <FaSignInAlt className="me-2" />
                      Iniciar Sesión
                    </NavLink>
                    <NavLink
                      to="/register"
                      data-bs-dismiss="offcanvas"
                      className="btn btn-warning rounded-pill py-3"
                    >
                      <FaUserPlus className="me-2" />
                      Crear Cuenta
                    </NavLink>
                  </div>
                ) : (
                  <div className="d-grid gap-2">
                    <Link
                      to="/profile"
                      data-bs-dismiss="offcanvas"
                      className="btn btn-light rounded-pill py-3"
                    >
                      <FaUser className="me-2" />
                      Mi Perfil
                    </Link>
                    <Link
                      to="/orders"
                      data-bs-dismiss="offcanvas"
                      className="btn btn-outline-light rounded-pill py-3"
                    >
                      <FaBoxOpen className="me-2" />
                      Mis Pedidos
                    </Link>
                    <button
                      className="btn btn-outline-light rounded-pill py-3 text-start"
                      onClick={handleLogout}
                      data-bs-dismiss="offcanvas"
                    >
                      <FaSignOutAlt className="me-2" />
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}