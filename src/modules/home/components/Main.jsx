import { MOCK } from '../utils/dummyData.js';

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
