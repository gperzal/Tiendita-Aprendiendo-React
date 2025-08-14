// src/modules/auth/pages/Login.jsx
import { useState } from 'react';
import AlertBox from '../../layouts/AlertBox';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hook/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, msg: '', variant: 'success' });

  const handleLogin = ({ username, password }) => {
    const { ok, message } = login(username, password);
    if (ok) {
      setAlert({ show: true, msg: 'Bienvenido/a 👋', variant: 'success' });
      setTimeout(() => navigate('/'), 1000);
    } else {
      setAlert({ show: true, msg: message || 'Usuario o contraseña inválidos.', variant: 'danger' });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

          <AlertBox
            show={alert.show}
            variant={alert.variant}
            message={alert.msg}
            onClose={() => setAlert(a => ({ ...a, show: false }))}
          />

          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h4 mb-4 text-center">Iniciar Sesión</h1>

              <LoginForm onSubmit={handleLogin} submitText="Entrar" />

              <p className="mt-3 mb-0 text-center text-body-secondary">
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
              </p>

              <div className="mt-3 small text-body-secondary">
                <strong></strong> usuario: <code>demo</code> - pass: <code>1234</code>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
