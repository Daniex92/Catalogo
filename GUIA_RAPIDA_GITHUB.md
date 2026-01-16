# 🎯 GUÍA RÁPIDA: GitHub Pages & Hosting

## ⚡ Resumen Rápido

Tu proyecto ahora está configurado para funcionar en:
- ✅ Local (abrir archivo HTML)
- ✅ GitHub Pages
- ✅ Cualquier hosting web (Hostinger, GoDaddy, etc.)

**La clave:** Rutas relativas universales (`../css/`, `../js/`)

---

## 🐙 Para GitHub Pages (5 minutos)

### 1. Crear Repositorio
```
https://github.com/new
- Nombre: catalog (o el que prefieras)
- Público
- Crear
```

### 2. Subir Archivos
```bash
cd tu/ruta/catalog

git init
git add .
git commit -m "Artesanías del Taller - Sitio web"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/catalog.git
git push -u origin main
```

### 3. Activar GitHub Pages
- GitHub → Settings → Pages
- Source: `main` / `/root`
- Save

### 4. Tu sitio estará en:
```
https://TU_USUARIO.github.io/catalog/
```

**¡Listo!** Los estilos y todo funcionará automáticamente.

---

## 🌐 Para Hosting Tradicional

### 1. Conectar FTP
- Hostinger/GoDaddy → Gestor de archivos o FTP
- Conectar a `public_html/` (o similar)

### 2. Subir Todo
Arrastra todo el contenido del directorio `catalog/` a `public_html/`

```
public_html/
├── index.html
├── src/
├── docs/
└── .github/
```

### 3. Acceder
```
https://tu-dominio.com
```

**¡Listo!** Todo funciona porque usamos rutas relativas.

---

## 📋 Archivos Importantes Que Se Agregaron

| Archivo | Propósito |
|---------|-----------|
| `.nojekyll` | Evita que Jekyll procese los archivos (GitHub) |
| `_config.yml` | Configuración de GitHub Pages |
| `.gitignore` | Archivos a no subir a git |
| `GITHUB_HOSTING_SETUP.md` | Guía detallada |
| `index.html` (raíz) | Redirección + loader bonito |

---

## ✅ Verificación

Cuando suba a GitHub/Hosting, verifica:

1. **Abre el sitio** → ¿Se carga la página de bienvenida?
2. **F12 → Console** → ¿Hay errores rojos?
3. **CSS se aplica** → ¿Se ven los estilos?
4. **Navegar** → ¿Funcionan los links?
5. **Carrito** → ¿Puedo agregar productos?

Si todo funciona = ¡éxito! 🎉

---

## 🔧 Si No Funciona

### ❌ Estilos no cargan
**Solución:** Verifica que `src/css/styles.css` esté en GitHub
```bash
git status  # Ver archivos
git add src/css/
git commit -m "Add CSS"
git push
```

### ❌ Página en blanco
**Solución:** Verifica que `src/html/index.html` existe
```bash
git status
git add src/html/
git push
```

### ❌ Links internos rotos
**Solución:** Verifica que usas rutas relativas
```html
<!-- ✓ Correcto -->
<a href="./index.html">

<!-- ✗ Incorrecto -->
<a href="/index.html">
```

---

## 📚 Más Info

Lee el archivo completo:
```
GITHUB_HOSTING_SETUP.md
```

---

## 🚀 Pasos Finales

1. ✅ Proyecto organizado en carpetas (YA HECHO)
2. ✅ Rutas relativas correctas (YA HECHO)
3. ✅ Archivos de configuración (YA HECHO)
4. ⬜ Crear repositorio GitHub
5. ⬜ Subir archivos
6. ⬜ Activar GitHub Pages

**¡Tu sitio estará en línea en 5 minutos!** 🎉
