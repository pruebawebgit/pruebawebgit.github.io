// ========== script.js ==========

(function() {
  // Función para actualizar el contador del carrito
  function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
      let currentCount = parseInt(countElement.textContent) || 0;
      currentCount++;
      countElement.textContent = currentCount;
      
      // Animación sutil del contador
      countElement.style.transform = 'scale(1.3)';
      setTimeout(() => {
        countElement.style.transform = 'scale(1)';
      }, 200);
    }
  }

  // Inicializar todos los botones "Añadir al carrito" existentes en el HTML
  function initCartButtons() {
    const buttons = document.querySelectorAll('.btn-cart, .btn-add');
    
    buttons.forEach(button => {
      // Remover event listeners previos para evitar duplicados
      button.removeEventListener('click', handleAddToCart);
      // Agregar nuevo event listener
      button.addEventListener('click', handleAddToCart);
    });
  }

  // Manejador de evento para añadir al carrito
  function handleAddToCart(e) {
    e.stopPropagation();
    
    const button = this;
    const nombre = button.getAttribute('data-name') || 'Producto';
    const precio = button.getAttribute('data-price') || '0';
    const id = button.getAttribute('data-id') || 'unknown';
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Feedback visual
    const originalText = button.textContent;
    button.textContent = '✓ Añadido';
    button.classList.add('added');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('added');
    }, 1500);
    
    // Log para depuración
    console.log(`[Carrito] ${id} - ${nombre} - €${precio}`);
  }

  // Función mejorada para manejar imágenes rotas
  function handleBrokenImages() {
    document.querySelectorAll('.product-card img').forEach(img => {
      // Verificar si la imagen ya cargó correctamente
      if (!img.complete) {
        img.addEventListener('error', function() {
          createPlaceholder(this);
        });
      } else if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        // La imagen está rota pero ya cargó
        createPlaceholder(img);
      }
    });
  }

  // Función para crear placeholder cuando una imagen falla
  function createPlaceholder(img) {
    const parent = img.parentElement;
    if (parent) {
      // Ocultar la imagen
      img.style.display = 'none';
      
      // Verificar si ya existe un placeholder
      let placeholder = parent.querySelector('.placeholder-img');
      if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'placeholder-img';
        
        // Obtener el nombre del producto
        const productCard = parent.closest('.product-card') || parent;
        let productName = 'Producto';
        const nameEl = productCard.querySelector('.product-name');
        if (nameEl) {
          productName = nameEl.textContent || 'Producto';
        }
        
        // Obtener el badge si existe
        const badgeEl = productCard.querySelector('.product-badge');
        let badgeText = '';
        if (badgeEl) {
          badgeText = badgeEl.textContent || '';
        }
        
        placeholder.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏀</div>
            <div style="font-weight: 600; color: #666;">${productName}</div>
            ${badgeText ? `<div style="font-size: 0.8rem; color: #999; margin-top: 0.3rem;">${badgeText}</div>` : ''}
          </div>
        `;
        parent.appendChild(placeholder);
      }
    }
  }

  // Inicializar cuando el DOM esté listo
  function init() {
    initCartButtons();
    
    // Pequeño retraso para asegurar que todas las imágenes intenten cargar
    setTimeout(() => {
      handleBrokenImages();
    }, 500);
    
    console.log('Tienda cargada correctamente - Modo estático con eventos');
  }

  // Ejecutar después de que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // También reinicializar si hay cambios dinámicos
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) {
            const buttons = node.querySelectorAll ? node.querySelectorAll('.btn-cart, .btn-add') : [];
            buttons.forEach(btn => {
              btn.removeEventListener('click', handleAddToCart);
              btn.addEventListener('click', handleAddToCart);
            });
            
            // También manejar imágenes en nodos añadidos
            const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
            images.forEach(img => {
              if (!img.complete || img.naturalWidth === 0) {
                img.addEventListener('error', function() {
                  createPlaceholder(this);
                });
              }
            });
          }
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });

})();