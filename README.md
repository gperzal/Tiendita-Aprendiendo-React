# 🛒 Tiendita-Aprendiendo-React

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Versión:** 0.3.0  
**Fecha:** 13 de agosto de 2025

🔗 [Ver todas las versiones y releases](https://github.com/gperzal/Tiendita-Aprendiendo-React/releases)

---

## 📦 Descripción

Tiendita-Aprendiendo-React es una aplicación frontend desarrollada con React y Vite, enfocada en la gestión de productos y usuarios para una tienda virtual. La versión 0.3.0 introduce una arquitectura modular basada en dominios, mejorando la escalabilidad y mantenibilidad del proyecto.

---

## 🚀 Características Principales

- **Arquitectura modular feature-first:** Todo el código está organizado por dominio dentro de la carpeta `/src/modules`.
- **Separación clara de responsabilidades:** Cada dominio contiene sus propios componentes, páginas, hooks y utilidades.
- **Facilidad para escalar y mantener:** La estructura permite agregar nuevas funcionalidades sin afectar otras áreas del proyecto.
- **Experiencia de desarrollo mejorada:** El código es más legible y fácil de navegar.

---

## 🗂️ Estructura del Proyecto

```
├── 📂 src/                  → Código fuente principal
│   ├── 📂 modules/          → Módulos por dominio (feature-first)
│   │   ├── 📂 auth/         → Autenticación (Login, Registro, hook de auth, datos dummy)
│   │   ├── 📂 home/         → Página principal (Hero, HomeCards, Main, datos dummy)
│   │   ├── 📂 products/     → Productos (ProductList, ProductsPage, datos dummy)
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

### 1. **Auth (Autenticación)**

- **Componentes:**
  - `LoginForm.jsx`: Formulario de inicio de sesión.
  - `RegisterForm.jsx`: Formulario de registro de usuario.
- **Hooks:**
  - `useAuth.js`: Hook personalizado para gestionar el estado de autenticación.
- **Páginas:**
  - `LoginPage.jsx`: Página de login.
  - `RegisterPage.jsx`: Página de registro.
- **Utils:**
  - `dummyData.js`: Datos simulados para pruebas y desarrollo.

### 2. **Home (Inicio)**

- **Componentes:**
  - `Hero.jsx`: Sección principal de bienvenida.
  - `HomeCards.jsx`: Tarjetas informativas o promocionales.
  - `Main.jsx`: Contenido principal de la página de inicio.
- **Páginas:**
  - `HomePage.jsx`: Página principal de la tienda.
- **Utils:**
  - `dummyData.js`: Datos simulados para la página de inicio.

### 3. **Products (Productos)**

- **Componentes:**
  - `ProductList.jsx`: Listado de productos disponibles.
- **Páginas:**
  - `ProductsPage.jsx`: Página dedicada a la visualización de productos.
- **Utils:**
  - `dummyData.js`: Datos simulados de productos.

### 4. **Layouts (Diseño y Navegación)**

- **Componentes globales:**
  - `AlertBox.jsx`: Caja de alertas/notificaciones.
  - `Footer.jsx`: Pie de página.
  - `Layout.jsx`: Componente de layout general.
  - `Navbar.jsx` y `Navbar1.jsx`: Barras de navegación.

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

## 📝 Notas de la Versión 0.3.0

- Refactorización completa a arquitectura modular.
- Separación por dominios: auth, home, products, layouts.
- Mejora significativa en la organización y escalabilidad del código.

---
