# Proyecto "my-app" — Guía Básica de React + Vite

Este proyecto es una base para aprender y practicar React usando Vite. Aquí se explica la estructura, cómo funcionan los imports/exports, los componentes y el flujo de montaje de la app.

---

## Estructura principal

- `src/` — Código fuente de la app
  - `App.jsx` — Componente principal
  - `main.jsx` — Punto de entrada de React
  - `components/` — Carpeta para componentes reutilizables (Navbar, Hero, Main, Footer)
  - `assets/` — Imágenes y recursos
  - `index.css` — Estilos globales
- `index.html` — HTML base con `<div id="root"></div>`

---

## ¿Cómo funciona React aquí?

### 1. Importar módulos y componentes

En React, usamos `import` para traer código de otros archivos o librerías:

```js
import Navbar from "./components/Navbar.jsx"; // Importa el componente Navbar
import "./index.css"; // Importa los estilos globales
```

### 2. Crear componentes

Un **componente** es una función que retorna JSX (HTML con superpoderes):

```jsx
// src/components/Navbar.jsx
export default function Navbar() {
  return <nav>{/* ...contenido... */}</nav>;
}
```

> `export default` permite que este componente se pueda importar en otros archivos.

### 3. Usar componentes dentro de otros

```jsx
// src/App.jsx
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      {/* Otros componentes */}
    </div>
  );
}

export default App;
```

### 4. Montar la app en el DOM

El archivo `main.jsx` es el punto de entrada. Aquí React "monta" el componente principal (`App`) en el HTML:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- `createRoot(document.getElementById('root'))` busca el `<div id="root">` en `index.html`.
- `.render(<StrictMode><App /></StrictMode>)` dibuja la app dentro de ese div.
- `<StrictMode>` es una herramienta de React para detectar problemas comunes en desarrollo (puedes quitarlo si quieres).

---

## Explicando import/export

- `import ... from ...` sirve para traer funciones, componentes, imágenes, etc. de otros archivos.
- `export default ...` permite que un archivo exponga una función/componente como principal.
- También puedes usar `export` (sin default) para exportar varias cosas:
  ```js
  // utils.js
  export function suma(a, b) {
    return a + b;
  }
  export const PI = 3.14;
  // En otro archivo:
  import { suma, PI } from "./utils.js";
  ```

---

## ¿Qué hace cada archivo clave?

- **App.jsx**: Junta y organiza los componentes principales de la app.
- **main.jsx**: Monta la app en el DOM.
- **components/**: Cada archivo es un componente reutilizable (Navbar, Hero, Main, Footer).
- **index.css**: Estilos globales (puedes agregar los tuyos).
- **index.html**: HTML base, solo tiene el `<div id="root"></div>` donde React "pinta" la app.

---

## ¿Cómo iniciar el proyecto?

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre la URL que te muestra la terminal (ej: http://localhost:5173)

---

## Glosario básico

- **Componente**: Función que retorna JSX (estructura visual de la app)
- **JSX**: Sintaxis similar a HTML, pero dentro de JavaScript
- **Import/Export**: Para reutilizar código entre archivos
- **createRoot/render**: Monta la app en el navegador
- **props**: Parámetros que reciben los componentes
- **Estado (state)**: Datos que pueden cambiar en la app (ver hooks como useState)

---

## Recursos útiles

- [Documentación oficial de React](https://es.react.dev/learn)
- [Documentación de Vite](https://vitejs.dev/)

---

¡Listo! Ahora puedes explorar y modificar los componentes en `src/components/` para practicar React.
