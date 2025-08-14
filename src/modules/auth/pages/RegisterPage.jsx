// src/modules/auth/pages/Register.jsx
import { useState } from 'react';
import AlertBox from '../../layouts/AlertBox';
import RegisterForm from '../components/RegisterForm';
import { useAuth } from '../hook/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, msg: '', variant: 'success' });

  const handleSubmit = ({ username, password, confirm }) => {
    if (password.length < 4) {
      setAlert({ show: true, msg: 'La contraseña debe tener al menos 4 caracteres.', variant: 'danger' });
      return;
    }
    if (password !== confirm) {
      setAlert({ show: true, msg: 'Las contraseñas no coinciden.', variant: 'danger' });
      return;
    }

    const { ok, message } = register(username.trim(), password);
    if (ok) {
      setAlert({ show: true, msg: '¡Cuenta creada exitosamente! 🎉', variant: 'success' });
      setTimeout(() => navigate('/'), 2000);
    } else {
      setAlert({ show: true, msg: message || 'No se pudo crear la cuenta', variant: 'danger' });
    }
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">
        {/* Left Side - Hero Content */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-5" style={{ 
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
        }}>
          <div className="text-center text-white">
            <div className="mb-4">
              <i className="fas fa-user-plus" style={{ fontSize: '120px', opacity: 0.9 }}></i>
            </div>
            
            <h2 className="display-4 fw-bold mb-4">¡Únete a nosotros!</h2>
            <p className="lead mb-4 opacity-75">
              Crea tu cuenta y disfruta de beneficios exclusivos, descuentos especiales y una experiencia de compra personalizada.
            </p>

            {/* Benefits */}
            <div className="row g-4 mt-5">
              <div className="col-md-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-gift text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Ofertas Exclusivas</h5>
                  <p className="small opacity-75 mb-0">Descuentos especiales solo para miembros registrados</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-shipping-fast text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Envío Gratuito</h5>
                  <p className="small opacity-75 mb-0">Disfruta de envíos gratis en compras superiores a $50</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-heart text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Lista de Deseos</h5>
                  <p className="small opacity-75 mb-0">Guarda tus productos favoritos para comprar después</p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-headset text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Soporte 24/7</h5>
                  <p className="small opacity-75 mb-0">Atención personalizada cuando lo necesites</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-5 pt-4 border-top border-white border-opacity-25">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="me-3">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-user text-success fs-5"></i>
                  </div>
                </div>
                <div className="text-start">
                  <h6 className="mb-1 fw-bold">María González</h6>
                  <div className="d-flex">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning me-1"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="small opacity-75 fst-italic mb-0">
                "Excelente experiencia desde el registro. Las ofertas exclusivas realmente valen la pena y el soporte es increíble."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
          <div className="w-100" style={{ maxWidth: '480px' }}>
            
            {/* Mobile Logo/Header */}
            <div className="text-center mb-5 d-lg-none">
              <div className="mb-3">
                <i className="fas fa-store text-success" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="text-success fw-bold mb-2">¡Únete a nosotros!</h3>
              <p className="text-muted">Crea tu cuenta y disfruta de todos nuestros beneficios</p>
            </div>

            {/* Desktop Header */}
            <div className="text-center mb-5 d-none d-lg-block">
              <div className="mb-4">
                <i className="fas fa-store text-success" style={{ fontSize: '64px' }}></i>
              </div>
              <h2 className="text-dark fw-bold mb-2">Crear Cuenta</h2>
              <p className="text-muted fs-5">Únete a nuestra comunidad hoy mismo</p>
            </div>

            {/* Toast Notification */}
            <AlertBox 
              show={alert.show}
              message={alert.msg} 
              variant={alert.variant} 
              onClose={() => setAlert({ show: false, msg: '', variant: 'success' })}
              position="bottom-end"
              autoClose={true}
              duration={alert.variant === 'success' ? 3000 : 5000}
            />

            {/* Registration Form */}
            <div className="mb-4">
              <RegisterForm onSubmit={handleSubmit} />
            </div>

            {/* Divider */}
            <div className="text-center mb-4">
              <div className="d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="px-3 text-muted small">O REGÍSTRATE CON</span>
                <hr className="flex-grow-1" />
              </div>
            </div>

            {/* Social Registration Buttons */}
            <div className="row g-2 mb-4">
              <div className="col-6">
                <button className="btn btn-outline-danger btn-lg w-100 rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fab fa-google me-2"></i>
                  Google
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-primary btn-lg w-100 rounded-3 d-flex align-items-center justify-content-center">
                  <i className="fab fa-facebook-f me-2"></i>
                  Facebook
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-muted mb-0">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="text-success text-decoration-none fw-medium">
                  Iniciar sesión
                </Link>
              </p>
            </div>

            {/* Additional Links */}
            <div className="text-center mt-4 pt-3 border-top">
              <div className="row g-2">
                <div className="col-4">
                  <a href="#" className="text-muted text-decoration-none small">
                    <i className="fas fa-shield-alt me-1"></i>
                    Privacidad
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className="text-muted text-decoration-none small">
                    <i className="fas fa-file-contract me-1"></i>
                    Términos
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className="text-muted text-decoration-none small">
                    <i className="fas fa-question-circle me-1"></i>
                    Ayuda
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-4 pt-3">
              <div className="row g-2 text-center">
                <div className="col-3">
                  <i className="fas fa-lock text-success fs-4 mb-1"></i>
                  <p className="small text-muted mb-0">Seguro</p>
                </div>
                <div className="col-3">
                  <i className="fas fa-users text-success fs-4 mb-1"></i>
                  <p className="small text-muted mb-0">+10K usuarios</p>
                </div>
                <div className="col-3">
                  <i className="fas fa-award text-success fs-4 mb-1"></i>
                  <p className="small text-muted mb-0">Certificado</p>
                </div>
                <div className="col-3">
                  <i className="fas fa-star text-success fs-4 mb-1"></i>
                  <p className="small text-muted mb-0">4.9/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}