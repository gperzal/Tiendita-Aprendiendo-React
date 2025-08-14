export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <p className="mb-0 small">&copy; {new Date().getFullYear()} Tiendita. Todos los derechos e Izquierdos reservados.</p>
        <ul className="nav small">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Privacidad</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Términos</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Soporte</a></li>
        </ul>
      </div>
    </footer>
  )
}
