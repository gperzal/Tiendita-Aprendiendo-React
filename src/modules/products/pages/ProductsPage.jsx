import ProductList from '../components/ProductList';

export default function ProductsPage() {
  return (
    <div className="py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-gradient rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
          <i className="fas fa-shopping-bag text-white fs-2"></i>
        </div>
        <h1 className="display-4 fw-bold text-primary mb-3">Nuestros Productos</h1>
        <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
          Descubre nuestra colección cuidadosamente seleccionada de productos premium con la mejor calidad y precio.
        </p>
      </div>
      
      <ProductList />
    </div>
  );
}