// LISTA DE PRODUCTOS (Aquí puedes agregar o quitar los que quieras)
const productos = [
    {
        img: 'images/Montura1.png',
        titulo: 'Modelo Clásico',
        desc: 'Elegancia para el día a día.',
        precio: '$150.000'
    },
    {
        img: 'images/Montura2.png',
        titulo: 'Estilo Urbano',
        desc: 'Ligereza y resistencia.',
        precio: '$220.000'
    },
    {
        img: 'images/Montura3.png',
        titulo: 'Línea Solar',
        desc: 'Protección UV400 garantizada.',
        precio: '$180.000'
    },
    {
        img: 'images/Montura4.png',
        titulo: 'Estilo Aviador',
        desc: 'El clásico que nunca muere.',
        precio: '$200.000'
    }
];

// CÓDIGO PARA GENERAR LOS OTROS 6 PRODUCTOS "RETRO" AUTOMÁTICAMENTE
// (Esto es un truco para no escribir los 10 a mano ahora mismo, 
// pero en la vida real borrarías esto y llenarías la lista de arriba)
for (let i = 5; i <= 10; i++) {
    productos.push({
        img: `images/Montura${i}.png`,
        titulo: 'Estilo Retro',
        desc: 'Un toque vintage para tu look.',
        precio: '$250.000'
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
