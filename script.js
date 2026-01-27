// LISTA DE PRODUCTOS (Aquí puedes agregar o quitar los que quieras)
const productos = [];
const precios = ['$150.000', '$200.000', '$250.000', '$300.000', '$350.000', '$400.000', '$450.000', '$500.000', '$550.000', '$600.000']
const titulos = ['Clasica', 'Vintage', 'Antigua', 'Old School', 'Retro', 'Nostalgia', 'Época', 'Pasado', 'Histórica', 'Legendaria']

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "RETRO" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 1; i <= 10; i++) {
    productos.push({
        img: `images/monturas/Montura${i}.png`,
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

const gafasSol =[];
const preciosGafas = ['$180.000', '$220.000', '$270.000', '$320.000', '$370.000', '$420.000', '$470.000', '$520.000', '$570.000', '$620.000']
const titulosGafas = ['Solar Clasica', 'Solar Vintage', 'Solar Antigua', 'Solar Old School', 'Solar Retro', 'Solar Nostalgia', 'Solar Época', 'Solar Pasado', 'Solar Histórica', 'Solar Legendaria']

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "SOLARES" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 1; i <= 7; i++) {
    gafasSol.push({
        img: `images/gafasDeSOl/Gafas${i}.png`,
        titulo: titulosGafas[i - 1],
        desc: '',
        precio: preciosGafas[i - 1]
    });
}

// LÓGICA PARA "PINTAR" EL HTML
const contenedorGafas = document.getElementById('contenedor-gafas');

gafasSol.forEach(gafa => {
    // Creamos el artículo
    const articulo = document.createElement('article');
    articulo.className = 'gallery-item';

    // Llenamos el contenido HTML usando los datos de la gafa
    articulo.innerHTML = `
        <img src="${gafa.img}" alt="${gafa.titulo}">
        <h3>${gafa.titulo}</h3>
        <p>${gafa.desc}</p>
        <span class="price">${gafa.precio}</span>
    `;

    // Lo agregamos al contenedor
    contenedorGafas.appendChild(articulo);
});
