import { useCart } from '../hooks/useCart';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeFromCart, subtotal, shipping, total } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'descuento10') {
      setIsPromoApplied(true);
    }
  };

  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const finalTotal = total - discount;

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row align-items-center mb-5">
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="bg-primary bg-gradient rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-shopping-cart text-white fs-4"></i>
            </div>
            <div>
              <h1 className="display-5 fw-bold text-dark mb-1">Carrito de Compras</h1>
              <p className="text-muted mb-0">{items.length} {items.length === 1 ? 'producto' : 'productos'} en tu carrito</p>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-outline-primary rounded-pill"
            onClick={() => window.history.back()}
          >
            <i className="fas fa-arrow-left me-2"></i>
            Seguir comprando
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        // Empty Cart State
        <div className="text-center py-5">
          <div className="mb-4">
            <div className="bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center mb-4" style={{ width: '120px', height: '120px' }}>
              <i className="fas fa-shopping-cart text-muted fs-1"></i>
            </div>
            <h3 className="text-dark mb-3">Tu carrito está vacío</h3>
            <p className="text-muted mb-4">¡Agrega algunos productos increíbles a tu carrito!</p>
            <a href="/products" className="btn btn-primary btn-lg rounded-pill px-5">
              <i className="fas fa-shopping-bag me-2"></i>
              Explorar productos
            </a>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-transparent border-0 py-4">
                <h4 className="mb-0 fw-bold">
                  <i className="fas fa-list-ul text-primary me-2"></i>
                  Productos seleccionados
                </h4>
              </div>
            </div>

            {items.map((item, index) => (
              <div className="card border-0 shadow-sm mb-3" key={index}>
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="position-relative">
                        <img 
                          src={item.image || 'https://via.placeholder.com/300x200'} 
                          className="img-fluid rounded-3 object-fit-cover w-100" 
                          alt={item.name}
                          style={{ height: '120px' }}
                        />
                        <div className="position-absolute top-0 start-0 m-2">
                          <span className="badge bg-success bg-gradient rounded-pill px-2 py-1">
                            <i className="fas fa-check me-1"></i>
                            En stock
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="ps-md-3">
                        <h5 className="fw-bold text-dark mb-2">{item.name}</h5>
                        <p className="text-muted mb-2 small">{item.description || 'Producto de alta calidad'}</p>
                        
                        {/* Product features */}
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge bg-light text-primary rounded-pill px-2 py-1">
                            <i className="fas fa-truck me-1"></i>
                            Envío gratis
                          </span>
                          <span className="badge bg-light text-success rounded-pill px-2 py-1">
                            <i className="fas fa-shield-alt me-1"></i>
                            Garantía
                          </span>
                          <span className="badge bg-light text-info rounded-pill px-2 py-1">
                            <i className="fas fa-star me-1"></i>
                            4.8
                          </span>
                        </div>

                        {/* Quantity selector */}
                        <div className="d-flex align-items-center">
                          <label className="form-label me-2 mb-0 fw-medium">Cantidad:</label>
                          <div className="btn-group" role="group">
                            <button className="btn btn-outline-secondary btn-sm">
                              <i className="fas fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-secondary btn-sm px-3">1</button>
                            <button className="btn btn-outline-secondary btn-sm">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 text-md-end">
                      <div className="d-flex flex-column align-items-md-end">
                        <h4 className="text-primary fw-bold mb-2">
                          ${item.price.toLocaleString('es-CL')}
                        </h4>
                        <small className="text-muted mb-3">
                          <s>${(item.price * 1.2).toLocaleString('es-CL')}</s>
                          <span className="badge bg-danger ms-1">-20%</span>
                        </small>

                        <div className="d-flex gap-2">
                          <button className="btn btn-outline-secondary btn-sm rounded-pill">
                            <i className="far fa-heart"></i>
                          </button>
                          <button 
                            className="btn btn-outline-danger btn-sm rounded-pill" 
                            onClick={() => removeFromCart(index)}
                          >
                            <i className="fas fa-trash-alt me-1"></i>
                            Quitar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code Section */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3">
                  <i className="fas fa-tag text-success me-2"></i>
                  ¿Tienes un código promocional?
                </h6>
                <div className="row g-3">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Ingresa tu código promocional"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <button 
                      className="btn btn-success btn-lg w-100 rounded-pill"
                      onClick={handlePromoCode}
                      disabled={isPromoApplied}
                    >
                      {isPromoApplied ? (
                        <>
                          <i className="fas fa-check me-2"></i>
                          Aplicado
                        </>
                      ) : (
                        <>
                          <i className="fas fa-percentage me-2"></i>
                          Aplicar
                        </>
                      )}
                    </button>
                  </div>
                </div>
                {isPromoApplied && (
                  <div className="alert alert-success mt-3 mb-0" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    ¡Código aplicado! Descuento del 10% agregado.
                  </div>
                )}
                <div className="mt-2">
                  <small className="text-muted">
                    💡 <strong>Tip:</strong> Prueba con "descuento10" para obtener un 10% de descuento
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '20px' }}>
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary bg-gradient text-white py-4">
                  <h5 className="mb-0 fw-bold">
                    <i className="fas fa-calculator me-2"></i>
                    Resumen del pedido
                  </h5>
                </div>
                
                <div className="card-body p-4">
                  {/* Subtotal */}
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <span className="text-muted">Subtotal ({items.length} productos)</span>
                    <span className="fw-medium">${subtotal.toLocaleString('es-CL')}</span>
                  </div>

                  {/* Shipping */}
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <span className="text-muted">
                      Envío (SpeedTiendita)
                      <i className="fas fa-info-circle ms-1 text-info" title="Envío express en 24 horas"></i>
                    </span>
                    <span className="fw-medium">${shipping.toLocaleString('es-CL')}</span>
                  </div>

                  {/* Discount */}
                  {isPromoApplied && (
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="text-success">
                        <i className="fas fa-tag me-1"></i>
                        Descuento (10%)
                      </span>
                      <span className="fw-medium text-success">-${discount.toLocaleString('es-CL')}</span>
                    </div>
                  )}

                  <hr className="my-3" />

                  {/* Total */}
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <span className="h5 fw-bold text-dark">Total</span>
                    <span className="h4 fw-bold text-primary">${finalTotal.toLocaleString('es-CL')}</span>
                  </div>

                  {/* Savings badge */}
                  {isPromoApplied && (
                    <div className="text-center mb-3">
                      <span className="badge bg-success bg-gradient fs-6 px-3 py-2 rounded-pill">
                        <i className="fas fa-piggy-bank me-1"></i>
                        ¡Ahorras ${discount.toLocaleString('es-CL')}!
                      </span>
                    </div>
                  )}

                  {/* Checkout button */}
                  <div className="d-grid mb-3">
                    <button 
                      className="btn btn-success btn-lg rounded-pill fw-bold py-3"
                      onClick={() => window.location.href = "https://mystickermania.com/cdn/stickers/memes/bugs-bunny-not-bad-meme-512x512.png"}
                    >
                      <i className="fas fa-credit-card me-2"></i>
                      Proceder al pago
                    </button>
                  </div>

                  {/* Security badges */}
                  <div className="text-center">
                    <div className="d-flex justify-content-center gap-3 mb-2">
                      <span className="badge bg-light text-dark px-2 py-1">
                        <i className="fab fa-cc-visa fs-6"></i>
                      </span>
                      <span className="badge bg-light text-dark px-2 py-1">
                        <i className="fab fa-cc-mastercard fs-6"></i>
                      </span>
                      <span className="badge bg-light text-dark px-2 py-1">
                        <i className="fab fa-paypal fs-6"></i>
                      </span>
                    </div>
                    <small className="text-muted">
                      <i className="fas fa-lock me-1"></i>
                      Compra 100% segura
                    </small>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="card border-0 bg-light mt-3">
                <div className="card-body p-4 text-center">
                  <h6 className="fw-bold text-dark mb-3">¿Necesitas ayuda?</h6>
                  <div className="row g-2 text-center">
                    <div className="col-4">
                      <div className="text-primary">
                        <i className="fas fa-headset fs-4 mb-2"></i>
                        <div>
                          <small className="fw-medium">Soporte 24/7</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-success">
                        <i className="fas fa-undo fs-4 mb-2"></i>
                        <div>
                          <small className="fw-medium">Devoluciones</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-info">
                        <i className="fas fa-shipping-fast fs-4 mb-2"></i>
                        <div>
                          <small className="fw-medium">Envío rápido</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}