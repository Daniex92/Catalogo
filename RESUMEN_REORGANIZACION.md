# ✅ PROYECTO REORGANIZADO - Artesanías del Taller

## 📋 Resumen de Cambios Realizados

Se ha reorganizado completamente la estructura del proyecto en carpetas lógicas para mayor mantenibilidad y claridad.

---

## 📁 Nueva Estructura del Proyecto

```
catalog/
│
├── 📄 index.html                           # Redirección a src/html/index.html
├── 📄 README_ESTRUCTURA.md                 # Guía de navegación
├── 📄 ESTRUCTURA_NAVEGACION.html           # Documentación de rutas
│
├── 📁 src/                                 # CÓDIGO FUENTE
│   ├── 📁 html/                            # Páginas HTML
│   │   ├── index.html                      # Página de inicio
│   │   ├── catalog.html                    # Catálogo de productos
│   │   ├── product-detail.html             # Detalles de producto (ID dinámico)
│   │   ├── cart.html                       # Carrito y checkout
│   │   ├── about.html                      # Acerca de nosotros
│   │   ├── contact.html                    # Formulario de contacto
│   │   ├── COMPONENTES.html                # Guía de componentes
│   │   └── DEBUG_CARRITO.html              # Página de depuración
│   │
│   ├── 📁 css/                             # Estilos
│   │   └── styles.css                      # Estilos principales (1537 líneas)
│   │                                       # Sistema de diseño completo
│   │
│   ├── 📁 js/                              # Scripts JavaScript
│   │   ├── script.js                       # Funciones principales
│   │   └── cart-functions.js               # Gestión del carrito
│   │
│   └── 📁 data/                            # Datos
│       └── products.json                   # Referencia de productos
│
├── 📁 docs/                                # DOCUMENTACIÓN
│   ├── README.md
│   ├── GUIA_CSS.md
│   ├── GUIA_PERSONALIZACION.md
│   ├── GUIA_CARRITO.md
│   ├── INDICE.md
│   ├── INICIO_RAPIDO.md
│   ├── MAPA_NAVEGACION.md
│   ├── COMPONENTES.html
│   └── [más documentos]
│
└── 📁 .github/                             # Configuración
    └── copilot-instructions.md             # Instrucciones para AI
```

---

## 🔄 Cambios Realizados

### ✅ Carpetas Creadas
- `src/` - Contenedor principal del código fuente
- `src/html/` - Todas las páginas HTML
- `src/css/` - Estilos (styles.css)
- `src/js/` - Scripts (script.js, cart-functions.js)
- `src/data/` - Datos (products.json)
- `docs/` - Documentación y guías

### ✅ Archivos Movidos
```
Antes:
├── index.html
├── catalog.html
├── product-detail.html
├── cart.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── cart-functions.js
└── products.json

Después:
├── src/html/index.html
├── src/html/catalog.html
├── src/html/product-detail.html
├── src/html/cart.html
├── src/html/about.html
├── src/html/contact.html
├── src/css/styles.css
├── src/js/script.js
├── src/js/cart-functions.js
└── src/data/products.json
```

### ✅ Referencias Actualizadas

Todos los archivos HTML han sido actualizados con las nuevas rutas:

**CSS:**
```html
<!-- Antes -->
<link rel="stylesheet" href="styles.css">

<!-- Después -->
<link rel="stylesheet" href="../css/styles.css">
```

**JavaScript:**
```html
<!-- Antes -->
<script src="script.js"></script>

<!-- Después -->
<script src="../js/script.js"></script>
```

**Navegación interna (sin cambios):**
```html
<!-- Igual en todas partes -->
<a href="index.html">Inicio</a>
<a href="catalog.html">Catálogo</a>
```

---

## 🎯 Cómo Trabajar con la Nueva Estructura

### Para Abrir en Navegador
1. Navega a: `src/html/`
2. Abre cualquier archivo HTML
3. Las referencias CSS y JS funcionarán automáticamente
4. Los links internos entre páginas funcionarán igual

**Alternativa:** Abre `catalog/index.html` que redirige automáticamente a `src/html/index.html`

### Para Editar Código

**Estilos:**
- Archivo: `src/css/styles.css`
- Líneas 1-5: Imports de Google Fonts
- Líneas 7-43: Variables CSS (:root)
- Líneas 27-31: Variables de tipografía
- Líneas 47+: Animaciones y estilos

**Funcionalidad:**
- `src/js/script.js` - Lógica general (menú, filtros, animaciones)
- `src/js/cart-functions.js` - Funciones del carrito y Formspree

**Contenido:**
- `src/html/*.html` - Edita directamente el HTML

**Datos:**
- `src/data/products.json` - Referencia (no usado dinámicamente)

### Para Agregar Nuevos Archivos

**CSS:** `src/css/nuevo-estilo.css`
```html
<link rel="stylesheet" href="../css/nuevo-estilo.css">
```

**JavaScript:** `src/js/nuevas-funciones.js`
```html
<script src="../js/nuevas-funciones.js"></script>
```

**Imágenes:** Recomendado usar URLs externas (Unsplash) o crear `src/img/`

---

## 🚀 Deployment

### Para Subir a Producción

**Opción 1 - Copiar carpeta `src/`**
```
Servidor: /html/src/
El sitio accesible en: /html/src/html/index.html
```

**Opción 2 - Cambiar rutas a absolutas**
```html
<!-- En lugar de ../css/styles.css -->
<link rel="stylesheet" href="/src/css/styles.css">
```

**Opción 3 - Crear redirect en raíz**
Ya está hecho: `index.html` redirige a `src/html/index.html`

---

## 📊 Sistema de Diseño

### Tipografía
- **H1**: Raleway SemiBold (600)
- **H2**: Raleway Regular + 5% letter-spacing
- **H3/H4**: Momo Trust Display
- **Body**: Open Sans

### Colores
- Primary: #2A140A (marrón oscuro)
- Secondary: #A86A3D (terracota)
- Light: #F3EDE4 (blanco cálido)
- Accent: #C28E5C (dorado)

### Animaciones
- 40+ @keyframes definidos
- Transiciones suaves (0.3s)
- Scroll reveal automático
- Toast notifications
- Micro interacciones en botones

---

## ✨ Características Implementadas

✅ **Carrito de Compras**
- localStorage para persistencia
- ID-based product identification
- Toast notifications
- Floating menu cart
- Checkout page con formulario
- Confirmation modal

✅ **Búsqueda y Filtrado**
- Filtro por categoría
- Búsqueda por nombre (opcional)
- Animaciones de fade

✅ **Contacto**
- Formulario integrado con Formspree
- Email notifications
- Validación básica

✅ **Responsivo**
- Mobile: < 480px (hamburger menu)
- Tablet: 768px (2 columnas)
- Desktop: 1200px+ (3-4 columnas)

✅ **SEO**
- Meta tags correctos
- Semantic HTML5
- Titles descriptivos
- Estructura breadcrumb

---

## 🐛 Problemas Resueltos

✅ Carrito sumaba productos incorrectamente → Ahora usa ID
✅ Alert molesto al agregar producto → Removido
✅ Fuentes antiguas (Cormorant+Inter) → Actualizado a Raleway+Momo+OpenSans
✅ Emoji de carrito → Reemplazado con SVG minimalista
✅ Rutas CSS/JS con estructura plana → Ahora organizadas en carpetas

---

## 📞 Contacto e Información

**Teléfono:** 📞 321 993 1584
**Slogan:** "Piezas únicas hechas con intención."

---

## 📝 Próximas Mejoras (Opcional)

- [ ] Agregar carrito a servidor (backend)
- [ ] Sistema de usuarios
- [ ] Pagos en línea (Stripe/PayPal)
- [ ] Blog de artesanía
- [ ] Galería de proceso
- [ ] Integración con Instagram
- [ ] Analytics avanzado

---

**Actualizado:** 16 de enero de 2026
**Versión:** 2.0 (Reorganización completa)
