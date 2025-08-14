import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto border-top border-secondary-subtle">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">Tiendita</h5>
            <p className="text-white-50 mb-3">E‑commerce demo built with React + Bootstrap. Clean, fast and responsive.</p>
            <div className="d-flex gap-3 fs-5">
              <a className="text-white-50 hover-opacity" href="#" aria-label="Github"><FaGithub/></a>
              <a className="text-white-50 hover-opacity" href="#" aria-label="Twitter"><FaTwitter/></a>
              <a className="text-white-50 hover-opacity" href="#" aria-label="Instagram"><FaInstagram/></a>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="text-uppercase text-white-50">Soporte</h6>
            <ul className="list-unstyled small">
              <li><a className="link-light link-opacity-75-hover" href="#">Centro de ayuda</a></li>
              <li><a className="link-light link-opacity-75-hover" href="#">Envíos y devoluciones</a></li>
              <li><a className="link-light link-opacity-75-hover" href="#">Privacidad</a></li>
              <li><a className="link-light link-opacity-75-hover" href="#">Términos</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="text-uppercase text-white-50">Newsletter</h6>
            <form className="d-flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" className="form-control form-control-sm" placeholder="Tu email"/>
              <button className="btn btn-primary btn-sm">Suscribirme</button>
            </form>
          </div>
        </div>
        <hr className="border-secondary-subtle my-4"/>
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between small">
          <p className="mb-0">&copy; {new Date().getFullYear()} Tiendita. Todos los derechos e Izquierdos reservados.</p>
          <p className="mb-0 text-white-50">Hecho con ❤️ y Bootstrap para C20</p>
        </div>
      </div>
    </footer>
  );
}
