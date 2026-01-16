# Artesanías del Taller - Sitio Web de Catálogo

Un sitio web elegante y minimalista para un taller artesanal, con diseño responsivo que destaca la belleza de las piezas hechas a mano.

## Características

### 1. Diseño Minimalista y Elegante
- **Paleta de colores artesanal**: Blanco predominante con tonos tierra (marrón #8b7355, beige #d4a574)
- **Tipografía clara**: Segoe UI y fuentes sans-serif modernas
- **Espacios en blanco generosos**: Respeto visual y enfoque en el contenido
- **Animaciones sutiles**: Transiciones suaves que no sobrecargan

### 2. Estructura HTML Semántica
- Navegación sticky con menú responsivo
- Breadcrumb de navegación en páginas internas
- Secciones bien organizadas y accesibles
- Meta tags para SEO básico

### 3. Página de Inicio
- **Header**: Logo artesanal + menú de navegación transparente
- **Hero Section**: Imagen destacada con texto elegante
- **Colección Destacada**: Grid de 4 productos principales
- **Sección "Sobre Nosotros"**: Descripción breve con imagen
- **Call-to-Action**: Incentivo para encargos personalizados
- **Footer**: Información de contacto y enlaces rápidos

### 4. Catálogo de Productos
- Layout en cuadrícula responsiva
- Filtros por categoría (Cerámica, Tejidos, Madera, Otros)
- 8 productos de ejemplo con descripciones
- Hover suave en tarjetas de productos
- Enlaces a detalle de productos

### 5. Página de Detalle de Producto
- Imagen principal con galerí de miniaturas
- Información de especificaciones
- Control de cantidad
- Botón "Agregar al Carrito"
- Productos relacionados
- Información de garantía y envío

### 6. Página "Sobre Nosotros"
- Historia del taller
- Proceso de creación en 6 pasos
- Galería de imágenes del taller
- Valores de la marca
- CTA para solicitudes de colaboración

### 7. Página de Contacto
- Formulario de contacto funcional
- Información de ubicación
- Datos de contacto directo
- Horario de atención
- Enlaces a redes sociales

## Estructura de Archivos

```
catalog/
├── index.html              # Página de inicio
├── catalog.html            # Catálogo de productos
├── about.html              # Página sobre nosotros
├── contact.html            # Página de contacto
├── product-detail.html     # Detalle individual de producto
├── styles.css              # Estilos CSS personalizados
├── script.js               # Funcionalidades JavaScript
└── README.md               # Este archivo
```

## Características Técnicas

### Responsive Design
- **Desktop**: Layouts de múltiples columnas
- **Tablet** (hasta 768px): Ajustes de grid y espaciado
- **Mobile** (hasta 480px): Single column, menú hamburguesa

### Funcionalidades JavaScript
- ✅ Menú responsivo con hamburguesa animada
- ✅ Filtrado de productos por categoría
- ✅ Formulario de contacto con validación
- ✅ Carrito de compras (LocalStorage)
- ✅ Animaciones al scroll
- ✅ Notificaciones de acciones
- ✅ Smooth scroll interno
- ✅ Lazy loading de imágenes

### Optimizaciones
- Variables CSS para fácil personalización
- Transiciones suaves y performantes
- Sombras sutiles para profundidad
- Tipografía escalable
- Imágenes de alta calidad

## Paleta de Colores

| Uso | Color | Hex |
|-----|-------|-----|
| Principal | Marrón Tierra | #8b7355 |
| Secundario | Beige Dorado | #d4a574 |
| Fondo | Blanco Cálido | #faf8f3 |
| Texto | Gris Oscuro | #3e3e3e |
| Borde | Gris Claro | #e8e3da |
| Neutro | Marrón Claro | #b8a896 |

## Tipografía

- **Fuente Principal**: Segoe UI, Helvetica Neue, -apple-system, BlinkMacSystemFont, sans-serif
- **Tamaños**:
  - Títulos principales: 2.5rem
  - Títulos secundarios: 2rem
  - Subtítulos: 1.125rem
  - Texto base: 1rem

## Cómo Personalizar

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #8b7355;
    --color-secondary: #d4a574;
    /* ... más variables */
}
```

### Agregar Productos
En `catalog.html` y `index.html`, duplica el HTML de una tarjeta de producto:
```html
<article class="product-card" data-category="ceramica">
    <div class="product-image">
        <img src="URL-IMAGEN" alt="Descripción">
    </div>
    <div class="product-info">
        <h3 class="product-name">Nombre del Producto</h3>
        <p class="product-description">Descripción breve</p>
        <a href="product-detail.html?id=X" class="btn btn-secondary">Ver Detalles</a>
    </div>
</article>
```

### Modificar Información de Contacto
- Email: Busca "info@artesaniastaller.com" en todos los archivos
- Teléfono: Busca "+34 123 456 789"
- Dirección: Actualiza en contact.html

## Uso

1. **Abrir en navegador**: Abre `index.html` en tu navegador
2. **Servidor local** (recomendado): Usa Live Server de VS Code o similar
3. **Desplegar**: Sube todos los archivos a tu servidor web

## Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere dependencias externas
- Sin frameworks (HTML, CSS, JavaScript vanilla)

## Información de Contacto

Para consultas sobre el sitio o solicitudes de personalización:
- Email: info@artesaniastaller.com
- Teléfono: +34 123 456 789

## Licencia

Este proyecto es de uso privado para Artesanías del Taller.

---

**Versión**: 1.0  
**Actualizado**: 2025  
**Autor**: Equipo de Desarrollo Artesanal
