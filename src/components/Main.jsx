const MOCK = [
  { id: 1, name: 'Camiseta básica', price: 9900, img: 'https://picsum.photos/seed/tee/300/200' },
  { id: 2, name: 'Gorra urbana', price: 12990, img: 'https://picsum.photos/seed/cap/300/200' },
  { id: 3, name: 'Mochila clásica', price: 24990, img: 'https://picsum.photos/seed/bag/300/200' }
]

export default function Main() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h3 mb-4">Productos destacados</h2>
        <div className="row g-4">
          {MOCK.map(p => (
            <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img src={p.img} className="card-img-top" alt={p.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-body-secondary mb-4">${p.price.toLocaleString('es-CL')}</p>
                  <button className="btn btn-outline-primary mt-auto">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
