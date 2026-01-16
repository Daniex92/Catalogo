# AI Coding Agent Instructions - Artesanías del Taller

## Project Overview

This is a static HTML/CSS/JavaScript website for an artisan handicrafts business. The site features a minimalista aesthetic with earthy tones, focusing on showcasing handmade ceramic, textile, and wooden products. It includes a catalog system, product filtering, contact forms, and basic shopping cart functionality with localStorage.

**Architecture**: Multi-page static site (index, catalog, about, contact, product-detail) with no backend. All product data is in `products.json` (reference only—UI reads hardcoded HTML). JavaScript handles interactivity and client-side state.

---

## Critical Design System

### Color Palette (CSS Variables in `styles.css`)
- **Primary**: `#8b7355` (earthy brown) – headers, CTAs, primary text
- **Secondary**: `#d4a574` (golden beige) – highlights, accents
- **Light**: `#faf8f3` (warm white) – backgrounds
- **Dark**: `#3e3e3e` (dark gray) – body text
- **Border**: `#e8e3da` (light beige) – dividers, subtle separators
- **Neutral**: `#b8a896` (muted taupe) – secondary text

Do NOT use harsh grays or bright colors. All changes must preserve the artisanal, minimalist aesthetic.

### Spacing & Typography
- CSS variables define all spacing (`--spacing-xs` through `--spacing-xxl`)
- Font: Segoe UI / system sans-serif (never add web fonts without testing performance)
- Base font-size: 16px; scales responsively at breakpoints (tablet 768px, mobile 480px)
- Never hardcode colors or spacing—always use CSS variables

---

## Key Data Flows

### Product Display
1. **Static HTML tables**: Product cards are hardcoded in `catalog.html` and `product-detail.html`
2. **`products.json`**: Exists as documentation/reference—NOT dynamically loaded
3. **To add products**: Edit HTML cards directly + optionally update JSON for reference
4. **Product attributes**: name, category, price, description, image URL, dimensions, material, care instructions

### JavaScript Functional Modules
All code is vanilla JS, organized in `script.js` by functionality (comments separate sections):

| Module | Location | Purpose |
|--------|----------|---------|
| Hamburger Menu | Line 1-50 | Toggle mobile nav, close on link click or outside click |
| Product Filtering | Line 55-80 | Show/hide cards by `data-category` attribute (fade animation) |
| Contact Form | Line 85-145 | Fetch to Formspree API (`f/xreebjdp`), display success/error messages |
| Scroll Animations | Line 150-175 | Intersection Observer triggers fade-in translateY animations |
| Product Search | Line 180-210 | Optional search function (not currently wired to UI) |
| Shopping Cart | Line 220-370 | LocalStorage-based cart (add/remove/quantity), displayed via inline modals |

### Event Delegation Pattern
All event listeners attach to document root on DOMContentLoaded. Selectors use:
- Class-based targeting (`.product-card`, `.filter-btn`)
- Data attributes for filtering (`data-category`, `data-filter`)
- Form IDs (`#contact-form`, `#form-message`)

---

## Development Conventions

### Responsive Design
- **Desktop**: 2-4 column grids, full spacing
- **Tablet (< 768px)**: 2-column grids, reduced padding
- **Mobile (< 480px)**: Single column, hamburger menu activated, tight spacing

Media queries use `min-width` mobile-first approach. Always test all three breakpoints when changing layout.

### Form Handling
- Contact form submits via `fetch()` to Formspree (external service—credentials in code)
- Success/error messages styled inline with CSS variables
- Form resets after successful submission; message auto-hides after 5s
- No client-side validation errors—assumes Formspree handles it

### CSS Architecture
- Single `styles.css` file (~1100 lines)
- Section headers with `====` comments mark logical groups
- Selector specificity kept low (no IDs for styling, mostly classes)
- Transitions use `--transition` variable (0.3s cubic-bezier)
- Shadows via `--shadow-light` and `--shadow-medium`

### HTML Structure
- Semantic HTML5: `<header>`, `<nav>`, `<section>`, `<footer>`
- Breadcrumb pattern: category → product name (used in product-detail.html)
- Consistent class naming: `.product-card`, `.btn-primary`, `.section-title`
- SVG logo embedded inline (simple triangle-in-circle design)

---

## Common Tasks & Patterns

### Adding a New Product
1. Add `<div class="product-card" data-category="categoria">` block to catalog.html or index.html
2. Include: product image, name (`.product-name`), price, description, category
3. Link to `product-detail.html?id=productName` (URL param handling not yet implemented)
4. Mirror changes in `products.json` for documentation

### Modifying Styles
1. Never hardcode hex colors—use CSS variables
2. Never hardcode spacing—use `--spacing-*` variables
3. Update variables in `:root` (top of `styles.css`), not individual rules
4. Test on mobile 480px width before committing

### Adding JavaScript Features
1. Create a new section with `// ============================================\n// FEATURE NAME\n// ============================================` header
2. Wrap logic in `document.addEventListener('DOMContentLoaded', ...)` to ensure DOM is ready
3. Use class selectors and data attributes for targeting (avoid IDs)
4. Throttle scroll/resize events if needed (currently not an issue)

### Testing Changes
- No build step: open `.html` files directly in browser
- Test hamburger menu on mobile widths
- Verify form submission to Formspree works (check email inbox)
- Inspect scroll animations with DevTools throttling

---

## Important Gotchas

1. **Product JSON is not used dynamically** – products are hardcoded in HTML. JSON is for reference only.
2. **Formspree endpoint** (`f/xreebjdp`) is public and tied to a specific email. Changing email requires updating the ID.
3. **No validation on product-detail page** – quantity input has no min/max validation; cart can accept any value.
4. **Images use Unsplash URLs** – all images are external CDN links. Consider caching or local images for production.
5. **No CSS preprocessor** – all styles are plain CSS. Use variables strictly.
6. **LocalStorage cart is client-only** – no persistence across browsers or devices.

---

## File Priority for Changes

| File | Frequency | Cautions |
|------|-----------|----------|
| `index.html`, `catalog.html` | High | Update both when adding products; maintain semantic structure |
| `styles.css` | High | Only modify CSS variables or add new rules; never hardcode colors |
| `script.js` | Medium | Wrap new code in DOMContentLoaded; test menu toggle on mobile |
| `about.html`, `contact.html` | Low | Edit company info sparingly; Formspree ID is hardcoded |
| `products.json` | Reference | Keep in sync with HTML but doesn't affect UI |

---

## Quick Customization Checklist

- [ ] Change brand name: Search all `.html` and `README.md` for "Artesanías del Taller"
- [ ] Update contact email: Replace `info@artesaniastaller.com` in `contact.html` and footers
- [ ] Update Formspree ID: Change `f/xreebjdp` in `script.js` form handler
- [ ] Adjust color palette: Modify `:root` variables in `styles.css`
- [ ] Add/remove product categories: Edit filter buttons in `catalog.html` and `data-category` values
- [ ] Replace product images: Update `<img src="">` URLs (local paths or new CDN links)

