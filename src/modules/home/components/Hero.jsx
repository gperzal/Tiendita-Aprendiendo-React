export default function Hero() {
  return (
    <section className="bg-light py-5 border-bottom">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">Bienvenido a <span className="text-primary">MiTienda</span></h1>
            <p className="lead mb-4">Tu tienda favorita de productos con React, Vite y Bootstrap. Lista para crecer hacia un e‑commerce.</p>
            <a href="https://n9.cl/hk1ju6" className="btn btn-primary btn-lg">Explorar productos</a>
          </div>
          <div className="col-lg-5">
            <div className="rounded-3 border bg-white p-4 text-center">
              <div className="display-6">🛒</div>
              <p className="mb-0">Comienza aquí tu proyecto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
