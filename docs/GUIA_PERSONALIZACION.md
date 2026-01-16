# Guía de Personalización - Artesanías del Taller

## Tabla de Contenidos
1. [Cambiar Información Básica](#cambiar-información-básica)
2. [Personalizar Colores](#personalizar-colores)
3. [Modificar Tipografía](#modificar-tipografía)
4. [Agregar/Editar Productos](#agregareditar-productos)
5. [Actualizar Imágenes](#actualizar-imágenes)
6. [SEO y Meta Tags](#seo-y-meta-tags)
7. [Personalización Avanzada](#personalización-avanzada)

---

## Cambiar Información Básica

### Nombre de la Empresa
Busca y reemplaza "Artesanías del Taller" en todos los archivos:
- Logo en HTML
- Titles en `<title>`
- Footer
- README.md

### Email de Contacto
Reemplaza `info@artesaniastaller.com` con tu email en:
- `contact.html` (formulario y enlaces)
- `index.html`, `catalog.html`, `about.html` (footer)

### Teléfono
Reemplaza `+34 123 456 789` con tu teléfono en:
- `contact.html`
- Todos los footer

### Dirección
Edita en `contact.html`:
```html
<p style="color: var(--color-neutral); line-height: 1.8;">
    Tu Calle, 123<br>
    Tu Ciudad, Tu País
</p>
```

### Horario de Atención
En `contact.html`:
```html
<p style="color: var(--color-neutral); line-height: 1.8;">
    Lunes a Viernes: TU_HORARIO<br>
    Sábados: TU_HORARIO<br>
    Domingos: Cerrado
</p>
```

---

## Personalizar Colores

### Cambiar la Paleta Completa
En `styles.css`, edita las variables CSS al inicio:

```css
:root {
    --color-primary: #8b7355;        /* Color principal */
    --color-secondary: #d4a574;      /* Color secundario */
    --color-light: #faf8f3;          /* Fondo claro */
    --color-dark: #3e3e3e;           /* Texto oscuro */
    --color-border: #e8e3da;         /* Bordes */
    --color-neutral: #b8a896;        /* Texto secundario */
}
```

### Ejemplos de Paletas Alternativas

**Paleta Moderna (Azul):**
```css
--color-primary: #2c3e50;
--color-secondary: #3498db;
--color-light: #ecf0f1;
--color-dark: #2c3e50;
--color-border: #bdc3c7;
--color-neutral: #7f8c8d;
```

**Paleta Natural (Verde):**
```css
--color-primary: #27ae60;
--color-secondary: #16a085;
--color-light: #f8f9f7;
--color-dark: #2c3e50;
--color-border: #d5dbdb;
--color-neutral: #85929e;
```

**Paleta Cálida (Rojo):**
```css
--color-primary: #c0392b;
--color-secondary: #e74c3c;
--color-light: #fef5e7;
--color-dark: #2c3e50;
--color-border: #fadbd8;
--color-neutral: #a93226;
```

---

## Modificar Tipografía

### Cambiar Fuentes
En `styles.css`:

```css
:root {
    --font-sans: 'Tu-Fuente', Arial, sans-serif;
}
```

**Opciones de Google Fonts** (agrrega en HTML):
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
```

Luego actualiza la variable:
```css
--font-sans: 'Montserrat', sans-serif;
```

### Tamaños de Fuente
```css
:root {
    --font-size-sm: 0.875rem;      /* Pequeño */
    --font-size-base: 16px;        /* Base */
    --font-size-lg: 1.125rem;      /* Grande */
    --font-size-xl: 1.5rem;        /* Muy grande */
    --font-size-2xl: 2rem;         /* Título 2 */
    --font-size-3xl: 2.5rem;       /* Título 1 */
}
```

---

## Agregar/Editar Productos

### Método 1: Editar HTML Directamente

En `catalog.html`, duplica este bloque:

```html
<article class="product-card" data-category="CATEGORIA">
    <div class="product-image">
        <img src="URL_IMAGEN" alt="Nombre del Producto">
    </div>
    <div class="product-info">
        <h3 class="product-name">Nombre del Producto</h3>
        <p class="product-description">Descripción breve del producto</p>
        <a href="product-detail.html?id=9" class="btn btn-secondary">Ver Detalles</a>
    </div>
</article>
```

**Categorías disponibles:**
- `ceramica`
- `tejidos`
- `madera`
- `otros`

### Método 2: Usar JSON (Más Profesional)

Edita `products.json` para mantener un registro de todos los productos:

```json
{
    "id": 9,
    "nombre": "Tu Producto",
    "categoria": "ceramica",
    "precio": "$100.00",
    "descripcion": "Descripción detallada",
    "imagen": "URL",
    "dimensiones": "20 x 15 cm",
    "material": "Material principal",
    "cuidados": "Instrucciones de cuidado",
    "fabricacion": "Hecho a mano - Pieza única",
    "stock": true,
    "resenas": 5,
    "puntuacion": 5
}
```

### Editar Producto Individual

En `product-detail.html`, actualiza:
- `product-detail-name`: Nombre
- `product-detail-price`: Precio
- `product-detail-description`: Descripción
- Especificaciones en la tabla

---

## Actualizar Imágenes

### Reemplazar URLs Actuales
Las imágenes usan URLs de Unsplash. Reemplázalas con tus propias imágenes:

**Opción 1: Archivos Locales**
```html
<img src="images/producto-1.jpg" alt="Descripción">
```

Crea una carpeta `images/` y sube tus fotos.

**Opción 2: Servidor de Imágenes**
```html
<img src="https://tuservidor.com/images/producto-1.jpg" alt="Descripción">
```

**Opción 3: Mantener Unsplash**
Busca imágenes en [unsplash.com](https://unsplash.com) y usa las URLs directas.

### Optimizar Imágenes
- Tamaño: Máximo 800x800px para productos
- Formato: JPG para fotos, PNG para gráficos
- Compresión: Usa [TinyPNG](https://tinypng.com) o similar

---

## SEO y Meta Tags

### Título y Descripción
En cada archivo HTML, actualiza:

```html
<title>Tu Título - Artesanías del Taller</title>
<meta name="description" content="Tu descripción para buscadores">
```

### Ejemplos de Meta Tags Mejorados

En el `<head>` de cada página:

```html
<!-- Básico -->
<meta name="description" content="Artesanías hechas a mano con materiales de calidad">
<meta name="keywords" content="artesanía, cerámica, tejidos, hecho a mano">
<meta name="author" content="Artesanías del Taller">

<!-- Open Graph (Redes Sociales) -->
<meta property="og:title" content="Artesanías del Taller">
<meta property="og:description" content="Piezas únicas hechas a mano">
<meta property="og:image" content="https://tudominio.com/imagen.jpg">
<meta property="og:url" content="https://tudominio.com">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Artesanías del Taller">
<meta name="twitter:description" content="Piezas únicas hechas a mano">
```

---

## Personalización Avanzada

### Agregar Google Analytics
En el `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');
</script>
```

### Agregar Formulario de Newsletter
En `styles.css`, agrega:

```css
.newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 400px;
}

.newsletter-input {
    flex: 1;
    padding: 10px;
    border: 1px solid var(--color-border);
}

.newsletter-btn {
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
}
```

### Agregar Mapa de Google
En `contact.html`, antes del footer:

```html
<iframe 
    width="100%" 
    height="400" 
    style="border:0; margin-top: 2rem;" 
    src="https://www.google.com/maps/embed?pb=..." 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### Integración con Mailchimp
Reemplaza el formulario de contacto con:

```html
<div id="mc_embed_signup">
    <form action="tu-action" method="post">
        <input type="email" name="EMAIL" placeholder="Tu email" required>
        <input type="submit" value="Suscribirse">
    </form>
</div>
```

---

## Tips de Diseño

### Mejorar Espaciado
En `styles.css`:
```css
:root {
    --spacing-xl: 3rem;    /* Aumentar para más espacio */
}
```

### Cambiar Border Radius
Para esquinas redondeadas, modifica en botones y tarjetas:
```css
border-radius: 8px;  /* 0 es cuadrado, 50px es muy redondeado */
```

### Agregar Sombras
```css
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
```

### Animaciones Más Rápidas/Lentas
```css
--transition: all 0.5s ease;  /* Aumenta el tiempo */
```

---

## Deployment

### Subir a GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. En Settings > Pages, selecciona branch main
4. Tu sitio estará en `https://tuusuario.github.io/catalog`

### Subir a Netlify
1. Arrastra la carpeta al sitio de Netlify
2. Tu sitio estará disponible automáticamente
3. Configura dominio personalizado

### Subir a Servidor Propio
1. Accede via FTP/SFTP
2. Sube todos los archivos a `public_html/`
3. Accede via tu dominio

---

## Soporte y Ayuda

- **HTML**: Documenta cambios en comentarios
- **CSS**: Mantén estructura de variables
- **JS**: Prueba cambios en navegadores

¡Feliz personalización!
