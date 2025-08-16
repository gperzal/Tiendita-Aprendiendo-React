import { useState } from 'react';
import { FaTrophy, FaHeart } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={`card h-100 shadow-sm border-0 position-relative overflow-hidden`}>
            {/* Badge */}
            <div className="position-absolute top-0 start-0 p-2" style={{ zIndex: 2 }}>
                <span className="badge bg-success rounded-pill d-flex gap-1">
                    <FaTrophy color="gold" />
                    Destacado
                </span>
            </div>

            {/* Favorite Button */}
            <button
                className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle p-2 border-0 shadow-sm"
                style={{ zIndex: 2, width: '40px', height: '40px' }}
                onClick={() => onToggleFavorite(product.id)}
            >
                <FaHeart className={isFavorite ? 'text-danger' : 'text-muted'} />
            </button>

            {/* Image */}
            <div className="position-relative overflow-hidden">
                {!imageLoaded && (
                    <Skeleton
                        baseColor="#bdbabaff"
                        highlightColor="#f5f5f5"
                        height="100%"
                        width="100%"
                    />
                )}

                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                    }}
                    onLoad={() => setImageLoaded(true)}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    loading="lazy"
                />
            </div>

            {/* Info */}
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
                        <span className="h5 text-primary fw-bold mb-0">${product.price.toLocaleString('es-CL')}</span>
                        <small className="text-decoration-line-through text-muted ms-2">
                            ${Math.round(product.price * 1.2).toLocaleString('es-CL')}
                        </small>
                    </div>
                    <span className="badge bg-danger rounded-pill">-20%</span>
                </div>

                <button className="btn btn-primary w-100 rounded-3 fw-medium py-2" onClick={() => onAddToCart(product)}>
                    <i className="fas fa-shopping-cart me-2"></i> Agregar al carrito
                </button>
            </div>
        </div>
    );
}
