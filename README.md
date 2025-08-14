# 🛒 Tiendita-Aprendiendo-React

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Versión:** 0.4.0  
**Fecha:** 13 de agosto de 2025

🔗 [Ver todas las versiones y releases](https://github.com/gperzal/Tiendita-Aprendiendo-React/releases)

---

## 📦 Descripción

Tiendita-Aprendiendo-React es una aplicación frontend modular desarrollada con React y Vite, orientada a la gestión de productos y usuarios para una tienda virtual. La versión 0.4.0 profundiza en la arquitectura de productos y carrito, mejorando la experiencia de usuario y la robustez del código.

---

## 🚀 Características Principales

- **Gestión avanzada de productos:** Listado, filtrado, paginación y categorías dinámicas.
- **Carrito de compras global:** Añadir, eliminar, limpiar y calcular totales con lógica desacoplada y contexto global.
- **CartProvider desacoplado:** Contexto de carrito separado para evitar errores de Fast Refresh y mejorar la escalabilidad.
- **Arquitectura modular feature-first:** Código organizado por dominio en `/src/modules`.
- **Separación clara de responsabilidades:** Cada dominio contiene sus propios componentes, páginas, hooks y utilidades.
- **Experiencia de desarrollo mejorada:** Código legible, fácil de navegar y mantener.

---

## 🗂️ Estructura del Proyecto

```
├── 📂 src/                  → Código fuente principal
│   ├── 📂 modules/          → Módulos por dominio (feature-first)
│   │   ├── 📂 auth/         → Autenticación (Login, Registro, hook de auth, datos dummy)
│   │   ├── 📂 home/         → Página principal (Hero, HomeCards, Main, datos dummy)
│   │   ├── 📂 products/     → Productos (ProductList, ProductsPage, datos dummy)
│   │   ├── 📂 cart/         → Carrito (CartProvider, useCart, utilidades)
│   │   └── 📂 layouts/      → Componentes globales (Navbar, Footer, AlertBox, Layout)
│   ├── App.jsx              → Componente raíz
│   ├── main.jsx             → Punto de entrada de React
│   └── index.css            → Estilos globales
├── 📂 public/               → Archivos públicos y estáticos
│   └── vite.svg             → Logo Vite
├── index.html               → HTML base
├── package.json             → Configuración y dependencias
├── vite.config.js           → Configuración de Vite
├── eslint.config.js         → Configuración de ESLint
└── README.md                → Documentación
```

<!--
Componentes principales del package:
- React
- React DOM
- React Router DOM
- Bootstrap
- Vite
- ESLint
- Prettier
-->

---

## 🧩 Módulos y Funcionalidades

### 1. **Products (Productos)**

- **Listado y filtrado:** El componente `ProductList.jsx` permite buscar productos por nombre, filtrar por categoría y paginar resultados.
- **Datos simulados:** Los productos, categorías y marcas se gestionan desde `dummyData.js`, facilitando pruebas y desarrollo.
- **Categorías dinámicas:** El array `categories` exportado permite mostrar y filtrar productos por tipo, con íconos y nombres amigables.
- **Importación correcta:** Se recomienda importar así:
  ```js
  import { products, categories } from "../utils/dummyData";
  ```
- **Páginas:** `ProductsPage.jsx` muestra el listado y permite interacción con el carrito.

### 2. **Cart (Carrito de compras)**

- **CartProvider:**
  - Es un componente que provee el contexto global del carrito a toda la app.
  - Se importa y envuelve la app en `App.jsx`:
    ```jsx
    import { CartProvider } from "./modules/cart/components/CartProvider.jsx";
    // ...
    <CartProvider>{/* Resto de la app */}</CartProvider>;
    ```
  - Permite que cualquier componente acceda y modifique el carrito usando el hook `useCart`.
- **useCart:**
  - Hook personalizado para acceder al contexto del carrito.
  - Ejemplo de uso:
    ```js
    import { useCart } from "../hooks/useCart";
    const {
      items,
      addToCart,
      removeFromCart,
      clearCart,
      subtotal,
      shipping,
      total,
    } = useCart();
    ```
- **Utilidades separadas:**
  - Las funciones para calcular subtotal, envío y total están en `cartUtils.js`.
  - Esto permite mantener la lógica separada y reutilizable.
- **¿Por qué separar CartProvider y useCart?**
  - React Fast Refresh (Vite) solo funciona correctamente si los archivos exportan solo componentes o solo hooks.
  - Si mezclamos exports, pueden aparecer errores y el hot reload no funciona bien.
  - Separar el provider y el hook evita estos problemas y mejora la mantenibilidad.
- **Gestión global:**
  - El carrito es accesible desde cualquier página, permitiendo agregar, eliminar y limpiar productos, además de mostrar totales en tiempo real.

---

## 🛠️ Tecnologías Utilizadas

- **React**: Librería principal para la construcción de interfaces.
- **Vite**: Herramienta de desarrollo y bundler rápido.
- **JavaScript (ES6+)**
- **CSS**: Estilos globales y por componente.
- **Bootstrap**: Framework de estilos para componentes responsivos.
- **Node.js**: Entorno de ejecución para desarrollo y dependencias.
- **ESLint**: Linter para mantener la calidad del código.

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
3. Accede a la aplicación en [http://localhost:5173](http://localhost:5173) (por defecto).

---

## 📝 Notas de la Versión 0.4.0

- Refactorización profunda en productos y carrito.
- CartProvider y useCart separados para evitar errores de Fast Refresh y mejorar la arquitectura.
- Lógica de cálculo de totales desacoplada en utilidades.
- Mejor experiencia de usuario en la gestión de productos y compras.

---
