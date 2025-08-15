import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@context/CartProvider';

export default function CartIcon() {
  const { items, subtotal } = useCart();
  const count = items.length;

  return (
    <NavLink 
      to="/cart"
      className={({ isActive }) => 
        `btn btn-outline-light rounded-pill px-3 py-2 position-relative d-flex align-items-center gap-2 text-decoration-none border-0 ${
          isActive ? 'bg-primary text-white' : 'text-dark'
        }`
      }
    >
      {/* Cart Icon */}
      <div className="position-relative">
        <FaShoppingCart size={18} />
        
        {/* Item count badge */}
        {count > 0 && (
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white"
            style={{ fontSize: '10px', minWidth: '20px', height: '20px' }}
          >
            {count > 99 ? '99+' : count}
          </span>
        )}
      </div>

      {/* Cart info (desktop only) */}
      <div className="d-none d-lg-block text-start">
        <div className="lh-1">
          <small className="fw-medium d-block" style={{ fontSize: '12px' }}>
            Mi Carrito
          </small>
          <small className="text-muted" style={{ fontSize: '11px' }}>
            {count === 0 ? 'Vacío' : `$${subtotal.toLocaleString('es-CL')}`}
          </small>
        </div>
      </div>

      {/* Animated cart icon when items > 0 */}
      {count > 0 && (
        <style jsx>{`
          @keyframes cartBounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-3px); }
            60% { transform: translateY(-2px); }
          }
          
          .btn:hover .position-relative {
            animation: cartBounce 0.8s;
          }
        `}</style>
      )}
    </NavLink>
  );
}