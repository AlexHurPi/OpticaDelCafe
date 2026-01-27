// LISTA DE PRODUCTOS (Aquí puedes agregar o quitar los que quieras)
const productos = [];
const precios = ['$150.000', '$200.000', '$250.000', '$300.000', '$350.000', '$400.000', '$450.000', '$500.000', '$550.000', '$600.000']
const titulos = ['Clasica', 'Vintage', 'Antigua', 'Old School', 'Retro', 'Nostalgia', 'Época', 'Pasado', 'Histórica', 'Legendaria']

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "RETRO" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 1; i <= 10; i++) {
    productos.push({
        img: `images/Montura${i}.png`,
        titulo: titulos[i - 1],
        desc: '',
        precio: precios[i - 1]
    });
}

// LÓGICA PARA "PINTAR" EL HTML
const contenedor = document.getElementById('contenedor-monturas');

productos.forEach(producto => {
    // Creamos el artículo
    const articulo = document.createElement('article');
    articulo.className = 'gallery-item';

    // Llenamos el contenido HTML usando los datos del producto
    articulo.innerHTML = `
        <img src="${producto.img}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <p>${producto.desc}</p>
        <span class="price">${producto.precio}</span>
    `;

    // Lo agregamos al contenedor
    contenedor.appendChild(articulo);
});
