# Artesanías del Taller - Estructura del Proyecto

## 📁 Organización de Carpetas

```
catalog/
├── src/                          # Código fuente principal
│   ├── html/                    # Páginas HTML
│   │   ├── index.html          # Página de inicio
│   │   ├── catalog.html        # Catálogo de productos
│   │   ├── product-detail.html # Detalles de producto
│   │   ├── cart.html           # Carrito de compras
│   │   ├── about.html          # Acerca de nosotros
│   │   ├── contact.html        # Contacto
│   │   ├── COMPONENTES.html    # Guía de componentes
│   │   └── DEBUG_CARRITO.html  # Página de debug
│   │
│   ├── css/                     # Estilos
│   │   └── styles.css          # Estilos principales (1537 líneas)
│   │
│   ├── js/                      # Scripts JavaScript
│   │   ├── script.js           # Lógica principal
│   │   └── cart-functions.js   # Funciones del carrito
│   │
│   └── data/                    # Datos
│       └── products.json       # Información de productos (referencia)
│
├── docs/                        # Documentación
│   ├── README.md
│   ├── GUIA_CSS.md
│   ├── GUIA_PERSONALIZACION.md
│   ├── INDICE.md
│   ├── INICIO_RAPIDO.md
│   ├── MAPA_NAVEGACION.md
│   ├── COMPONENTES.html
│   ├── PRIMER_USO.txt
│   └── [más documentos]
│
├── .github/
│   └── copilot-instructions.md # Instrucciones para AI
│
└── README_ESTRUCTURA.md         # Este archivo
```

## 🚀 Rutas de Referencia

### En archivos HTML:
- **CSS**: `<link rel="stylesheet" href="../css/styles.css">`
- **JS**: `<script src="../js/script.js"></script>`
- **Cart JS**: `<script src="../js/cart-functions.js"></script>`

### Entre páginas HTML:
- Rutas internas NO cambian: `href="index.html"`, `href="cart.html"`, etc.
- Todas están en el mismo directorio: `src/html/`

## 📋 Archivos Principales

| Archivo | Ubicación | Descripción |
|---------|-----------|-------------|
| styles.css | src/css/ | Sistema de diseño con 8 colores, variables CSS, 40+ animaciones |
| script.js | src/js/ | Menú móvil, filtrado, búsqueda, animaciones scroll |
| cart-functions.js | src/js/ | Gestión del carrito, integración Formspree |
| products.json | src/data/ | Referencia de productos (no usado dinámicamente) |
| index.html | src/html/ | Página de inicio con hero, featured, about preview |
| catalog.html | src/html/ | Catálogo con filtrado por categoría |
| product-detail.html | src/html/ | Detalles de producto con ID dinámico |
| cart.html | src/html/ | Carrito con checkout y formulario |

## 🎨 Sistema de Diseño

**Tipografía:**
- H1: Raleway SemiBold (600)
- H2: Raleway Regular + 5% letter-spacing
- H3/H4: Momo Trust Display
- Body: Open Sans

**Colores:**
- Primary: #2A140A (texto principal)
- Secondary: #A86A3D (botones)
- Light: #F3EDE4 (fondos)
- Dark: #3E3E3E (texto oscuro)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Phone**: < 480px

## 🔧 Funcionalidades

✅ Carrito con localStorage
✅ Filtrado de productos
✅ Animaciones microinteracciones
✅ Formulario de contacto (Formspree)
✅ Navegación móvil (hamburger)
✅ Notificaciones toast
✅ Scroll reveal animations

## 📞 Contacto

**Teléfono**: 📞 321 993 1584
**Slogan**: "Piezas únicas hechas con intención."
