import { useCart } from '../hooks/useCart';

export default function CartPage() {
  const { items, removeFromCart, subtotal, shipping, total } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Carrito de compras</h2>
      {items.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {items.map((item, index) => (
              <div className="card mb-3" key={index}>
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img src={item.image || 'https://via.placeholder.com/300x200'} className="img-fluid rounded-start" alt={item.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Precio: ${item.price.toLocaleString('es-CL')}</p>
                      <button className="btn btn-outline-danger" onClick={() => removeFromCart(index)}>
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <p className="card-text">Subtotal: ${subtotal.toLocaleString('es-CL')}</p>
                <p className="card-text">Envío (SpeedTiendieta): ${shipping.toLocaleString('es-CL')}</p>
                <hr />
                <p className="card-text fw-bold">Total: ${total.toLocaleString('es-CL')}</p>
                 <button 
                  className="btn btn-success w-100 mt-2"
                  onClick={() => window.location.href = "https://mystickermania.com/cdn/stickers/memes/bugs-bunny-not-bad-meme-512x512.png"}
                >
                  Proceder al pago
                </button>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}