import { useState } from 'react';

export default function LoginForm({ onSubmit, submitText = 'Entrar' }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ username: form.username.trim(), password: form.password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="needs-validation">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="login_username"
          placeholder="Usuario"
          required
          value={form.username}
          onChange={(e) => setForm(f => ({ ...f, username: e.target.value }))}
        />
        <label htmlFor="login_username">Usuario</label>
      </div>

      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="login_password"
          placeholder="Contraseña"
          required
          value={form.password}
          onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
        />
        <label htmlFor="login_password">Contraseña</label>
      </div>

      <button type="submit" className="btn btn-primary w-100 py-2">{submitText}</button>
    </form>
  );
}
