// src/modules/home/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-light border-bottom">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          {/* Text / CTA */}
          <div className="col-lg-6">
            <span className="badge text-bg-primary mb-3">Nuevo</span>
            <h1 className="display-5 fw-bold mb-3">
              Bienvenido a <span className="text-primary">MiTienda</span>
            </h1>
            <p className="lead text-body-secondary mb-4">
              Tu tienda favorita hecha con React, Vite y Bootstrap. Rápida, moderna y lista para escalar a un e‑commerce completo.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap gap-3">
              <a
                href="/products"
                className="btn btn-primary btn-lg"
                aria-label="Explorar productos"
              >
                Explorar productos
              </a>
              <a
                href="https://n9.cl/hk1ju6"
                className="btn btn-outline-secondary btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Ver ofertas
              </a>
            </div>

            {/* Trust/Features bar */}
            <ul className="list-inline mt-4 mb-0 small text-body-secondary">
              <li className="list-inline-item me-3">
                <span className="badge rounded-pill text-bg-light border me-2">🚚</span>
                Envío rápido
              </li>
              <li className="list-inline-item me-3">
                <span className="badge rounded-pill text-bg-light border me-2">🔒</span>
                Pago seguro
              </li>
              <li className="list-inline-item">
                <span className="badge rounded-pill text-bg-light border me-2">💬</span>
                Soporte 24/7
              </li>
            </ul>
          </div>

          {/* Visual / Brand */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-3">
                <div className="ratio ratio-16x9 mb-3">
                  <img
                    src="https://www.tiendita.cl/wp-content/uploads/2017/12/logo-tiendita-rrss.jpg"
                    alt="MiTienda"
                    className="img-fluid rounded-3"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <span className="badge text-bg-secondary">React</span>
                  <span className="badge text-bg-secondary">Vite</span>
                  <span className="badge text-bg-secondary">Bootstrap</span>
                </div>
              </div>
            </div>

            {/* Rating / Social proof */}
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <span className="text-warning">★ ★ ★ ★ ★</span>
              <span className="small text-body-secondary">4.9/5 por nuestros clientes</span>
            </div>
          </div>
        </div>

        {/* Brands / Partners (texto para no usar imágenes adicionales) */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 opacity-75 small">
          <span className="text-uppercase">Apple</span>
          <span className="text-uppercase">Samsung</span>
          <span className="text-uppercase">Dell</span>
          <span className="text-uppercase">Sony</span>
          <span className="text-uppercase">Nintendo</span>
        </div>
      </div>
    </section>
  );
}
