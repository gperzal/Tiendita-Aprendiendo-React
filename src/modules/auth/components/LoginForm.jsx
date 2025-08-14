import { useState } from 'react';

export default function LoginForm({ onSubmit, submitText = 'Entrar' }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      onSubmit?.({ username: form.username.trim(), password: form.password });
      setIsLoading(false);
    }, 1000);
  };

  const isFormValid = form.username.trim() && form.password.length >= 4;

  return (
    <form onSubmit={handleSubmit} noValidate className="needs-validation">
      {/* Username Field */}
      <div className="form-floating mb-4">
        <input
          type="text"
          className={`form-control form-control-lg rounded-3 ${form.username ? 'border-success' : ''}`}
          id="login_username"
          placeholder="Usuario"
          required
          value={form.username}
          onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
          disabled={isLoading}
        />
        <label htmlFor="login_username" className="text-muted">
          <i className="fas fa-user me-2"></i>
          Usuario
        </label>
        {form.username && (
          <div className="position-absolute end-0 top-50 translate-middle-y me-3">
            <i className="fas fa-check-circle text-success"></i>
          </div>
        )}
      </div>

      {/* Password Field */}
      <div className="form-floating mb-2 position-relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`form-control form-control-lg rounded-3 pe-5 ${form.password.length >= 4 ? 'border-success' : ''}`}
          id="login_password"
          placeholder="Contraseña"
          required
          value={form.password}
          onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
          disabled={isLoading}
        />
        <label htmlFor="login_password" className="text-muted">
          <i className="fas fa-lock me-2"></i>
          Contraseña
        </label>
        
        {/* Password Toggle */}
        <button
          type="button"
          className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2 text-muted border-0 bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          disabled={isLoading}
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>

      {/* Password Strength Indicator */}
      <div className="mb-4">
        <div className="d-flex gap-1 mb-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`flex-fill rounded-1 ${
                form.password.length > i 
                  ? form.password.length < 4 
                    ? 'bg-danger' 
                    : form.password.length < 8 
                      ? 'bg-warning' 
                      : 'bg-success'
                  : 'bg-light'
              }`}
              style={{ height: '3px' }}
            />
          ))}
        </div>
        <small className={`text-muted ${form.password.length >= 4 ? 'text-success' : ''}`}>
          {form.password.length === 0 
            ? 'Ingresa tu contraseña' 
            : form.password.length < 4 
              ? 'Mínimo 4 caracteres'
              : 'Contraseña válida'
          }
        </small>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="form-check">
          <input className="form-check-input rounded-2" type="checkbox" id="rememberMe" />
          <label className="form-check-label text-muted" htmlFor="rememberMe">
            Recordarme
          </label>
        </div>
        <a href="#" className="text-decoration-none text-primary small">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {/* Submit Button */}
      <div className="d-grid mb-3">
        <button 
          type="submit" 
          className="btn btn-primary btn-lg rounded-3 fw-medium py-3 position-relative overflow-hidden"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner-border spinner-border-sm me-2" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              Ingresando...
            </>
          ) : (
            <>
              <i className="fas fa-sign-in-alt me-2"></i>
              {submitText}
            </>
          )}
          
          {/* Button shine effect */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-20 d-none"
            style={{ 
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
              transform: 'translateX(-100%)'
            }}
          />
        </button>
      </div>

      {/* Social Login Options */}
      <div className="text-center mb-3">
        <small className="text-muted">O continúa con</small>
      </div>

      <div className="row g-2">
        <div className="col-6">
          <button type="button" className="btn btn-outline-danger w-100 rounded-3" disabled={isLoading}>
            <i className="fab fa-google me-1"></i>
            Google
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-outline-primary w-100 rounded-3" disabled={isLoading}>
            <i className="fab fa-facebook-f me-1"></i>
            Facebook
          </button>
        </div>
      </div>
    </form>
  );
}