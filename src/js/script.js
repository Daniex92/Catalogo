// ============================================
// MENÚ RESPONSIVO Y HAMBURGUESA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animar hamburguesa
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ============================================
// FILTRO DE PRODUCTOS EN CATÁLOGO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter products
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});

// ============================================
// CARRITO MEJORADO - GESTIÓN COMPLETA
// ============================================

let cart = [];

// Obtener parámetro de URL
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Obtener ID del producto desde la URL o usar timestamp como fallback
function getProductId() {
    const urlId = getUrlParameter('id');
    if (urlId) return urlId;
    
    // Fallback: usar el hash del nombre del producto
    const productName = document.querySelector('.product-detail-name')?.textContent || '';
    return 'product_' + productName.replace(/\s+/g, '_').toLowerCase();
}

// Cargar carrito del localStorage al iniciar
document.addEventListener('DOMContentLoaded', function() {
    const savedCart = localStorage.getItem('artisan_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartBadge();
    console.log('Carrito cargado:', cart);
});

// Obtener precio numérico de string con $ o formato
function parsePrice(priceString) {
    try {
        if (typeof priceString !== 'string') {
            console.warn('parsePrice: priceString no es string, es:', typeof priceString, priceString);
            return 0;
        }
        const cleanPrice = priceString.replace(/[$,\s]/g, '').trim();
        const parsed = parseFloat(cleanPrice);
        const result = isNaN(parsed) ? 0 : parsed;
        console.log(`parsePrice("${priceString}") = ${result}`);
        return result;
    } catch (error) {
        console.error('Error en parsePrice:', error);
        return 0;
    }
}

// Formatear precio a string
function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2);
}

// Agregar producto al carrito
function addToCart() {
    try {
        const productId = getProductId();  // Usar ID único
        const productName = document.querySelector('.product-detail-name')?.textContent;
        const productPrice = document.querySelector('.product-detail-price')?.textContent;
        const productImage = document.querySelector('.product-detail-image img')?.src;
        const quantity = parseInt(document.getElementById('quantity')?.value) || 1;

        console.log('Intentando agregar:', { productId, productName, productPrice, quantity });

        if (!productId || !productName || !productPrice) {
            console.error('Faltan datos del producto:', { productId, productName, productPrice });
            showToastNotification('Error: No se pudieron cargar los datos del producto');
            return;
        }

        const priceNumber = parsePrice(productPrice);
        
        if (isNaN(priceNumber) || priceNumber === 0) {
            console.error('Precio no válido:', productPrice, '→', priceNumber);
            showToastNotification('Error: Precio no válido');
            return;
        }
        
        // Verificar si el producto ya existe en el carrito (por ID, no por nombre)
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
            console.log('Producto actualizado, cantidad:', existingItem.quantity);
        } else {
            const cartItem = {
                id: productId,  // Usar ID de URL como identificador único
                name: productName,
                price: priceNumber,
                quantity: quantity,
                image: productImage || 'https://via.placeholder.com/100'
            };
            cart.push(cartItem);
            console.log('Producto agregado:', cartItem);
        }
        
        // Guardar en localStorage
        localStorage.setItem('artisan_cart', JSON.stringify(cart));
        updateCartBadge();
        
        // Mostrar notificación
        showToastNotification(`${productName} agregado al carrito ✓`);
        console.log('Carrito actualizado:', cart);
    } catch (error) {
        console.error('Error al agregar producto:', error);
        showToastNotification('Error: No se pudo agregar el producto');
    }
}

// Actualizar badge del carrito
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Funciones para gestionar cantidad en product-detail
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Toast notification minimalista
function showToastNotification(message) {
    try {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;  // Usar textContent en lugar de innerHTML por seguridad
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #A86A3D;
            color: #ffffff;
            padding: 1rem 1.5rem;
            border-radius: 2px;
            box-shadow: 0 4px 12px rgba(42, 20, 10, 0.1);
            z-index: 9999;
            animation: toastSlideIn 0.4s ease-out;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            max-width: 300px;
        `;
        
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.4s ease-out';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    } catch (error) {
        console.error('Error mostrando notificación:', error);
    }
}

// Menú flotante del carrito
function toggleCartMenu() {
    const cartMenu = document.querySelector('.cart-menu');
    if (!cartMenu) return;
    
    cartMenu.classList.toggle('active');
    updateCartMenuContent();
}

function updateCartMenuContent() {
    const cartMenu = document.querySelector('.cart-menu');
    if (!cartMenu) return;
    
    const cartList = cartMenu.querySelector('.cart-items-list');
    const cartTotal = cartMenu.querySelector('.cart-total');
    
    if (cart.length === 0) {
        cartList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 2rem 1rem;">Carrito vacío</p>';
        if (cartTotal) cartTotal.innerHTML = '<strong>Total:</strong> $0.00';
        return;
    }
    
    let total = 0;
    cartList.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item" style="border-bottom: 1px solid var(--color-border); padding: 1rem; display: flex; gap: 1rem;">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 2px;">
                <div style="flex: 1;">
                    <p style="font-weight: 600; color: var(--color-primary); margin-bottom: 0.5rem; font-size: 0.95rem;">${item.name}</p>
                    <p style="color: var(--color-text-secondary); font-size: 0.85rem;">Qty: ${item.quantity}</p>
                    <p style="color: var(--color-secondary); font-weight: 600; margin-top: 0.5rem;">${formatPrice(item.price)}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background: none; border: none; color: var(--color-neutral); cursor: pointer; font-size: 1.2rem; padding: 0;">×</button>
            </div>
        `;
    }).join('');
    
    if (cartTotal) {
        cartTotal.innerHTML = `<strong>Total:</strong> <span style="color: var(--color-secondary); font-weight: 600;">${formatPrice(total)}</span>`;
    }
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('artisan_cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartMenuContent();
    showToastNotification('Producto eliminado');
}

// Cerrar menú flotante al hacer click fuera
document.addEventListener('click', function(e) {
    const cartMenu = document.querySelector('.cart-menu');
    const cartButton = document.querySelector('.cart-button');
    if (cartMenu && cartButton && !cartMenu.contains(e.target) && !cartButton.contains(e.target)) {
        cartMenu.classList.remove('active');
    }
});

// ============================================
// MICROINTERACCIONES Y ANIMACIONES
// ============================================

// Animación de carga de página
document.addEventListener('DOMContentLoaded', function() {
    // Animar hero/header
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hero.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animar elementos con scroll reveal mejorado
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Agregar delay staggered para efecto cascada
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Cada elemento se anima 100ms después del anterior
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    const elementsToAnimate = document.querySelectorAll(
        '.product-card, .process-step, .value-card, .cta-section, .section-title'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(element);
    });
});

// Efecto ripple en botones (opcional, para navegadores modernos)
document.addEventListener('click', function(e) {
    const button = e.target.closest('button, a.btn, .btn');
    if (!button) return;

    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = new FormData(this);
            const data = {
                nombre: formData.get('name'),
                email: formData.get('email'),
                telefono: formData.get('phone'),
                asunto: formData.get('subject'),
                mensaje: formData.get('message')
            };

            // Send to Formspree
            const formspreeUrl = 'https://formspree.io/f/xreebjdp';
            
            fetch(formspreeUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    formMessage.style.display = 'block';
                    formMessage.innerHTML = '<p style="color: var(--color-secondary); font-weight: 600;">¡Mensaje enviado exitosamente! Nos contactaremos pronto.</p>';
                    formMessage.style.backgroundColor = 'rgba(168, 106, 61, 0.08)';
                    formMessage.style.padding = 'var(--spacing-md)';
                    formMessage.style.borderRadius = '2px';

                    // Reset form
                    contactForm.reset();

                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Error al enviar el mensaje');
                }
            })
            .catch(error => {
                // Show error message
                formMessage.style.display = 'block';
                formMessage.innerHTML = '<p style="color: #c0392b; font-weight: 600;">Error al enviar el mensaje. Por favor intenta de nuevo.</p>';
                formMessage.style.backgroundColor = 'rgba(192, 57, 43, 0.08)';
                formMessage.style.padding = 'var(--spacing-md)';
                formMessage.style.borderRadius = '2px';
                console.error('Error:', error);
            });
        });
    }
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.product-card, .process-step, .value-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ============================================
// BÚSQUEDA EN CATÁLOGO (Opcional)
// ============================================

function searchProducts(query) {
    const productCards = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
        const productDescription = card.querySelector('.product-description')?.textContent.toLowerCase() || '';

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// LAZY LOADING DE IMÁGENES (Opcional)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ============================================
// VALIDACIÓN DE EMAIL EN FORMULARIOS
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
