// src/modules/auth/hook/useAuth.jsx
import { useEffect, useState } from 'react';
import { users as seedUsers } from '../utils/dummyData.js';

const USERS_KEY = 'auth_users';
const AUTH_KEY = 'auth_user';

function readUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (raw) return JSON.parse(raw);
  localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers));
  return seedUsers;
}

export function useAuth() {
  const [user, setUser] = useState(() => {
    const raw = sessionStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    readUsers(); // asegura semilla
  }, []);

  const login = (username, password) => {
    const db = readUsers();
    const found = db.find(u => u.username === username && u.password === password);
    if (found) {
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(found));
      setUser(found);
      return { ok: true, user: found };
    }
    return { ok: false, message: 'Usuario o contraseña inválidos.' };
  };

  const register = (username, password) => {
    const db = readUsers();
    const exists = db.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) return { ok: false, message: 'El usuario ya existe.' };

    const newUser = { id: Date.now(), username, password };
    const updated = [...db, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(updated));
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(newUser));
    setUser(newUser);
    return { ok: true, user: newUser };
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  return { user, isAuthenticated: !!user, login, register, logout };
}
