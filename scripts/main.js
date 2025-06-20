// Datos de productos (podrías obtenerlos de una API también)
const productos = [
    {
        id: "0008",
        desc: "Pantalon corto deportivo",
        "image_url": "",
        "size": "M",
        color: "Gris",
        precio: 15
    },
    {
        id: "0009",
        desc: "Vestido ajustado y corto cuello alto conm mangas acampanadas",
        "image_url": "",
        "size": "M",
        color: "Gris",
        precio: 4
    },
    {
        id: "0012",
        desc: "Vestido  de verano sin mangas con estampado blanco y negro",
        "image_url": "",
        "size": "S",
        color: "Blanco/Negro",
        precio: 8
    },
    {
        id: "0013",
        desc: "Falda estampada",
        "image_url": "",
        "size": "M",
        color: "Blanco/Negro",
        precio: 7
    },
    {
        id: "0014",
        desc: "Camiseta estampado mariposa",
        "image_url": "",
        "size": "S",
        color: "Negro",
        precio: 5
    },
    {
        id: "0015",
        desc: "Camiseta estampado mariposa",
        "image_url": "",
        "size": "M",
        color: "Verde",
        precio: 5
    },
    {
        id: "0016",
        desc: "Vestido con estampado de plantas cuello halter",
        "image_url": "",
        "size": "M",
        color: "Multicolor",
        precio: 7
    },
    {
        id: "0017",
        desc: "Vestido con estampado pavo real y mangas campanas",
        "image_url": "",
        "size": "M",
        color: "Verde",
        precio: 10
    },
    {
        id: "0018",
        desc: "Vestido elegante con rosa",
        "image_url": "",
        "size": "M",
        color: "Blanco/Negro",
        precio: 13
    },
    {
        id: "0022",
        desc: "vestido sin mangas con cuello alto y estampado negro",
        "image_url": "",
        "size": "M",
        color: "Multicolor",
        precio: 7
    },
    {
        id: "0027",
        desc: "Vestido de tirantes estampado pavo real",
        "image_url": "",
        "size": "M",
        color: "Negro",
        precio: 8
    },
    {
        id: "0030",
        desc: "Vestido sin mangas ,cuello halter",
        "image_url": "",
        "size": "M",
        color: "Multicolor",
        precio: 12
    },
    {
        id: "0031",
        desc: "Vestido sin mangas con parche terciopelo",
        "image_url": "",
        "size": "M",
        color: "Rojo",
        precio: 15
    },
    {
        id: "0032",
        desc: "Vestido  de cuello alto fruncido",
        "image_url": "",
        "size": "M",
        color: "Marrón",
        precio: 10
    },
    {
        id: "0035",
        desc: "Vestido corto sencillo cuello v y calado",
        "image_url": "",
        "size": "S",
        color: "Caqui",
        precio: 10
    },
    {
        id: "0036",
        desc: "Conjunto de dos piezas con camisola y pantalon",
        "image_url": "",
        "size": "M",
        color: "Caqui",
        precio: 20
    },
    {
        id: "0046",
        desc: "Vestido mini sexy y elegante, escote v espalda descibierta con cadena",
        "image_url": "",
        "size": "M",
        color: "Burdeos",
        precio: 12
    },
    {
        id: "0047",
        desc: "Pantalon corto deportivo",
        "image_url": "",
        "size": "M",
        color: "Rosa",
        precio: 4
    }
];

// Función para redirigir a WhatsApp
function redirigirWhatsApp(productoId) {
    // Reemplaza con tu número de teléfono (elimina los ceros, paréntesis y guiones)
    const telefono = '5355105070';
    
    // Mensaje personalizado (puedes modificarlo)
    const mensaje = `¡Hola! Estoy interesado en el producto ${productoId}. ¿Podrían darme más información?`;
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear el enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    
    // Abrir en nueva pestaña
    window.open(urlWhatsApp, '_blank');
}
  
  // Contenedor donde se insertarán los productos
  const contenedor = document.getElementById('products');
  
  // Generar HTML para cada producto
  productos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="store-product">
        <div class="product-bg"></div>
        <h3 class="product-id">${producto.id}</h3>
        <p class="product-desc">${producto.desc}</p>
        <span class="product-color">${producto.color}</span>
        <span class="product-precio">$${producto.precio}</span>
        <button class="product-btn" onclick="redirigirWhatsApp('${producto.id}')">Comprar</button>
      </div>
    `;
  });
