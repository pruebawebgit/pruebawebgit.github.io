# 🏀 Hoops & Threads — Tienda Basketball

Tienda online estática especializada en ropa de basketball, construida con **HTML, CSS y JavaScript vanilla**, sin dependencias externas ni frameworks.

---

## 📋 Descripción

**Hoops & Threads** es una tienda de ropa de basketball con catálogo de camisetas y pantalones de equipos NBA. El proyecto está orientado a la práctica de maquetación web responsive y manipulación del DOM con JavaScript puro.

---

## 🗂️ Estructura del proyecto

```
hoops-and-threads/
├── index.html              # Página de inicio con accesos a categorías
├── camisetas.html          # Catálogo de camisetas (6 productos)
├── pantalones.html         # Catálogo de pantalones (6 productos)
├── css/
│   └── styles.css          # Estilos globales y componentes
├── js/
│   └── script.js           # Lógica de productos y carrito
└── images/
    ├── camiseta-lakers.jpg
    ├── camiseta-celtics.jpg
    ├── camiseta-bulls.jpg
    ├── camiseta-nets.jpg
    ├── camiseta-warriors.jpg
    ├── camiseta-heat.jpg
    ├── pantalon-shorts.jpg
    ├── pantalon-jogger.jpg
    ├── pantalon-cargo.jpg
    ├── pantalon-fleece.jpg
    ├── pantalon-sweat.jpg
    └── pantalon-parachute.jpg
```

---

## ✨ Funcionalidades

- **Catálogo de productos** — 6 camisetas y 6 pantalones renderizados dinámicamente desde JavaScript
- **Carrito de compra** — Contador en la barra de navegación con animación al añadir productos
- **Feedback visual** — El botón "Añadir al carrito" cambia de estado durante 1,5 segundos al pulsarlo
- **Imágenes con fallback** — Si una imagen no carga, se muestra un placeholder automáticamente
- **Diseño responsive** — Adaptado a escritorio, tablet y móvil mediante CSS Grid y media queries
- **Navegación persistente** — Barra sticky con indicador de página activa

---

## 🛍️ Productos

### Camisetas

| ID  | Nombre         | Precio  | Etiqueta    |
|-----|----------------|---------|-------------|
| c1  | Lakers Icon    | €29.99  | Edicion     |
| c2  | Celtics Green  | €27.99  | Clasico     |
| c3  | Bulls Roar     | €32.50  | Retro       |
| c4  | Nets Blackout  | €26.99  | City        |
| c5  | Warriors Gold  | €31.00  | Statement   |
| c6  | Heat Vice      | €34.99  | Alternativa |

### Pantalones

| ID  | Nombre          | Precio  | Etiqueta    |
|-----|-----------------|---------|-------------|
| p1  | Shorts Swingman | €22.99  | Ajuste      |
| p2  | Jogger Court    | €34.50  | Performance |
| p3  | Cargo Hoops     | €39.99  | Cargo       |
| p4  | Tech Fleece     | €44.00  | Termico     |
| p5  | Classic Sweat   | €28.99  | Basico      |
| p6  | Parachute Pant  | €47.00  | Baggy       |

---

## 🚀 Cómo ejecutar el proyecto

Al tratarse de un proyecto 100% estático, **no requiere instalación ni servidor de build**.

### Opción 1 — Abrir directamente

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/hoops-and-threads.git

# Abre index.html en tu navegador
open hoops-and-threads/index.html
```

> ⚠️ Algunos navegadores bloquean la carga de imágenes locales al abrir archivos con `file://`. Se recomienda usar un servidor local.

### Opción 2 — Servidor local con VS Code

Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) y haz clic en **"Go Live"** desde `index.html`.

### Opción 3 — Servidor local con Python

```bash
cd hoops-and-threads
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

---

## 🎨 Paleta de colores

| Color           | Hex       | Uso                              |
|-----------------|-----------|----------------------------------|
| Negro           | `#1e1e1e` | Fondo navbar, botones, textos    |
| Ámbar           | `#f0a500` | Acento principal, hover, badges  |
| Crema           | `#f7f5f2` | Fondo general de la página       |
| Blanco          | `#ffffff` | Fondo de tarjetas de producto    |
| Gris texto      | `#5a5a5a` | Textos secundarios               |

---

## 🔧 Tecnologías utilizadas

- **HTML5** — Estructura semántica
- **CSS3** — Grid Layout, Flexbox, Custom Properties, animaciones
- **JavaScript ES6+** — Módulo IIFE, manipulación del DOM, eventos

No se utilizan librerías, frameworks ni dependencias externas.

---

## 📱 Breakpoints responsive

| Breakpoint | Columnas del grid |
|------------|-------------------|
| > 1024px   | 3+ columnas       |
| 768–1024px | 2–3 columnas      |
| 480–768px  | 2 columnas        |
| < 480px    | 2 columnas fijas  |

---

## 🔮 Posibles mejoras futuras

- [ ] Carrito funcional con `localStorage` (persistencia entre páginas)
- [ ] Selector de talla (S / M / L / XL)
- [ ] Filtro por precio o etiqueta
- [ ] Página de detalle de producto
- [ ] Integración con pasarela de pago (Stripe, PayPal)
- [ ] Backend con Node.js o gestión de stock en tiempo real

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

<p align="center">
  Hecho con ❤️ y mucho basketball · <strong>Hoops & Threads</strong> · 2026
</p>
