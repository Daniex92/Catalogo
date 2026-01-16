# 🚀 Instrucciones para GitHub Pages y Hosting

## Para GitHub Pages

### Paso 1: Configurar el Repositorio
1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. Selecciona:
   - **Source**: `main` (o tu rama principal)
   - **Folder**: `/root` (raíz del repositorio)
4. Guarda cambios

### Paso 2: Esperar Construcción
GitHub Pages tardará 1-2 minutos en construir el sitio.

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/nombre-repositorio/
```

### Paso 3: Verificar
- Abre `https://tu-usuario.github.io/nombre-repositorio/`
- Deberías ver la página de carga que redirige a `src/html/index.html`
- Los estilos CSS deberían funcionar correctamente

---

## Para Hosting Tradicional (Hostinger, GoDaddy, etc.)

### Paso 1: Subir Archivos
Usa FTP (FileZilla, WinSCP) o el panel de control de tu hosting:

1. Conecta al servidor
2. Sube TODOS los archivos a la carpeta raíz o a `public_html/`

**Estructura en el servidor:**
```
public_html/
├── index.html
├── src/
│   ├── html/
│   ├── css/
│   ├── js/
│   └── data/
├── docs/
└── .github/
```

### Paso 2: Verificar
Abre tu dominio:
```
https://tu-dominio.com
```

Los archivos se cargarán correctamente porque las rutas relativas (`../css/`, `../js/`) funcionan en cualquier servidor.

---

## Rutas Utilizadas (Universal)

✅ **Funciona en Local, GitHub y Hosting:**
```html
<link rel="stylesheet" href="../css/styles.css">
<script src="../js/script.js"></script>
<a href="./index.html">Link interno</a>
```

⚠️ **NO usar rutas absolutas:**
```html
<!-- ❌ NO hacer esto -->
<link rel="stylesheet" href="/css/styles.css">
<link rel="stylesheet" href="https://ejemplo.com/css/styles.css">
```

---

## Archivos Importantes para GitHub Pages

- ✅ `.nojekyll` - Evita que Jekyll procese los archivos
- ✅ `_config.yml` - Configuración de Jekyll (opcional)
- ✅ `.gitignore` - Archivos a ignorar en git

---

## Solucionar Problemas

### Los estilos no cargan en GitHub Pages

**Causas comunes:**
1. Rutas incorrectas (usa `../css/` NO `/css/`)
2. No subiste la carpeta `src/css/`
3. GitHub Pages no está habilitado

**Solución:**
```bash
git add .
git commit -m "Fix paths for GitHub Pages"
git push
# Espera 1-2 minutos
```

### Las imágenes no se ven

Verifica que:
1. Las URLs de imágenes usan HTTPS (Unsplash)
2. Las imágenes estén en `src/` si son locales
3. Las rutas sean relativas

### Cambiar a rama `gh-pages`

Alternativa si quieres usar una rama específica:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

Luego en GitHub Settings → Pages selecciona `gh-pages`.

---

## Comando Git para Subir

```bash
# Inicializar (primera vez)
git init
git add .
git commit -m "Initial commit: Artesanías del Taller"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main

# Siguientes cambios
git add .
git commit -m "Descripción del cambio"
git push
```

---

## URL de Acceso

| Ubicación | URL |
|-----------|-----|
| Local | `file:///C:/Users/.../catalog/src/html/index.html` |
| GitHub Pages | `https://usuario.github.io/repositorio/` |
| Hosting | `https://tu-dominio.com/` |
| Hosting en subcarpeta | `https://tu-dominio.com/catalogo/` |

En todos los casos, las rutas relativas funcionan automáticamente.

---

## Verificar Rutas Correctas

Abre la consola del navegador (F12) y busca errores:

✅ Sin errores = Rutas correctas
❌ Con errores 404 = Ajustar rutas

---

## Contacto y Formulario

El formulario usa Formspree:
```html
<form action="https://formspree.io/f/mvzzgnzd" method="POST">
```

Funciona en cualquier ubicación (local, GitHub, hosting).

---

**¡Tu sitio está listo para cualquier plataforma!** 🚀
