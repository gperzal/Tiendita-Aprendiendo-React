import { useState } from 'react';

export default function RegisterForm({ onSubmit, submitText = 'Registrarse' }) {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      onSubmit?.({ ...form, username: form.username.trim() });
      setIsLoading(false);
    }, 1500);
  };

  const passwordStrength = form.password.length >= 8 ? 'strong' : form.password.length >= 4 ? 'medium' : 'weak';
  const passwordsMatch = form.confirm && form.password === form.confirm;
  const isFormValid = form.username.trim() && form.password.length >= 4 && passwordsMatch && acceptTerms;

  const getPasswordColor = () => {
    if (!form.password) return 'bg-light';
    return passwordStrength === 'strong' ? 'bg-success' : passwordStrength === 'medium' ? 'bg-warning' : 'bg-danger';
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="needs-validation">
      {/* Username Field */}
      <div className="form-floating mb-4">
        <input
          type="text"
          className={`form-control form-control-lg rounded-3 ${
            form.username.length >= 3 ? 'border-success' : form.username.length > 0 ? 'border-warning' : ''
          }`}
          id="reg_username"
          placeholder="Usuario"
          required
          value={form.username}
          onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
          disabled={isLoading}
        />
        <label htmlFor="reg_username" className="text-muted">
          <i className="fas fa-user me-2"></i>
          Nombre de usuario
        </label>
        
        {/* Username validation indicator */}
        <div className="position-absolute end-0 top-50 translate-middle-y me-3">
          {form.username.length >= 3 && (
            <i className="fas fa-check-circle text-success"></i>
          )}
          {form.username.length > 0 && form.username.length < 3 && (
            <i className="fas fa-exclamation-circle text-warning"></i>
          )}
        </div>
      </div>

      {/* Username requirements */}
      {form.username.length > 0 && form.username.length < 3 && (
        <div className="alert alert-warning py-2 mb-3" role="alert">
          <small>
            <i className="fas fa-info-circle me-1"></i>
            El nombre de usuario debe tener al menos 3 caracteres
          </small>
        </div>
      )}

      {/* Password Field */}
      <div className="form-floating mb-2 position-relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`form-control form-control-lg rounded-3 pe-5 ${
            form.password && passwordStrength === 'strong' ? 'border-success' : 
            form.password && passwordStrength === 'medium' ? 'border-warning' :
            form.password && passwordStrength === 'weak' ? 'border-danger' : ''
          }`}
          id="reg_password"
          placeholder="Contraseña"
          required
          value={form.password}
          onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
          disabled={isLoading}
        />
        <label htmlFor="reg_password" className="text-muted">
          <i className="fas fa-lock me-2"></i>
          Contraseña
        </label>
        
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
      <div className="mb-3">
        <div className="d-flex gap-1 mb-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`flex-fill rounded-1 ${
                form.password.length > i * 2 ? getPasswordColor() : 'bg-light'
              }`}
              style={{ height: '4px' }}
            />
          ))}
        </div>
        
        <div className="row g-2">
          <div className="col-6">
            <small className={`d-flex align-items-center ${form.password.length >= 4 ? 'text-success' : 'text-muted'}`}>
              <i className={`fas ${form.password.length >= 4 ? 'fa-check' : 'fa-circle'} me-1`} style={{ fontSize: '8px' }}></i>
              Mínimo 4 caracteres
            </small>
          </div>
          <div className="col-6">
            <small className={`d-flex align-items-center ${form.password.length >= 8 ? 'text-success' : 'text-muted'}`}>
              <i className={`fas ${form.password.length >= 8 ? 'fa-check' : 'fa-circle'} me-1`} style={{ fontSize: '8px' }}></i>
              8+ para mayor seguridad
            </small>
          </div>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="form-floating mb-3 position-relative">
        <input
          type={showConfirm ? 'text' : 'password'}
          className={`form-control form-control-lg rounded-3 pe-5 ${
            form.confirm && passwordsMatch ? 'border-success' : 
            form.confirm && !passwordsMatch ? 'border-danger' : ''
          }`}
          id="reg_confirm"
          placeholder="Confirmar contraseña"
          required
          value={form.confirm}
          onChange={(e) => setForm(f => ({ ...f, confirm: e.target.value }))}
          disabled={isLoading}
        />
        <label htmlFor="reg_confirm" className="text-muted">
          <i className="fas fa-shield-alt me-2"></i>
          Confirmar contraseña
        </label>
        
        <button
          type="button"
          className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2 text-muted border-0 bg-transparent"
          onClick={() => setShowConfirm(!showConfirm)}
          disabled={isLoading}
        >
          <i className={`fas ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>

        {/* Password match indicator */}
        {form.confirm && (
          <div className="position-absolute" style={{ top: '10px', right: '50px' }}>
            <i className={`fas ${passwordsMatch ? 'fa-check-circle text-success' : 'fa-times-circle text-danger'}`}></i>
          </div>
        )}
      </div>

      {/* Password match feedback */}
      {form.confirm && !passwordsMatch && (
        <div className="alert alert-danger py-2 mb-3" role="alert">
          <small>
            <i className="fas fa-exclamation-triangle me-1"></i>
            Las contraseñas no coinciden
          </small>
        </div>
      )}

      {form.confirm && passwordsMatch && (
        <div className="alert alert-success py-2 mb-3" role="alert">
          <small>
            <i className="fas fa-check-circle me-1"></i>
            Las contraseñas coinciden perfectamente
          </small>
        </div>
      )}

      {/* Terms and Conditions */}
      <div className="form-check mb-4 p-3 bg-light rounded-3">
        <input 
          className="form-check-input rounded-2" 
          type="checkbox" 
          id="acceptTerms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          disabled={isLoading}
        />
        <label className="form-check-label text-muted" htmlFor="acceptTerms">
          <small>
            Acepto los{' '}
            <a href="#" className="text-primary text-decoration-none">
              términos y condiciones
            </a>
            {' '}y la{' '}
            <a href="#" className="text-primary text-decoration-none">
              política de privacidad
            </a>
          </small>
        </label>
        
        {acceptTerms && (
          <div className="mt-2">
            <small className="text-success">
              <i className="fas fa-shield-check me-1"></i>
              Términos aceptados
            </small>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid mb-4">
        <button 
          type="submit" 
          className="btn btn-success btn-lg rounded-3 fw-medium py-3 position-relative overflow-hidden"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner-border spinner-border-sm me-2" role="status">
                <span className="visually-hidden">Creando cuenta...</span>
              </div>
              Creando cuenta...
            </>
          ) : (
            <>
              <i className="fas fa-user-plus me-2"></i>
              {submitText}
            </>
          )}
        </button>
      </div>

      {/* Security Features */}
      <div className="bg-light rounded-3 p-3">
        <h6 className="text-dark mb-2">
          <i className="fas fa-shield-alt text-success me-2"></i>
          Tu cuenta estará protegida con:
        </h6>
        
        <div className="row g-2">
          <div className="col-6">
            <small className="text-muted d-flex align-items-center">
              <i className="fas fa-lock text-primary me-1"></i>
              Encriptación SSL
            </small>
          </div>
          <div className="col-6">
            <small className="text-muted d-flex align-items-center">
              <i className="fas fa-user-shield text-primary me-1"></i>
              Verificación 2FA
            </small>
          </div>
          <div className="col-6">
            <small className="text-muted d-flex align-items-center">
              <i className="fas fa-eye-slash text-primary me-1"></i>
              Datos privados
            </small>
          </div>
          <div className="col-6">
            <small className="text-muted d-flex align-items-center">
              <i className="fas fa-backup text-primary me-1"></i>
              Backup seguro
            </small>
          </div>
        </div>
      </div>
    </form>
  );
}