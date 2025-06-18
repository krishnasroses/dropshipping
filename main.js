async function loadProducts() {
    try {
      const response = await fetch('products.json');  // Ruta al archivo JSON
      const products = await response.json();        // Convertir a objeto JS
      displayProducts(products);                     // Mostrar productos
    } catch (error) {
      console.error("Error cargando los productos:", error);
    }
  }
  
  // Llamar a la función al cargar la página
  window.addEventListener('DOMContentLoaded', loadProducts);

function displayProducts(products) {
    const escapeHtml = (str) => {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };
  
    const container = document.getElementById('products');
    container.innerHTML = products.map(product => {
      const safeName = escapeHtml(product.name);
      const safeImage = escapeHtml(product.image);
      const safeDesc = escapeHtml(product.description);
      const safePrice = product.price.toFixed(2);
      const safeId = escapeHtml(JSON.stringify(product.id));
      
      return `
        <div class="product">
          <h3>${safeName}</h3>
          <img src="images/${safeImage}" alt="${safeName}" width="200">
          <p>${safeDesc}</p>
          <p><strong>$${safePrice}</strong></p>
          <button onclick="addToCart(${safeId})">Add to Cart</button>
        </div>
      `;
    }).join('');
}