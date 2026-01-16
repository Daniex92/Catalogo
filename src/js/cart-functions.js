// ============================================
// FUNCIONES DEL CARRITO DE COMPRAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderCartItems();
    setupOrderForm();
});

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('cart-empty');
    const submitButton = document.getElementById('submit-button');
    
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        submitButton.disabled = true;
        updateOrderSummary(0);
        return;
    }

    emptyCart.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    submitButton.disabled = false;

    let subtotal = 0;
    let html = `
        <div class="cart-table">
            <div class="cart-table-header">
                <div class="col-product">Producto</div>
                <div class="col-price">Precio</div>
                <div class="col-quantity">Cantidad</div>
                <div class="col-total">Total</div>
                <div class="col-actions"></div>
            </div>
    `;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        html += `
            <div class="cart-table-row">
                <div class="col-product">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <p class="cart-item-name">${item.name}</p>
                    </div>
                </div>
                <div class="col-price">${formatPrice(item.price)}</div>
                <div class="col-quantity">
                    <input type="number" min="1" max="99" value="${item.quantity}" 
                           onchange="updateCartQuantity(${index}, this.value)" 
                           class="quantity-input-cart">
                </div>
                <div class="col-total" style="font-weight: 600; color: var(--color-secondary);">
                    ${formatPrice(itemTotal)}
                </div>
                <div class="col-actions">
                    <button type="button" onclick="removeFromCartPage(${index})" class="btn-remove" title="Eliminar">
                        ✕
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    cartItemsContainer.innerHTML = html;
    updateOrderSummary(subtotal);
}

function updateCartQuantity(index, newQuantity) {
    const quantity = parseInt(newQuantity);
    
    if (quantity <= 0) {
        removeFromCartPage(index);
        return;
    }

    if (quantity > 99) {
        showToastNotification('Cantidad máxima: 99 unidades');
        renderCartItems();
        return;
    }

    cart[index].quantity = quantity;
    localStorage.setItem('artisan_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
    showToastNotification('Cantidad actualizada ✓');
}

function removeFromCartPage(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    localStorage.setItem('artisan_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
    showToastNotification(`${itemName} eliminado del carrito`);
}

function updateOrderSummary(subtotal) {
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }
    
    if (totalElement) {
        totalElement.textContent = formatPrice(subtotal);
    }
}

function setupOrderForm() {
    const orderForm = document.getElementById('order-form');
    
    if (!orderForm) return;

    orderForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (cart.length === 0) {
            showErrorMessage('Tu carrito está vacío');
            return;
        }

        // Recopilar datos del formulario
        const formData = {
            full_name: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            notes: document.getElementById('notes').value || 'N/A',
            products: cart.map(item => `${item.name} (x${item.quantity}) - ${formatPrice(item.price)}`).join(' | '),
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };

        // Preparar el cuerpo del mensaje
        const messageBody = `
NUEVO PEDIDO
===============================

CLIENTE:
Nombre: ${formData.full_name}
Email: ${formData.email}
Teléfono: ${formData.phone}

DIRECCIÓN DE ENVÍO:
${formData.address}
${formData.city}

PRODUCTOS:
${cart.map((item, idx) => `${idx + 1}. ${item.name} - Cantidad: ${item.quantity} - Precio: ${formatPrice(item.price)}`).join('\n')}

TOTAL: ${formatPrice(formData.total)}

NOTAS: ${formData.notes}
        `;

        try {
            // Enviar a Formspree
            const response = await fetch('https://formspree.io/f/mvzzgnzd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.full_name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    city: formData.city,
                    message: messageBody
                })
            });

            if (response.ok) {
                // Mostrar modal de confirmación
                showConfirmationModal();
                
                // Limpiar carrito
                cart = [];
                localStorage.removeItem('artisan_cart');
                updateCartBadge();
                
                // Limpiar formulario
                orderForm.reset();
                
                // Renderizar carrito vacío
                setTimeout(() => {
                    renderCartItems();
                }, 1500);
            } else {
                throw new Error('Error al enviar el pedido');
            }
        } catch (error) {
            console.error('Error:', error);
            showErrorMessage('Error al procesar el pedido. Por favor intenta de nuevo.');
        }
    });
}

function showConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    const orderNumber = 'PED-' + Date.now().toString().slice(-8);
    
    const orderNumberElement = document.getElementById('order-number');
    if (orderNumberElement) {
        orderNumberElement.textContent = orderNumber;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showErrorMessage(message) {
    const messageDiv = document.getElementById('order-message');
    if (!messageDiv) return;

    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = 'rgba(192, 57, 43, 0.08)';
    messageDiv.style.borderLeft = '4px solid #c0392b';
    messageDiv.innerHTML = `<p style="color: #c0392b; font-weight: 600;">${message}</p>`;

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Agregar estilos específicos del carrito
const cartStyles = document.createElement('style');
cartStyles.textContent = `
    .cart-header {
        padding: var(--spacing-xxl) var(--spacing-lg);
        background-color: var(--color-light);
        text-align: center;
    }

    .cart-header h1 {
        font-size: var(--font-size-3xl);
        color: var(--color-primary);
        margin-bottom: var(--spacing-md);
        font-family: var(--font-serif);
    }

    .cart-header p {
        color: var(--color-text-secondary);
        font-size: var(--font-size-lg);
    }

    .cart-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--spacing-xxl) var(--spacing-lg);
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--spacing-xxl);
    }

    .cart-items-section h2 {
        font-size: var(--font-size-2xl);
        color: var(--color-primary);
        margin-bottom: var(--spacing-lg);
        font-family: var(--font-serif);
    }

    .cart-table {
        background-color: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: 2px;
        overflow: hidden;
    }

    .cart-table-header {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
        gap: var(--spacing-md);
        padding: var(--spacing-lg);
        background-color: var(--color-light);
        border-bottom: 2px solid var(--color-border);
        font-weight: 600;
        color: var(--color-primary);
        font-size: 0.95rem;
    }

    .cart-table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
        gap: var(--spacing-md);
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--color-border);
        align-items: center;
    }

    .cart-table-row:last-child {
        border-bottom: none;
    }

    .col-product {
        display: flex;
        gap: var(--spacing-md);
        align-items: center;
    }

    .cart-item-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 2px;
        background-color: var(--color-light);
    }

    .cart-item-info {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .cart-item-name {
        font-weight: 600;
        color: var(--color-primary);
        font-size: 0.95rem;
    }

    .col-price,
    .col-quantity,
    .col-total {
        text-align: center;
        color: var(--color-primary);
    }

    .quantity-input-cart {
        width: 60px;
        padding: 0.5rem;
        border: 1px solid var(--color-border);
        text-align: center;
        border-radius: 2px;
        font-family: var(--font-sans);
        font-size: 0.95rem;
    }

    .quantity-input-cart:focus {
        outline: none;
        border-color: var(--color-secondary);
    }

    .btn-remove {
        background: none;
        border: none;
        color: #c0392b;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        transition: var(--transition);
    }

    .btn-remove:hover {
        color: #a93226;
    }

    .cart-sidebar {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .cart-summary {
        background-color: #ffffff;
        border: 1px solid var(--color-border);
        padding: var(--spacing-lg);
        border-radius: 2px;
    }

    .summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-sm) 0;
        color: var(--color-text-secondary);
        font-size: 0.95rem;
    }

    .order-form {
        background-color: #ffffff;
        border: 1px solid var(--color-border);
        padding: var(--spacing-lg);
        border-radius: 2px;
    }

    .order-form .form-group {
        margin-bottom: var(--spacing-lg);
    }

    .order-form textarea {
        resize: vertical;
        min-height: 100px;
    }

    /* Modal de confirmación */
    .confirmation-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(42, 20, 10, 0.5);
        z-index: 10000;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    }

    .modal-content {
        background-color: #ffffff;
        border-radius: 2px;
        box-shadow: var(--shadow-medium);
        max-width: 400px;
        width: 90%;
        animation: slideUp 0.4s ease;
    }

    .modal-header {
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--color-border);
    }

    .modal-header h2 {
        color: var(--color-secondary);
        font-size: var(--font-size-xl);
        margin: 0;
        font-family: var(--font-serif);
    }

    .modal-body {
        padding: var(--spacing-xxl) var(--spacing-lg);
        text-align: center;
    }

    .success-icon {
        font-size: 3rem;
        color: var(--color-secondary);
        margin-bottom: var(--spacing-lg);
        animation: scaleIn 0.5s ease;
    }

    .modal-body p {
        color: var(--color-primary);
        line-height: 1.6;
        margin: var(--spacing-md) 0;
    }

    .modal-footer {
        padding: var(--spacing-lg);
        border-top: 1px solid var(--color-border);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes scaleIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    /* Responsive */
    @media (max-width: 768px) {
        .cart-container {
            grid-template-columns: 1fr;
        }

        .cart-table-header,
        .cart-table-row {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }

        .col-product,
        .col-price,
        .col-quantity,
        .col-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .col-product::before {
            content: 'Producto: ';
            font-weight: 600;
        }

        .col-price::before {
            content: 'Precio: ';
            font-weight: 600;
        }

        .col-quantity::before {
            content: 'Cantidad: ';
            font-weight: 600;
        }

        .col-total::before {
            content: 'Total: ';
            font-weight: 600;
        }

        .cart-table-header {
            display: none;
        }

        .cart-item-image {
            width: 60px;
            height: 60px;
        }

        .modal-content {
            max-width: 90%;
        }
    }
`;
document.head.appendChild(cartStyles);
