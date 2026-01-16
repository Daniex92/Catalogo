# 🎨 INICIO RÁPIDO - Artesanías del Taller

## Estructura del Proyecto

```
catalog/
├── 📄 index.html              ← Página principal (COMIENZA AQUÍ)
├── 📄 catalog.html            ← Catálogo de productos con filtros
├── 📄 about.html              ← Información sobre el taller
├── 📄 contact.html            ← Formulario de contacto
├── 📄 product-detail.html     ← Página individual de producto
├── 🎨 styles.css              ← Todos los estilos CSS
├── 💻 script.js               ← Funcionalidades JavaScript
├── 📋 products.json           ← Base de datos de productos (referencia)
├── 📚 README.md               ← Documentación completa
├── 📖 GUIA_PERSONALIZACION.md ← Cómo personalizar el sitio
├── 🧩 COMPONENTES.html        ← Ejemplos de componentes reutilizables
└── 📝 INICIO_RAPIDO.md        ← Este archivo
```

---

## 🚀 Pasos Iniciales

### 1. Abrir el Sitio
1. Abre `index.html` en tu navegador web
2. O usa **Live Server** en VS Code:
   - Click derecho en `index.html` → "Open with Live Server"

### 2. Navegar por el Sitio
- **Inicio**: Muestra hero, productos destacados, historia breve
- **Catálogo**: 8 productos con filtros por categoría
- **Sobre Nosotros**: Historia, proceso y valores del taller
- **Contacto**: Formulario y información de contacto

### 3. Menú Responsivo
- En pantallas grandes: menú horizontal normal
- En móvil: menú hamburguesa (prueba redimensionando la ventana)

---

## ⚡ Cambios Rápidos

### Cambiar Nombre del Negocio
Busca "Artesanías del Taller" y reemplaza por tu nombre en:
- `index.html` línea 5: `<title>`
- Todos los footer
- Logo

### Cambiar Colores
En `styles.css` línea 2-8, edita:
```css
:root {
    --color-primary: #8b7355;      /* Marrón principal */
    --color-secondary: #d4a574;    /* Beige/dorado */
    /* ... más colores */
}
```

**Paletas predefinidas** en GUIA_PERSONALIZACION.md

### Cambiar Imágenes
Las imágenes usan URLs de Unsplash. Crea una carpeta `images/` y:
```html
<!-- De esto: -->
<img src="https://images.unsplash.com/..." alt="Producto">

<!-- A esto: -->
<img src="images/producto.jpg" alt="Producto">
```

### Cambiar Email de Contacto
Busca `info@artesaniastaller.com` y reemplaza en:
- `contact.html`
- Todos los footer
- Links `href="mailto:"`

---

## 🎯 Funcionalidades Incluidas

✅ **Menú Responsivo** - Hamburguesa en móvil
✅ **Filtro de Productos** - Por categoría (Cerámica, Tejidos, etc.)
✅ **Formulario de Contacto** - Con validación básica
✅ **Carrito (básico)** - Guardar en localStorage
✅ **Animaciones** - Suaves y elegantes
✅ **Responsive** - Desktop, tablet, móvil

---

## 📱 Responsividad

El sitio es 100% responsivo:

| Dispositivo | Ancho | Comportamiento |
|-------------|-------|-----------------|
| Móvil | < 480px | 1 columna, menú hamburguesa |
| Tablet | 480px - 768px | 2 columnas, menú parcial |
| Desktop | > 768px | Multi-columna, menú completo |

Prueba redimensionando tu navegador o abriendo en teléfono.

---

## 🎨 Diseño Visual

- **Paleta**: Blanco + Tonos tierra (marrón, beige)
- **Tipografía**: Segoe UI, moderna y limpia
- **Espacios**: Generosos y respetosos
- **Animaciones**: Sutiles y profesionales

---

## 🔧 Personalización Avanzada

### Agregar un Nuevo Producto
En `catalog.html` o `index.html`:

```html
<article class="product-card" data-category="ceramica">
    <div class="product-image">
        <img src="URL-IMAGEN" alt="Nuevo Producto">
    </div>
    <div class="product-info">
        <h3 class="product-name">Nombre del Producto</h3>
        <p class="product-description">Descripción breve</p>
        <a href="product-detail.html?id=9" class="btn btn-secondary">Ver Detalles</a>
    </div>
</article>
```

**Categorías disponibles**: ceramica, tejidos, madera, otros

### Agregar una Nueva Sección
Copia y pega bloques de `COMPONENTES.html`

### Cambiar Información de Contacto
En `contact.html`:
```html
<!-- Dirección -->
Calle Artesanal, 123 → Tu Dirección

<!-- Teléfono -->
+34 123 456 789 → Tu Teléfono

<!-- Horarios -->
Lunes a Viernes: 10:00 AM - 6:00 PM → Tus Horarios
```

---

## 💡 Tips y Trucos

### 1. Usar Google Fonts
En `index.html` agregar antes de `</head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet">
```

Luego en `styles.css`:
```css
--font-sans: 'TuFuente', sans-serif;
```

### 2. Agregar Favicon
En `index.html` agregar en `<head>`:
```html
<link rel="icon" type="image/png" href="imagen-icono.png">
```

### 3. Mejorar SEO
En cada página, personalizar:
```html
<title>Tu Título - Artesanías</title>
<meta name="description" content="Tu descripción para buscadores">
```

### 4. Agregar Análisis
Google Analytics en `index.html` `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
```

---

## 🌐 Desplegar el Sitio

### Opción 1: GitHub Pages (GRATIS)
1. Crea cuenta en github.com
2. Crea repositorio: `username.github.io`
3. Sube todos los archivos
4. Tu sitio estará en: `https://username.github.io/catalog`

### Opción 2: Netlify (GRATIS)
1. Ve a netlify.com
2. Arrastra la carpeta completa
3. Tu sitio estará disponible automáticamente

### Opción 3: Servidor Propio
1. Compra hosting + dominio
2. Sube archivos via FTP
3. Accede via tu dominio

---

## 📞 Soporte y Documentación

- **README.md** → Documentación completa
- **GUIA_PERSONALIZACION.md** → Cómo personalizar todo
- **COMPONENTES.html** → Ejemplos de código reutilizable

---

## ✨ Características Destacadas

### Página de Inicio
- Hero minimalista con imagen grande
- 4 productos destacados
- Sección "Sobre nosotros" breve
- CTA para encargos personalizados

### Catálogo
- 8 productos de ejemplo
- Filtros por categoría
- Grid responsivo
- Breadcrumb de navegación

### Sobre Nosotros
- Historia del taller
- Proceso en 6 pasos
- Galería de imágenes
- Valores de la marca

### Contacto
- Formulario funcional
- Información completa
- Horarios
- Enlaces a redes sociales

---

## 🎓 Próximos Pasos

1. **Cambiar Información**: Actualiza nombre, email, teléfono
2. **Actualizar Imágenes**: Carga tus propias fotos de productos
3. **Editar Productos**: Personaliza nombre, descripción, precio
4. **Personalizar Colores**: Usa paletas de GUIA_PERSONALIZACION.md
5. **Desplegar**: Sube a GitHub Pages, Netlify o tu servidor

---

## 💻 Requisitos Técnicos

- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Sin dependencias externas
- ✅ HTML5 + CSS3 + JavaScript vanilla
- ✅ Funciona offline

---

## 📝 Notas Importantes

- Los estilos usan **variables CSS** para fácil customización
- El JavaScript usa **vanilla JS** (sin frameworks)
- Las imágenes usan **Unsplash** (reemplaza con tus fotos)
- El formulario es **funcional** (necesita backend para enviar email)

---

¡Listo para comenzar! 🎉

**Abre `index.html` en tu navegador y comienza a explorar.**

---

**Última actualización**: 2025  
**Versión**: 1.0
