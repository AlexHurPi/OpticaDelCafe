// LISTA DE PRODUCTOS (Aquí puedes agregar o quitar los que quieras)
const productos = [];
const precios = ['$110.000', '$120.000', '$130.000', '$300.000', '$350.000', '$400.000', '$450.000', '$500.000', '$550.000', '$600.000']
const titulos = ['Clasica', 'Vintage', 'Antigua', 'Old School', 'Retro', 'Nostalgia', 'Época', 'Pasado', 'Histórica', 'Legendaria']

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "RETRO" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 1; i <= 50; i++) {
    productos.push({
        img: `images/monturas/Montura${i}.png`,
        titulo: 'Montura' + ' ' + i,
        desc: '',
        // AQUÍ ESTÁ EL TRUCO:
        // (i - 1) convierte el contador a base cero (0, 1, 2...)
        // % precios.length hace que cuando llegue a 10, el residuo vuelva a ser 0
        precio: ''
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
const A='Orklay';
const B='Ray Ban';
const gafasSol =[];
const preciosGafas = ['$930.000', '$930.000', '$980.000', '$990.000', '$1.070.000', '$1.100.000', '$1.100.000', '$520.000', '$570.000', '$620.000']
const titulosGafas = [A, A, A, A, B, B, B, A, A, A, A, A, A, A];

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "SOLARES" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 1; i <= 14; i++) {
    gafasSol.push({
        img: `images/gafasDeSol/gafas${i}.png`,
        titulo: titulosGafas[i - 1],
        desc: '',
        precio: ''
    });
}

// LÓGICA PARA "PINTAR" EL HTML
const contenedorGafas = document.getElementById('contenedor-gafas');

gafasSol.forEach(gafa => {
    // Creamos el artículo
    const articulo = document.createElement('article');
    articulo.className = 'gallery-item';
    const htmlDescripcion = gafa.desc ? `<p>${gafa.desc}</p>` : '';
    // Llenamos el contenido HTML usando los datos de la gafa
    articulo.innerHTML = `
        <img src="${gafa.img}" alt="${gafa.titulo}">
        <h3>${gafa.titulo}</h3>
        ${htmlDescripcion}
        <span class="price">${gafa.precio}</span>
    `;

    // Lo agregamos al contenedor
    contenedorGafas.appendChild(articulo);
});
