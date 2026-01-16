# 🎨 Guía de Estructura CSS

## Resumen de Variables CSS

Todas las propiedades están centralizadas en variables CSS para máxima flexibilidad. Modifica solo estas variables para cambiar todo el sitio.

### Colores

```css
--color-primary: #8b7355;      /* Marrón principal - Botones, títulos */
--color-secondary: #d4a574;    /* Beige dorado - Acentos, hover */
--color-light: #faf8f3;        /* Blanco cálido - Fondo principal */
--color-dark: #3e3e3e;         /* Gris oscuro - Texto principal */
--color-border: #e8e3da;       /* Gris claro - Bordes, separadores */
--color-neutral: #b8a896;      /* Gris-marrón - Texto secundario */
```

**Para cambiar toda la paleta:**
1. Edita estas 6 variables en `styles.css` línea 2-8
2. Todo el sitio cambiará automáticamente

### Espaciado (Spacing)

```css
--spacing-xs: 0.5rem;   /* 8px - Muy pequeño */
--spacing-sm: 1rem;     /* 16px - Pequeño */
--spacing-md: 1.5rem;   /* 24px - Medio */
--spacing-lg: 2rem;     /* 32px - Grande */
--spacing-xl: 3rem;     /* 48px - Muy grande */
--spacing-xxl: 4rem;    /* 64px - Extra grande */
```

**Uso en paddings:**
```css
padding: var(--spacing-lg);           /* 32px en todos lados */
padding: var(--spacing-lg) 0;         /* 32px arriba/abajo, 0 lados */
margin-bottom: var(--spacing-xl);     /* 48px abajo */
```

### Tipografía

```css
--font-sans: 'Segoe UI', 'Helvetica Neue', -apple-system, 
             BlinkMacSystemFont, sans-serif;

--font-size-base: 16px;    /* Tamaño base */
--font-size-sm: 0.875rem;  /* 14px - Pequeño */
--font-size-lg: 1.125rem;  /* 18px - Grande */
--font-size-xl: 1.5rem;    /* 24px - Muy grande */
--font-size-2xl: 2rem;     /* 32px - Título 2 */
--font-size-3xl: 2.5rem;   /* 40px - Título 1 */
```

### Otras Variables

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
/* Animación predefinida */

--shadow-light: 0 1px 3px rgba(0, 0, 0, 0.08);
/* Sombra sutil */

--shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.1);
/* Sombra más pronunciada */
```

---

## Estructura de Componentes

### 1. HEADER / NAVEGACIÓN
- Fondo blanco con borde inferior sutil
- Posición sticky (pegada al top)
- Menú horizontal que se convierte en hamburguesa en móvil

```css
.header { position: sticky; }
.nav-menu a::after { /* Línea de hover debajo del enlace */ }
.hamburger { /* Tres líneas animadas */ }
```

### 2. HERO SECTION
- Grid de 2 columnas (texto + imagen)
- En móvil: 1 columna
- Imagen con efecto hover suave

```css
.hero { grid-template-columns: 1fr 1fr; }
.hero-image:hover img { transform: scale(1.02); }
```

### 3. GRID DE PRODUCTOS
- 4 columnas automáticas (responsive)
- Tarjetas elevadas en hover
- Imagen con zoom en hover

```css
.products-grid { 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.product-card:hover { transform: translateY(-8px); }
```

### 4. BOTONES
Dos estilos principales:

**Primario** (fondo lleno):
```css
.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-light);
}
.btn-primary:hover {
    background-color: transparent;
    color: var(--color-primary);
}
```

**Secundario** (borde solamente):
```css
.btn-secondary {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}
.btn-secondary:hover {
    background-color: var(--color-primary);
    color: var(--color-light);
}
```

### 5. FORMULARIOS
- Bordes sutiles
- Focus states destacados
- Sin border-radius (diseño minimalista)

```css
.form-group input:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
}
```

### 6. FOOTER
- Fondo oscuro (gris casi negro)
- Texto claro
- Grid responsivo

```css
.footer { background-color: var(--color-dark); }
.footer-section h3 { color: var(--color-secondary); }
```

---

## Breakpoints Responsivos

El sitio tiene 2 puntos de quiebre principales:

### Tablet (hasta 768px)
```css
@media (max-width: 768px) {
    /* Grid cambia a 1 columna */
    /* Menú se convierte en hamburguesa */
    /* Espaciado se reduce */
}
```

### Móvil (hasta 480px)
```css
@media (max-width: 480px) {
    /* Fuentes más pequeñas */
    /* Productos en grid 2x2 */
    /* Espacios más apretados */
}
```

---

## Patrones Comunes

### Centrar Contenido
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}
```

### Texto Centrado
```css
.section-title {
    text-align: center;
}
```

### Grid 2 Columnas
```css
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xxl);
    align-items: center;
}
```

### Imagen Cuadrada (1:1)
```css
.product-image {
    position: relative;
    width: 100%;
    padding-bottom: 100%;      /* Ratio 1:1 */
    overflow: hidden;
}

.product-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Efecto Hover en Imagen
```css
.product-image img {
    transition: var(--transition);
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}
```

### Sticky Position
```css
.product-detail-image {
    position: sticky;
    top: 100px;  /* Distancia del top cuando se pega */
}
```

---

## Cambios Comunes

### Aumentar Espacios
Modifica `--spacing-xxl` de `4rem` a `5rem` o más.

### Más Redondeado
Agrega a botones y tarjetas:
```css
border-radius: 8px;  /* 0 = cuadrado, 50px = muy redondeado */
```

### Animaciones Más Lentas
Cambia `--transition` de `0.3s` a `0.5s` o `0.8s`

### Sombras Más Fuertes
Modifica `--shadow-medium`:
```css
--shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.15);
```

### Grid Diferente
Cambia `grid-template-columns`:
```css
/* De esto: */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* A esto: */
grid-template-columns: 1fr 1fr 1fr;  /* Siempre 3 columnas */
```

---

## Colores Usados

### Texto
- Títulos: `var(--color-primary)` (#8b7355)
- Texto normal: `var(--color-dark)` (#3e3e3e)
- Texto secundario: `var(--color-neutral)` (#b8a896)

### Fondos
- Principal: `var(--color-light)` (#faf8f3)
- Contenedor: `#ffffff` (blanco puro)
- Footer: `var(--color-dark)` (#3e3e3e)

### Acentos
- Botones: `var(--color-primary)`
- Hover: `var(--color-secondary)`
- Bordes: `var(--color-border)`

---

## Orden de Especificidad CSS

El archivo está organizado así:

1. Variables y reset
2. Header y navegación
3. Hero section
4. Contenedores
5. Productos y grids
6. Botones
7. Secciones específicas
8. Footer
9. Breadcrumb
10. Formularios
11. Producto detalle
12. Media queries

---

## Debug y Testing

### Ver Estructura
Abre DevTools (F12) y usa:
```css
/* Mostrar grillas */
* { border: 1px solid red; }

/* Mostrar espacios */
* { background: rgba(0,0,0,0.05); }
```

### Probar Responsividad
1. F12 en Chrome
2. Ctrl+Shift+M (o Cmd+Shift+M en Mac)
3. Prueba en diferentes tamaños

### Validar CSS
Usa https://jigsaw.w3.org/css-validator/

---

## Mejores Prácticas

✅ Usa variables en lugar de colores hardcodeados  
✅ Agrupa media queries al final de cada sección  
✅ Mantén la especificidad baja  
✅ Usa flexbox/grid para layouts  
✅ Prueba en múltiples navegadores  
✅ Comenta cambios importantes  

❌ Evita `!important`  
❌ No hagas grillas fijas (siempre responsive)  
❌ No uses muchos breakpoints  
❌ No olvides fallbacks para navegadores antiguos  

---

**¡Feliz diseño!** 🎨
