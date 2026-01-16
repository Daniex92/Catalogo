# 🎨 Artesanías del Taller

Sitio web minimalista para una empresa de artesanía con cerámica, textiles y madera.

## 🚀 Inicio Rápido

### Para Ver el Sitio
```bash
# Opción 1: Abre el archivo
src/html/index.html

# Opción 2: Con servidor local (recomendado)
python -m http.server 8000
# Luego accede a: http://localhost:8000/src/html/
```

## 📁 Estructura del Proyecto

```
catalog/
├── src/                     # 🎯 CÓDIGO PRINCIPAL
│   ├── html/               # Páginas (7 archivos)
│   ├── css/                # Estilos (1 archivo)
│   ├── js/                 # Scripts (2 archivos)
│   └── data/               # Datos (1 archivo)
│
├── docs/                   # 📚 Documentación (18 archivos)
└── .github/                # ⚙️ Configuración
```

**[Ver estructura completa →](./README_ESTRUCTURA.md)**

## 🎯 Páginas del Sitio

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `src/html/index.html` | Hero + Destacados + About preview |
| Catálogo | `src/html/catalog.html` | Productos con filtrado |
| Producto | `src/html/product-detail.html?id=1` | Detalles con galería |
| Carrito | `src/html/cart.html` | Checkout con formulario |
| Acerca de | `src/html/about.html` | Historia + Proceso |
| Contacto | `src/html/contact.html` | Formulario + Ubicación |

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Variables, Grid, Flexbox, Animaciones
- **JavaScript** - Vanilla (sin frameworks)
- **Google Fonts** - Raleway, Momo, Open Sans
- **Formspree** - Manejo de emails

## 🎨 Sistema de Diseño

### Tipografía
- **H1** - Raleway SemiBold (600)
- **H2** - Raleway Regular + 5% letter-spacing
- **H3/H4** - Momo Trust Display
- **Body** - Open Sans

### Colores
```css
--color-primary: #2A140A        /* Marrón oscuro */
--color-secondary: #A86A3D      /* Terracota */
--color-accent: #C28E5C         /* Dorado */
--color-light: #F3EDE4          /* Blanco cálido */
--color-dark: #3E3E3E           /* Gris oscuro */
```

### Animaciones
- 40+ @keyframes
- Transiciones suaves
- Scroll reveal
- Toast notifications
- Micro interacciones

## 💾 Funcionalidades

✅ **Carrito de Compras**
- localStorage persistence
- ID-based identification
- Toast notifications
- Floating menu

✅ **Contacto**
- Integración con Formspree
- Validación básica
- Notificaciones

✅ **Búsqueda**
- Filtrado por categoría
- Animaciones de fade

✅ **Responsivo**
- Mobile (< 480px) - Hamburger menu
- Tablet (768px) - 2 columnas
- Desktop (1200px+) - 3-4 columnas

## 📱 Características

- ✓ Diseño minimalista
- ✓ Colores artesanales (tierra, terracota, dorado)
- ✓ 40+ animaciones suaves
- ✓ Carrito con localStorage
- ✓ Formulario de contacto
- ✓ Filtrado de productos
- ✓ Galería de imágenes
- ✓ SEO optimizado
- ✓ Responsive design
- ✓ Accesibilidad mejorada

## 🔧 Ediciones Comunes

### Cambiar Logo
Edita: `src/html/*.html` línea 15
```html
<svg width="40" height="40" viewBox="0 0 40 40">
  <!-- Reemplaza con tu SVG -->
</svg>
```

### Cambiar Colores
Edita: `src/css/styles.css` línea 10-16
```css
--color-primary: #TU_COLOR;
--color-secondary: #TU_COLOR;
```

### Cambiar Teléfono
Busca en todos los `.html`: `321 993 1584`

### Cambiar Slogan
Busca en todos los `.html`: `"Piezas únicas hechas con intención."`

### Agregar Producto
1. Edita: `src/html/catalog.html`
2. Duplica un `.product-card`
3. Cambia id, imagen, nombre, precio
4. Opcionalmente actualiza: `src/data/products.json`

## 📞 Información de Contacto

**Teléfono:** 📞 321 993 1584

**Formspree Endpoint:** `https://formspree.io/f/mvzzgnzd`

## 📚 Documentación

- [README_ESTRUCTURA.md](./README_ESTRUCTURA.md) - Guía de carpetas
- [ESTRUCTURA_NAVEGACION.html](./ESTRUCTURA_NAVEGACION.html) - Rutas de archivos
- [RESUMEN_REORGANIZACION.md](./RESUMEN_REORGANIZACION.md) - Cambios realizados
- [docs/](./docs/) - 18 guías y tutoriales

## 🚀 Deployment

### Opción 1: Copiar src/
```bash
# Sube toda la carpeta src/ a tu servidor
# El sitio será accesible en: /src/html/
```

### Opción 2: Raíz del proyecto
```bash
# Sube todo el proyecto
# Abre: /index.html (redirige automáticamente)
```

### Opción 3: Cambiar rutas
Cambia `../css/` a `/src/css/` en todos los HTML

## 🐛 Troubleshooting

**Las imágenes no cargan**
- Las imágenes vienen de Unsplash
- Si no tienes internet, descarga y sube imágenes locales
- Cambia URLs en HTML o CSS

**Los estilos no se aplican**
- Verifica que abres `src/html/index.html`
- No `index.html` de la raíz (que es un redirect)

**El carrito no funciona**
- Abre la consola del navegador (F12)
- Verifica que cart-functions.js está en `src/js/`
- Limpia localStorage: `localStorage.clear()`

## 📈 Mejoras Futuras

- [ ] Backend para carrito persistente
- [ ] Sistema de usuarios
- [ ] Pasarela de pagos (Stripe)
- [ ] Blog de artesanía
- [ ] Integración con Instagram
- [ ] Analytics avanzado
- [ ] Certificados de autenticidad
- [ ] Envío en tiempo real

## 📄 Licencia

Proyecto privado de Artesanías del Taller. Todos los derechos reservados.

---

**Última actualización:** 16 de enero de 2026  
**Versión:** 2.0 (Reorganización completa)
