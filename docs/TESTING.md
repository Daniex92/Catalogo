# ✅ Testing & Validation - Artesanías del Taller (v2.0)

## 🎨 Validación Visual - Paleta de Colores

### Desktop (1200px+)
- [ ] Logo en header: SVG color #A86A3D (dorado-marrón)
- [ ] Títulos (h1, h2): Color #2A140A (marrón oscuro), fuente Cormorant
- [ ] Texto secundario: Color #6B3F2B (marrón medio)
- [ ] Botones primarios: Fondo #A86A3D, hover transparente
- [ ] Botones filtro: Border #A86A3D, hover fondo lleno
- [ ] Bordes: Líneas #D9C5B1 (beige suave)
- [ ] Fondos: #F3EDE4 (crema), #E6D8C8 (beige alt)
- [ ] Sin colores fríos, sin grises duros ✓

### Tablet (768px)
- [ ] Header responsive: Logo visible, menú colapsa
- [ ] Carrito icon (🛒) visible con badge
- [ ] Filtros en grid 2x2
- [ ] Productos 2 columnas

### Mobile (480px)
- [ ] Header hamburguesa funciona
- [ ] Logo sin texto "Artesanías"
- [ ] Carrito icon sigue visible
- [ ] Productos 1-2 columnas
- [ ] Tabla carrito: layout compacto (rows en mobile)

---

## 🔤 Validación Tipografía

### Títulos (Cormorant Garamond)
- [ ] "Artesanía Hecha a Mano" - serif elegante
- [ ] "Nuestro Catálogo" - serif elegante
- [ ] "Sobre Nosotros" - serif elegante
- [ ] Nombres de productos - serif elegante
- [ ] Total en carrito - serif elegante

### Textos (Inter/IBM Plex Sans)
- [ ] Párrafos - sans limpia
- [ ] Botones - sans limpia
- [ ] Inputs - sans limpia
- [ ] Labels - sans limpia

---

## 🛒 Testing del Carrito

### Agregar Producto
**Pasos:**
1. Ir a `catalog.html` o `product-detail.html`
2. Cambiar cantidad (máx 99)
3. Click "Agregar al Carrito"

**Validaciones:**
- [ ] Aparece toast notification inferior derecha
- [ ] Toast dice "Cerámica Tejida agregado al carrito ✓"
- [ ] Toast desaparece después 3 segundos
- [ ] Badge en header muestra "1" (rojo, circular)
- [ ] localStorage actualizado (F12 → Application → localStorage)

### Editar Cantidad desde Cart Page
1. Ir a `cart.html`
2. Cambiar número en columna "Cantidad"
3. Press Enter

**Validaciones:**
- [ ] Cantidad se actualiza
- [ ] Total se recalcula (subtotal + itemtotal)
- [ ] Toast muestra "Cantidad actualizada ✓"
- [ ] localStorage actualizado
- [ ] Badge actualizado

### Eliminar Producto
1. En `cart.html`, click botón ✕ rojo
2. O en menú flotante carrito, click ✕

**Validaciones:**
- [ ] Producto desaparece
- [ ] Toast: "Cerámica Tejida eliminado del carrito"
- [ ] Total se recalcula
- [ ] Badge se actualiza
- [ ] localStorage actualizado

### Carrito Vacío
1. Eliminar todos los productos
2. Recargar página

**Validaciones:**
- [ ] Badge desaparece
- [ ] cart.html muestra "Tu carrito está vacío"
- [ ] Botón "Finalizar Compra" está deshabilitado (gris)
- [ ] Link "Explorar Catálogo" visible

### Menú Flotante Carrito
1. Click en 🛒 en header
2. Menú despliega desde esquina superior derecha

**Validaciones:**
- [ ] Aparece dropdown con productos
- [ ] Muestra: imagen, nombre, cantidad, precio
- [ ] Muestra total en footer del menú
- [ ] Botón ✕ elimina producto
- [ ] Click fuera cierra menú
- [ ] Se puede clickear "Ir al Carrito"

### Formulario de Envío
1. Llenar todos los campos (excepto "Notas")
2. Click "Finalizar Compra"

**Campos a validar:**
- [ ] Nombre Completo: requerido
- [ ] Email: requerido, validar formato
- [ ] Teléfono: requerido
- [ ] Dirección: requerido
- [ ] Ciudad: requerido
- [ ] Notas: opcional (puede estar vacío)

**Validaciones:**
- [ ] Si falta campo, muestra error en navegador (html5)
- [ ] Si email inválido, rechaza
- [ ] Al enviar, muestra modal confirmación
- [ ] Modal tiene: checkmark ✓, "¡Pedido Realizado!"
- [ ] Modal muestra número de pedido (PED-xxxxxxxx)
- [ ] Botón "Volver al Inicio" funciona
- [ ] Carrito se vacía automáticamente
- [ ] Formulario se limpia
- [ ] Badge desaparece

### Envío a Formspree
1. Completar formulario con datos válidos
2. Click "Finalizar Compra"
3. Revisar email en inbox (info@mvzzgnzd)

**Validaciones:**
- [ ] Email recibido en pocos segundos
- [ ] Email contiene: todos los productos con cantidad
- [ ] Email contiene: precios individuales y total
- [ ] Email contiene: datos cliente completos
- [ ] Email contiene: dirección de envío
- [ ] Email contiene: notas si se ingresaron

### Persistencia (localStorage)
1. Agregar 2-3 productos al carrito
2. Cerrar tab/navegador
3. Volver a abrir sitio

**Validaciones:**
- [ ] Carrito sigue con los productos
- [ ] Badge muestra cantidad correcta
- [ ] Totales son correctos
- [ ] Ir a cart.html: todos los productos están

---

## 🎯 Testing de Responsividad

### Desktop (1920x1080)
- [ ] Productos 4 columnas
- [ ] Carrito: tabla 2 columnas
- [ ] Menú flotante: ancho 350px
- [ ] Espaciado amplio

### Tablet (768x1024)
- [ ] Productos 2 columnas
- [ ] Carrito: tabla responsive
- [ ] Menú flotante: se adapta
- [ ] Hamburguesa activo

### Mobile (375x667)
- [ ] Productos 1-2 columnas
- [ ] Carrito: fila por producto
- [ ] Inputs: full-width
- [ ] Modal: ancho 90%

### Orientación Landscape (Mobile)
- [ ] Todo sigue visible
- [ ] No hay scroll horizontal
- [ ] Texto legible

---

## 🔗 Testing de Navegación

### Links en Header
- [ ] Inicio → index.html
- [ ] Catálogo → catalog.html
- [ ] Sobre Nosotros → about.html
- [ ] Contacto → contact.html
- [ ] Carrito → cart.html
- [ ] Logo → index.html

### Links en Carrito
- [ ] "Ir al Carrito" (desde menú flotante) → cart.html
- [ ] "Explorar Catálogo" (carrito vacío) → catalog.html
- [ ] "Volver al Inicio" (modal confirmación) → index.html
- [ ] Breadcrumb links funcionan

---

## 🎨 Testing de Animaciones

### Toast Notifications
- [ ] Aparecen con slide suave desde derecha
- [ ] Se quedan 3 segundos
- [ ] Desaparecen con slide suave
- [ ] Texto legible
- [ ] Icono ✓ visible

### Menú Flotante
- [ ] Aparece con slide desde arriba
- [ ] Desaparece sin animación al cerrar
- [ ] Items son clickeables
- [ ] No interfiere con contenido

### Modal de Confirmación
- [ ] Fondo se oscurece (rgba)
- [ ] Modal aparece con slide up
- [ ] Checkmark aparece con scale animation
- [ ] Click fuera no cierra (bloquea)
- [ ] Botón clickeable

### Scroll Animations
- [ ] Productos desaparecen al filtrar
- [ ] Transición fade suave (0.3s)
- [ ] Productos en about aparecen al scroll
- [ ] Hero se revela al cargar

---

## 🚀 Testing de Performance

### Carga Inicial
- [ ] Página carga < 2 segundos
- [ ] CSS compila sin errores (consola limpia)
- [ ] JavaScript no tira errores (consola)
- [ ] Imágenes cargan correctamente

### Interactividad
- [ ] Agregar producto es instantáneo
- [ ] Eliminar producto es instantáneo
- [ ] Editar cantidad responde rápido
- [ ] Abrir/cerrar menú es fluido
- [ ] Formulario responde al escribir

### Errores en Consola (F12)
- [ ] Sin errores rojos (red)
- [ ] Sin warnings importantes
- [ ] localStorage funciona
- [ ] Fetch a Formspree sin CORS errors

---

## 📱 Testing en Navegadores

### Chrome/Edge
- [ ] Todo funciona
- [ ] Fuentes cargan (Cormorant, Inter)
- [ ] Animaciones smooth
- [ ] localStorage funciona

### Firefox
- [ ] Todo funciona
- [ ] Fuentes cargan
- [ ] Animaciones smooth
- [ ] Formspree envía

### Safari
- [ ] Todo funciona
- [ ] Verificar fuentes (puede requerir fallback)
- [ ] Transiciones CSS funcionan
- [ ] Fetch funciona

### Mobile (iOS/Android)
- [ ] Responsive correcto
- [ ] Touch interactions funcionan
- [ ] Teclado no bloquea inputs
- [ ] Menú hamburguesa funciona

---

## 🐛 Debugging Checklist

### Si Toast no aparece
```javascript
// En consola:
showToastNotification("Test");
// Debe aparecer en esquina inferior derecha
```

### Si Carrito no guarda
```javascript
// Verificar localStorage:
localStorage.getItem('artisan_cart');
// Debe retornar JSON válido o null

// Limpiar y resetear:
localStorage.removeItem('artisan_cart');
location.reload();
```

### Si Formspree no envía
```javascript
// Verificar en consola:
// 1. Network tab: request a mvzzgnzd debe ser POST
// 2. Status: 200 OK
// 3. Email: revisar spam
// 4. Endpoint en código: debe ser mvzzgnzd
```

### Si colores no cambian
```css
/* En Developer Tools */
/* Verificar que :root se aplica */
/* Buscar: --color-primary debe ser #2A140A */
```

### Si tipografía no carga
```javascript
/* Verificar en Network tab */
/* Debe haber request a fonts.googleapis.com */
/* Si falla, fuentes del sistema se usan como fallback */
```

---

## ✅ Checklist Final

- [ ] Todos los colores han sido reemplazados
- [ ] Tipografía Cormorant carga correctamente
- [ ] Tipografía Inter carga correctamente
- [ ] Agregar producto funciona
- [ ] Carrito persiste con localStorage
- [ ] Toast notifications funcionan
- [ ] Menú flotante carrito funciona
- [ ] Página cart.html se ve correcta
- [ ] Formulario envía a Formspree
- [ ] Modal de confirmación aparece
- [ ] Responsive en desktop, tablet, mobile
- [ ] Todos los links funcionan
- [ ] Sin errores en consola
- [ ] Sin warnings importantes

---

## 📞 Soporte

Si algo no funciona:
1. Abre consola (F12)
2. Revisa "Console" por errores rojos
3. Revisa "Network" si algo no carga
4. Prueba con localStorage limpio
5. Prueba en navegador diferente
6. Revisa copias de archivos (¿mayúsculas/minúsculas?)

**Archivos principales:**
- Estilos: `styles.css`
- Lógica: `script.js` + `cart-functions.js`
- HTML: `cart.html`
