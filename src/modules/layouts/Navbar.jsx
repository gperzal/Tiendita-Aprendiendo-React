
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hook/useAuth';
import { useCart } from '../cart/hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';
import CartIcon from '../cart/components/CartIcon';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  const cartCount = items.length;

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">Tiendita</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/products">Productos</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item position-relative">
              <NavLink className={({ isActive }) => 'nav-link position-relative' + (isActive ? ' active' : '')} to="/cart">
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>

            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/register">Registro</NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center"
                   href="/"
                   id="userMenu"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false">
                  <span className="me-2">Hola, {user?.username}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                  <li><span className="dropdown-item-text text-muted">Mi cuenta</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
