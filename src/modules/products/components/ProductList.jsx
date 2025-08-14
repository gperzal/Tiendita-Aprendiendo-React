import { useState } from 'react';
import { products, categories } from '../utils/dummyData';
import { useCart } from '../../cart/hooks/useCart';

export default function ProductList() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const limit = 4;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || p.category === category)
  );

  const paginated = filtered.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
        <input
          className="form-control"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 300 }}
        />

        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {paginated.map(product => (
          <div key={product.id} style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px #6366f11a', padding: '1.5rem', minWidth: 240, maxWidth: 280 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '0.5rem' }} />
            <h4 className="mt-2" style={{ color: '#3b82f6' }}>{product.name}</h4>
            <p className="text-muted small">{product.description}</p>
            <strong className="text-primary">${product.price.toLocaleString('es-CL')}</strong>
            <div className="d-grid mt-2">
              <button className="btn btn-outline-primary" onClick={() => addToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${i + 1 === page ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}