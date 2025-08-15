// Importamos useState para manejar estados locales en el componente
import { useState } from 'react';
// Importamos datos dummy: lista de productos y categorías (datos estáticos para la demo)
import { products, categories } from '../utils/dummyData';
// Hook personalizado para interactuar con el carrito (añadir, quitar, etc.)
import { useCart } from '../../cart/hooks/useCart';

// Exportamos el componente principal ProductList
export default function ProductList() {
  // Extraemos la función addToCart desde el hook del carrito
  const { addToCart } = useCart();

  // estado `search` guarda el texto de búsqueda ingresado por el usuario
  const [search, setSearch] = useState('');
  // estado `category` guarda la categoría seleccionada (id de categoría)
  const [category, setCategory] = useState('');
  // estado `page` para la paginación (número de página actual)
  const [page, setPage] = useState(1);
  // estado `viewMode` controla si mostramos la lista en 'grid' o 'list'
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  // número de productos por página
  const limit = 8;

  // Filtramos los productos por nombre y por categoría seleccionada
  const filtered = products.filter(p =>
    // comparamos nombres en minúsculas para que la búsqueda sea case-insensitive
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    // si no se seleccionó categoría (cadena vacía) permitimos todas, sino comparamos ids
    (category === '' || p.category === category)
  );

  // Aplicamos paginación: obtenemos sólo los productos de la página actual
  const paginated = filtered.slice((page - 1) * limit, page * limit);
  // Calculamos el total de páginas redondeando hacia arriba
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <div className="container-fluid px-4 py-4">
      {/* Barra de búsqueda superior */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-7">
                  <div className="position-relative">
                    <i className="fas fa-search position-absolute top-50 translate-middle-y ms-3 text-muted"></i>
                    <input
                      className="form-control form-control-lg ps-5 rounded-pill"
                      placeholder="Buscar productos..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="d-flex align-items-center justify-content-end">
                    <span className="badge bg-primary bg-gradient fs-6 px-3 py-2 rounded-pill me-3">
                      {filtered.length} productos
                    </span>
                    <button 
                      className="btn btn-outline-primary rounded-pill"
                      onClick={() => {
                        setSearch('');
                        setCategory('');
                        setPage(1);
                      }}
                    >
                      <i className="fas fa-undo me-2"></i>
                      Limpiar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="row g-4">
        {/* Panel lateral de filtros */}
        <div className="col-lg-3">
          <div className="card border-0 shadow-sm p-3">
            <h5 className="card-title mb-4">Filtros</h5>

            {/* Selector de categoría */}
            <div className="mb-4">
              <label className="form-label">Categoría</label>
              <select
                className="form-select rounded-pill"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">🏷️ Todas las categorías</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>

            {/* Rango de precios (placeholder para futura implementación) */}
            <div className="mb-4">
              <label className="form-label">Rango de precios</label>
              <div className="d-flex gap-2">
                <input type="number" className="form-control" placeholder="Mín" disabled />
                <input type="number" className="form-control" placeholder="Máx" disabled />
              </div>
              <small className="text-muted">Próximamente</small>
            </div>

            {/* Filtro de rating (placeholder) */}
            <div className="mb-4">
              <label className="form-label">Calificación</label>
              <div className="text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <small className="text-muted">Próximamente</small>
            </div>
          </div>
        </div>

        {/* Sección principal de productos */}
        <div className="col-lg-9">
          {paginated.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-4">
                <i className="fas fa-search fs-1 text-muted"></i>
              </div>
              <h3 className="text-muted mb-3">No se encontraron productos</h3>
              <p className="text-muted">Intenta con otros términos de búsqueda o categoría</p>
            </div>
          ) : (
            <div className="row g-4">
              {paginated.map(product => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                    {/* Badge indicando estado (ej. Nuevo) */}
                    <div className="position-absolute top-0 start-0 m-3 z-3">
                      <span className="badge bg-success bg-gradient rounded-pill px-3 py-2">
                        Nuevo
                      </span>
                    </div>

                    {/* Botón de wishlist (guardar favorito) */}
                    <div className="position-absolute top-0 end-0 m-3 z-3">
                      <button className="btn btn-light btn-sm rounded-circle shadow-sm">
                        <i className="far fa-heart text-muted"></i>
                      </button>
                    </div>

                    {/* Imagen del producto */}
                    <div className="position-relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        loading="lazy"
                        className="card-img-top object-fit-cover"
                        style={{ height: '250px' }}
                      />
                      {/* Overlay con calificaciones y reseñas */}
                      <div className="position-absolute bottom-0 start-0 end-0 bg-gradient bg-dark bg-opacity-75 p-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="text-white">
                            {/* Estrellas (estáticas en este ejemplo) */}
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

                    {/* Cuerpo de la tarjeta con información del producto */}
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

                      {/* Botón para añadir al carrito */}
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
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
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
      </div>

      {/* Botón fijo "volver arriba" */}
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
