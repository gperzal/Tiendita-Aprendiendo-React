import { useState, useEffect } from 'react';
import { MOCK } from '../utils/dummyData.js';

export default function Main() {
  const [products, setProducts] = useState(MOCK);
  const [favorites, setFavorites] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.category || 'general'))];

  // Filter and sort products
  const filteredAndSortedProducts = products
    .filter(product => filterCategory === 'all' || (product.category || 'general') === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    // Simulate add to cart
    console.log('Added to cart:', product);
    // Here you would typically dispatch to cart context/redux
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Cargando productos...</span>
          </div>
          <p className="text-muted">Cargando productos increíbles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mb-5 position-relative overflow-hidden">
        {/* Background decoration */}
        <div className="position-absolute top-0 end-0 opacity-25">
          <i className="fas fa-shopping-bag" style={{ fontSize: '200px', transform: 'rotate(15deg) translate(50px, -50px)' }}></i>
        </div>
        
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">
                Descubre productos increíbles
                <span className="text-warning">.</span>
              </h1>
              <p className="lead mb-4 opacity-75">
                Explora nuestra selección curada de productos de alta calidad con los mejores precios del mercado.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="d-flex align-items-center text-white-50">
                  <i className="fas fa-shipping-fast me-2 text-warning"></i>
                  <small>Envío gratis</small>
                </div>
                <div className="d-flex align-items-center text-white-50">
                  <i className="fas fa-shield-alt me-2 text-warning"></i>
                  <small>Garantía extendida</small>
                </div>
                <div className="d-flex align-items-center text-white-50">
                  <i className="fas fa-star me-2 text-warning"></i>
                  <small>+10k clientes felices</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-3 p-4 backdrop-blur">
                <h3 className="h4 mb-3">¡Ofertas especiales!</h3>
                <p className="mb-3">Hasta 50% de descuento en productos seleccionados</p>
                <button className="btn btn-warning btn-lg fw-bold">
                  <i className="fas fa-tags me-2"></i>
                  Ver ofertas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Filters and Search */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  {/* Category Filter */}
                  <div className="col-md-4">
                    <label className="form-label fw-medium text-muted small">CATEGORÍA</label>
                    <select 
                      className="form-select form-select-lg border-0 bg-light rounded-3"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat === 'all' ? 'Todas las categorías' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Filter */}
                  <div className="col-md-4">
                    <label className="form-label fw-medium text-muted small">ORDENAR POR</label>
                    <select 
                      className="form-select form-select-lg border-0 bg-light rounded-3"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="name">Nombre A-Z</option>
                      <option value="price-asc">Precio: Menor a Mayor</option>
                      <option value="price-desc">Precio: Mayor a Menor</option>
                    </select>
                  </div>

                  {/* Stats */}
                  <div className="col-md-4">
                    <label className="form-label fw-medium text-muted small">RESULTADOS</label>
                    <div className="bg-light rounded-3 p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold text-primary fs-4">{filteredAndSortedProducts.length}</span>
                        <span className="text-muted">productos encontrados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 fw-bold text-dark mb-0">
              <i className="fas fa-fire text-danger me-2"></i>
              Productos Destacados
            </h2>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm rounded-pill">
                <i className="fas fa-th me-1"></i>
                Grid
              </button>
              <button className="btn btn-outline-secondary btn-sm rounded-pill">
                <i className="fas fa-list me-1"></i>
                Lista
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row g-4">
            {filteredAndSortedProducts.map(product => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <div className="card h-100 shadow-sm border-0 product-card position-relative overflow-hidden">
                  
                  {/* Product Badge */}
                  <div className="position-absolute top-0 start-0 p-2" style={{ zIndex: 2 }}>
                    <span className="badge bg-success rounded-pill">
                      <i className="fas fa-star me-1"></i>
                      Destacado
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button 
                    className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle p-2 border-0 shadow-sm"
                    style={{ zIndex: 2, width: '40px', height: '40px' }}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <i className={`fas fa-heart ${favorites.has(product.id) ? 'text-danger' : 'text-muted'}`}></i>
                  </button>

                  {/* Product Image */}
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={product.img} 
                      className="card-img-top" 
                      alt={product.name}
                      style={{ 
                        height: '250px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    
                    {/* Quick Actions Overlay */}
                    <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient bg-dark bg-opacity-75 opacity-0 product-overlay">
                      <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-light rounded-pill flex-fill">
                          <i className="fas fa-eye me-1"></i>
                          Ver
                        </button>
                        <button className="btn btn-sm btn-outline-light rounded-pill">
                          <i className="fas fa-share-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="card-body d-flex flex-column p-4">
                    <div className="mb-2">
                      <span className="badge bg-light text-dark rounded-pill small">
                        {product.category || 'General'}
                      </span>
                    </div>
                    
                    <h5 className="card-title mb-2 fw-bold text-dark">{product.name}</h5>
                    
                    {/* Rating */}
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < 4 ? '' : 'text-muted'}`} style={{ fontSize: '12px' }}></i>
                        ))}
                      </div>
                      <small className="text-muted">(4.0) 127 reseñas</small>
                    </div>

                    {/* Price */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <span className="h5 text-primary fw-bold mb-0">
                          ${product.price.toLocaleString('es-CL')}
                        </span>
                        <small className="text-decoration-line-through text-muted ms-2">
                          ${Math.round(product.price * 1.2).toLocaleString('es-CL')}
                        </small>
                      </div>
                      <span className="badge bg-danger rounded-pill">-20%</span>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mt-auto">
                      <button 
                        className="btn btn-primary w-100 rounded-3 fw-medium py-2"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fas fa-shopping-cart me-2"></i>
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-5">
          <div className="card bg-gradient bg-primary text-white border-0 shadow-lg">
            <div className="card-body p-5 text-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3 className="display-6 fw-bold mb-3">¡No te pierdas nuestras ofertas!</h3>
                  <p className="lead mb-4 opacity-75">
                    Suscríbete a nuestro newsletter y recibe descuentos exclusivos, nuevos productos y mucho más.
                  </p>
                  <div className="row g-2 justify-content-center">
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        className="form-control form-control-lg rounded-3 border-0"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="col-md-auto">
                      <button className="btn btn-warning btn-lg rounded-3 fw-bold px-4">
                        <i className="fas fa-paper-plane me-2"></i>
                        Suscribirse
                      </button>
                    </div>
                  </div>
                  <small className="opacity-75 mt-3 d-block">
                    <i className="fas fa-lock me-1"></i>
                    100% libre de spam. Cancela cuando quieras.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .product-card:hover .product-overlay {
          opacity: 1 !important;
          transition: opacity 0.3s ease;
        }
        
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}