import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

export default function CartIcon() {
  const { items } = useCart();
  const count = items.length;

  return (
    <NavLink className={({ isActive }) => 'nav-link position-relative' + (isActive ? ' active' : '')} to="/cart">
      <FaShoppingCart size={20} />
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      )}
    </NavLink>
  );
}