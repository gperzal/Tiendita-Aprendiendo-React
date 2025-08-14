import { homeCards } from '../utils/dummyData';

export default function HomeCards() {
  return (
    <section className="container my-4">
      <div className="row justify-content-center">
        {homeCards.map(card => (
          <div key={card.id} className="col-12 col-md-4 mb-3 d-flex align-items-stretch">
            <div className="card shadow-sm w-100 text-center">
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}