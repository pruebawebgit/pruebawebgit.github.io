// ========== script.js ==========

(function() {
  // Datos de productos con rutas de imagen
  const products = {
    camisetas: [
      { id: 'c1', name: 'Lakers Icon', price: '29.99', tag: 'Edicion', image: 'images/camiseta-lakers.jpg' },
      { id: 'c2', name: 'Celtics Green', price: '27.99', tag: 'Clasico', image: 'images/camiseta-celtics.jpg' },
      { id: 'c3', name: 'Bulls Roar', price: '32.50', tag: 'Retro', image: 'images/camiseta-bulls.jpg' },
      { id: 'c4', name: 'Nets Blackout', price: '26.99', tag: 'City', image: 'images/camiseta-nets.jpg' },
      { id: 'c5', name: 'Warriors Gold', price: '31.00', tag: 'Statement', image: 'images/camiseta-warriors.jpg' },
      { id: 'c6', name: 'Heat Vice', price: '34.99', tag: 'Alternativa', image: 'images/camiseta-heat.jpg' }
    ],
    pantalones: [
      { id: 'p1', name: 'Shorts Swingman', price: '22.99', tag: 'Ajuste', image: 'images/pantalon-shorts.jpg' },
      { id: 'p2', name: 'Jogger Court', price: '34.50', tag: 'Performance', image: 'images/pantalon-jogger.jpg' },
      { id: 'p3', name: 'Cargo Hoops', price: '39.99', tag: 'Cargo', image: 'images/pantalon-cargo.jpg' },
      { id: 'p4', name: 'Tech Fleece', price: '44.00', tag: 'Termico', image: 'images/pantalon-fleece.jpg' },
      { id: 'p5', name: 'Classic Sweat', price: '28.99', tag: 'Basico', image: 'images/pantalon-sweat.jpg' },
      { id: 'p6', name: 'Parachute Pant', price: '47.00', tag: 'Baggy', image: 'images/pantalon-parachute.jpg' }
    ],
    sudaderas: [
      { id: 's1', name: 'Hoodie MVP', price: '49.99', tag: 'Edicion', image: 'images/sudadera-hoodie.jpg' },
      { id: 's2', name: 'Crew Neck', price: '39.99', tag: 'Clasico', image: 'images/sudadera-crew.jpg' },
      { id: 's3', name: 'Oversized Logo', price: '54.00', tag: 'Oversized', image: 'images/sudadera-oversized.jpg' },
      { id: 's4', name: 'Zip-Up Court', price: '59.99', tag: 'Cremallera', image: 'images/sudadera-zip.jpg' },
      { id: 's5', name: 'Retro Half-Zip', price: '44.50', tag: 'Vintage', image: 'images/sudadera-halfzip.jpg' },
      { id: 's6', name: 'Hoodie All-Star', price: '62.00', tag: 'All-Star', image: 'images/sudadera-allstar.jpg' }
    ]
  };

  // Determinar qué página estamos viendo
  const page = window.location.pathname.split('/').pop();
  let gridId = null;
  let categoryKey = null;

  if (page === 'camisetas.html') {
    gridId = 'camisetas-grid';
    categoryKey = 'camisetas';
  } else if (page === 'pantalones.html') {
    gridId = 'pantalones-grid';
    categoryKey = 'pantalones';
  } else if (page === 'sudaderas.html') {
    gridId = 'sudaderas-grid';
    categoryKey = 'sudaderas';
  }

  // Si estamos en una página de categoría, renderizar los productos
  if (gridId && categoryKey) {
    const grid = document.getElementById(gridId);
    if (grid) {
      renderCategory(grid, products[categoryKey], categoryKey);
    }
  }

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

  // Función para crear una tarjeta de producto
  function createProductCard(product, category) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Imagen
    const imgContainer = document.createElement('div');
    imgContainer.className = 'product-image';
    
    const img = document.createElement('img');
    img.src = product.image || 'images/placeholder.jpg';
    img.alt = product.name;
    img.loading = 'lazy';
    
    img.onerror = function() {
      this.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder';
      placeholder.textContent = 'Imagen no disponible';
      imgContainer.appendChild(placeholder);
    };
    
    imgContainer.appendChild(img);

    // Nombre
    const nameEl = document.createElement('div');
    nameEl.className = 'product-name';
    nameEl.textContent = product.name;

    // Precio
    const priceEl = document.createElement('div');
    priceEl.className = 'product-price';
    priceEl.textContent = '€' + product.price;

    // Tag
    const tagEl = document.createElement('div');
    tagEl.className = 'product-tag';
    tagEl.textContent = product.tag || 'Nuevo';

    // Botón añadir
    const btn = document.createElement('button');
    btn.className = 'btn-add';
    btn.textContent = 'Añadir al carrito';
    btn.setAttribute('data-id', product.id);
    btn.setAttribute('data-name', product.name);
    btn.setAttribute('data-price', product.price);
    btn.setAttribute('data-category', category);

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const nombre = this.getAttribute('data-name');
      const precio = this.getAttribute('data-price');
      const categoria = this.getAttribute('data-category');
      
      // Actualizar contador del carrito
      updateCartCount();
      
      // Feedback visual
      const originalText = this.textContent;
      this.textContent = '¡Añadido!';
      this.style.background = '#2b7a4b';
      this.style.color = 'white';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '#1e1e1e';
        this.style.color = 'white';
      }, 1500);
      
      console.log(`[Carrito] ${categoria} - ${nombre} - €${precio}`);
    });

    // Ensamblar tarjeta
    card.appendChild(imgContainer);
    card.appendChild(nameEl);
    card.appendChild(priceEl);
    card.appendChild(tagEl);
    card.appendChild(btn);

    return card;
  }

  // Función para renderizar una categoría
  function renderCategory(gridElement, productList, categoryKey) {
    if (!gridElement) return;
    gridElement.innerHTML = '';
    productList.forEach(product => {
      const card = createProductCard(product, categoryKey);
      gridElement.appendChild(card);
    });
  }

  console.log('Tienda cargada correctamente');
})();