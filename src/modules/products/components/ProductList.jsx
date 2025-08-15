import { useState } from 'react';
import { products, categories } from '../utils/dummyData';
import { useCart } from '@context/CartProvider';

export default function ProductList() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const limit = 8;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || p.category === category)
  );

  const paginated = filtered.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="container-fluid px-0">
      {/* Filters Section */}
      <div className="bg-light border-top border-bottom py-4 mb-5">
        <div className="container">
          <div className="row align-items-center g-3">
            {/* Search */}
            <div className="col-lg-4 col-md-6">
              <div className="position-relative">
                <i className="fas fa-search position-absolute top-50 translate-middle-y ms-3 text-muted"></i>
                <input
                  className="form-control form-control-lg ps-5 rounded-pill border-0 shadow-sm"
                  placeholder="Buscar productos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-lg-3 col-md-6">
              <select
                className="form-select form-select-lg rounded-pill border-0 shadow-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">🏷️ Todas las categorías</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center">
                <span className="badge bg-primary bg-gradient fs-6 px-3 py-2 rounded-pill">
                  {filtered.length} productos encontrados
                </span>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="col-lg-2 col-md-6">
              <div className="btn-group w-100" role="group">
                <button
                  type="button"
                  className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-th"></i>
                </button>
                <button
                  type="button"
                  className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="container">
        {paginated.length === 0 ? (
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="fas fa-search fs-1 text-muted"></i>
            </div>
            <h3 className="text-muted mb-3">No se encontraron productos</h3>
            <p className="text-muted">Intenta con otros términos de búsqueda o categoría</p>
            <button 
              className="btn btn-primary btn-lg rounded-pill px-4"
              onClick={() => {
                setSearch('');
                setCategory('');
                setPage(1);
              }}
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="row g-4">
                {paginated.map(product => (
                  <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                      {/* Product Badge */}
                      <div className="position-absolute top-0 start-0 m-3 z-3">
                        <span className="badge bg-success bg-gradient rounded-pill px-3 py-2">
                          Nuevo
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <div className="position-absolute top-0 end-0 m-3 z-3">
                        <button className="btn btn-light btn-sm rounded-circle shadow-sm">
                          <i className="far fa-heart text-muted"></i>
                        </button>
                      </div>

                      {/* Product Image */}
                      <div className="position-relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="card-img-top object-fit-cover"
                          style={{ height: '250px' }}
                        />
                        <div className="position-absolute bottom-0 start-0 end-0 bg-gradient bg-dark bg-opacity-75 p-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="text-white">
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="far fa-star text-warning"></i>
                              <small className="ms-1">(4.2)</small>
                            </div>
                            <small className="text-white-50">125 reseñas</small>
                          </div>
                        </div>
                      </div>

                      <div className="card-body d-flex flex-column">
                        <div className="mb-2">
                          <span className="badge bg-light text-primary rounded-pill px-2 py-1 small">
                            {categories.find(cat => cat.id === product.category)?.name || 'General'}
                          </span>
                        </div>

                        <h5 className="card-title text-dark mb-2 fw-bold">{product.name}</h5>
                        <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                        
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h4 className="text-primary fw-bold mb-0">
                              ${product.price.toLocaleString('es-CL')}
                            </h4>
                            <small className="text-muted">
                              <s>${(product.price * 1.2).toLocaleString('es-CL')}</s>
                              <span className="badge bg-danger ms-1">-20%</span>
                            </small>
                          </div>
                          <div className="text-end">
                            <small className="text-success">
                              <i className="fas fa-truck"></i> Envío gratis
                            </small>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="d-grid gap-2">
                            <button 
                              className="btn btn-primary btn-lg rounded-pill fw-medium" 
                              onClick={() => addToCart(product)}
                            >
                              <i className="fas fa-shopping-cart me-2"></i>
                              Agregar al carrito
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row g-3">
                {paginated.map(product => (
                  <div key={product.id} className="col-12">
                    <div className="card border-0 shadow-sm">
                      <div className="row g-0 align-items-center">
                        <div className="col-md-3">
                          <div className="position-relative">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="img-fluid rounded-start object-fit-cover w-100"
                              style={{ height: '200px' }}
                            />
                            <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-success bg-gradient rounded-pill px-3 py-2">
                                Nuevo
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <div className="mb-2">
                              <span className="badge bg-light text-primary rounded-pill px-2 py-1 small">
                                {categories.find(cat => cat.id === product.category)?.name || 'General'}
                              </span>
                            </div>
                            <h5 className="card-title text-dark fw-bold">{product.name}</h5>
                            <p className="card-text text-muted">{product.description}</p>
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-warning me-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                              </div>
                              <small className="text-muted">(4.2) • 125 reseñas</small>
                            </div>
                            <small className="text-success">
                              <i className="fas fa-truck me-1"></i>
                              Envío gratis • Llega mañana
                            </small>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card-body text-center">
                            <div className="mb-3">
                              <h4 className="text-primary fw-bold mb-1">
                                ${product.price.toLocaleString('es-CL')}
                              </h4>
                              <small className="text-muted">
                                <s>${(product.price * 1.2).toLocaleString('es-CL')}</s>
                                <span className="badge bg-danger ms-1">-20%</span>
                              </small>
                            </div>
                            <div className="d-grid gap-2">
                              <button 
                                className="btn btn-primary rounded-pill fw-medium" 
                                onClick={() => addToCart(product)}
                              >
                                <i className="fas fa-shopping-cart me-2"></i>
                                Agregar
                              </button>
                              <button className="btn btn-outline-secondary rounded-pill">
                                <i className="far fa-heart me-2"></i>
                                Guardar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center mt-5 pt-4 border-top">
            <nav aria-label="Navegación de páginas">
              <ul className="pagination pagination-lg mb-0">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link rounded-pill me-2"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                </li>
                
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={`page-item ${i + 1 === page ? 'active' : ''}`}>
                    <button
                      className={`page-link mx-1 ${i + 1 === page ? 'rounded-pill bg-primary border-primary' : 'rounded-pill'}`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                
                <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link rounded-pill ms-2"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        <button 
          className="btn btn-primary rounded-circle shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ width: '50px', height: '50px' }}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </div>
  );
}