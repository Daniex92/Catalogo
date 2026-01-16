# 🎨 Referencia Rápida de Colores & Variables CSS

## Paleta de Colores - Nueva (2026)

### Colores Principales
```css
--color-primary: #2A140A      /* Marrón Oscuro - Títulos, encabezados */
--color-secondary: #A86A3D    /* Marrón Dorado - Botones principales, acentos */
--color-accent: #C28E5C       /* Beige Cálido - Acentos secundarios, números */
--color-text-secondary: #6B3F2B /* Marrón Claro - Texto secundario, navegación */
```

### Fondos
```css
--color-light: #F3EDE4        /* Crema Cálida - Fondo principal, secciones */
--color-light-alt: #E6D8C8    /* Beige Sutil - Alternancia, cards, fondos alt */
```

### Auxiliares
```css
--color-dark: #2A140A         /* Negro Artesanal - Mismo que primary */
--color-border: #D9C5B1       /* Beige Suave - Bordes, líneas divisorias */
--color-neutral: #8B6F47      /* Marrón Medio - Textos terciarios */
```

---

## Visualización de Paleta

```
┌─────────────┬──────────────┬─────────────────┐
│   COLOR     │   HEX CODE   │      USO        │
├─────────────┼──────────────┼─────────────────┤
│ PRIMARY     │  #2A140A     │ H1, H2, H3, P   │
│             │ ████████████ │ Color más oscuro│
├─────────────┼──────────────┼─────────────────┤
│ SECONDARY   │  #A86A3D     │ Botones, links  │
│             │ ████████████ │ Principal accent│
├─────────────┼──────────────┼─────────────────┤
│ ACCENT      │  #C28E5C     │ Números, badges │
│             │ ████████████ │ Highlight suave │
├─────────────┼──────────────┼─────────────────┤
│ TEXT SEC.   │  #6B3F2B     │ Body text       │
│             │ ████████████ │ Contraste medio │
├─────────────┼──────────────┼─────────────────┤
│ LIGHT       │  #F3EDE4     │ Fondo principal │
│             │ ████████████ │ Warmest bg      │
├─────────────┼──────────────┼─────────────────┤
│ LIGHT ALT   │  #E6D8C8     │ Cards, fondos   │
│             │ ████████████ │ Slight contrast │
├─────────────┼──────────────┼─────────────────┤
│ BORDER      │  #D9C5B1     │ Líneas, bordes  │
│             │ ████████████ │ Suave divisor   │
├─────────────┼──────────────┼─────────────────┤
│ NEUTRAL     │  #8B6F47     │ Texto secundario│
│             │ ████████████ │ Medio            │
└─────────────┴──────────────┴─────────────────┘
```

---

## Tipografía

### Familias de Fuentes
```css
--font-serif: 'Cormorant Garamond', serif;
/* Uso: h1, h2, h3, .hero-title, .section-title, .product-name */

--font-sans: 'Inter', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
/* Uso: body, p, botones, inputs, labels */
```

### Tamaños
```css
--font-size-sm: 0.875rem    /* 14px - Labels, small text */
--font-size-base: 16px      /* Base para body */
--font-size-lg: 1.125rem    /* 18px - Body, subtítulos */
--font-size-xl: 1.5rem      /* 24px - Precios, destacados */
--font-size-2xl: 2rem       /* 32px - Títulos sección */
--font-size-3xl: 2.5rem     /* 40px - Hero title */
```

---

## Espaciado

```css
--spacing-xs: 0.5rem    /* 8px   - Gaps pequeños */
--spacing-sm: 1rem      /* 16px  - Padding inputs */
--spacing-md: 1.5rem    /* 24px  - Spacing standard */
--spacing-lg: 2rem      /* 32px  - Section padding */
--spacing-xl: 3rem      /* 48px  - Grid gaps */
--spacing-xxl: 4rem     /* 64px  - Section margins */
```

---

## Transiciones & Sombras

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
/* Smooth easing para todos los cambios */

--shadow-light: 0 1px 3px rgba(42, 20, 10, 0.06);
/* Sombra muy suave para profundidad leve */

--shadow-medium: 0 4px 12px rgba(42, 20, 10, 0.1);
/* Sombra moderada para cards, dropdowns */
```

---

## Combinaciones Comunes

### Button Primario
```css
background-color: var(--color-secondary);    /* #A86A3D */
color: #ffffff;                              /* Blanco */
border: 2px solid var(--color-secondary);

&:hover {
    background-color: transparent;
    color: var(--color-secondary);
}
```

### Button Secundario
```css
background-color: transparent;
color: var(--color-secondary);               /* #A86A3D */
border: 2px solid var(--color-secondary);

&:hover {
    background-color: var(--color-secondary);
    color: #ffffff;
}
```

### Input Focus
```css
border-color: var(--color-secondary);        /* #A86A3D */
box-shadow: 0 0 0 3px rgba(168, 106, 61, 0.1);
outline: none;
```

### Título
```css
font-size: var(--font-size-2xl);             /* 32px */
font-weight: 600;
color: var(--color-primary);                 /* #2A140A */
font-family: var(--font-serif);              /* Cormorant */
```

---

## Antes vs Después

### Comparativa de Paleta

| Elemento | ANTES | AHORA | Cambio |
|----------|-------|-------|--------|
| Primary | #8b7355 | #2A140A | Más oscuro, más artesanal |
| Secondary | #d4a574 | #A86A3D | Más profundo, más warm |
| Light | #faf8f3 | #F3EDE4 | Más cálido, menos frío |
| Dark | #3e3e3e | #2A140A | Alineado con primary |
| Border | #e8e3da | #D9C5B1 | Más sutil |
| Neutral | #b8a896 | #8B6F47 | Más consistente |

### Mejoras Visuales
- ✅ Sin colores grises fríos
- ✅ Paleta cohesiva y cálida
- ✅ Mayor contraste en textos
- ✅ Más premium y artesanal
- ✅ Mejor legibilidad

---

## Comandos Útiles

### Cambiar todos los colores a la vez
```bash
# Editar :root en styles.css (líneas 6-15)
# Todos los elementos actualizan automáticamente
```

### Verificar uso de un color
```bash
# Buscar en styles.css:
# Ctrl+F: "var(--color-primary)"
# Muestra todos los usos del color
```

### Exportar paleta
```css
/* Copiar este bloque para paleta en otros proyectos: */
--color-primary: #2A140A;
--color-secondary: #A86A3D;
--color-accent: #C28E5C;
--color-text-secondary: #6B3F2B;
--color-light: #F3EDE4;
--color-light-alt: #E6D8C8;
--color-border: #D9C5B1;
--color-neutral: #8B6F47;
```

---

## Recursos

### Validadores de Color
- Contrast Checker: https://webaim.org/resources/contrastchecker/
- Color Palette: https://coolors.co/
- Accessibility: https://accessible-colors.com/

### Fuentes
- Cormorant Garamond: Google Fonts (serif elegante)
- Inter: Google Fonts (sans moderna)
- Fallback: Sistema operativo

---

## Notas Importantes

⚠️ **NO HAGAS:**
- ❌ Usar colores hardcodeados (#abc123)
- ❌ Cambiar colores en reglas CSS individuales
- ❌ Agregar grises fríos
- ❌ Usar colores muy saturados

✅ **SÍ HAZ:**
- ✅ Usar variables CSS (var(--color-*))
- ✅ Cambiar colores en :root
- ✅ Mantener paleta artesanal y cálida
- ✅ Testear contraste en herramientas

---

**Última actualización:** 16 Enero 2026  
**Versión:** 2.0 - Artesanías del Taller
