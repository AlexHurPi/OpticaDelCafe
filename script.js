/* =========================================
   DATOS Y CONFIGURACIÓN
   ========================================= */

// --- VARIABLES GLOBALES DEL LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Estas variables controlarán la navegación
let indiceActual = 0; 
let galeriaActual = []; // Aquí guardaremos la lista de fotos que se está viendo (Monturas o Gafas)

/* =========================================
   SECCIÓN 1: MONTURAS
   ========================================= */
const productos = [];
// Precios y títulos base (puedes editarlos)
const preciosMonturas = ['$110.000', '$120.000', '$130.000', '$300.000', '$350.000']; 

// Generación automática de 50 monturas
for (let i = 1; i <= 50; i++) {
    productos.push({
        img: `images/monturas/Montura${i}.png`,
        titulo: 'Montura ' + i,
        desc: '',        
        precio: '' // Dejo vacío como pediste, o puedes usar preciosMonturas[(i-1)%preciosMonturas.length]
    });
}

// Pintar Monturas
const contenedorMonturas = document.getElementById('contenedor-monturas');

productos.forEach((producto, index) => {
    const articulo = document.createElement('article');
    articulo.className = 'gallery-item';

    articulo.innerHTML = `
        <img src="${producto.img}" alt="${producto.titulo}" class="img-zoomable">
        <h3>${producto.titulo}</h3>
        <p>${producto.desc}</p>
        <span class="price">${producto.precio}</span>
    `;

    // Evento Click: Abre el Lightbox usando la lista de MONTURAS
    const imagen = articulo.querySelector('img');
    imagen.addEventListener('click', () => {
        galeriaActual = productos; // ¡Importante! Decimos que estamos viendo monturas
        indiceActual = index;
        abrirLightbox();
    });

    contenedorMonturas.appendChild(articulo);
});

/* =========================================
   SECCIÓN 2: GAFAS DE SOL
   ========================================= */
const A = 'Oakley';
const B = 'Ray-Ban';
const gafasSol = [];
const titulosGafas = [A, A, A, A, B, B, B, A, A, A, A, A, A, A];
const preciosGafas = ['$930.000', '$930.000', '$980.000']; // Ejemplo

// Generación automática de 14 gafas
for (let i = 1; i <= 14; i++) {
    gafasSol.push({
        img: `images/gafasDeSol/gafas${i}.png`,
        titulo: titulosGafas[i - 1] || 'Gafa de Sol', // Usa el título o un genérico si no hay
        desc: '',
        precio: ''
    });
}

// Pintar Gafas de Sol
const contenedorGafas = document.getElementById('contenedor-gafas');

gafasSol.forEach((gafa, index) => {
    const articulo = document.createElement('article');
    articulo.className = 'gallery-item';
    
    const htmlDescripcion = gafa.desc ? `<p>${gafa.desc}</p>` : '';

    articulo.innerHTML = `
        <img src="${gafa.img}" alt="${gafa.titulo}" class="img-zoomable">
        <h3>${gafa.titulo}</h3>
        ${htmlDescripcion}
        <span class="price">${gafa.precio}</span>
    `;

    // Evento Click: Abre el Lightbox usando la lista de GAFAS DE SOL
    const imagen = articulo.querySelector('img');
    imagen.addEventListener('click', () => {
        galeriaActual = gafasSol; // ¡Importante! Decimos que estamos viendo gafas
        indiceActual = index;
        abrirLightbox();
    });

    contenedorGafas.appendChild(articulo);
});

/* =========================================
   LÓGICA UNIFICADA DEL LIGHTBOX
   ========================================= */

function abrirLightbox() {
    lightbox.classList.add('active');
    actualizarImagen();
}

function actualizarImagen() {
    // Usamos 'galeriaActual' para saber qué foto mostrar
    const item = galeriaActual[indiceActual];
    
    lightboxImg.src = item.img;
    // Muestra Título - Precio (o solo título si no hay precio)
    const textoPrecio = item.precio ? ` - ${item.precio}` : '';
    lightboxCaption.textContent = item.titulo + textoPrecio;
}

function cambiarImagen(direccion) {
    indiceActual += direccion;

    // Ciclo Infinito: Si se pasa del final, vuelve al inicio
    if (indiceActual >= galeriaActual.length) {
        indiceActual = 0;
    }
    // Si se va antes del inicio, va al final
    if (indiceActual < 0) {
        indiceActual = galeriaActual.length - 1;
    }

    actualizarImagen();
}

// --- EVENTOS DE LOS BOTONES ---

// Botones Siguiente / Anterior
nextBtn.addEventListener('click', () => cambiarImagen(1));
prevBtn.addEventListener('click', () => cambiarImagen(-1));

// Cerrar con X
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Cerrar clickeando fuera
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Teclado (Flechas y Escape)
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight') cambiarImagen(1);
    if (e.key === 'ArrowLeft') cambiarImagen(-1);
    if (e.key === 'Escape') lightbox.classList.remove('active');
});
