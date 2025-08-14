import { products } from '../utils/dummyData';

export default function ProductList() {

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
      {products.map(product => (
        <div key={product.id} style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px #6366f11a', padding: '1.5rem', minWidth: 220, maxWidth: 260 }}>
          <h3 style={{ color: '#3b82f6' }}>{product.name}</h3>
          <p>{product.description}</p>
          <strong style={{ color: '#6366f1' }}>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}
