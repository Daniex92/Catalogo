# 🚀 Guía Rápida - Nuevas Características del Carrito

## Para Usuarios

### Agregar Producto al Carrito
1. Ve a "Catálogo" o "Detalle del Producto"
2. Selecciona la cantidad deseada
3. Click en "Agregar al Carrito"
4. Verás una notificación confirmando ✓

### Ver Mi Carrito
**Opción 1 - Icono flotante:**
- Click en 🛒 en la esquina superior derecha
- Se abre un menú con tus productos

**Opción 2 - Página completa:**
- Click en "Carrito" en el menú principal
- Ve a `cart.html`

### Editar Carrito
- **Cambiar cantidad:** Edita el número directamente
- **Eliminar:** Click en la ✕ roja
- **Ver total:** Se actualiza automáticamente

### Finalizar Compra
1. Llena el formulario con tus datos
2. Click en "Finalizar Compra"
3. Recibirás confirmación con número de pedido
4. Tu carrito se vaciará automáticamente

---

## Para Desarrolladores

### Estructura del Carrito (localStorage)

```javascript
// Formato de cada item
{
    id: 1234567890,           // timestamp único
    name: "Cerámica Tejida",  // nombre del producto
    price: 85,                 // precio numérico (no string)
    quantity: 2,              // cantidad
    image: "https://..."      // URL de imagen
}

// Acceder al carrito
cart = JSON.parse(localStorage.getItem('artisan_cart'));
```

### Funciones Disponibles

#### 1. Agregar al Carrito
```javascript
addToCart();
// Automáticamente:
// - Lee datos de .product-detail-name, .product-detail-price, etc.
// - Valida que cantidad > 0
// - Agrupa si el producto ya existe
// - Guarda en localStorage
// - Muestra toast notification
// - Actualiza badge
```

#### 2. Mostrar Notificación
```javascript
showToastNotification('Tu mensaje aquí');
// Se muestra 3 segundos en esquina inferior derecha
// Con fade in/out automático
```

#### 3. Actualizar Badge del Carrito
```javascript
updateCartBadge();
// Se ejecuta automáticamente al:
// - Agregar producto
// - Eliminar producto
// - Cambiar cantidad
```

#### 4. Trabajar con Precios
```javascript
// Convertir string a número
const num = parsePrice("$85.50");  // → 85.50

// Convertir número a string formateado
const str = formatPrice(85.50);    // → "$85.50"
```

#### 5. Remover del Carrito
```javascript
removeFromCart(index);
// index = posición en array cart[]
// Automáticamente actualiza todo
```

#### 6. Actualizar Cantidad
```javascript
updateCartQuantity(index, newQuantity);
// Valida min:1, max:99
// Si cantidad <= 0, elimina el producto
// Actualiza localStorage y UI
```

### Envío de Pedidos

**Endpoint:** `https://formspree.io/f/mvzzgnzd`

**Estructura del envío:**
```javascript
{
    name: "Juan García",
    email: "juan@example.com",
    phone: "+34 666 777 888",
    address: "Calle Principal 123",
    city: "Madrid",
    message: "Mensaje formateado con productos y totales"
}
```

**Mensaje detallado incluye:**
- Lista de todos los productos con cantidad y precio
- Total del pedido
- Datos del cliente
- Notas especiales

### CSS Variables Nuevas

```css
:root {
    --color-primary: #2A140A;       /* Títulos */
    --color-secondary: #A86A3D;     /* Botones */
    --color-accent: #C28E5C;        /* Acentos */
    --color-text-secondary: #6B3F2B;/* Texto secundario */
    --color-light: #F3EDE4;         /* Fondo */
    --color-light-alt: #E6D8C8;     /* Cards */
    --color-border: #D9C5B1;        /* Bordes */
    --color-neutral: #8B6F47;       /* Neutro */
    
    --font-serif: 'Cormorant Garamond', serif;
    --font-sans: 'Inter', sans-serif;
}
```

### Animaciones Disponibles

```css
@keyframes toastSlideIn {
    /* Notificaciones entrando desde derecha */
}

@keyframes toastSlideOut {
    /* Notificaciones saliendo hacia derecha */
}

@keyframes cartMenuSlide {
    /* Menú flotante aparecer */
}

@keyframes fadeIn {
    /* Modal fade in */
}

@keyframes slideUp {
    /* Modal slide up */
}

@keyframes scaleIn {
    /* Icono checkmark crecer */
}
```

### Personalizar Toast Notifications

```javascript
// En script.js, función showToastNotification()
// Cambiar estos valores:

toast.style.bottom = '30px';        // Distancia del borde
toast.style.right = '30px';         // Distancia del borde
// Y duration en setTimeout (3000 = 3 segundos)
```

### Cambiar Endpoint de Formspree

En `cart-functions.js`, función `setupOrderForm()`:

```javascript
// Buscar esta línea:
const response = await fetch('https://formspree.io/f/mvzzgnzd', {

// Y reemplazar 'mvzzgnzd' con tu ID de Formspree
// Obtén tu ID en: https://formspree.io
```

---

## 🎨 Personalización de Estilos

### Cambiar Paleta de Colores
En `styles.css`, sección `:root`:

```css
:root {
    --color-primary: #2A140A;       /* Cambia aquí */
    --color-secondary: #A86A3D;     /* Y aquí */
    --color-accent: #C28E5C;        /* Y aquí */
    /* ... resto de colores ... */
}
```

### Cambiar Tipografía
```css
:root {
    --font-serif: 'Garamond', serif;  /* Para títulos */
    --font-sans: 'Georgia', sans-serif; /* Para textos */
}
```

### Ancho máximo del carrito
En `cart-functions.js`, estilos del modal:

```css
.confirmation-modal {
    /* ... */
    max-width: 400px;  /* Cambia aquí */
}
```

---

## 🔍 Debugging

### Ver carrito en consola
```javascript
console.log(cart);
// Muestra array con todos los productos
```

### Ver localStorage
```javascript
console.log(localStorage.getItem('artisan_cart'));
// Muestra JSON del carrito guardado
```

### Limpiar carrito (desarrollo)
```javascript
localStorage.removeItem('artisan_cart');
cart = [];
updateCartBadge();
```

### Simular compra
```javascript
// En consola, agregar producto al carrito
cart.push({
    id: Date.now(),
    name: "Test Product",
    price: 99.99,
    quantity: 1,
    image: "https://via.placeholder.com/100"
});
localStorage.setItem('artisan_cart', JSON.stringify(cart));
updateCartBadge();
```

---

## 📊 Información Técnica

- **Total de líneas JS (carrito)**: ~600
- **Archivos nuevos**: 2 (cart.html, cart-functions.js)
- **Archivos modificados**: 7 (styles.css + 5 HTML + script.js)
- **Variables CSS nuevas**: 3
- **Funciones JavaScript nuevas**: 8
- **Animaciones nuevas**: 6
- **Responsive breakpoints**: 2 (768px, 480px)

---

## ✅ Checklist de Implementación

- [x] Paleta de colores actualizada
- [x] Tipografía (Cormorant + Inter)
- [x] Toast notifications
- [x] Menú flotante carrito
- [x] localStorage persistente
- [x] Página cart.html
- [x] Formulario datos envío
- [x] Envío a Formspree
- [x] Modal confirmación
- [x] Badge contador
- [x] Responsive design
- [x] Documentación

---

**¿Preguntas o problemas?**
Revisa las funciones en `script.js` y `cart-functions.js` - están bien comentadas.
