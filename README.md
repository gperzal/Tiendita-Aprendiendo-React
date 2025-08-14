# 🛒 Tiendita-Aprendiendo-React

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
![React Icons](https://img.shields.io/badge/React%20Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)

**Versión:** 0.5.0  
**Fecha:** 14 de agosto de 2025

🔗 [Ver todas las versiones y releases](https://github.com/gperzal/Tiendita-Aprendiendo-React/releases)

---

## 📦 Descripción

Aplicación frontend modular para tienda virtual, desarrollada con React, Vite y Bootstrap. La versión 0.5.0 se enfoca en la mejor experiencia de usuario y diseño, integrando React Icons, animaciones, componentes reutilizables y una arquitectura robusta y escalable.

---

## 🚀 Características Destacadas

- **UX/UI moderna:** Interfaz limpia, responsiva y accesible, con animaciones y feedback visual.
- **React Icons:** Iconografía profesional en todos los componentes clave (navbar, botones, cards, scroll-to-top, etc.).
- **Bootstrap 5:** Estilos y utilidades para layout, cards, formularios y navegación.
- **Carrito global:** Añadir, quitar, limpiar y calcular totales desde cualquier página.
- **Gestión avanzada de productos:** Filtrado, orden, paginación y favoritos.
- **Scroll-to-top:** Botón flotante con icono React, animado y centrado.
- **Arquitectura modular:** Separación por dominios (`auth`, `home`, `products`, `cart`, `layouts`).
- **Hooks y contextos desacoplados:** Mejor rendimiento y recarga instantánea (Fast Refresh).
- **Código limpio y documentado:** Componentes reutilizables, utilidades separadas y estructura clara.

---

## 🗂️ Estructura del Proyecto

```
src/
  modules/
    auth/         → Login, registro, hook de autenticación
    home/         → Hero, Main, cards, datos dummy
    products/     → Listado, filtrado, página de productos, datos dummy
    cart/         → CartProvider, useCart, utilidades de carrito
    layouts/      → Navbar, Footer, Layout, AlertBox
  App.jsx         → Componente raíz y rutas
  main.jsx        → Punto de entrada de React
  index.css       → Estilos globales
public/
  vite.svg        → Logo Vite
index.html        → HTML base
package.json      → Configuración y dependencias
vite.config.js    → Configuración de Vite
eslint.config.js  → Configuración de ESLint
README.md         → Documentación
```

---

## 🧩 Módulos y Componentes Detallados

### 🏠 Home

- **Hero.jsx:** Sección de bienvenida con imagen, badges de tecnologías y partners.
- **Main.jsx:** Listado de productos destacados, filtros, orden, favoritos y newsletter.
- **Animaciones y feedback:** Spinner de carga, cards animadas, overlay en productos.

### 🛍️ Products

- **ProductList.jsx:** Búsqueda, filtrado por categoría, paginación y favoritos.
- **dummyData.js:** Productos, categorías y marcas simuladas para desarrollo.
- **Categorías dinámicas:** Íconos y nombres amigables, importación recomendada:
  ```js
  import { products, categories } from "../utils/dummyData";
  ```

### 🛒 Cart (Carrito)

- **CartProvider.jsx:** Contexto global, envuelve la app en `App.jsx`.
- **useCart.jsx:** Hook para acceder y modificar el carrito desde cualquier componente.
- **cartUtils.js:** Funciones para subtotal, envío y total.
- **Gestión global:** El carrito se actualiza en tiempo real y es accesible en toda la app.

### 🔑 Auth

- **LoginPage.jsx / RegisterPage.jsx:** Formularios con validación y feedback.
- **useAuth.js:** Hook para autenticación simulada.

### 🧩 Layouts

- **Navbar.jsx:** Navegación principal, offcanvas móvil, iconos React, badges y animaciones.
- **Footer.jsx:** Pie de página responsivo y moderno.
- **Layout.jsx:** Estructura principal, scroll-to-top global con `<FaArrowAltCircleUp />` centrado y animado.
- **AlertBox.jsx:** Mensajes de alerta reutilizables.

---

## 🎨 Experiencia Visual y UX

- **Iconos React:** Uso extensivo de `react-icons` para mejorar la navegación y los botones.
- **Bootstrap:** Cards, botones, formularios y layout responsivo.
- **Animaciones:** Hover en productos, spinner de carga, overlays y feedback visual.
- **Scroll-to-top:** Botón flotante, circular, con icono blanco y animación suave.
- **Colores y tipografía:** Paleta moderna, fuentes legibles y contraste adecuado.
- **Badges y feedback:** Estados visuales claros para favoritos, ofertas, categorías y acciones.

---

## 🛠️ Tecnologías Utilizadas

- **React 19+**
- **Vite 7+**
- **Bootstrap 5**
- **React Icons**
- **ESLint & Prettier**
- **JavaScript (ES6+)**

---

## 📚 Cómo Ejecutar el Proyecto

1. Instala las dependencias:
   ```cmd
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```cmd
   npm run dev
   ```
3. Abre la app en [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

---

## 📝 Notas de la Versión 0.5.0

- Mejoras visuales y de UX en todos los módulos.
- Integración completa de React Icons.
- Scroll-to-top global y animado.
- Separación y documentación de todos los hooks y contextos.
- Código optimizado y preparado para escalar.

---
